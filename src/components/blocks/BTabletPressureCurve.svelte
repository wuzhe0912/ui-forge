<div class="pressure-curve">
	<span class="title">Pressure Curve</span>
	<div class="chart-container">
		<svg viewBox="0 0 200 200">
			<!-- X axis -->
			<line x1="20" y1="180" x2="190" y2="180" stroke="var(--border)" stroke-width="1" />
			<!-- Y axis -->
			<line x1="20" y1="10" x2="20" y2="180" stroke="var(--border)" stroke-width="1" />

			<!-- Handle lines (behind curve) -->
			<line x1="20" y1="180" x2="60" y2="170" stroke="var(--cyan)" stroke-width="1" opacity="0.3" />
			<line x1="190" y1="10" x2="80" y2="40" stroke="var(--cyan)" stroke-width="1" opacity="0.3" />

			<!-- Bezier curve -->
			<path
				d="M 20 180 C 60 170, 80 40, 190 10"
				fill="none"
				stroke="var(--cyan)"
				stroke-width="2"
			/>

			<!-- Control points -->
			<circle cx="60" cy="170" r="4" fill="var(--cyan)" opacity="0.6" />
			<circle cx="80" cy="40" r="4" fill="var(--cyan)" opacity="0.6" />

			<!-- Labels -->
			<text x="105" y="196" fill="var(--text-dim)" font-size="9" text-anchor="middle" font-family="var(--font-mono)">Input Pressure</text>
			<text x="8" y="100" fill="var(--text-dim)" font-size="9" text-anchor="middle" font-family="var(--font-mono)" transform="rotate(-90, 8, 100)">Output</text>
		</svg>
	</div>
</div>

<style>
	.pressure-curve {
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
		max-width: 240px;
	}

	svg {
		width: 100%;
		height: auto;
		display: block;
	}
</style>
