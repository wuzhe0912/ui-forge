const ko: Record<string, string> = {
	// App layout
	'app.title': '디바이스 조립 HUD',
	'app.selectDevice': '① 디바이스 선택',
	'app.setContext': '② 컨텍스트 설정',
	'app.assembledUI': '③ 조립 결과',
	'app.assembledHint': ' (UI 미리보기)',
	'app.inventory': '④ 컴포넌트 목록',
	'app.selectPrompt': '디바이스를 선택하세요',

	// Devices
	'device.fan': '쿨링팬',
	'device.tablet': '그래픽 태블릿',
	'device.keyboard': '기계식 키보드',
	'device.connected': '연결됨',
	'device.clickToConnect': '클릭하여 연결',

	// Context controls
	'ctx.driver': '드라이버',
	'ctx.missing': '✗ 미설치',
	'ctx.installed': '✓ 설치됨',
	'ctx.newcomer': '👋 처음',
	'ctx.novice': '🟢 초보',
	'ctx.advanced': '🔵 고급',

	// Headers
	'header.driverNotFound': '드라이버를 찾을 수 없음',
	'header.driverRequired': '{device} 감지됨 — 드라이버 설치 필요',
	'header.welcome': '환영합니다',
	'header.welcomeSubtitle': '{device} 초기 설정',
	'header.fanControl': '팬 제어',
	'header.tabletSettings': '태블릿 설정',
	'header.keyboardSettings': '키보드 설정',
	'header.advancedMode': '고급 모드',

	// Blocks - shared
	'block.driverStatus': '드라이버 상태',
	'block.notInstalled': '미설치',
	'block.stepDownload': '다운로드',
	'block.stepDownloadDesc': '최신 드라이버 패키지 다운로드',
	'block.stepInstall': '설치',
	'block.stepInstallDesc': '설치 프로그램 실행 후 안내에 따라 진행',
	'block.stepRestart': '재시작',
	'block.stepRestartDesc': '디바이스를 다시 연결하여 변경 적용',

	// Blocks - newcomer
	'block.introTitle': '제품 소개',
	'block.introFanDesc': 'RGB 조명 및 자동 온도 제어 스마트 쿨링팬',
	'block.introTabletDesc': '압력 감지 펜 및 맞춤형 단축키 지원 전문 그래픽 태블릿',
	'block.introKeyboardDesc': 'RGB 백라이트 및 매크로 맞춤형 기계식 키보드',
	'block.featureHighlight': '주요 기능',
	'block.fanFeature1': '풀 RGB 조명 제어',
	'block.fanFeature2': '실시간 RPM 및 온도 모니터링',
	'block.fanFeature3': '맞춤형 팬 곡선',
	'block.tabletFeature1': '8192레벨 압력 감지',
	'block.tabletFeature2': '6개의 맞춤형 단축키',
	'block.tabletFeature3': '다중 앱 프로필 지원',
	'block.keyboardFeature1': '풀 N키 롤오버 (NKRO)',
	'block.keyboardFeature2': '키별 RGB 조명 제어',
	'block.keyboardFeature3': '프로그래밍 가능한 매크로 키',

	// Blocks - fan
	'block.power': '전원',
	'block.rgbColor': 'RGB 색상',
	'block.rpm': 'RPM',
	'block.temp': '온도',
	'block.advancedParams': '고급 매개변수',
	'block.minSpeed': '최저 속도',
	'block.maxSpeed': '최고 속도',
	'block.targetTemp': '목표 온도',
	'block.telemetry': '텔레메트리 — 최근 60분',

	// Blocks - tablet
	'block.penTestArea': '펜 테스트 영역',
	'block.drawHere': '여기에 그려서 입력 테스트',
	'block.pressureSensitivity': '압력 감도',
	'block.buttonMapping': '버튼 매핑',
	'block.btn1Action': '우클릭',
	'block.btn2Action': '실행 취소 (Ctrl+Z)',
	'block.expressKeys': '단축키',
	'block.brushSizePlus': '브러시 크기 +',
	'block.brushSizeMinus': '브러시 크기 −',
	'block.zoomIn': '확대',
	'block.zoomOut': '축소',
	'block.pan': '이동',
	'block.eraser': '지우개',
	'block.appProfiles': '앱 프로필',
	'block.pressureCurve': '압력 곡선',
	'block.inputPressure': '입력 압력',
	'block.output': '출력',

	// Blocks - keyboard
	'block.keyTestArea': '키 테스트 영역',
	'block.clickKeyToTest': '키를 클릭하여 입력 테스트',
	'block.rgbMode': 'RGB 모드',
	'block.static': '고정',
	'block.breathing': '브리딩',
	'block.wave': '웨이브',
	'block.brightness': '밝기',
	'block.repeatRate': '반복 속도',
	'block.macroEditor': '매크로 에디터',
	'block.macroSlot': '매크로 슬롯',
	'block.perKeyCustom': '키별 맞춤 설정',
	'block.keyProfiles': '프로필',
	'block.keyHeatmap': '키 히트맵 — 최근 7일',
	'block.heatmapLow': '낮음',
	'block.heatmapHigh': '높음',

	// Action buttons
	'btn.downloadDriver': '↓ 드라이버 다운로드',
	'btn.saveSettings': '✓ 설정 저장',
	'btn.getStarted': '→ 시작하기',

	// Footers
	'footer.version': '디바이스 조립 HUD v1.0',
	'footer.needHelp': '도움이 필요하세요?',
	'footer.supportLink': '지원 문서 보기 →',
}

export default ko
