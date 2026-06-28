type RelayMode = 'default' | 'custom' | 'disabled'
type RelayFallback = 'strict' | 'public'

type RelayConfigArg = {
	mode: RelayMode
	urls: string[]
	auth_token?: string | null
	fallback: RelayFallback
}

type RelayStatusConfigInput = {
	relayMode: RelayMode
	relayUrls: string[]
	relayFallback: RelayFallback
}

export function buildRelayStatusConfig({
	relayMode,
	relayUrls,
	relayFallback,
}: RelayStatusConfigInput): RelayConfigArg {
	return {
		mode: relayMode,
		urls: relayUrls.map((url) => url.trim()).filter(Boolean),
		auth_token: null,
		fallback: relayFallback,
	}
}
