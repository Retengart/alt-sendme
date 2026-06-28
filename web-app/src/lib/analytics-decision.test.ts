import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { shouldUseAnalytics } from './analytics-decision.js'

describe('shouldUseAnalytics', () => {
	it('disables analytics on Android even when consent is enabled', () => {
		assert.equal(
			shouldUseAnalytics({
				analyticsEnabled: true,
				doNotTrack: false,
				platform: 'android',
			}),
			false
		)
	})

	it('disables analytics when Do Not Track is active', () => {
		assert.equal(
			shouldUseAnalytics({
				analyticsEnabled: true,
				doNotTrack: true,
				platform: 'desktop',
			}),
			false
		)
	})

	it('disables analytics when consent is false', () => {
		assert.equal(
			shouldUseAnalytics({
				analyticsEnabled: false,
				doNotTrack: false,
				platform: 'desktop',
			}),
			false
		)
	})

	it('permits analytics on desktop when consent is enabled and DNT is inactive', () => {
		assert.equal(
			shouldUseAnalytics({
				analyticsEnabled: true,
				doNotTrack: false,
				platform: 'desktop',
			}),
			true
		)
	})
})
