import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { relayFallbackToastDescriptionKey } from './relay-fallback-toast.js'

describe('relayFallbackToastDescriptionKey', () => {
	it('uses preview-specific copy for ticket metadata preview fallback', () => {
		assert.equal(
			relayFallbackToastDescriptionKey('preview'),
			'footer.relay.fellBackToastPreview'
		)
	})

	it('does not show public relay toast copy for unknown payloads', () => {
		assert.equal(relayFallbackToastDescriptionKey('unexpected'), null)
	})
})
