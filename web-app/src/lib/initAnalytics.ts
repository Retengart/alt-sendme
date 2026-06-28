import { canUseAnalytics } from './analytics'
import { useAppSettingStore } from '../store/app-setting'

const GOATCOUNTER_SCRIPT_ID = 'goatcounter-script'

/**
 * Load GoatCounter only after desktop users consent and DNT is inactive.
 */
export function initAnalytics(): void {
	if (import.meta.env.TAURI_PLATFORM === 'android') {
		return
	}

	const tryLoadAnalytics = () => {
		if (!canUseAnalytics() || typeof document === 'undefined') {
			return
		}
		if (document.getElementById(GOATCOUNTER_SCRIPT_ID)) {
			return
		}

		const script = document.createElement('script')
		script.id = GOATCOUNTER_SCRIPT_ID
		script.dataset.goatcounter = 'https://alt-sendme.goatcounter.com/count'
		script.dataset.goatcounterSettings = '{"allow_local":true,"no_onload":true}'
		script.async = true
		script.src = 'https://gc.zgo.at/count.js'
		document.head.appendChild(script)
	}

	if (useAppSettingStore.persist.hasHydrated()) {
		tryLoadAnalytics()
	} else {
		const unsubscribeHydration =
			useAppSettingStore.persist.onFinishHydration(() => {
				tryLoadAnalytics()
				unsubscribeHydration()
			})
	}

	useAppSettingStore.subscribe((state, previousState) => {
		if (state.analyticsEnabled !== previousState.analyticsEnabled) {
			tryLoadAnalytics()
		}
	})
}
