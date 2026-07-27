# BMM Cesar Website

Multilingual marketing website for **BMM Cesar**, a family company with three business branches:

- Gradbeništvo (construction and renovation)
- Tuning & mehanika (vehicle and machine service)
- Računalništvo (software and automation)

## Tech

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- next-intl (sl/en/hr/de)
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` (redirects to `/sl`).

## Localization

Translations are in `messages/*.json`.

Supported locales:
- `sl` (default)
- `en`
- `hr`
- `de`

## Structure

- `app/[locale]/*` – localized routes/pages
- `components/*` – reusable UI components
- `i18n/*` – locale configuration and request config
