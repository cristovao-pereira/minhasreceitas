# Documentação do Aplicativo - Clone Seara Minha Receita

Este documento detalha a estrutura, funcionalidades e design system do aplicativo "Minha Receita", um clone inspirado na identidade visual da Seara, desenvolvido com Astro.

## 1. Visão Geral

O aplicativo é um catálogo de receitas focado em performance e design visual premium. Ele permite listar receitas e visualizar detalhes de cada uma, com uma experiência de usuário fluida e responsiva.

## 2. Tecnologias Utilizadas

-   **Core**: Astro (v5.x)
-   **Linguagem**: TypeScript
-   **Estilização**: CSS Modules / Vanilla CSS (Scoped)
-   **Gerenciamento de Conteúdo**: Astro Content Collections (Markdown)

## 3. Estrutura do Projeto

```text
/
├── src/
│   ├── components/      # Componentes UI reutilizáveis (Card, Header, Footer)
│   ├── content/
│   │   └── recipes/     # Arquivos Markdown das receitas
│   │   └── config.ts    # Schema das coleções de conteúdo
│   ├── layouts/         # Layouts base das páginas (Header, Footer, Meta tags)
│   ├── pages/
│   │   ├── index.astro  # Página Inicial (Listagem)
│   │   └── receitas/
│   │       └── [...slug].astro # Página de Detalhes da Receita
│   └── styles/          # Estilos globais
├── public/              # Assets estáticos (imagens)
└── astro.config.mjs     # Configuração do Astro
```

## 4. Funcionalidades

### 4.1. Listagem de Receitas (Home)
-   Exibe uma grade (`recipes-grid`) de cards de receitas.
-   Hero section com imagem de fundo, título e tagline inspiradores.
-   Uso de `getCollection('recipes')` para buscar dados.

### 4.2. Detalhes da Receita
-   Rotas dinâmicas geradas a partir do slug do arquivo Markdown.
-   Exibe:
    -   Imagem de destaque.
    -   Título e Descrição.
    -   Metadados: Tempo de preparo, Porções, Categoria.
    -   Conteúdo renderizado do Markdown (Ingredientes, Modo de Preparo).
-   Botão "Voltar" para a listagem.

### 4.3. Componente Card de Receita (`RecipeCard.astro`)
-   Visualização resumida da receita.
-   Imagem com efeito de zoom no hover.
-   Badge de categoria.
-   Informações rápidas (tempo, porções).

## 5. Modelo de Dados (Receita)

As receitas são armazenadas em `src/content/recipes/*.md`.

**Schema (Frontmatter):**
```typescript
{
  title: string;        // Título da receita
  description?: string; // Descrição curta/lead
  image?: string;       // Caminho da imagem (ex: /public/images/...)
  prepTime?: string;    // Ex: "40 min"
  servings?: number;    // Ex: 4
  category: string;     // Ex: "Aves", "Massas" (Default: "Geral")
  tags?: string[];      // Array de tags (Ex: ["Fácil", "Rápido"])
}
```

**Corpo do Arquivo:**
Markdown padrão, geralmente estruturado com headers `## Ingredientes` e `## Modo de Preparo`.

## 6. Design System

Baseado na identidade visual da Seara.

### Cores Principais
-   **Seara Orange**: `#F04E23` (Primária, Ações)
-   **Seara Yellow**: `#FFD100` (Detalhes)
-   **Deep Purple**: `#7C3AED` (Tags de categoria)
-   **Off-White**: `#FAFAFA` (Fundo geral)

### Tipografia
-   Família: `Outfit`, `Montserrat` ou sem serifa geométrica.
-   Estilo: Títulos em Uppercase (Caixa Alta) para destaque.

### UI Elements
-   **Cards**: Fundo branco, sombra suave (`shadow-md`), bordas arredondadas.
-   **Botões**: Estilo "Pill" ou cantos levemente arredondados (`4px`), preenchidos ou outline.

## 7. Como Adicionar Nova Receita

1.  Crie um arquivo `.md` em `src/content/recipes/` (ex: `nova-receita.md`).
2.  Adicione o frontmatter obrigatório:
    ```yaml
    ---
    title: "Nome da Receita"
    description: "Descrição curta."
    image: "/images/nome-da-imagem.jpg"
    prepTime: "30 min"
    servings: 4
    category: "Categoria"
    tags: ["Tag1", "Tag2"]
    ---
    ```
3.  Escreva o conteúdo (Ingredientes e Modo de Preparo) abaixo do frontmatter.
4.  Adicione a imagem correspondente em `/public/images/`.

## 8. Scripts Disponíveis

-   `npm run dev`: Inicia servidor de desenvolvimento.
-   `npm run build`: Gera build de produção.
-   `npm run preview`: Visualiza o build localmente.
