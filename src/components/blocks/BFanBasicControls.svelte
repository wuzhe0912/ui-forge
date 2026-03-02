<script lang="ts">
	let fanOn = $state(true)
	let rgbHue = $state(180)
</script>

<div class="fan-basic">
	<div class="control-row">
		<span class="label">POWER</span>
		<button
			class="toggle"
			class:on={fanOn}
			onclick={() => fanOn = !fanOn}
			aria-label="Toggle fan power"
		>
			<span class="thumb"></span>
		</button>
	</div>

	<div class="control-row">
		<span class="label">RGB COLOR</span>
		<div class="color-control">
			<input type="range" min="0" max="360" bind:value={rgbHue} class="range" />
			<div
				class="color-preview"
				style:background="hsl({rgbHue}, 80%, 55%)"
			></div>
		</div>
	</div>

	<div class="stats-row">
		<div class="stat-box">
			<span class="stat-label">RPM</span>
			<span class="stat-value cyan">{fanOn ? '1,240' : '\u2014'}</span>
		</div>
		<div class="stat-box">
			<span class="stat-label">TEMP</span>
			<span class="stat-value">{fanOn ? '42\u00B0C' : '\u2014'}</span>
		</div>
	</div>
</div>

<style>
	.fan-basic {
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

	/* Toggle switch */
	.toggle {
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

	.toggle.on {
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

	.toggle.on .thumb {
		transform: translateX(20px);
		background: var(--cyan);
	}

	/* Color control */
	.color-control {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.range {
		width: 120px;
		accent-color: var(--cyan);
	}

	.color-preview {
		width: 24px;
		height: 24px;
		border-radius: 4px;
		border: 1px solid var(--border);
	}

	/* Stats row */
	.stats-row {
		display: flex;
		gap: 10px;
	}

	.stat-box {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 10px 12px;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 6px;
	}

	.stat-label {
		font-family: var(--font-mono);
		font-size: 10px;
		text-transform: uppercase;
		color: var(--text-dim);
		letter-spacing: 0.5px;
	}

	.stat-value {
		font-family: var(--font-mono);
		font-size: 22px;
		font-weight: 600;
		color: var(--text-primary);
	}

	.stat-value.cyan {
		color: var(--cyan);
	}
</style>
