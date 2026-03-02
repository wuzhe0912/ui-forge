const ja: Record<string, string> = {
	// App layout
	'app.title': 'デバイス組立HUD',
	'app.selectDevice': '① デバイスを選択',
	'app.setContext': '② コンテキスト設定',
	'app.assembledUI': '③ 組立結果',
	'app.inventory': '④ コンポーネント一覧',
	'app.selectPrompt': 'デバイスを選択して開始',

	// Devices
	'device.fan': '冷却ファン',
	'device.tablet': 'ペンタブレット',
	'device.keyboard': 'メカニカルキーボード',
	'device.connected': '接続済み',
	'device.clickToConnect': 'クリックして接続',

	// Context controls
	'ctx.driver': 'ドライバー',
	'ctx.missing': '✗ 未インストール',
	'ctx.installed': '✓ インストール済み',
	'ctx.newcomer': '👋 初めて',
	'ctx.novice': '🟢 初心者',
	'ctx.advanced': '🔵 上級者',

	// Headers
	'header.driverNotFound': 'ドライバーが見つかりません',
	'header.driverRequired': '{device} を検出 — ドライバーのインストールが必要です',
	'header.welcome': 'ようこそ',
	'header.welcomeSubtitle': '{device} の初期設定',
	'header.fanControl': 'ファン制御',
	'header.tabletSettings': 'タブレット設定',
	'header.keyboardSettings': 'キーボード設定',
	'header.advancedMode': '上級モード',

	// Blocks - shared
	'block.driverStatus': 'ドライバー状態',
	'block.notInstalled': '未インストール',
	'block.stepDownload': 'ダウンロード',
	'block.stepDownloadDesc': '最新のドライバーパッケージを取得',
	'block.stepInstall': 'インストール',
	'block.stepInstallDesc': 'インストーラーを実行し指示に従う',
	'block.stepRestart': '再起動',
	'block.stepRestartDesc': 'デバイスを再接続して変更を適用',

	// Blocks - newcomer
	'block.introTitle': '製品紹介',
	'block.introFanDesc': 'RGB照明と自動温度制御対応のスマート冷却ファン',
	'block.introTabletDesc': '感圧ペンとカスタマイズ可能なエクスプレスキー対応プロ仕様ペンタブレット',
	'block.introKeyboardDesc': 'RGBバックライトとマクロカスタマイズ対応メカニカルキーボード',
	'block.featureHighlight': '機能ハイライト',
	'block.fanFeature1': 'フルRGBライティング制御',
	'block.fanFeature2': 'リアルタイム回転数・温度モニタリング',
	'block.fanFeature3': 'カスタマイズ可能なファンカーブ',
	'block.tabletFeature1': '8192段階の筆圧感知',
	'block.tabletFeature2': '6つのカスタマイズ可能なエクスプレスキー',
	'block.tabletFeature3': 'マルチアプリプロファイル対応',
	'block.keyboardFeature1': 'フルNキーロールオーバー (NKRO)',
	'block.keyboardFeature2': 'キーごとのRGBライティング制御',
	'block.keyboardFeature3': 'プログラマブルマクロキー',

	// Blocks - fan
	'block.power': '電源',
	'block.rgbColor': 'RGBカラー',
	'block.rpm': '回転数',
	'block.temp': '温度',
	'block.advancedParams': '詳細パラメータ',
	'block.minSpeed': '最低速度',
	'block.maxSpeed': '最高速度',
	'block.targetTemp': '目標温度',
	'block.telemetry': 'テレメトリ — 過去60分',

	// Blocks - tablet
	'block.penTestArea': 'ペンテストエリア',
	'block.drawHere': 'ここに描いて入力をテスト',
	'block.pressureSensitivity': '筆圧感度',
	'block.buttonMapping': 'ボタンマッピング',
	'block.btn1Action': '右クリック',
	'block.btn2Action': '元に戻す (Ctrl+Z)',
	'block.expressKeys': 'エクスプレスキー',
	'block.brushSizePlus': 'ブラシサイズ+',
	'block.brushSizeMinus': 'ブラシサイズ−',
	'block.zoomIn': 'ズームイン',
	'block.zoomOut': 'ズームアウト',
	'block.pan': 'パン',
	'block.eraser': '消しゴム',
	'block.appProfiles': 'アプリプロファイル',
	'block.pressureCurve': '筆圧カーブ',
	'block.inputPressure': '入力圧力',
	'block.output': '出力',

	// Blocks - keyboard
	'block.keyTestArea': 'キーテストエリア',
	'block.clickKeyToTest': 'キーをクリックして入力をテスト',
	'block.rgbMode': 'RGBモード',
	'block.static': '固定',
	'block.breathing': 'ブリージング',
	'block.wave': 'ウェーブ',
	'block.brightness': '輝度',
	'block.repeatRate': 'リピートレート',
	'block.macroEditor': 'マクロエディタ',
	'block.macroSlot': 'マクロスロット',
	'block.perKeyCustom': 'キーごとのカスタマイズ',
	'block.keyProfiles': 'プロファイル',
	'block.keyHeatmap': 'キーヒートマップ — 過去7日間',
	'block.heatmapLow': '低',
	'block.heatmapHigh': '高',

	// Action buttons
	'btn.downloadDriver': '↓ ドライバーをダウンロード',
	'btn.saveSettings': '✓ 設定を保存',
	'btn.getStarted': '→ 始めましょう',

	// Footers
	'footer.version': 'デバイス組立HUD v1.0',
	'footer.needHelp': 'ヘルプが必要ですか？',
	'footer.supportLink': 'サポートドキュメントを見る →',
}

export default ja
