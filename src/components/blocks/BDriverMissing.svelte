<script lang="ts">
	let { deviceName = 'Device' }: { deviceName?: string } = $props()
</script>

<div class="driver-missing">
	<div class="left">
		<div class="pulse-dot"></div>
		<div class="info">
			<span class="label">Driver Status</span>
			<span class="value">Not Installed</span>
		</div>
	</div>
	<div class="device-pill">{deviceName}</div>
</div>

<style>
	.driver-missing {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 16px;
		background: rgba(239, 68, 68, 0.08);
		border: 1px solid rgba(239, 68, 68, 0.2);
		border-radius: 6px;
	}

	.left {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.pulse-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #ef4444;
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0.4;
		}
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.label {
		font-family: var(--font-mono);
		font-size: 10px;
		text-transform: uppercase;
		color: var(--text-dim);
		letter-spacing: 0.5px;
	}

	.value {
		font-family: var(--font-mono);
		font-size: 14px;
		font-weight: 600;
		color: #ef4444;
	}

	.device-pill {
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--text-secondary);
		background: var(--bg-card);
		padding: 4px 12px;
		border-radius: 20px;
	}
</style>
