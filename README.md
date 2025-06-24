# Calendar by Safrin

A modern calendar web application built with React, Vite, and Tailwind CSS.

## Features

- Month view calendar with always 6 rows
- Add, edit, and delete events with color labels
- Sidebar with event list and small calendar
- Static demo events and persistent dynamic events (localStorage)
- Responsive and visually rich UI using Tailwind CSS
- SweetAlert2 for success notifications
- Material Icons and custom logo favicon

## Getting Started

### Prerequisites

- Node.js (v16 or newer recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd ggc
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Project Structure

```
src/
  assets/         # Images and logo
  components/     # React components (Calendar, Sidebar, Modal, etc.)
  context/        # Global context and provider
  data/           # Static demo events
  App.jsx         # Main app component
  main.jsx        # Entry point
  util.jsx        # Calendar utility functions
  index.css       # Tailwind CSS
```

## Customization

- **Logo:** Replace `src/assets/logo.png` with your own logo for the favicon and header.
- **Static Events:** Edit `src/data/staticEvents.js` to change demo events.
- **Colors:** Update the color palette in event modal and labels as needed.

## Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [Material Icons](https://fonts.google.com/icons)

---

© 2024 Safrin. All rights reserved.
