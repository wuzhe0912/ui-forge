<script lang="ts">
	import { t } from '../../i18n/index.svelte'

	let rgbMode = $state('static')
	let brightness = $state(75)

	const modes = [
		{ id: 'static', label: () => t('block.static') },
		{ id: 'breathing', label: () => t('block.breathing') },
		{ id: 'wave', label: () => t('block.wave') },
	]
</script>

<div class="keyboard-basic">
	<div class="section">
		<span class="label">{t('block.rgbMode')}</span>
		<div class="mode-row">
			{#each modes as mode}
				<button
					class="mode-btn"
					class:active={rgbMode === mode.id}
					onclick={() => rgbMode = mode.id}
				>
					{mode.label()}
				</button>
			{/each}
		</div>
	</div>

	<div class="control-row">
		<span class="label">{t('block.brightness')}</span>
		<div class="range-group">
			<input type="range" min="0" max="100" bind:value={brightness} class="range" />
			<span class="value">{brightness}%</span>
		</div>
	</div>

	<div class="control-row">
		<span class="label">{t('block.repeatRate')}</span>
		<span class="stat-value">40ms</span>
	</div>
</div>

<style>
	.keyboard-basic {
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

	.label {
		font-family: var(--font-mono);
		font-size: 11px;
		text-transform: uppercase;
		color: var(--text-secondary);
		letter-spacing: 0.5px;
	}

	.mode-row {
		display: flex;
		gap: 8px;
	}

	.mode-btn {
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

	.mode-btn:hover {
		border-color: var(--cyan);
	}

	.mode-btn.active {
		border-color: var(--cyan);
		color: var(--cyan);
		background: var(--cyan-dim);
	}

	.control-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.range-group {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.range {
		width: 120px;
		accent-color: var(--cyan);
	}

	.value {
		font-family: var(--font-mono);
		font-size: 13px;
		font-weight: 600;
		color: var(--cyan);
		width: 40px;
		text-align: right;
	}

	.stat-value {
		font-family: var(--font-mono);
		font-size: 16px;
		font-weight: 600;
		color: var(--cyan);
	}
</style>
