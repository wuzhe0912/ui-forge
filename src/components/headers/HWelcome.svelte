<script lang="ts">
	import { t } from '../../i18n/index.svelte'

	let { deviceName = '' }: { deviceName?: string } = $props()
</script>

<header class="h-welcome">
	<div class="icon-box">
		<span class="icon">&#128075;</span>
	</div>
	<div class="text">
		<h2 class="title">{t('header.welcome')}</h2>
		<p class="subtitle">{t('header.welcomeSubtitle').replace('{device}', deviceName)}</p>
	</div>
</header>

<style>
	.h-welcome {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 16px;
		border-bottom: 1px solid rgba(0, 230, 118, 0.2);
	}

	.icon-box {
		width: 40px;
		height: 40px;
		border-radius: var(--radius);
		background: rgba(0, 230, 118, 0.15);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.icon {
		font-size: 20px;
	}

	.title {
		font-family: var(--font-sans);
		font-size: 16px;
		font-weight: 600;
		color: var(--green);
		margin: 0;
	}

	.subtitle {
		font-family: var(--font-sans);
		font-size: 13px;
		color: var(--text-secondary);
		margin: 0;
	}
</style>
