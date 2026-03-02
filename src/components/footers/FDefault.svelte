<script lang="ts">
	import { t } from '../../i18n/index.svelte'
</script>

<footer class="f-default">
	<span>{t('footer.version')}</span>
</footer>

<style>
	.f-default {
		text-align: center;
		padding: 12px 16px;
		border-top: 1px solid var(--border);
	}

	span {
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--text-dim);
	}
</style>
