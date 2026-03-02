const en: Record<string, string> = {
	// App layout
	'app.title': 'DEVICE ASSEMBLY HUD',
	'app.selectDevice': '① Select Device',
	'app.setContext': '② Set Context',
	'app.assembledUI': '③ Assembled UI',
	'app.inventory': '④ Component Inventory',
	'app.selectPrompt': 'Select a device to begin',

	// Devices
	'device.fan': 'Cooling Fan',
	'device.tablet': 'Drawing Tablet',
	'device.keyboard': 'Mechanical Keyboard',
	'device.connected': 'Connected',
	'device.clickToConnect': 'Click to connect',

	// Context controls
	'ctx.driver': 'Driver',
	'ctx.missing': '✗ Missing',
	'ctx.installed': '✓ Installed',
	'ctx.newcomer': '👋 Newcomer',
	'ctx.novice': '🟢 Novice',
	'ctx.advanced': '🔵 Advanced',

	// Headers
	'header.driverNotFound': 'Driver Not Found',
	'header.driverRequired': '{device} detected — driver installation required',
	'header.welcome': 'Welcome',
	'header.welcomeSubtitle': 'First time setup for {device}',
	'header.fanControl': 'Fan Control',
	'header.tabletSettings': 'Tablet Settings',
	'header.keyboardSettings': 'Keyboard Settings',
	'header.advancedMode': 'Advanced Mode',

	// Blocks - shared
	'block.driverStatus': 'Driver Status',
	'block.notInstalled': 'Not Installed',
	'block.stepDownload': 'Download',
	'block.stepDownloadDesc': 'Get the latest driver package',
	'block.stepInstall': 'Install',
	'block.stepInstallDesc': 'Run installer and follow prompts',
	'block.stepRestart': 'Restart',
	'block.stepRestartDesc': 'Reconnect device to apply changes',

	// Blocks - newcomer
	'block.introTitle': 'Product Overview',
	'block.introFanDesc': 'Smart cooling fan with RGB lighting and auto temperature control',
	'block.introTabletDesc': 'Professional drawing tablet with pressure sensitivity and customizable express keys',
	'block.introKeyboardDesc': 'Mechanical keyboard with RGB backlighting and macro customization',
	'block.featureHighlight': 'Feature Highlights',
	'block.fanFeature1': 'Full RGB lighting control',
	'block.fanFeature2': 'Real-time RPM & temperature monitoring',
	'block.fanFeature3': 'Customizable fan curves',
	'block.tabletFeature1': '8192 levels of pressure sensitivity',
	'block.tabletFeature2': '6 customizable express keys',
	'block.tabletFeature3': 'Multi-app profile support',
	'block.keyboardFeature1': 'Full N-Key Rollover (NKRO)',
	'block.keyboardFeature2': 'Per-key RGB lighting control',
	'block.keyboardFeature3': 'Programmable macro keys',

	// Blocks - fan
	'block.power': 'Power',
	'block.rgbColor': 'RGB Color',
	'block.rpm': 'RPM',
	'block.temp': 'Temp',
	'block.advancedParams': 'Advanced Parameters',
	'block.minSpeed': 'Min Speed',
	'block.maxSpeed': 'Max Speed',
	'block.targetTemp': 'Target Temp',
	'block.telemetry': 'Telemetry — Last 60 min',

	// Blocks - tablet
	'block.penTestArea': 'Pen Test Area',
	'block.drawHere': 'Draw here to test input',
	'block.pressureSensitivity': 'Pressure Sensitivity',
	'block.buttonMapping': 'Button Mapping',
	'block.btn1Action': 'Right Click',
	'block.btn2Action': 'Undo (Ctrl+Z)',
	'block.expressKeys': 'Express Keys',
	'block.brushSizePlus': 'Brush Size +',
	'block.brushSizeMinus': 'Brush Size −',
	'block.zoomIn': 'Zoom In',
	'block.zoomOut': 'Zoom Out',
	'block.pan': 'Pan',
	'block.eraser': 'Eraser',
	'block.appProfiles': 'App Profiles',
	'block.pressureCurve': 'Pressure Curve',
	'block.inputPressure': 'Input Pressure',
	'block.output': 'Output',

	// Blocks - keyboard
	'block.keyTestArea': 'Key Test Area',
	'block.clickKeyToTest': 'Click keys to test input',
	'block.rgbMode': 'RGB Mode',
	'block.static': 'Static',
	'block.breathing': 'Breathing',
	'block.wave': 'Wave',
	'block.brightness': 'Brightness',
	'block.repeatRate': 'Repeat Rate',
	'block.macroEditor': 'Macro Editor',
	'block.macroSlot': 'Macro Slot',
	'block.perKeyCustom': 'Per-Key Customization',
	'block.keyProfiles': 'Profiles',
	'block.keyHeatmap': 'Key Heatmap — Last 7 days',
	'block.heatmapLow': 'Low',
	'block.heatmapHigh': 'High',

	// Action buttons
	'btn.downloadDriver': '↓ Download Driver',
	'btn.saveSettings': '✓ Save Settings',
	'btn.getStarted': '→ Get Started',

	// Footers
	'footer.version': 'Device Assembly HUD v1.0',
	'footer.needHelp': 'Need help?',
	'footer.supportLink': 'View support docs →',
}

export default en
