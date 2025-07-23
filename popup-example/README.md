# Argonite Popup Example

This example demonstrates how to create a simple Chrome extension popup using the Argonite Core framework.

## Filesystem Layout

This project follows the recommended structure for Argonite-based extensions:

```
popup-example/
├── src/
│   ├── main.ts            # Extension setup
│   ├── MainPopupEntry.ts  # Popup entry class
├── public/
│   └── popup.html         # Popup HTML shell
├── manifest.config.ts     # Argonite manifest
├── vite.config.ts         # Vite config
└── package.json
```

## How it works

- The popup is registered via `MainPopupEntry` using Argonite's fluent API in `src/main.ts`.
- The popup UI is rendered in `MainPopupEntry.ts` and displays some dummy information.
- The HTML shell is in `public/popup.html`.

## Running the Example

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the dev server:
   ```sh
   npm run dev
   ```
3. Build for production:
   ```sh
   npm run build
   ```
4. Load the extension in Chrome using the output from the `dist/` folder.

---

For more details on the recommended structure, see the [Argonite documentation](../../argonite-core/docs/05-filesystem.md).
