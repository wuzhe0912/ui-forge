<script lang="ts">
	import { tick } from 'svelte'
	import { animate, stagger, eases } from 'animejs'
	import type { DeviceType, UserLevel, PopupConfig } from './types'
	import { assemble } from './engine/assembler'
	import { registry, allComponentIds } from './registry'
	import { t, getLocale, setLocale, type Locale } from './i18n/index.svelte'

	const DEVICE_ICONS: Record<DeviceType, string> = {
		fan: '\u{1F300}',
		tablet: '\u{270F}\u{FE0F}',
	}

	let selectedDevice: DeviceType | null = $state(null)
	let driverInstalled = $state(false)
	let userLevel: UserLevel = $state('newcomer')
	let langMenuOpen = $state(false)

	let config: PopupConfig | null = $derived(
		selectedDevice
			? assemble({ deviceType: selectedDevice, driverInstalled, userLevel })
			: null,
	)

	let activeIds: string[] = $derived(
		config
			? [config.header, ...config.blocks, config.actionButton, config.footer]
			: [],
	)

	const LOCALE_NAMES: Record<Locale, string> = {
		'zh-TW': '繁體中文',
		en: 'English',
		ja: '日本語',
		ko: '한국어',
	}

	let currentLocaleName = $derived(LOCALE_NAMES[getLocale()])

	function toggleLangMenu() {
		langMenuOpen = !langMenuOpen
	}

	function switchLang(l: Locale) {
		setLocale(l)
		langMenuOpen = false
	}

	// Animation 1: Device connection pulse
	function selectDevice(device: DeviceType) {
		selectedDevice = device
		driverInstalled = false
		userLevel = 'newcomer'

		tick().then(() => {
			// Clear all device card glow first
			document.querySelectorAll('.device-card').forEach((card) => {
				;(card as HTMLElement).style.boxShadow = ''
			})

			const activeCard = document.querySelector('.device-card.active') as HTMLElement
			if (activeCard) {
				animate(activeCard, {
					boxShadow: [
						'0 0 0px rgba(0, 240, 255, 0)',
						'0 0 30px rgba(0, 240, 255, 0.6)',
						'0 0 20px rgba(0, 240, 255, 0.4)',
					],
					duration: 600,
					ease: eases.outQuad,
				})
			}
		})
	}

	function setLevel(level: UserLevel) {
		userLevel = level
	}

	// Animation 2: Popup assembly stagger
	$effect(() => {
		// Track config reactivity
		const _cfg = config
		if (!_cfg) return

		tick().then(() => {
			const children = document.querySelectorAll('.popup > *')
			if (children.length === 0) return

			animate(children, {
				translateY: [20, 0],
				opacity: [0, 1],
				delay: stagger(80),
				duration: 400,
				ease: eases.outCubic,
			})
		})
	})

	// Animation 3: Inventory highlight pulse
	$effect(() => {
		// Track activeIds reactivity
		const _ids = activeIds
		if (_ids.length === 0) return

		tick().then(() => {
			const pills = document.querySelectorAll('.inventory__pill--active')
			if (pills.length === 0) return

			animate(pills, {
				scale: [1, 1.1, 1],
				duration: 400,
				delay: stagger(50),
			})
		})
	})

	function getDeviceName(): string {
		if (!selectedDevice) return ''
		return selectedDevice === 'fan' ? t('device.fan') : t('device.tablet')
	}

	function getHeaderProps(headerId: string): Record<string, string> {
		if (!selectedDevice) return {}
		const deviceName = getDeviceName()
		if (headerId === 'h-alert') {
			return { deviceName }
		}
		if (headerId === 'h-welcome') {
			return { deviceName }
		}
		if (headerId === 'h-setup') {
			const title = selectedDevice === 'fan' ? t('header.fanControl') : t('header.tabletSettings')
			return {
				title,
				subtitle: userLevel === 'advanced' ? t('header.advancedMode') : '',
			}
		}
		return {}
	}

	function getBlockProps(blockId: string): Record<string, string> {
		if (!selectedDevice) return {}
		const deviceName = getDeviceName()
		if (blockId === 'b-driver-missing') {
			return { deviceName }
		}
		if (blockId === 'b-intro' || blockId === 'b-feature-highlight') {
			return { deviceType: selectedDevice }
		}
		return {}
	}
</script>

