const zhTW: Record<string, string> = {
	// App layout
	'app.title': '裝置組裝控制台',
	'app.selectDevice': '① 選擇裝置',
	'app.setContext': '② 設定情境',
	'app.assembledUI': '③ 組裝結果',
	'app.inventory': '④ 組件庫',
	'app.selectPrompt': '選擇裝置以開始',

	// Devices
	'device.fan': '散熱風扇',
	'device.tablet': '繪圖板',
	'device.keyboard': '機械鍵盤',
	'device.connected': '已連接',
	'device.clickToConnect': '點擊連接',

	// Context controls
	'ctx.driver': '驅動程式',
	'ctx.missing': '✗ 未安裝',
	'ctx.installed': '✓ 已安裝',
	'ctx.newcomer': '👋 初次使用',
	'ctx.novice': '🟢 新手',
	'ctx.advanced': '🔵 熟手',

	// Headers
	'header.driverNotFound': '找不到驅動程式',
	'header.driverRequired': '{device} 已偵測 — 需要安裝驅動程式',
	'header.welcome': '歡迎使用',
	'header.welcomeSubtitle': '首次設定 {device}',
	'header.fanControl': '風扇控制',
	'header.tabletSettings': '繪圖板設定',
	'header.keyboardSettings': '鍵盤設定',
	'header.advancedMode': '進階模式',

	// Blocks - shared
	'block.driverStatus': '驅動狀態',
	'block.notInstalled': '未安裝',
	'block.stepDownload': '下載',
	'block.stepDownloadDesc': '取得最新驅動套件',
	'block.stepInstall': '安裝',
	'block.stepInstallDesc': '執行安裝程式並依指示操作',
	'block.stepRestart': '重啟',
	'block.stepRestartDesc': '重新連接裝置以套用變更',

	// Blocks - newcomer
	'block.introTitle': '產品介紹',
	'block.introFanDesc': '智慧散熱風扇，支援 RGB 燈效與自動溫控',
	'block.introTabletDesc': '專業繪圖板，支援壓感筆觸與快捷鍵自訂',
	'block.introKeyboardDesc': '機械鍵盤，支援 RGB 背光與巨集自訂',
	'block.featureHighlight': '功能亮點',
	'block.fanFeature1': 'RGB 全彩燈效控制',
	'block.fanFeature2': '即時轉速與溫度監控',
	'block.fanFeature3': '可自訂風扇曲線',
	'block.tabletFeature1': '8192 級壓感筆觸',
	'block.tabletFeature2': '6 顆可自訂快捷鍵',
	'block.tabletFeature3': '多應用程式設定檔',
	'block.keyboardFeature1': '全鍵無衝突 (NKRO)',
	'block.keyboardFeature2': 'RGB 單鍵背光控制',
	'block.keyboardFeature3': '可程式化巨集鍵',

	// Blocks - fan
	'block.power': '電源',
	'block.rgbColor': 'RGB 色彩',
	'block.rpm': '轉速',
	'block.temp': '溫度',
	'block.advancedParams': '進階參數',
	'block.minSpeed': '最低轉速',
	'block.maxSpeed': '最高轉速',
	'block.targetTemp': '目標溫度',
	'block.telemetry': '遙測數據 — 過去 60 分鐘',

	// Blocks - tablet
	'block.penTestArea': '筆壓測試區',
	'block.drawHere': '在此繪製以測試輸入',
	'block.pressureSensitivity': '壓力靈敏度',
	'block.buttonMapping': '按鍵映射',
	'block.btn1Action': '右鍵',
	'block.btn2Action': '復原 (Ctrl+Z)',
	'block.expressKeys': '快捷鍵',
	'block.brushSizePlus': '筆刷放大',
	'block.brushSizeMinus': '筆刷縮小',
	'block.zoomIn': '放大',
	'block.zoomOut': '縮小',
	'block.pan': '平移',
	'block.eraser': '橡皮擦',
	'block.appProfiles': '應用程式設定檔',
	'block.pressureCurve': '壓力曲線',
	'block.inputPressure': '輸入壓力',
	'block.output': '輸出',

	// Blocks - keyboard
	'block.keyTestArea': '按鍵測試區',
	'block.clickKeyToTest': '點擊按鍵以測試輸入',
	'block.rgbMode': 'RGB 模式',
	'block.static': '靜態',
	'block.breathing': '呼吸',
	'block.wave': '波浪',
	'block.brightness': '亮度',
	'block.repeatRate': '重複速率',
	'block.macroEditor': '巨集編輯器',
	'block.macroSlot': '巨集插槽',
	'block.perKeyCustom': '單鍵自訂',
	'block.keyProfiles': '設定檔',
	'block.keyHeatmap': '按鍵熱度圖 — 過去 7 天',
	'block.heatmapLow': '低',
	'block.heatmapHigh': '高',

	// Action buttons
	'btn.downloadDriver': '↓ 下載驅動程式',
	'btn.saveSettings': '✓ 儲存設定',
	'btn.getStarted': '→ 開始使用',

	// Footers
	'footer.version': '裝置組裝控制台 v1.0',
	'footer.needHelp': '需要協助？',
	'footer.supportLink': '查看支援文件 →',
}

export default zhTW
