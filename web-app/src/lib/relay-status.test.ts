import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { buildRelayStatusConfig } from './relay-status.js'

describe('buildRelayStatusConfig', () => {
	it('includes the selected fallback policy for custom relay status checks', () => {
		assert.deepEqual(
			buildRelayStatusConfig({
				relayMode: 'custom',
				relayUrls: [' https://relay.example.com ', ' '],
				relayAuthToken: ' token ',
				relayFallback: 'public',
			}),
			{
				mode: 'custom',
				urls: ['https://relay.example.com'],
				auth_token: 'token',
				fallback: 'public',
			}
		)
	})
})
