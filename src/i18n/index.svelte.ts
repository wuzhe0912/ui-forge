import zhTW from './zh-TW'
import en from './en'
import ja from './ja'
import ko from './ko'

export type Locale = 'zh-TW' | 'en' | 'ja' | 'ko'

const messages: Record<Locale, Record<string, string>> = {
	'zh-TW': zhTW,
	en,
	ja,
	ko,
}

let locale = $state<Locale>('zh-TW')

export function setLocale(l: Locale) {
	locale = l
}

export function getLocale(): Locale {
	return locale
}

export function t(key: string): string {
	return messages[locale]?.[key] ?? messages['en']?.[key] ?? key
}
