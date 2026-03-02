<script lang="ts">
	import { t } from '../../i18n/index.svelte'
</script>

<footer class="f-help">
	<span class="label">{t('footer.needHelp')}</span>
	<a href="#support" class="link">{t('footer.supportLink')}</a>
</footer>

<style>
	.f-help {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12px 16px;
		border-top: 1px solid var(--border);
	}

	.label {
		font-size: 11px;
		color: var(--text-dim);
	}

	.link {
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--cyan);
		text-decoration: none;
	}

	.link:hover {
		text-decoration: underline;
	}
</style>
