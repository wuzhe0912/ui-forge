<script lang="ts">
	import { tick } from 'svelte'
	import { animate, stagger, eases } from 'animejs'
	import type { DeviceType, UserLevel, PopupConfig } from './types'
	import { assemble } from './engine/assembler'
	import { registry, allComponentIds } from './registry'

	const DEVICE_META: Record<DeviceType, { icon: string; name: string; title: string }> = {
		fan: { icon: '\u{1F300}', name: 'Cooling Fan', title: 'Fan Control' },
		tablet: { icon: '\u{270F}\u{FE0F}', name: 'Drawing Tablet', title: 'Tablet Settings' },
	}

	let selectedDevice: DeviceType | null = $state(null)
	let driverInstalled = $state(false)
	let userLevel: UserLevel = $state('novice')

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

	// Animation 1: Device connection pulse
	function selectDevice(device: DeviceType) {
		selectedDevice = device
		driverInstalled = false
		userLevel = 'novice'

		tick().then(() => {
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

	function toggleDriver() {
		driverInstalled = !driverInstalled
		if (!driverInstalled) userLevel = 'novice'
	}

	function toggleLevel() {
		userLevel = userLevel === 'novice' ? 'advanced' : 'novice'
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

	function getHeaderProps(headerId: string): Record<string, string> {
		if (!selectedDevice) return {}
		const meta = DEVICE_META[selectedDevice]
		if (headerId === 'h-alert') {
			return { deviceName: meta.name }
		}
		if (headerId === 'h-setup') {
			return {
				title: meta.title,
				subtitle: userLevel === 'advanced' ? 'Advanced Mode' : '',
			}
		}
		return {}
	}

	function getBlockProps(blockId: string): Record<string, string> {
		if (!selectedDevice) return {}
		const meta = DEVICE_META[selectedDevice]
		if (blockId === 'b-driver-missing') {
			return { deviceName: meta.name }
		}
		return {}
	}
</script>

<main class="hud">
	<h1 class="hud__title">DEVICE ASSEMBLY HUD</h1>

	<!-- Zone 1: Select Device -->
	<section class="zone">
		<span class="zone__label">{'\u2460'} Select Device</span>
		<div class="devices">
			{#each (['fan', 'tablet'] as DeviceType[]) as device}
				{@const meta = DEVICE_META[device]}
				<button
					class="card device-card"
					class:active={selectedDevice === device}
					onclick={() => selectDevice(device)}
				>
					<span class="device-card__icon">{meta.icon}</span>
					<span class="device-card__name">{meta.name}</span>
					<span class="device-card__status">
						{selectedDevice === device ? 'Connected' : 'Click to connect'}
					</span>
				</button>
			{/each}
		</div>
	</section>

	<!-- Zone 2: Set Context -->
	{#if selectedDevice}
		<section class="zone">
			<span class="zone__label">{'\u2461'} Set Context</span>
			<div class="context-controls">
				<button
					class="toggle"
					class:toggle--driver-on={driverInstalled}
					onclick={toggleDriver}
				>
					{driverInstalled ? '\u2713 Installed' : '\u2717 Missing'}
				</button>
				{#if driverInstalled}
					<button
						class="toggle"
						class:toggle--level-advanced={userLevel === 'advanced'}
						onclick={toggleLevel}
					>
						{userLevel === 'advanced' ? '\u{1F535} Advanced' : '\u{1F7E2} Novice'}
					</button>
				{/if}
			</div>
		</section>
	{/if}

	<!-- Zone 3: Assembled UI -->
	<section class="zone">
		<span class="zone__label">{'\u2462'} Assembled UI</span>
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
				<span class="popup-empty__text">Select a device to begin</span>
			</div>
		{/if}
	</section>

	<!-- Zone 4: Component Inventory -->
	<section class="zone">
		<span class="zone__label">{'\u2463'} Component Inventory</span>
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

	.hud__title {
		font-family: var(--font-mono);
		color: var(--cyan);
		text-transform: uppercase;
		letter-spacing: 2px;
		font-size: 20px;
		margin-bottom: 32px;
		text-align: center;
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
