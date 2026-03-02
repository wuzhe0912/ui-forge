<script lang="ts">
	let { title = 'Settings', subtitle = '' }: { title?: string; subtitle?: string } = $props()
</script>

<header class="h-setup">
	<div class="icon-box">
		<span class="icon">&#9881;</span>
	</div>
	<div class="text">
		<h2 class="title">{title}</h2>
		{#if subtitle}
			<p class="subtitle">{subtitle}</p>
		{/if}
	</div>
</header>

<style>
	.h-setup {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 16px;
		border-bottom: 1px solid var(--cyan-dim);
	}

	.icon-box {
		width: 40px;
		height: 40px;
		border-radius: var(--radius);
		background: var(--cyan-dim);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.icon {
		font-size: 20px;
		color: var(--cyan);
	}

	.title {
		font-family: var(--font-sans);
		font-size: 16px;
		font-weight: 600;
		color: var(--cyan);
		margin: 0;
	}

	.subtitle {
		font-family: var(--font-sans);
		font-size: 13px;
		color: var(--text-secondary);
		margin: 0;
	}
</style>
