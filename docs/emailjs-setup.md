# EmailJS Owner Notification Setup

Use `docs/emailjs-owner-notification-template.html` as the EmailJS email body for both EmailJS accounts.

## Template settings for each EmailJS account

Create one template in the South Florida EmailJS account and one template in the Arizona EmailJS account.

Use these settings in each template:

| EmailJS field | Value |
| --- | --- |
| To Email | `{{to_email}}` |
| From Name | `AP Pest Control Website` |
| From Email | Your verified EmailJS sender email |
| Reply To | `{{reply_to}}` |
| Subject | `{{subject}}` |
| Content | Paste the HTML from `docs/emailjs-owner-notification-template.html` |

## Variables sent by the website form

The React form already sends these variables to EmailJS:

- `{{to_email}}`
- `{{to_name}}`
- `{{from_name}}`
- `{{from_email}}`
- `{{reply_to}}`
- `{{phone}}`
- `{{region}}`
- `{{region_label}}`
- `{{pest}}`
- `{{message}}`
- `{{subject}}`
- `{{source_page}}`
- `{{submitted_at}}`

## Environment variables

Copy `.env.example` to `.env.local` and fill in each account's public key, service ID, and template ID:

```zsh
cp .env.example .env.local
```

```dotenv
VITE_EMAILJS_MIAMI_PUBLIC_KEY=your_miami_emailjs_public_key
VITE_EMAILJS_MIAMI_SERVICE_ID=your_miami_emailjs_service_id
VITE_EMAILJS_MIAMI_TEMPLATE_ID=your_miami_emailjs_template_id

VITE_EMAILJS_ARIZONA_PUBLIC_KEY=your_arizona_emailjs_public_key
VITE_EMAILJS_ARIZONA_SERVICE_ID=your_arizona_emailjs_service_id
VITE_EMAILJS_ARIZONA_TEMPLATE_ID=your_arizona_emailjs_template_id

VITE_EMAILJS_MIAMI_TO_EMAIL=Appestmiami2026@gmail.com
VITE_EMAILJS_ARIZONA_TO_EMAIL=hello@ap-pest-control.com
```

## Routing behavior

- South Florida page form: always sends through the South Florida EmailJS account.
- Arizona page form: always sends through the Arizona EmailJS account.
- General contact form: sends through the EmailJS account selected in the Region dropdown.

