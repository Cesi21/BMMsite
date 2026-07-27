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

## Contact form

The contact form validates submissions on the server and sends them through
[Resend](https://resend.com/). Copy `.env.example` to `.env.local` and set:

```bash
RESEND_API_KEY=re_your_api_key
CONTACT_TO_EMAIL=info@bmm-cesar.si
CONTACT_FROM_EMAIL=BMM Cesar <noreply@bmm-cesar.si>
```

Before enabling the form in production:

1. Verify the sender domain in Resend.
2. Use an address on that verified domain for `CONTACT_FROM_EMAIL`.
3. Set all three variables in the deployment environment.

The API applies server-side validation, a honeypot, a request-size limit,
same-origin checks, and basic per-instance rate limiting. For a multi-instance
deployment with significant traffic, replace the in-memory rate limiter with a
shared store such as Redis.

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
