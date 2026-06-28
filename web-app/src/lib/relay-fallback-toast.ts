type RelayFallbackStage = 'send' | 'receive' | 'preview'

const DESCRIPTION_KEYS: Record<RelayFallbackStage, string> = {
	send: 'footer.relay.fellBackToastSend',
	receive: 'footer.relay.fellBackToastReceive',
	preview: 'footer.relay.fellBackToastPreview',
}

export function relayFallbackToastDescriptionKey(
	payload: string
): string | null {
	if (payload === 'send' || payload === 'receive' || payload === 'preview') {
		return DESCRIPTION_KEYS[payload]
	}

	return null
}
