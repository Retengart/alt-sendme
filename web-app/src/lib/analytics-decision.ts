export type AnalyticsPlatform = 'android' | 'desktop'

export type AnalyticsDecisionOptions = {
	analyticsEnabled?: boolean
	doNotTrack: boolean
	platform: AnalyticsPlatform
}

export function shouldUseAnalytics({
	analyticsEnabled = false,
	doNotTrack,
	platform,
}: AnalyticsDecisionOptions): boolean {
	return analyticsEnabled === true && doNotTrack === false && platform !== 'android'
}
