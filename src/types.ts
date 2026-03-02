export type DeviceType = 'fan' | 'tablet'
export type UserLevel = 'newcomer' | 'novice' | 'advanced'

export interface DeviceContext {
	deviceType: DeviceType
	driverInstalled: boolean
	userLevel: UserLevel
}

export interface PopupConfig {
	header: string
	blocks: string[]
	actionButton: string
	footer: string
}
