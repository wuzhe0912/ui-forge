<script lang="ts">
	import { t } from '../../i18n/index.svelte'

	let { deviceType = 'fan' }: { deviceType?: 'fan' | 'tablet' } = $props()

	let features = $derived(
		deviceType === 'fan'
			? [t('block.fanFeature1'), t('block.fanFeature2'), t('block.fanFeature3')]
			: [t('block.tabletFeature1'), t('block.tabletFeature2'), t('block.tabletFeature3')],
	)
</script>

<div class="feature-highlight">
	<span class="section-title">{t('block.featureHighlight')}</span>
	<ul class="feature-list">
		{#each features as feature}
			<li class="feature-item">
				<span class="check">&#10003;</span>
				<span class="feature-text">{feature}</span>
			</li>
		{/each}
	</ul>
</div>

<style>
	.feature-highlight {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 16px;
	}

	.section-title {
		font-family: var(--font-mono);
		font-size: 11px;
		text-transform: uppercase;
		color: var(--text-secondary);
		letter-spacing: 0.5px;
	}

	.feature-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.feature-item {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.check {
		font-size: 14px;
		color: var(--green);
		font-weight: 700;
		flex-shrink: 0;
	}

	.feature-text {
		font-family: var(--font-sans);
		font-size: 13px;
		color: var(--text-primary);
	}
</style>
