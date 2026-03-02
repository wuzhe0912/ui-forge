<script lang="ts">
	import { t } from '../../i18n/index.svelte'

	let sensitivity = $state(50)
</script>

<div class="tablet-basic">
	<div class="control-row">
		<span class="label">{t('block.pressureSensitivity')}</span>
		<div class="range-group">
			<input type="range" min="0" max="100" bind:value={sensitivity} class="range" />
			<span class="value">{sensitivity}%</span>
		</div>
	</div>

	<div class="mapping-section">
		<span class="label">{t('block.buttonMapping')}</span>
		<div class="mapping-row">
			<div class="mapping-item">
				<span class="key">Btn 1</span>
				<span class="arrow">&rarr;</span>
				<span class="action">{t('block.btn1Action')}</span>
			</div>
			<div class="mapping-item">
				<span class="key">Btn 2</span>
				<span class="arrow">&rarr;</span>
				<span class="action">{t('block.btn2Action')}</span>
			</div>
		</div>
	</div>
</div>

<style>
	.tablet-basic {
		display: flex;
		flex-direction: column;
		gap: 14px;
		padding: 16px;
	}

	.control-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.label {
		font-family: var(--font-mono);
		font-size: 11px;
		text-transform: uppercase;
		color: var(--text-secondary);
		letter-spacing: 0.5px;
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

	.mapping-section {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.mapping-row {
		display: flex;
		gap: 10px;
	}

	.mapping-item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		padding: 8px 12px;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 6px;
	}

	.key {
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--cyan);
		font-weight: 600;
	}

	.arrow {
		font-size: 12px;
		color: var(--text-dim);
	}

	.action {
		font-size: 12px;
		color: var(--text-secondary);
	}
</style>
