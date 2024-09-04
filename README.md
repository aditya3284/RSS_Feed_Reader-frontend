# Feed Reader : A RSS Reader for YouTube Channels

Feed Reader is a modern web application designed to aggregate and display YouTube content through RSS feeds. It offers a streamlined and personalized experience for following your favorite YouTube channels.

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation and Setup](#installation-and-setup)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [Things I Learned](#things-i-learned)
- [Future Scope](#future-scope)
- [Contact](#contact)

## Description

Feed Reader is an web application that leverages RSS feeds to provide a customized YouTube viewing experience. Unlike traditional YouTube browsing, which is influenced by recommendations and ads, Feed Reader offers a straightforward and distraction-free way to follow your favorite content creators.

[**Feed Reader Backend GitHub Repoistory**](https://github.com/username/repositoryName)

- **Dynamic Routing:** Implemented routing with [React Router](https://reactrouter.com/) for seamless navigation.
- **Code Quality:** Enforced code standards with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/).
- **Styling:** Utilized [Tailwind CSS](https://tailwindcss.com/) for efficient and customizable styling.

## Prerequisites

1. Node and npm are required. Here are the versions that I have used.

   ```bash
   node --version

   v22.1.0
   ```

   ```bash
   npm --version

   10.7.0
   ```

2. Git is required. Here's the version that I have used

   ```bash
   git --version

   git version 2.45.0.windows.1
   ```

3. At last, a GitHub account. :octocat:

## Technologies Used

- **Vite:** Build tool and development server.
- **React:** Frontend library for building user interfaces.
- **React Router:** Routing library for handling navigation.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **ESLint:** Tool for identifying and fixing problems in JavaScript code.
- **Prettier:** Code formatter for maintaining code style consistency.

## Features

- **Responsive Design** : The application is fully responsive and provides a smooth user experience across various devices.

- **Custom RSS Feed Integration** : Subscribe to RSS feeds from your favorite YouTube channels without relying on YouTube's API or recommendation algorithms.

- **Post History** : Keep track of your viewed posts with an accessible history, allowing you to revisit previously watched content easily.

- **Recent and Liked Posts** : Quickly access and manage videos that's recently posted or you liked, ensuring you can find your favorite content with ease.

- **Theme Personalization** : A simple and intuitive interface to switch between themes, according to preference.

- **Comprehensive Library** : Browse a unified view of all your subscribed channels and their posts, providing a centralized location for content discovery.

## Installation and Setup

To set up this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/your-repository.git

    cd your-repository
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Create a `.env` file:**

    Duplicate the `.env.example` file and rename it to `.env`. Fill in the required environment variable for production.

    ```
    VITE-BACKEND=backend_url
    ```

4.  **Configure Vite Server Proxy :**

    Configure the proxy dev server `target`, for backend to communicate properly.

    ```javascript
    import react from "@vitejs/plugin-react";
    import { defineConfig } from "vite";

    export default defineConfig({
        plugins: [react()],
        // replace target with local backend server domain along with port

        // server: { proxy: { "/api/v1": { target: "http://localhost:3737" } } }, -->

        server: { proxy: { "/api/v1": { target: /*here replace*/ } } },
    });
    ```

    For e.g., `'http://localhost:PORT'`, with whatever the desired port.

## Running the Project

- **Start Server:** Use `npm run dev` for development mode with automatic restarts.

  ```bash
  npm run dev
  ```

  The server will start on `http://localhost:5173`.

- **Run Linting:** Use `npm run lint` to check code quality.

  ```bash
  npm run lint
  ```

- **Format Code:** Use `npm run format` to format the code according to project standards.

  ```bash
  npm run format
  ```

- **Build Code:** Use `npm run build` to build the code according to vite configuration.

  ```bash
  npm run build
  ```

- **Preview Code:** Use `npm run preview` to preview how the code will look and behave in a production environment.

  ```bash
  npm run preview
  ```

## Project Structure

Here is a brief overview of the project structure:

```
/public
/src
    /assets             # Media folders
    /components         # Reusable React components
        /sections       # Reusable section react components
        /ui             # Resuable UI react components
    /constants          # Constant data
    /context            # React Context Providers
    /hooks              # Custom React hooks
    /layouts            # Custom layouts
    /pages              # Page components
    App.jsx             # Main application component
    index.css           # Global styles
    main.jsx            # Entry point for React
.env                    # Environment variables
.env.sample             # Sample environment variables
.eslintrc.cjs           # ESLint configuration
.gitignore              # Git ignore files
.prettierignore         # Prettier ignore files
.prettierrc             # Prettier configuration
index.html              # Main HTML file
package-lock.json       # Locks dependencies versions
package.json            # Project metadata and dependencies
postcss.config.js       # Post CSS configuration
tailwind.config.js      # Tailwind CSS configuration
vite.config             # Vite configuration
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch `git checkout -b feature/YourFeature`.
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Create a new Pull Request.

## Acknowledgments

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Things I Learned

Throughout the development of this project, I learned various aspects of frontend development. Here are some of those key technical learnings:

- **Client-Side Routing:**
  - **Description:** Implemented client-side routing with **_React Router_** to facilitate dynamic navigation within the application.
  - **Impact:** Enabled a smooth, single-page application experience with efficient navigation and reduced load times.
- **Protected Route Handling:**
  - **Description:** Managed protected routes to ensure secure access based on user authentication.
  - **Impact:** Enhanced application security by restricting access to sensitive routes and resources.
- **Vite Proxy Development Server:**
  - **Description:** Utilized **Vite**’s `proxy` capabilities to handle API requests during development, addressing Cross-Origin Resource Sharing (**CORS**) issues.
  - **Impact:** Streamlined the development workflow by providing a seamless proxy setup for local testing.
- **Custom Tailwind Styles:**
  - **Description:** Used custom Tailwind CSS styles, for e.g., `:user-invalid`, to extend Tailwind’s native functionality.
  - **Impact:** Achieved greater design flexibility and addressed specific styling requirements not covered by default Tailwind utilities.
- **React Context API:**
  - **Description:** Used React Context API for global state management, improving component communication and reducing prop drilling.
  - **Impact:** Simplified state management across the application, leading to more maintainable code.

These learnings not only improved this project’s functionality but also enhanced my knowledge about these technologies.

## Future Scope

Looking forward, several enhancements could further improve the functionality and user experience of this project. Here are some of my potential future enhancements ideas:

- **File Import Feature:**
  - **Description:** A feature to allow users to import (JSON or CSV) files from Google Takeout, enabling automatic subscription to channels listed in the file without manual RSS feed entry.
  - **Benefits:** Streamlines the process of subscribing to multiple channels, enhancing user convenience.
- **Channel Search and Subscription:**
  - **Description:** A search functionality for channel names, with the ability to directly subscribe to their feeds.
  - **Benefits:** Improves user experience by simplifying the subscription process for newly discovered channels by the user.
- **Notion Integration:**
  - **Description:** Integration with Notion or other apps to allow users to sync their feeds or posts with their desired workspace for better organization or tracking.
  - **Benefits:** Provides users with the ability to integrate and use according to their needs or workflow.
- **YouTube Watch Playlist Creation:**
  - **Description:** To create YouTube watch playlists from a collection of posts, allowing users to have more control.
  - **Benefits:** Facilitates content curation and improves the user experience.

I would like feedback and suggestions for further improvements and features!

If you have ideas on how to enhance this project, please feel free to share them through issues or pull requests.

## Contact

For any questions or feedback, please reach out to:

- :e-mail: **Email:** github@technologist.anonaddy.com
- :point_right: **LinkedIn:** [in/pratap-adit](https://www.linkedin.com/in/yourprofile)
- :octocat: **GitHub:** [UniPasc](https://github.com/UniPasc)

---

Thank you for checking out my project! If this project helped / interests you, then give it a :star2: Star.
