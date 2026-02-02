# 🍳 Minhas Receitas

A modern recipe website built with Astro, TypeScript, and responsive design.

![Astro](https://img.shields.io/badge/Astro-5.17.1-FF5D01?style=flat&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 🔍 **Smart Search**: Search recipes by title quickly and intuitively
- 🏷️ **Tag Filters**: Organize and filter recipes by categories (sweets, savory, pasta, etc.)
- 📱 **Responsive Design**: Adaptive interface for desktop, tablet, and mobile
- 🎨 **Modern Interface**: Clean and professional design with excellent UX
- ⚡ **Performance**: Fast loading with Astro and asset optimization
- 📝 **Content System**: Recipe management with Content Collections

## 🚀 Project Structure

```text
/
├── public/              # Static assets (images, icons)
├── src/
│   ├── components/      # Reusable components
│   ├── content/         # Recipes in Markdown
│   │   └── recipes/     # Recipe collection
│   ├── layouts/         # Page layouts
│   ├── pages/           # Site pages
│   └── styles/          # Global styles
└── package.json
```

## 🛠️ Technologies

- **[Astro](https://astro.build)** - Modern and performant web framework
- **TypeScript** - Static typing for JavaScript
- **Content Collections** - Astro's content management system
- **Modern CSS** - Styling with CSS variables and responsive design

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/cristovao-pereira/minhasreceitas.git

# Enter the directory
cd minhasreceitas

# Install dependencies
npm install
```

## 🧞 Commands

All commands should be run from the project root:

| Command              | Action                                              |
| :------------------- | :-------------------------------------------------- |
| `npm install`        | Installs dependencies                               |
| `npm run dev`        | Starts local dev server at `localhost:4321`         |
| `npm run build`      | Build your production site to `./dist/`             |
| `npm run preview`    | Preview your build locally, before deploying        |
| `npm run astro ...`  | Run CLI commands like `astro add`, `astro check`    |

## 🌐 Deploy

The project can be easily deployed on platforms like:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

## 📝 How to Add Recipes

1. Create a new `.md` file in `src/content/recipes/`
2. Add the frontmatter with recipe data:

```markdown
---
title: "Recipe Name"
description: "Brief description"
image: "/images/recipe.jpg"
tags: ["sweet", "dessert"]
prepTime: "30 min"
servings: 4
---

## Ingredients
- Ingredient 1
- Ingredient 2

## Instructions
1. Step 1
2. Step 2
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/NewRecipe`)
3. Commit your changes (`git commit -m 'Add new recipe'`)
4. Push to the branch (`git push origin feature/NewRecipe`)
5. Open a Pull Request

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

## 👨‍💻 Author

**Cristovão Pereira**
- GitHub: [@cristovao-pereira](https://github.com/cristovao-pereira)
- Email: cristovaopb@gmail.com

---

⭐ If this project was helpful to you, consider giving it a star! 
