import type { DeviceContext, PopupConfig } from '../types'

const NO_DRIVER_CONFIG: PopupConfig = {
	header: 'h-alert',
	blocks: ['b-driver-missing', 'b-install-guide'],
	actionButton: 'btn-download-driver',
	footer: 'f-help',
}

const RULES: Record<string, Record<string, PopupConfig>> = {
	fan: {
		newcomer: {
			header: 'h-welcome',
			blocks: ['b-intro', 'b-feature-highlight'],
			actionButton: 'btn-start',
			footer: 'f-help',
		},
		novice: {
			header: 'h-setup',
			blocks: ['b-fan-basic-controls'],
			actionButton: 'btn-save',
			footer: 'f-help',
		},
		advanced: {
			header: 'h-setup',
			blocks: ['b-fan-basic-controls', 'b-fan-advanced-controls', 'b-fan-telemetry-chart'],
			actionButton: 'btn-save',
			footer: 'f-default',
		},
	},
	tablet: {
		newcomer: {
			header: 'h-welcome',
			blocks: ['b-intro', 'b-feature-highlight'],
			actionButton: 'btn-start',
			footer: 'f-help',
		},
		novice: {
			header: 'h-setup',
			blocks: ['b-tablet-pen-test', 'b-tablet-basic-controls'],
			actionButton: 'btn-save',
			footer: 'f-help',
		},
		advanced: {
			header: 'h-setup',
			blocks: ['b-tablet-pen-test', 'b-tablet-advanced-controls', 'b-tablet-pressure-curve'],
			actionButton: 'btn-save',
			footer: 'f-default',
		},
	},
	keyboard: {
		newcomer: {
			header: 'h-welcome',
			blocks: ['b-intro', 'b-feature-highlight'],
			actionButton: 'btn-start',
			footer: 'f-help',
		},
		novice: {
			header: 'h-setup',
			blocks: ['b-keyboard-key-test', 'b-keyboard-basic-controls'],
			actionButton: 'btn-save',
			footer: 'f-help',
		},
		advanced: {
			header: 'h-setup',
			blocks: ['b-keyboard-key-test', 'b-keyboard-advanced-controls', 'b-keyboard-heatmap'],
			actionButton: 'btn-save',
			footer: 'f-default',
		},
	},
}

export function assemble(ctx: DeviceContext): PopupConfig {
	if (!ctx.driverInstalled) return NO_DRIVER_CONFIG
	const deviceRules = RULES[ctx.deviceType]
	if (!deviceRules) throw new Error(`No rules for device: ${ctx.deviceType}`)
	const config = deviceRules[ctx.userLevel]
	if (!config) throw new Error(`No config for level: ${ctx.userLevel}`)
	return config
}
