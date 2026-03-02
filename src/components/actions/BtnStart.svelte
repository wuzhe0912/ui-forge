<script lang="ts">
	import { t } from '../../i18n/index.svelte'
</script>

<button class="btn-start">{t('btn.getStarted')}</button>

<style>
	.btn-start {
		width: 100%;
		padding: 10px 24px;
		background: var(--green);
		color: #0a0e1a;
		border: none;
		border-radius: 6px;
		font-family: var(--font-mono);
		font-size: 14px;
		font-weight: 700;
		cursor: pointer;
		transition: box-shadow 0.2s, transform 0.2s;
	}

	.btn-start:hover {
		box-shadow: 0 0 20px rgba(0, 230, 118, 0.4);
		transform: translateY(-1px);
	}
</style>