<main class="hud">
	<div class="hud__header">
		<h1 class="hud__title">{t('app.title')}</h1>
		<div class="lang-switcher">
			<button class="lang-trigger" onclick={toggleLangMenu}>
				🌐 {currentLocaleName}
			</button>
			{#if langMenuOpen}
				<div class="lang-dropdown">
					{#each (['zh-TW', 'en', 'ja', 'ko'] as Locale[]) as l}
						<button
							class="lang-option"
							class:lang-option--active={getLocale() === l}
							onclick={() => switchLang(l)}
						>
							{LOCALE_NAMES[l]}
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<!-- Zone 1: Select Device -->
	<section class="zone">
		<span class="zone__label">{t('app.selectDevice')}</span>
		<div class="devices">
			{#each (['fan', 'tablet'] as DeviceType[]) as device}
				<button
					class="card device-card"
					class:active={selectedDevice === device}
					onclick={() => selectDevice(device)}
				>
					<span class="device-card__icon">{DEVICE_ICONS[device]}</span>
					<span class="device-card__name">{device === 'fan' ? t('device.fan') : t('device.tablet')}</span>
					<span class="device-card__status">
						{selectedDevice === device ? t('device.connected') : t('device.clickToConnect')}
					</span>
				</button>
			{/each}
		</div>
	</section>

	<!-- Zone 2: Set Context -->
	{#if selectedDevice}
		<section class="zone">
			<span class="zone__label">{t('app.setContext')}</span>
			<div class="context-controls">
				<div class="driver-toggles">
					<button
						class="toggle"
						class:toggle--driver-off={!driverInstalled}
						onclick={() => { driverInstalled = false; userLevel = 'newcomer' }}
					>
						{t('ctx.missing')}
					</button>
					<button
						class="toggle"
						class:toggle--driver-on={driverInstalled}
						onclick={() => { driverInstalled = true }}
					>
						{t('ctx.installed')}
					</button>
				</div>
				{#if driverInstalled}
					<span class="divider">|</span>
					<div class="level-toggles">
						<button
							class="toggle"
							class:toggle--level-newcomer={userLevel === 'newcomer'}
							onclick={() => setLevel('newcomer')}
						>
							{t('ctx.newcomer')}
						</button>
						<button
							class="toggle"
							class:toggle--level-novice={userLevel === 'novice'}
							onclick={() => setLevel('novice')}
						>
							{t('ctx.novice')}
						</button>
						<button
							class="toggle"
							class:toggle--level-advanced={userLevel === 'advanced'}
							onclick={() => setLevel('advanced')}
						>
							{t('ctx.advanced')}
						</button>
					</div>
				{/if}
			</div>
		</section>
	{/if}

	<!-- Zone 3: Assembled UI -->
	<section class="zone">
		<span class="zone__label">{t('app.assembledUI')}</span>
		{#if config}
			<div class="popup card">
				{#if registry[config.header]}
					{@const Header = registry[config.header]}
					<Header {...getHeaderProps(config.header)} />
				{/if}

				{#each config.blocks as blockId}
					{#if registry[blockId]}
						{@const Block = registry[blockId]}
						<Block {...getBlockProps(blockId)} />
					{/if}
				{/each}

				{#if registry[config.actionButton]}
					{@const Action = registry[config.actionButton]}
					<div class="popup__action">
						<Action />
					</div>
				{/if}

				{#if registry[config.footer]}
					{@const Footer = registry[config.footer]}
					<Footer />
				{/if}
			</div>
		{:else}
			<div class="popup-empty">
				<span class="popup-empty__text">{t('app.selectPrompt')}</span>
			</div>
		{/if}
	</section>

	<!-- Zone 4: Component Inventory -->
	<section class="zone">
		<span class="zone__label">{t('app.inventory')}</span>
		<div class="inventory">
			{#each allComponentIds as id}
				<span
					class="inventory__pill"
					class:inventory__pill--active={activeIds.includes(id)}
				>{id}</span>
			{/each}
		</div>
	</section>
</main>

<style>
	.hud {
		max-width: 640px;
		margin: 0 auto;
		padding: 24px;
		position: relative;
		z-index: 1;
	}

	.hud__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 32px;
	}

	.hud__title {
		font-family: var(--font-mono);
		color: var(--cyan);
		text-transform: uppercase;
		letter-spacing: 2px;
		font-size: 20px;
	}

	/* Language Switcher */
	.lang-switcher {
		position: relative;
	}

	.lang-trigger {
		font-family: var(--font-mono);
		font-size: 12px;
		padding: 6px 12px;
		border-radius: 6px;
		border: 1px solid var(--border);
		background: var(--bg-card);
		color: var(--text-secondary);
		cursor: pointer;
		transition: all 0.2s;
	}

	.lang-trigger:hover {
		border-color: var(--cyan);
		color: var(--cyan);
	}

	.lang-dropdown {
		position: absolute;
		top: 100%;
		right: 0;
		margin-top: 4px;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 6px;
		overflow: hidden;
		z-index: 100;
		min-width: 120px;
		backdrop-filter: blur(12px);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
	}

	.lang-option {
		display: block;
		width: 100%;
		padding: 8px 14px;
		border: none;
		background: transparent;
		color: var(--text-secondary);
		font-family: var(--font-sans);
		font-size: 13px;
		cursor: pointer;
		text-align: left;
		transition: all 0.15s;
	}

	.lang-option:hover {
		background: var(--cyan-dim);
		color: var(--text-primary);
	}

	.lang-option--active {
		color: var(--cyan);
		background: var(--cyan-dim);
	}

	.zone {
		margin-bottom: 24px;
	}

	.zone__label {
		display: block;
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--text-dim);
		text-transform: uppercase;
		letter-spacing: 1px;
		margin-bottom: 10px;
	}

	/* Zone 1: Device Cards */
	.devices {
		display: flex;
		gap: 12px;
	}

	.device-card {
		flex: 1;
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		cursor: pointer;
		border: 1px solid var(--border);
		background: var(--bg-card);
		color: var(--text-primary);
	}

	.device-card__icon {
		font-size: 32px;
		line-height: 1;
	}

	.device-card__name {
		font-family: var(--font-mono);
		font-size: 14px;
		font-weight: 700;
	}

	.device-card__status {
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--text-dim);
	}

	.device-card.active .device-card__status {
		color: var(--cyan);
	}

	/* Zone 2: Context Controls */
	.context-controls {
		display: flex;
		gap: 16px;
		align-items: center;
	}

	.driver-toggles {
		display: flex;
		gap: 8px;
	}

	.toggle--driver-off {
		border-color: var(--amber);
		color: var(--amber);
		background: rgba(255, 159, 28, 0.1);
	}

	.divider {
		color: var(--text-dim);
		font-size: 20px;
		opacity: 0.3;
		user-select: none;
	}

	.level-toggles {
		display: flex;
		gap: 8px;
	}

	.toggle {
		font-family: var(--font-mono);
		font-size: 13px;
		padding: 6px 16px;
		border-radius: 6px;
		border: 1px solid var(--border);
		background: var(--bg-card);
		color: var(--text-secondary);
		cursor: pointer;
		transition: all 0.2s;
	}

	.toggle--driver-on {
		border-color: var(--green);
		color: var(--green);
		background: rgba(0, 230, 118, 0.1);
	}

	.toggle--level-newcomer {
		border-color: var(--green);
		color: var(--green);
		background: rgba(0, 230, 118, 0.1);
	}

	.toggle--level-novice {
		border-color: var(--green);
		color: var(--green);
		background: rgba(0, 230, 118, 0.1);
	}

	.toggle--level-advanced {
		border-color: var(--cyan);
		color: var(--cyan);
		background: var(--cyan-dim);
	}

	/* Zone 3: Popup */
	.popup {
		min-height: 200px;
		overflow: hidden;
	}

	.popup__action {
		padding: 12px 16px;
	}

	.popup-empty {
		min-height: 200px;
		border: 1px dashed var(--border);
		border-radius: var(--radius);
		display: grid;
		place-items: center;
	}

	.popup-empty__text {
		font-family: var(--font-mono);
		font-size: 14px;
		color: var(--text-dim);
		animation: breathe 3s ease-in-out infinite;
	}

	@keyframes breathe {
		0%, 100% { opacity: 0.4; }
		50% { opacity: 1; }
	}

	/* Zone 4: Inventory */
	.inventory {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.inventory__pill {
		font-family: var(--font-mono);
		font-size: 11px;
		padding: 4px 10px;
		border-radius: 20px;
		border: 1px solid var(--border);
		color: var(--text-dim);
		background: var(--bg-card);
		transition: all 0.3s;
	}

	.inventory__pill--active {
		border-color: var(--cyan);
		color: var(--cyan);
		background: var(--cyan-dim);
		box-shadow: 0 0 8px rgba(0, 240, 255, 0.3);
	}
</style>
