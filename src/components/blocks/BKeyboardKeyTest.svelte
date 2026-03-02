<script lang="ts">
	import { t } from '../../i18n/index.svelte'

	let pressedKeys = $state<Set<number>>(new Set())

	const rows = [
		['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
		['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
		['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
	]

	function toggleKey(rowIdx: number, keyIdx: number) {
		const id = rowIdx * 100 + keyIdx
		const next = new Set(pressedKeys)
		if (next.has(id)) {
			next.delete(id)
		} else {
			next.add(id)
		}
		pressedKeys = next
	}

	function isPressed(rowIdx: number, keyIdx: number): boolean {
		return pressedKeys.has(rowIdx * 100 + keyIdx)
	}
</script>

<div class="key-test">
	<div class="header-row">
		<span class="label">{t('block.keyTestArea')}</span>
		<span class="hint">{t('block.clickKeyToTest')}</span>
	</div>
	<div class="keyboard-grid">
		{#each rows as row, rowIdx}
			<div class="key-row" style:padding-left="{rowIdx * 12}px">
				{#each row as key, keyIdx}
					<button
						class="key-cap"
						class:key-cap--active={isPressed(rowIdx, keyIdx)}
						onclick={() => toggleKey(rowIdx, keyIdx)}
					>
						{key}
					</button>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	.key-test {
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 16px;
	}

	.header-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.label {
		font-family: var(--font-mono);
		font-size: 11px;
		text-transform: uppercase;
		color: var(--text-secondary);
		letter-spacing: 0.5px;
	}

	.hint {
		font-size: 11px;
		color: var(--text-dim);
	}

	.keyboard-grid {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 12px;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid var(--border);
		border-radius: 6px;
	}

	.key-row {
		display: flex;
		gap: 4px;
	}

	.key-cap {
		width: 32px;
		height: 32px;
		display: grid;
		place-items: center;
		font-family: var(--font-mono);
		font-size: 11px;
		font-weight: 600;
		color: var(--text-secondary);
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 4px;
		cursor: pointer;
		transition: all 0.15s;
	}

	.key-cap:hover {
		border-color: var(--cyan);
		color: var(--cyan);
	}

	.key-cap--active {
		border-color: var(--cyan);
		color: var(--cyan);
		background: var(--cyan-dim);
		box-shadow: 0 0 8px rgba(0, 240, 255, 0.3);
	}
</style>
