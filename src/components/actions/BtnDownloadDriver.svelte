<script lang="ts">
	import { t } from '../../i18n/index.svelte'
</script>

<button class="btn-download">{t('btn.downloadDriver')}</button>

<style>
	.btn-download {
		width: 100%;
		padding: 10px 24px;
		background: var(--amber);
		color: #0a0e1a;
		border: none;
		border-radius: 6px;
		font-family: var(--font-mono);
		font-size: 14px;
		font-weight: 700;
		cursor: pointer;
		transition: box-shadow 0.2s, transform 0.2s;
	}

	.btn-download:hover {
		box-shadow: 0 0 20px rgba(255, 159, 28, 0.4);
		transform: translateY(-1px);
	}
</style>
