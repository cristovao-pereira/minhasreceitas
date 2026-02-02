# 🍳 Minhas Receitas

Um site moderno de receitas culinárias desenvolvido com Astro, TypeScript e design responsivo.

![Astro](https://img.shields.io/badge/Astro-5.17.1-FF5D01?style=flat&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Funcionalidades

- 🔍 **Busca Inteligente**: Pesquise receitas por título de forma rápida e intuitiva
- 🏷️ **Filtros por Tags**: Organize e filtre receitas por categorias (doces, salgados, massas, etc.)
- 📱 **Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- 🎨 **Interface Moderna**: Design clean e profissional com excelente UX
- ⚡ **Performance**: Carregamento rápido com Astro e otimização de assets
- 📝 **Sistema de Conteúdo**: Gerenciamento de receitas com Content Collections

## 🚀 Estrutura do Projeto

```text
/
├── public/              # Assets estáticos (imagens, ícones)
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── content/         # Receitas em Markdown
│   │   └── recipes/     # Coleção de receitas
│   ├── layouts/         # Layouts das páginas
│   ├── pages/           # Páginas do site
│   └── styles/          # Estilos globais
└── package.json
```

## 🛠️ Tecnologias

- **[Astro](https://astro.build)** - Framework web moderno e performático
- **TypeScript** - Tipagem estática para JavaScript
- **Content Collections** - Sistema de gerenciamento de conteúdo do Astro
- **CSS Moderno** - Estilização com variáveis CSS e design responsivo

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/cristovao-pereira/minhasreceitas.git

# Entre no diretório
cd minhasreceitas

# Instale as dependências
npm install
```

## 🧞 Comandos

Todos os comandos devem ser executados na raiz do projeto:

| Comando              | Ação                                              |
| :------------------- | :------------------------------------------------ |
| `npm install`        | Instala as dependências                           |
| `npm run dev`        | Inicia o servidor de desenvolvimento em `localhost:4321` |
| `npm run build`      | Gera o build de produção em `./dist/`            |
| `npm run preview`    | Visualiza o build localmente antes do deploy     |
| `npm run astro ...`  | Executa comandos CLI do Astro                     |

## 🌐 Deploy

O projeto pode ser facilmente deployado em plataformas como:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

## 📝 Como Adicionar Receitas

1. Crie um novo arquivo `.md` em `src/content/recipes/`
2. Adicione o frontmatter com os dados da receita:

```markdown
---
title: "Nome da Receita"
description: "Breve descrição"
image: "/images/receita.jpg"
tags: ["doce", "sobremesa"]
prepTime: "30 min"
servings: 4
---

## Ingredientes
- Ingrediente 1
- Ingrediente 2

## Modo de Preparo
1. Passo 1
2. Passo 2
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaReceita`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova receita'`)
4. Push para a branch (`git push origin feature/NovaReceita`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Cristovão Pereira**
- GitHub: [@cristovao-pereira](https://github.com/cristovao-pereira)
- Email: cristovaopb@gmail.com

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
