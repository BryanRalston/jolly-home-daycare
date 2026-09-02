# Jolly Home Daycare

Marketing site for Jolly Home Daycare, a licensed family day home at 18945 Longhouse Place, Leesburg, VA 20176 (Potomac Station). Hours are Monday–Friday, 7:30 AM – 5:30 PM. Phone 703-728-1326.

**Live site:** [https://www.jollyhomedaycare.com](https://www.jollyhomedaycare.com) (GitHub Pages; also at [bryanralston.github.io/jolly-home-daycare](https://bryanralston.github.io/jolly-home-daycare/))

## Local run

```bash
npm ci
npm run dev
```

The app serves at http://localhost:8080. Production static build:

```bash
npm run build          # production static build (base /)
npm run build:pages    # same build, used by GitHub Pages
```

Static output lands in `site/`. GitHub Actions typechecks, builds, and deploys that folder to Pages on push to `main`.

## Enrollment form

The enrollment form posts to [FormSubmit](https://formsubmit.co) and emails **farhana.abid@gmail.com**. The first submission from a new domain sends Farhana a one-time confirmation link; inquiries are not forwarded until that email is confirmed. After that, new requests arrive as usual. A local copy of each inquiry is also stored in the browser (`jolly-inquiries`) as a backup, not as the only delivery path.
