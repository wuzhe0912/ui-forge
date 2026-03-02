<script lang="ts">
	import { t } from '../../i18n/index.svelte'
</script>

<div class="telemetry">
	<span class="title">{t('block.telemetry')}</span>
	<div class="chart-container">
		<svg viewBox="0 0 300 100" preserveAspectRatio="none">
			<!-- Grid lines -->
			<line x1="0" y1="25" x2="300" y2="25" stroke="var(--border)" stroke-width="0.5" />
			<line x1="0" y1="50" x2="300" y2="50" stroke="var(--border)" stroke-width="0.5" />
			<line x1="0" y1="75" x2="300" y2="75" stroke="var(--border)" stroke-width="0.5" />

			<!-- RPM line (cyan, solid) -->
			<polyline
				fill="none"
				stroke="var(--cyan)"
				stroke-width="2"
				points="0,70 30,65 60,55 90,60 120,40 150,35 180,45 210,30 240,35 270,25 300,30"
			/>

			<!-- Temp line (amber, dashed) -->
			<polyline
				fill="none"
				stroke="var(--amber)"
				stroke-width="2"
				stroke-dasharray="4,2"
				points="0,80 30,78 60,72 90,75 120,65 150,60 180,62 210,55 240,58 270,52 300,50"
			/>
		</svg>
	</div>
	<div class="legend">
		<span class="legend-item cyan">&#9679; {t('block.rpm')}</span>
		<span class="legend-item amber">&#9679; {t('block.temp')}</span>
	</div>
</div>

<style>
	.telemetry {
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
		gap: 16px;
	}

	.legend-item {
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--text-secondary);
	}

	.legend-item.cyan {
		color: var(--cyan);
	}

	.legend-item.amber {
		color: var(--amber);
	}
</style>
