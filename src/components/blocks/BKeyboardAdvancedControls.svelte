<script lang="ts">
	import { t } from '../../i18n/index.svelte'

	let perKeyEnabled = $state(false)
	let activeProfile = $state('Gaming')

	const profiles = ['Gaming', 'Office', 'Creative']

	const macroSlots = [
		{ id: 'M1', action: 'Ctrl+C → Ctrl+V' },
		{ id: 'M2', action: 'Alt+Tab' },
		{ id: 'M3', action: 'Ctrl+Shift+S' },
	]
</script>

<div class="keyboard-advanced">
	<div class="section">
		<span class="section-title">{t('block.macroEditor')}</span>
		<div class="macro-grid">
			{#each macroSlots as slot}
				<div class="macro-item">
					<span class="macro-id">{slot.id}</span>
					<span class="macro-action">{slot.action}</span>
				</div>
			{/each}
		</div>
	</div>

	<div class="section">
		<div class="toggle-row">
			<span class="section-title">{t('block.perKeyCustom')}</span>
			<button
				class="toggle-switch"
				class:on={perKeyEnabled}
				onclick={() => perKeyEnabled = !perKeyEnabled}
				aria-label="Toggle per-key customization"
			>
				<span class="thumb"></span>
			</button>
		</div>
	</div>

	<div class="section profiles-section">
		<span class="section-title">{t('block.keyProfiles')}</span>
		<div class="profiles-row">
			{#each profiles as profile}
				<button
					class="profile-pill"
					class:active={activeProfile === profile}
					onclick={() => activeProfile = profile}
				>
					{profile}
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.keyboard-advanced {
		display: flex;
		flex-direction: column;
		gap: 14px;
		padding: 16px;
	}

	.section {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.profiles-section {
		margin-top: 14px;
	}

	.section-title {
		font-family: var(--font-mono);
		font-size: 11px;
		text-transform: uppercase;
		color: var(--text-secondary);
		letter-spacing: 0.5px;
	}

	.macro-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 8px;
	}

	.macro-item {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 8px 10px;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 6px;
	}

	.macro-id {
		font-family: var(--font-mono);
		font-size: 12px;
		font-weight: 700;
		color: var(--cyan);
	}

	.macro-action {
		font-size: 11px;
		color: var(--text-secondary);
	}

	.toggle-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.toggle-switch {
		position: relative;
		width: 44px;
		height: 24px;
		border-radius: 12px;
		border: 1px solid var(--border);
		background: var(--bg-card);
		cursor: pointer;
		padding: 0;
		transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
	}

	.toggle-switch.on {
		background: var(--cyan-dim);
		border-color: var(--cyan);
		box-shadow: var(--cyan-glow);
	}

	.thumb {
		position: absolute;
		top: 2px;
		left: 2px;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: var(--text-secondary);
		transition: transform 0.2s, background 0.2s;
	}

	.toggle-switch.on .thumb {
		transform: translateX(20px);
		background: var(--cyan);
	}

	.profiles-row {
		display: flex;
		gap: 8px;
	}

	.profile-pill {
		padding: 6px 14px;
		border-radius: 20px;
		border: 1px solid var(--border);
		background: transparent;
		color: var(--text-secondary);
		font-family: var(--font-sans);
		font-size: 12px;
		cursor: pointer;
		transition: border-color 0.2s, color 0.2s, background 0.2s;
	}

	.profile-pill:hover {
		border-color: var(--cyan);
	}

	.profile-pill.active {
		border-color: var(--cyan);
		color: var(--cyan);
		background: var(--cyan-dim);
	}
</style>
