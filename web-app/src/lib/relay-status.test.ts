import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { buildRelayStatusConfig } from './relay-status.js'

describe('buildRelayStatusConfig', () => {
	it('omits auth tokens from passive relay status checks', () => {
		assert.deepEqual(
			buildRelayStatusConfig({
				relayMode: 'custom',
				relayUrls: [' https://relay.example.com ', ' '],
				relayFallback: 'public',
			}),
			{
				mode: 'custom',
				urls: ['https://relay.example.com'],
				auth_token: null,
				fallback: 'public',
			}
		)
	})
})
