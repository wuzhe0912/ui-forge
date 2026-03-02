<script lang="ts">
	import { t } from '../../i18n/index.svelte'

	let minSpeed = $state(30)
	let maxSpeed = $state(100)
	let targetTemp = $state(65)
</script>

<div class="fan-advanced">
	<span class="section-title">{t('block.advancedParams')}</span>

	<div class="param-row">
		<span class="param-label">{t('block.minSpeed')}</span>
		<input type="range" min="0" max="100" bind:value={minSpeed} class="range" />
		<span class="param-value">{minSpeed}%</span>
	</div>

	<div class="param-row">
		<span class="param-label">{t('block.maxSpeed')}</span>
		<input type="range" min="0" max="100" bind:value={maxSpeed} class="range" />
		<span class="param-value">{maxSpeed}%</span>
	</div>

	<div class="param-row">
		<span class="param-label">{t('block.targetTemp')}</span>
		<input type="range" min="30" max="90" bind:value={targetTemp} class="range" />
		<span class="param-value">{targetTemp}&deg;C</span>
	</div>
</div>

<style>
	.fan-advanced {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 16px;
	}

	.section-title {
		font-family: var(--font-mono);
		font-size: 11px;
		text-transform: uppercase;
		color: var(--text-secondary);
		letter-spacing: 0.5px;
	}

	.param-row {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.param-label {
		font-family: var(--font-sans);
		font-size: 13px;
		color: var(--text-primary);
		width: 90px;
		flex-shrink: 0;
	}

	.range {
		flex: 1;
		accent-color: var(--cyan);
	}

	.param-value {
		font-family: var(--font-mono);
		font-size: 13px;
		font-weight: 600;
		color: var(--cyan);
		width: 50px;
		text-align: right;
		flex-shrink: 0;
	}
</style>
