<div class="install-guide">
	<div class="step">
		<div class="step-number">1</div>
		<div class="step-text">
			<span class="step-title">Download</span>
			<span class="step-desc">Get the latest driver package</span>
		</div>
	</div>
	<div class="connector"></div>
	<div class="step">
		<div class="step-number">2</div>
		<div class="step-text">
			<span class="step-title">Install</span>
			<span class="step-desc">Run installer and follow prompts</span>
		</div>
	</div>
	<div class="connector"></div>
	<div class="step">
		<div class="step-number">3</div>
		<div class="step-text">
			<span class="step-title">Restart</span>
			<span class="step-desc">Reconnect device to apply changes</span>
		</div>
	</div>
</div>

<style>
	.install-guide {
		display: flex;
		align-items: flex-start;
		gap: 0;
		padding: 16px;
	}

	.step {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		flex: 1;
	}

	.step-number {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		border: 1px solid var(--cyan);
		background: var(--cyan-dim);
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: var(--font-mono);
		font-size: 13px;
		font-weight: 600;
		color: var(--cyan);
		flex-shrink: 0;
	}

	.step-text {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.step-title {
		font-family: var(--font-sans);
		font-size: 13px;
		font-weight: 600;
		color: var(--text-primary);
	}

	.step-desc {
		font-size: 11px;
		color: var(--text-secondary);
		line-height: 1.4;
	}

	.connector {
		width: 20px;
		height: 1px;
		background: var(--border);
		margin-top: 14px;
		flex-shrink: 0;
	}
</style>
