# Usage Statistics

Supervertaler can optionally send anonymous usage statistics to help improve the app. This is **strictly opt-in** — no data is sent unless you explicitly agree.

## First launch

On first launch, a dialog asks whether you'd like to share anonymous statistics. Your choice is saved and you won't be asked again.

## What is collected

When enabled, a single ping is sent once per session on startup. It contains only:

- **App version** — which version of Supervertaler you're running
- **OS version** — e.g. "Windows 11 (10.0.22631)" or "macOS 15.3"
- **Python version** — e.g. "3.12.4"
- **System locale** — e.g. "en-GB"
- **Platform** — win32, darwin, or linux
- **Architecture** — e.g. "x86_64_64bit"
- **Anonymous ID** — a random UUID generated locally, not tied to any account

Your country is determined by Cloudflare from the request — your IP address is never stored.

## What is NOT collected

- No translation content
- No file names or project names
- No termbase or glossary data
- No personal information
- No API keys or credentials
- No feature usage patterns

## How to change your preference

Open **Settings > General** and look for the **Privacy** section. Toggle the checkbox:

> **Share anonymous usage statistics (no personal data)**

Changes take effect immediately — no restart needed.

## Transparency

The usage statistics code is fully open source. You can review:

- [modules/usage_statistics.py](https://github.com/Supervertaler/Supervertaler-Workbench/blob/main/modules/usage_statistics.py) — the client-side code
- [supervertaler-stats worker](https://github.com/Supervertaler/supervertaler-stats) — the Cloudflare Worker that receives pings

## Related pages

- [General Settings](general.md)
- [FAQ](../reference/faq.md)
