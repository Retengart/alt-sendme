# Verifying AltSendme releases

Every release artifact produced by the `publish` workflow is signed in CI with
keyless Sigstore (GitHub Actions OIDC, Fulcio, and the Rekor transparency log).
Each artifact ships with a matching `<artifact>.sigstore.json` bundle, and a
build-provenance attestation is published to GitHub.

The `.sigstore.json` bundle proves authenticity: the file was signed by this
repository's GitHub Actions release workflow. GitHub artifact attestations add
build provenance for the same file digest.

Install [cosign](https://docs.sigstore.dev/cosign/installation/) and the
[GitHub CLI](https://cli.github.com/).

## 1. Authenticity with cosign

Replace `vX.Y.Z` and `<artifact>` with the release tag and downloaded file name.

```bash
cosign verify-blob <artifact> \
  --bundle <artifact>.sigstore.json \
  --certificate-identity 'https://github.com/tonyantony300/alt-sendme/.github/workflows/publish.yml@refs/tags/vX.Y.Z' \
  --certificate-oidc-issuer 'https://token.actions.githubusercontent.com'
```

## 2. Build provenance with GitHub CLI

```bash
gh attestation verify <artifact> \
  --repo tonyantony300/alt-sendme \
  --signer-workflow tonyantony300/alt-sendme/.github/workflows/publish.yml \
  --source-ref refs/tags/vX.Y.Z
```

## Release artifacts

The release workflow signs and attests these artifact families when present:

- Windows installers: `*.exe`, `*.msi`
- macOS bundles: `*.dmg`, `*.app.tar.gz`, `*.app.tar.gz.sig`
- Linux packages: `*.AppImage`, `*.deb`, `*.rpm`
- Android APKs: `AltSendme-vX.Y.Z-*.apk`

For a looser "official AltSendme CI produced this artifact" cosign check across
tags, replace `--certificate-identity` with:

```bash
--certificate-identity-regexp '^https://github.com/tonyantony300/alt-sendme/\.github/workflows/publish\.yml@refs/tags/v[0-9]+\.[0-9]+\.[0-9]+$'
```
