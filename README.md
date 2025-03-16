# Astro Starter with React & Tailwind CSS

A modern starter template for Astro that includes React and Tailwind CSS integration. Features a beautiful hero component with gradient effects and responsive design.

## 🚀 Features

- ⚡️ **Astro** - The web framework for content-driven websites
- ⚛️ **React** - For interactive components
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach
- 🎭 **Modern UI** - Beautiful gradient effects and animations

## 🛠️ Quick Start

### Clone the repository

```bash
git clone https://github.com/digitaldesaster/astro-start.git
cd astro-start
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Your site will be available at `http://localhost:4321`

## 📦 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Hero.tsx        # React hero component
│   ├── layouts/
│   │   └── Layout.astro    # Main layout component
│   ├── pages/
│   │   └── index.astro     # Home page
│   └── styles/
│       └── global.css      # Global styles & Tailwind imports
└── package.json
```

## 🔧 Commands

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build for production to `./dist/`    |
| `npm run preview` | Preview production build             |

## ⚙️ Customization

### Modifying the Hero Component

The hero component is located in `src/components/Hero.tsx`. You can modify the text, styling, and layout to match your needs.

### Tailwind Configuration

Tailwind CSS can be configured in the `tailwind.config.mjs` file. You can modify:

- Color palette
- Typography
- Breakpoints
- And more

### Adding New Pages

Create new `.astro` files in the `src/pages` directory. They will be automatically converted to pages.

## 📝 License

MIT License

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
