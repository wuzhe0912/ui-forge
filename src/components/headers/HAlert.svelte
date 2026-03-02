<script lang="ts">
	let { deviceName = 'Device' }: { deviceName?: string } = $props()
</script>

<header class="h-alert">
	<div class="icon-box">
		<span class="icon">&#9888;</span>
	</div>
	<div class="text">
		<h2 class="title">Driver Not Found</h2>
		<p class="subtitle">{deviceName} detected — driver installation required</p>
	</div>
</header>

<style>
	.h-alert {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 16px;
		border-bottom: 1px solid var(--amber-dim);
	}

	.icon-box {
		width: 40px;
		height: 40px;
		border-radius: var(--radius);
		background: var(--amber-dim);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.icon {
		font-size: 20px;
		color: var(--amber);
	}

	.title {
		font-family: var(--font-sans);
		font-size: 16px;
		font-weight: 600;
		color: var(--amber);
		margin: 0;
	}

	.subtitle {
		font-family: var(--font-sans);
		font-size: 13px;
		color: var(--text-secondary);
		margin: 0;
	}
</style>
