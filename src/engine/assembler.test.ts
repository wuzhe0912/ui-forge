import { describe, it, expect } from 'vitest'
import { assemble } from './assembler'
import type { DeviceContext, PopupConfig } from '../types'

describe('assemble', () => {
	// Fan scenarios
	it('fan: no driver', () => {
		const ctx: DeviceContext = { deviceType: 'fan', driverInstalled: false, userLevel: 'novice' }
		expect(assemble(ctx)).toEqual({
			header: 'h-alert',
			blocks: ['b-driver-missing', 'b-install-guide'],
			actionButton: 'btn-download-driver',
			footer: 'f-help',
		})
	})

	it('fan: driver + newcomer', () => {
		const ctx: DeviceContext = { deviceType: 'fan', driverInstalled: true, userLevel: 'newcomer' }
		expect(assemble(ctx)).toEqual({
			header: 'h-welcome',
			blocks: ['b-intro', 'b-feature-highlight'],
			actionButton: 'btn-start',
			footer: 'f-help',
		})
	})

	it('fan: driver + novice', () => {
		const ctx: DeviceContext = { deviceType: 'fan', driverInstalled: true, userLevel: 'novice' }
		expect(assemble(ctx)).toEqual({
			header: 'h-setup',
			blocks: ['b-fan-basic-controls'],
			actionButton: 'btn-save',
			footer: 'f-help',
		})
	})

	it('fan: driver + advanced', () => {
		const ctx: DeviceContext = { deviceType: 'fan', driverInstalled: true, userLevel: 'advanced' }
		expect(assemble(ctx)).toEqual({
			header: 'h-setup',
			blocks: ['b-fan-basic-controls', 'b-fan-advanced-controls', 'b-fan-telemetry-chart'],
			actionButton: 'btn-save',
			footer: 'f-default',
		})
	})

	// Tablet scenarios
	it('tablet: no driver', () => {
		const ctx: DeviceContext = { deviceType: 'tablet', driverInstalled: false, userLevel: 'novice' }
		expect(assemble(ctx)).toEqual({
			header: 'h-alert',
			blocks: ['b-driver-missing', 'b-install-guide'],
			actionButton: 'btn-download-driver',
			footer: 'f-help',
		})
	})

	it('tablet: driver + newcomer', () => {
		const ctx: DeviceContext = { deviceType: 'tablet', driverInstalled: true, userLevel: 'newcomer' }
		expect(assemble(ctx)).toEqual({
			header: 'h-welcome',
			blocks: ['b-intro', 'b-feature-highlight'],
			actionButton: 'btn-start',
			footer: 'f-help',
		})
	})

	it('tablet: driver + novice', () => {
		const ctx: DeviceContext = { deviceType: 'tablet', driverInstalled: true, userLevel: 'novice' }
		expect(assemble(ctx)).toEqual({
			header: 'h-setup',
			blocks: ['b-tablet-pen-test', 'b-tablet-basic-controls'],
			actionButton: 'btn-save',
			footer: 'f-help',
		})
	})

	it('tablet: driver + advanced', () => {
		const ctx: DeviceContext = { deviceType: 'tablet', driverInstalled: true, userLevel: 'advanced' }
		expect(assemble(ctx)).toEqual({
			header: 'h-setup',
			blocks: ['b-tablet-pen-test', 'b-tablet-advanced-controls', 'b-tablet-pressure-curve'],
			actionButton: 'btn-save',
			footer: 'f-default',
		})
	})

	// Keyboard scenarios
	it('keyboard: no driver', () => {
		const ctx: DeviceContext = { deviceType: 'keyboard', driverInstalled: false, userLevel: 'novice' }
		expect(assemble(ctx)).toEqual({
			header: 'h-alert',
			blocks: ['b-driver-missing', 'b-install-guide'],
			actionButton: 'btn-download-driver',
			footer: 'f-help',
		})
	})

	it('keyboard: driver + newcomer', () => {
		const ctx: DeviceContext = { deviceType: 'keyboard', driverInstalled: true, userLevel: 'newcomer' }
		expect(assemble(ctx)).toEqual({
			header: 'h-welcome',
			blocks: ['b-intro', 'b-feature-highlight'],
			actionButton: 'btn-start',
			footer: 'f-help',
		})
	})

	it('keyboard: driver + novice', () => {
		const ctx: DeviceContext = { deviceType: 'keyboard', driverInstalled: true, userLevel: 'novice' }
		expect(assemble(ctx)).toEqual({
			header: 'h-setup',
			blocks: ['b-keyboard-key-test', 'b-keyboard-basic-controls'],
			actionButton: 'btn-save',
			footer: 'f-help',
		})
	})

	it('keyboard: driver + advanced', () => {
		const ctx: DeviceContext = { deviceType: 'keyboard', driverInstalled: true, userLevel: 'advanced' }
		expect(assemble(ctx)).toEqual({
			header: 'h-setup',
			blocks: ['b-keyboard-key-test', 'b-keyboard-advanced-controls', 'b-keyboard-heatmap'],
			actionButton: 'btn-save',
			footer: 'f-default',
		})
	})

	// Edge: no driver ignores userLevel
	it('fan: no driver + advanced still shows driver flow', () => {
		const ctx: DeviceContext = { deviceType: 'fan', driverInstalled: false, userLevel: 'advanced' }
		expect(assemble(ctx)).toEqual({
			header: 'h-alert',
			blocks: ['b-driver-missing', 'b-install-guide'],
			actionButton: 'btn-download-driver',
			footer: 'f-help',
		})
	})

	it('fan: no driver + newcomer still shows driver flow', () => {
		const ctx: DeviceContext = { deviceType: 'fan', driverInstalled: false, userLevel: 'newcomer' }
		expect(assemble(ctx)).toEqual({
			header: 'h-alert',
			blocks: ['b-driver-missing', 'b-install-guide'],
			actionButton: 'btn-download-driver',
			footer: 'f-help',
		})
	})
})
