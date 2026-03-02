<script lang="ts">
	let activeProfile = $state('Photoshop')

	const expressKeys = [
		{ key: 'E1', action: 'Brush Size +' },
		{ key: 'E2', action: 'Brush Size \u2212' },
		{ key: 'E3', action: 'Zoom In' },
		{ key: 'E4', action: 'Zoom Out' },
		{ key: 'E5', action: 'Pan' },
		{ key: 'E6', action: 'Eraser' },
	]

	const profiles = ['Photoshop', 'Clip Studio', 'Blender']
</script>

<div class="tablet-advanced">
	<div class="section">
		<span class="section-title">Express Keys</span>
		<div class="keys-grid">
			{#each expressKeys as ek}
				<div class="key-item">
					<span class="key-number">{ek.key}</span>
					<span class="key-action">{ek.action}</span>
				</div>
			{/each}
		</div>
	</div>

	<div class="section profiles-section">
		<span class="section-title">App Profiles</span>
		<div class="profiles-row">
			{#each profiles as profile}
				<button
					class="profile-pill"
					class:active={activeProfile === profile}
					onclick={() => activeProfile = profile}
				>
					{profile}
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.tablet-advanced {
		display: flex;
		flex-direction: column;
		gap: 14px;
		padding: 16px;
	}

	.section {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.profiles-section {
		margin-top: 14px;
	}

	.section-title {
		font-family: var(--font-mono);
		font-size: 11px;
		text-transform: uppercase;
		color: var(--text-secondary);
		letter-spacing: 0.5px;
	}

	.keys-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 8px;
	}

	.key-item {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 8px 10px;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 6px;
	}

	.key-number {
		font-family: var(--font-mono);
		font-size: 12px;
		font-weight: 700;
		color: var(--cyan);
	}

	.key-action {
		font-size: 11px;
		color: var(--text-secondary);
	}

	.profiles-row {
		display: flex;
		gap: 8px;
	}

	.profile-pill {
		padding: 6px 14px;
		border-radius: 20px;
		border: 1px solid var(--border);
		background: transparent;
		color: var(--text-secondary);
		font-family: var(--font-sans);
		font-size: 12px;
		cursor: pointer;
		transition: border-color 0.2s, color 0.2s, background 0.2s;
	}

	.profile-pill:hover {
		border-color: var(--cyan);
	}

	.profile-pill.active {
		border-color: var(--cyan);
		color: var(--cyan);
		background: var(--cyan-dim);
	}
</style>
