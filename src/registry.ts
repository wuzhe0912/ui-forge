import type { Component } from 'svelte'

import HAlert from './components/headers/HAlert.svelte'
import HSetup from './components/headers/HSetup.svelte'
import BDriverMissing from './components/blocks/BDriverMissing.svelte'
import BInstallGuide from './components/blocks/BInstallGuide.svelte'
import BFanBasicControls from './components/blocks/BFanBasicControls.svelte'
import BFanAdvancedControls from './components/blocks/BFanAdvancedControls.svelte'
import BFanTelemetryChart from './components/blocks/BFanTelemetryChart.svelte'
import BTabletPenTest from './components/blocks/BTabletPenTest.svelte'
import BTabletBasicControls from './components/blocks/BTabletBasicControls.svelte'
import BTabletAdvancedControls from './components/blocks/BTabletAdvancedControls.svelte'
import BTabletPressureCurve from './components/blocks/BTabletPressureCurve.svelte'
import BtnDownloadDriver from './components/actions/BtnDownloadDriver.svelte'
import BtnSave from './components/actions/BtnSave.svelte'
import FDefault from './components/footers/FDefault.svelte'
import FHelp from './components/footers/FHelp.svelte'

export const registry: Record<string, Component> = {
	'h-alert': HAlert,
	'h-setup': HSetup,
	'b-driver-missing': BDriverMissing,
	'b-install-guide': BInstallGuide,
	'b-fan-basic-controls': BFanBasicControls,
	'b-fan-advanced-controls': BFanAdvancedControls,
	'b-fan-telemetry-chart': BFanTelemetryChart,
	'b-tablet-pen-test': BTabletPenTest,
	'b-tablet-basic-controls': BTabletBasicControls,
	'b-tablet-advanced-controls': BTabletAdvancedControls,
	'b-tablet-pressure-curve': BTabletPressureCurve,
	'btn-download-driver': BtnDownloadDriver,
	'btn-save': BtnSave,
	'f-default': FDefault,
	'f-help': FHelp,
}

export const allComponentIds = Object.keys(registry)
