<script lang="ts">
	import { t } from '../../i18n/index.svelte'

	let { deviceType = 'fan' }: { deviceType?: 'fan' | 'tablet' } = $props()

	let icon = $derived(deviceType === 'fan' ? '\u{1F300}' : '\u{270F}\u{FE0F}')
	let description = $derived(
		deviceType === 'fan' ? t('block.introFanDesc') : t('block.introTabletDesc'),
	)
</script>

<div class="intro">
	<div class="intro-header">
		<span class="intro-icon">{icon}</span>
		<span class="intro-title">{t('block.introTitle')}</span>
	</div>
	<p class="intro-desc">{description}</p>
</div>

<style>
	.intro {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 16px;
	}

	.intro-header {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.intro-icon {
		font-size: 28px;
		line-height: 1;
	}

	.intro-title {
		font-family: var(--font-mono);
		font-size: 11px;
		text-transform: uppercase;
		color: var(--text-secondary);
		letter-spacing: 0.5px;
	}

	.intro-desc {
		font-family: var(--font-sans);
		font-size: 14px;
		color: var(--text-primary);
		line-height: 1.5;
		margin: 0;
	}
</style>
