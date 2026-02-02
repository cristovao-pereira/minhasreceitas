---
name: gerar_receita
description: Gera uma nova receita completa com arquivo markdown e imagem, seguindo o padrão do projeto.
---

# Skill: Gerar Receita

Esta skill automatiza a criação de novas receitas no projeto, garantindo consistência no formato e inclusão de imagens.

## Workflow

Siga estes passos rigorosamente para cada solicitação de nova receita.

1.  **Obter Informações**: Se o usuário fornecer apenas o nome da receita, infira os detalhes (ingredientes, modo de preparo, tempo, porções, categoria) para criar um conteúdo rico e realista.

2.  **Gerar Imagem**:
    *   Use a tool `generate_image` para criar uma foto profissional da receita.
    *   **Prompt**: Use um prompt detalhado em inglês, focando em "Professional food photography", iluminação de estúdio e detalhes apetitosos.
    *   **ImageName**: Use o nome da receita em snake_case (ex: `bolo_de_chocolate`).

3.  **Processar Imagem**:
    *   A imagem gerada será salva em um diretório de artefatos. Você deve copiá-la para o diretório público do projeto.
    *   **Comando**: `cp "[CaminhoDaImagemGerada]" "c:/CursoJS/antigravity/public/images/[slug-da-receita].png"`
    *   *Nota*: O `slug-da-receita` deve ser em kebab-case (ex: `bolo-de-chocolate`).

4.  **Criar Arquivo da Receita**:
    *   Gere um arquivo markdown em `c:/CursoJS/antigravity/src/content/recipes/[slug-da-receita].md`.
    *   **Estrutura Obrigatória**:

```markdown
---
title: "[Nome da Receita]"
description: "[Uma descrição curta e apetitosa]"
image: "/images/[slug-da-receita].png"
prepTime: "[X] min"
servings: [N]
category: "[Categoria ex: Massas, Sobremesas, Carnes, Entradas]"
tags: ["[Tag1]", "[Tag2]", "[Tag3]"]
---

## Ingredientes

- [Ingrediente 1]
- [Ingrediente 2]
...

## Modo de Preparo

1. [Passo 1]
2. [Passo 2]
...
```

**Orientações sobre Tags**:
- O campo `tags` é **obrigatório** e deve conter um array de strings.
- Use entre 2 a 4 tags por receita para melhor categorização.
- As tags devem ser descritivas e ajudar na filtragem das receitas.
- **Tags existentes no projeto** (use estas como referência):
  - **Tipo de Refeição**: "Jantar", "Jantar Especial", "Domingo"
  - **Culinária**: "Italiana", "Clássico"
  - **Características**: "Vegetariano", "Sem Glúten", "Rápido", "Gourmet", "Doce"
  - **Ingrediente Principal**: "Frutos do Mar", "Café"
  - **Ocasião**: "Família", "Forno"
- Você pode criar novas tags se necessário, mas priorize usar tags existentes quando apropriado.
- As tags devem estar em **Title Case** (primeira letra maiúscula).


5.  **Finalização**:
    *   Informe ao usuário que a receita foi criada com sucesso e a imagem foi gerada.
