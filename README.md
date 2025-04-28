# Culinary Canvas: The Art of Food Plating

This is a Next.js application showcasing plating techniques for Nigerian, Continental, and Dessert dishes.

## Prerequisites

- Node.js (version 20.x or later recommended)
- npm (usually comes with Node.js) or pnpm (recommended for this project)

## Setup

1.  **Extract the Project:** Unzip the `culinary-canvas.zip` file to a location of your choice.
2.  **Navigate to Project Directory:** Open your terminal or command prompt and navigate into the extracted project folder:
    ```bash
    cd path/to/culinary-canvas
    ```
3.  **Install Dependencies:** Install the necessary project dependencies. If you have `pnpm` installed (recommended), run:
    ```bash
    pnpm install
    ```
    Alternatively, if you prefer using `npm`, run:
    ```bash
    npm install
    ```
    *(Note: This project was set up using `pnpm`, so using `pnpm install` is preferred to ensure exact dependency versions.)*

## Running the Development Server

Once the dependencies are installed, you can start the local development server:

```bash
# Using pnpm
pnpm run dev

# Using npm
npm run dev
```

This command will start the Next.js development server, typically on `http://localhost:3000`. Open your web browser and navigate to this address to view the application.

## Building for Production

To create an optimized production build:

```bash
# Using pnpm
pnpm run build

# Using npm
npm run build
```

This will create a `.next` folder containing the production-ready application.

## Running the Production Build Locally

After building, you can start the production server:

```bash
# Using pnpm
pnpm start

# Using npm
npm start
```

This will serve the optimized application, usually on `http://localhost:3000`.

## Project Structure

-   `src/app/`: Contains the page routes and layouts.
-   `src/components/`: Reusable React components (Navbar, UI elements, Plating Technique visualizations).
-   `src/lib/`: Utility functions (e.g., `data-utils.ts` for loading dish data).
-   `src/data/`: JSON files containing dish information (`nigerian-dishes.json`, `continental-dishes.json`, `desserts.json`).
-   `public/`: Static assets like images. Placeholder images are currently in `public/images/`.
-   `migrations/`: Database migration files (if using D1 database features, currently not implemented in detail).
-   `wrangler.toml`: Configuration for Cloudflare Workers (relevant if deploying to Cloudflare).

## Customization

-   **Content:** Edit the JSON files in `src/data/` to add/modify dishes, ingredients, plating techniques, etc. Remember to add data for all 90 dishes.
-   **Images:** Replace the placeholder images in `public/images/` with your actual photos. Ensure the file paths in the JSON data match the new image filenames.
-   **Videos:** Update the video embed links/logic within the relevant components (e.g., in `src/components/plating-techniques.tsx` or dish detail pages) if you have specific video sources. Currently, placeholders or basic links might be used.
-   **Styling:** Modify styles in `src/app/globals.css` or within individual components using Tailwind CSS classes.
