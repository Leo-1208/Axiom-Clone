# Axiom Token Pulse

This repository contains a Next.js 14 application that replicates the **Axiom Trade Pulse** token discovery table.  It strives for a pixel‑perfect and responsive implementation while maintaining a clean, reusable and performant architecture.

## ✨ Features

* **Category tabs** – Navigate between **New Pairs**, **Final Stretch** and **Migrated** tokens.  Categories are lazily loaded and cached via React Query.
* **Search** – Filter tokens by name or symbol with instant feedback.
* **Sorting** – Click on column headers to toggle ascending/descending ordering for price, 24 h change, volume and market cap.
* **Real‑time updates** – A mock WebSocket feed periodically adjusts prices and highlights rows using smooth colour transitions.
* **Interaction patterns** –
  * **Tooltips** provide quick context on hover.
  * **Popovers** reveal extended details such as volume and market cap.
  * **Modals** (dialogs) stub out trading actions.
* **Loading & error states** – Skeleton rows with shimmering placeholders while data loads, and a global error boundary for uncaught exceptions.
* **Accessible components** – Built with [Radix UI](https://www.radix-ui.com/) primitives for proper keyboard support and focus management.
* **Responsive design** – Adapts from desktop down to **320 px** wide screens; less‑important columns collapse on small breakpoints.
* **Atomic architecture** – Reusable components, typed slices, custom hooks and shared utilities keep the code DRY and maintainable.

## 📦 Tech stack

| Library / tool                | Purpose                                     |
| ----------------------------- | ------------------------------------------- |
| Next.js 14 App Router        | Framework for server/client React rendering |
| TypeScript (strict mode)     | Type‑safe components & state                |
| Tailwind CSS                 | Utility‑first styling & responsive layouts  |
| Redux Toolkit                | Client state management (token slice)       |
| React Query                  | Data fetching, caching & revalidation       |
| Radix UI / shadcn/ui         | Accessible popovers, tooltips, modals       |

## 🚀 Getting started

> **Prerequisites**: Node 18+ and npm.  The project is scaffolded but dependencies are not installed in this environment.  Clone or download the repository and install packages locally before running.

```bash
git clone https://github.com/your‑username/axiom‑pulse.git
cd axiom‑pulse
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.  The mock price feed will begin updating token prices automatically.

### Running tests and quality checks

* **Linting:** `npm run lint` uses Next.js’s built‑in ESLint configuration.
* **Type checking:** TypeScript strict mode ensures comprehensive typing throughout the codebase.
* **Lighthouse:** The UI avoids layout shifts and expensive renders; it should score **≥ 90** on both mobile and desktop.

## 🗒️ Notes

* **Mock data:** Token data is defined in `data/initialTokens.ts`.  Replace this with a real API call when integrating with a backend.  The mock WebSocket in `useMockPriceFeed` introduces small random deltas to simulate live price movements.
* **Deployment:** To deploy on Vercel, connect this repository to your Vercel account and enable the Next.js framework preset.  Ensure environment variables and secrets (if any) are configured in Vercel’s dashboard.
* **Video demo:** Please record a 1–2 minute video demonstrating the sorting, search, tooltips, popovers, modals and live price updates.  Upload the video to YouTube and include the link in your submission.

## 🖼️ Layout snapshots

This repository includes no image assets; run the app locally and use Chrome DevTools' responsive mode to capture auto‑layout snapshots for your submission.  Target widths should include desktop (≥ 1024 px), tablet (~768 px) and mobile (**320 px**).

## 📃 License

This project is provided for assessment purposes only and is not intended for production use.