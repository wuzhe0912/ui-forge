<script lang="ts">
	import { t } from '../../i18n/index.svelte'

	// Simplified keyboard layout with heat values (0-1)
	const heatData = [
		[0.3, 0.8, 0.9, 0.6, 0.4, 0.3, 0.2, 0.5, 0.4, 0.3],
		[0.7, 0.6, 0.8, 0.5, 0.3, 0.2, 0.4, 0.3, 0.2],
		[0.2, 0.3, 0.5, 0.4, 0.3, 0.2, 0.2],
	]

	function heatColor(value: number): string {
		if (value < 0.33) return '#22c55e'
		if (value < 0.66) return '#eab308'
		return '#ef4444'
	}

	// Generate key positions for the SVG
	const keySize = 24
	const keyGap = 3
	const rowOffsets = [0, 10, 20]
</script>

<div class="heatmap">
	<span class="title">{t('block.keyHeatmap')}</span>
	<div class="chart-container">
		<svg viewBox="0 0 300 100" preserveAspectRatio="xMidYMid meet">
			{#each heatData as row, rowIdx}
				{#each row as heat, keyIdx}
					<rect
						x={rowOffsets[rowIdx] + keyIdx * (keySize + keyGap)}
						y={rowIdx * (keySize + keyGap) + 5}
						width={keySize}
						height={keySize}
						rx="3"
						fill={heatColor(heat)}
						opacity="0.8"
					/>
				{/each}
			{/each}
		</svg>
	</div>
	<div class="legend">
		<span class="legend-item low">{t('block.heatmapLow')}</span>
		<div class="legend-bar"></div>
		<span class="legend-item high">{t('block.heatmapHigh')}</span>
	</div>
</div>

<style>
	.heatmap {
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 16px;
	}

	.title {
		font-family: var(--font-mono);
		font-size: 11px;
		text-transform: uppercase;
		color: var(--text-secondary);
		letter-spacing: 0.5px;
	}

	.chart-container {
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 12px;
	}

	svg {
		width: 100%;
		height: 80px;
		display: block;
	}

	.legend {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.legend-item {
		font-family: var(--font-mono);
		font-size: 11px;
	}

	.legend-item.low {
		color: #22c55e;
	}

	.legend-item.high {
		color: #ef4444;
	}

	.legend-bar {
		flex: 1;
		height: 4px;
		border-radius: 2px;
		background: linear-gradient(to right, #22c55e, #eab308, #ef4444);
	}
</style>
