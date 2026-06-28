# Privacy Policy

**Last Updated:** Nov 4 - 2025

AltSendme is designed with privacy and security as core principles. This privacy policy explains how the application handles your data and what information may be visible to third parties.

## Core Privacy Principles

- **No Account Required**: AltSendme does not require user registration, accounts, or any personal information
- **End-to-End Encryption**: All file transfers are encrypted end-to-end using QUIC + TLS 1.3
- **Peer-to-Peer**: Files are transferred directly between sender and receiver when possible
- **Analytics**: The app sends GoatCounter only coarse aggregate transfer event paths; it does not send file data, transfer tickets, or personal identifiers.

## How AltSendme Works

AltSendme uses peer-to-peer (P2P) networking technology powered by [Iroh](https://www.iroh.computer) to transfer files directly between devices. The application:

1. **Establishes Direct Connections**: Direct peer-to-peer transfer is preferred when possible, using NAT hole punching
2. **Uses Relay Servers for Reachability and Fallback**: Iroh relays can be used for endpoint reachability and registration, connection setup, NAT traversal and hole punching, and encrypted fallback transport when a direct path cannot be established. Custom relays default to strict mode, which stops the transfer if the custom relay is unreachable; public relay fallback is used only when selected.
3. **Encrypts All Traffic**: All file data is encrypted end-to-end, meaning only the sender and receiver can decrypt it

## Data Stored Locally

AltSendme stores the following data locally on your device:

- **Secret Keys**: Cryptographic keys used for node identification (stored in your system's standard storage location)
- **Temporary Files**: During active transfers, temporary files are stored in your system's temp directory
- **Downloaded Files**: Files you receive are saved to a location you choose
- **App Settings**: Preferences such as relay mode, custom relay URLs, public fallback choice, analytics consent, and download location are stored locally
- **Relay Auth Token**: If you configure a custom relay token, it is stored locally in the app settings file; use an OS/account you trust, or clear the token when it is no longer needed

This data never leaves your device unless you explicitly share it (e.g., by sharing a transfer ticket).

Transfer tickets are bearer credentials while a share is active. Anyone who has the ticket can attempt to connect to the sender and receive the shared file or folder, so only share tickets with intended recipients and stop the share when finished.

## Network Connections and Third-Party Services

### Relay Servers

By default, AltSendme may use relay servers operated by the [Iroh project](https://www.iroh.computer) (n0) for endpoint reachability, registration, connection setup, NAT traversal and hole punching, and encrypted fallback transport when a direct peer-to-peer path cannot be established.

**What Relay Servers May See:**
- Connection metadata (IP addresses, connection timestamps)
- Connection duration
- Amount of data transferred (bandwidth usage)
- Timing and volume patterns for encrypted traffic

**What Relay Servers Cannot See:**
- File contents (all data is encrypted end-to-end)
- File names or directory structures
- File metadata beyond transfer size
- Transfer ticket content

Relay servers may still observe endpoint and network metadata such as IP addresses, connection timing, duration, and transfer volume.

**Your Control:**
- You can disable relay servers entirely in **Settings → Network** (this may limit connectivity in some network configurations)
- You can configure custom self-hosted relay servers in **Settings → Network** (see [`deploy/relay/`](deploy/relay/README.md) in the project repo)
- Custom relay mode defaults to strict fallback: if your custom relay is unreachable, the transfer fails instead of using public relays
- You can explicitly choose public relay fallback for custom relays in **Settings → Network**
- Direct peer-to-peer transfer is preferred when available, but relay registration and connection setup can still occur before a direct path is established

### DNS Discovery

When using Node ID-only tickets, AltSendme may use DNS-based discovery services (Pkarr) to find peer addresses. This service may temporarily store:
- Node addresses (IP addresses) associated with Node IDs
- This information is used only for connection establishment

### Direct Connections

When a direct peer-to-peer connection is established (the preferred method), no third-party servers are involved in the transfer.

## Encryption and Security

- **Encryption Protocol**: All traffic uses QUIC protocol with TLS 1.3 encryption
- **Content Verification**: Files are verified using Blake3 cryptographic hashing to ensure integrity
- **Node IDs**: 256-bit cryptographic node identifiers are used for peer authentication
- **Encrypted Transport**: File contents are encrypted in transit. Received files are saved as normal local files at the location you choose.

## Analytics and Usage Data

This project uses [GoatCounter](https://www.goatcounter.com/), a privacy‑respecting, open‑source analytics service.

**What GoatCounter Records:**
- Coarse aggregate transfer completion event paths, currently `transfer-complete/sender` and `transfer-complete/receiver`
- Network request metadata is received by the GoatCounter service


**What Is Never Collected via GoatCounter:**
- Personal information or user identities
- File contents, file names, transfer tickets, or exact per‑transfer details/sizes
- Cross‑site tracking or profiling
- No cookies, no device fingerprinting, no unique identifiers

GoatCounter respects “Do Not Track”. According to GoatCounter's privacy documentation, it may use IP address and User-Agent transiently in memory for session and location aggregation, but raw IP addresses are not stored in its database. Learn more on their [privacy page](https://www.goatcounter.com/help/privacy).

AltSendme sends these analytics events with bundled app code. It does not load GoatCounter's remote JavaScript inside the Tauri renderer.

## What This Project Doesn't Do

- ❌ No personal information is collected
- ❌ File contents are not tracked
- ❌ Files are not stored or accessed in any servers - no server end
- ❌ Invasive tracking services or cookies are not used
- ❌ File data, tickets, and personal identifiers are not shared with analytics services


## Open Source and Transparency

AltSendme is open source software licensed under AGPL-3.0. You can:
- Review the complete source code on [GitHub](https://github.com/tonyantony300/alt-sendme)
- Verify how the application handles your data
- Build and run the application yourself if desired
- Contribute improvements to privacy and security features

## Your Rights and Control

You maintain full control over:
- Which files you send and receive
- Where files are saved on your device
- Whether to use relay servers (can be disabled)
- Whether to use custom relay servers
- Local data storage (can be cleared by uninstalling the application)

## Data Retention

- **Secret Keys**: Stored locally until you delete the application or clear application data
- **App Settings and Relay Tokens**: Stored locally until you change the setting, clear the token, or remove application data
- **Temporary Transfer Files**: Automatically cleaned up when transfers complete or the application closes
- **Downloaded Files**: Remain on your device until you delete them

## Third-Party Services

AltSendme uses the following third-party services:

1. **Iroh Network Library**: Core P2P networking functionality ([Iroh Privacy](https://www.iroh.computer))
2. **Default Relay Servers**: Operated by the Iroh project, used for endpoint reachability, setup, NAT traversal, and encrypted fallback transport
3. **DNS Discovery**: Used for peer discovery when necessary
4. **GoatCounter Analytics**: Privacy-respecting analytics service for aggregate usage statistics ([GoatCounter Privacy](https://www.goatcounter.com/help/privacy))

You may review the privacy policies of these services if you have concerns.

## Changes to This Policy

This privacy policy may be updated from time to time. The "Last Updated" date at the top indicates when changes were made. Continued use of AltSendme after changes constitutes acceptance of the updated policy.

## Contact

If you have questions about this privacy policy or how AltSendme handles your data, please open an issue on [GitHub](https://github.com/tonyantony300/alt-sendme/issues).

## Disclaimer


While AltSendme is designed with privacy and security in mind, no method of transmission over the internet is 100% secure. Users should:
- Only share transfer tickets with trusted parties
- Be aware that encrypted transfer metadata may still be visible to relay server operators (connection metadata only)
- Consider using custom relay servers with strict fallback, or disabling relays entirely, for maximum privacy
- Understand that direct peer-to-peer connections may expose your IP address to the other party and also to any relay server facilitating the connection.
