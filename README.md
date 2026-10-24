# Organic Mile — React + Tailwind CSS + shadcn/ui

## Stack
- React + Vite
- Tailwind CSS
- shadcn/ui-style Button component (`src/components/ui/button.jsx`)
- Radix UI Slot + class-variance-authority
- Lucide React icons
- React Router

## Run locally
1. Install Node.js LTS.
2. Extract the ZIP and open this folder in VS Code.
3. Open Terminal > New Terminal.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL printed by Vite, normally `http://localhost:5173`.

## Build
```bash
npm run build
```
Upload the generated `dist` folder to Netlify.

## About shadcn/ui
This project includes a shadcn/ui-compatible Button component and `components.json`, with Lucide icons. To add more shadcn components later, initialise/configure shadcn for this project and add the specific components you need.

## Notes
- Pages: Home, About Us, Products.
- Responsive layout and mobile menu.
- Contact form opens the user's email app; it does not save enquiries to a database.
- Product artwork is recreated with CSS because original image assets were not supplied.
- Verify company information, product specs, certificates, claims and contact details before publishing.
