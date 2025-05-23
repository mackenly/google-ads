# Beta: Google Ads Managed Component

> [!CAUTION]
> Warning: this is beta software in development that may be buggy, vulnerable, or otherwise not appropriate to use. Use at your own risk.

Find out more about Managed Components [here](https://blog.cloudflare.com/zaraz-open-source-managed-components-and-webcm/) for inspiration and motivation details.

[![Released under the Apache license.](https://img.shields.io/badge/license-apache-blue.svg)](./LICENSE)
[![PRs welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/github/all-contributors/managed-components/snapchat?color=ee8449&style=flat-square)](#contributors)

## 🚀 Quickstart local dev environment

1. Make sure you're running node version >=18.
2. Install dependencies with `npm i`
3. Run unit test watcher with `npm run test:dev`

## Google Ads API Service Account

Since this is a fully server side implementation, you will need to create a service account in your Google Ads account. You can do this by following these steps:

### 1. Create Service Account
1. Go to Google Cloud Console → IAM & Admin → Service Accounts
2. Create new service account
3. Download the JSON key file
4. Enable Google Ads API for your project

### 2. Grant Access in Google Ads
1. In Google Ads → Tools → Access and Security → Account Access
2. Add the service account email as a user
3. Grant appropriate permissions (at minimum: Standard access)

### 3. Extract Key Components for Zaraz
From the JSON key file, you'll need these as separate Zaraz settings:

- `client_email`
- `private_key`
- `project_id`
- Your Google Ads `customer_id`
- Your `developer_token` (from Google Ads API Center)

> ![NOTE]
> Need help? [Create an issue](https://github.com/mackenly/google-ads/issues) or post in the [Cloudflare Discord Zaraz channel](https://ptb.discord.com/channels/595317990191398933/917505178016579605) and tag `@mackenly`.

## ⚙️ Tool Settings

> Settings are used to configure the tool in a Component Manager config file

### Conversion ID `string` _required_

`conversionId` - Google Ads conversion tags help to build reports that show you what happens after a customer clicks on your ads.

### Enable Conversion Linker `boolean`

`conversionLinker` - Enables the conversion linker for this Google Ads component.

## 🧱 Fields Description

### Event Type `string` _required_

`event` the type of event can be one of:

- Conversion
- Remarketing

Its value will determine how Google Ads will process it.

### Label `string`

`label` - The Conversion Label identifies the specific conversion. [Learn more](https://support.google.com/google-ads/answer/6095821)

### Google Analytics Account `string` _required_

`gaAccount` - Enter your Google Analytics tracking ID to link to the conversion to your Google analytics account.

### Once-per-page `boolean`

`zrzOncePerPage` - Use to avoid firing tag more than once.

### Domains `string`

`domains` - Expects a comma separated list of domains to set up cross-domain measurement. [Learn more](https://developers.google.com/tag-platform/devguides/cross-domain)

## 📝 License

Licensed under the [Apache License](./LICENSE).

## 💜 Thanks

Thanks to everyone contributing in any manner for this repo and to everyone working on Open Source in general.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
