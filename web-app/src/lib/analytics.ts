import {
	type AnalyticsPlatform,
	shouldUseAnalytics,
} from './analytics-decision'
import { useAppSettingStore } from '../store/app-setting'

declare global {
	interface Window {
		goatcounter?: {
			count: (options: {
				path?: string
				title?: string
				event?: boolean
				no_events?: boolean
				referrer?: string
				allow_local?: boolean
			}) => void
			allow_local?: boolean
		}
	}
}

function getAnalyticsPlatform(): AnalyticsPlatform {
	return import.meta.env.TAURI_PLATFORM === 'android' ? 'android' : 'desktop'
}

function isDoNotTrackEnabled(): boolean {
	if (typeof navigator === 'undefined') {
		return false
	}

	const value =
		navigator.doNotTrack ??
		(navigator as Navigator & { msDoNotTrack?: string | null }).msDoNotTrack

	return value === '1' || value === 'yes' || value === 'true'
}

export function canUseAnalytics(): boolean {
	return shouldUseAnalytics({
		analyticsEnabled: useAppSettingStore.getState().analyticsEnabled,
		doNotTrack: isDoNotTrackEnabled(),
		platform: getAnalyticsPlatform(),
	})
}

/** No-op on Android; analytics are disabled for the mobile build. */
export function trackTransferComplete(
	_fileSizeBytes: number,
	role: 'sender' | 'receiver',
	_durationMs: number = 0
): void {
	if (!canUseAnalytics() || typeof window === 'undefined' || !window.goatcounter) {
		return
	}

	try {
		window.goatcounter.count({
			path: `transfer-complete/${role}`,
			allow_local: true,
		})
	} catch (_error) {}
}
