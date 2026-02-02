# Sistema de Design Seara (Clone)

Este documento descreve as diretrizes de design visual para a aplicação, baseadas na identidade visual da Seara e em boas práticas de UI moderno.

## 1. Paleta de Cores

As cores foram extraídas da identidade visual da marca, focando em tons quentes e vibrantes que estimulam o apetite.

### Cores da Marca
| Nome | Hex | Uso Principal |
| :--- | :--- | :--- |
| **Seara Orange** | `#F04E23` | Cor predominante (Header, Botões Primários). Tom vibrante entre laranja e vermelho. |
| **Seara Yellow** | `#FFD100` | Detalhes no logo (Raios de sol), ícones e destaques menores. |
| **Deep Purple** | `#7C3AED` | *Novo*: Tags de categoria (ex: "Todas as Receitas"), contrastando com o laranja. |

### Cores Neutras & Fundo
| Nome | Hex | Uso Principal |
| :--- | :--- | :--- |
| **Off-White** | `#FAFAFA` | Fundo principal da página. |
| **White** | `#FFFFFF` | Cards, Modais, Cookie Banner. |
| **Gray 900** | `#111827` | Títulos principais (contraste máximo). |

### Cores de Feedback
- **Ação (Confirmar)**: `#F04E23` (Laranja Seara)
- **Ação Secundária**: `#FFFFFF` com borda `#F04E23` (Outline)

---

## 2. Tipografia

A tipografia observada é geométrica e moderna.

**Fonte Principal**: `Outfit` (Visualmente similar) ou `Montserrat`.
*Uso*: Títulos em CAIXA ALTA (Uppercase) são comuns em banners.

### Pesos e Tamanhos
- **Hero Title**: `bold` / `36px` - Uppercase, Branco (sobre imagem).
- **Section Title**: `bold` / `28px` - Cor Seara Orange ou Gray 900.
- **Card Title**: `bold` / `18px` - Uppercase, Gray 900.
- **Tag Text**: `medium` / `14px` - Branco (sobre fundo Roxo).

---

## 3. Botões e Interatividade

### Botão Primário (Solid)
- **Background**: `Seara Orange (#F04E23)`
- **Texto**: `White (#FFFFFF)`
- **Border Radius**: `4px` (Levemente arredondado, visual mais robusto).
- **Padding**: `12px 32px`
- **Font-Weight**: `Bold`

### Botão Secundário (Outline)
- **Background**: `Transparent`
- **Borda**: `1px solid #F04E23`
- **Texto**: `#F04E23`
- **Border Radius**: `4px`

### Tags e Badges
- **Tag de Categoria**: Background `Deep Purple`, Texto Branco, Arredondado (`rounded-full` ou `rounded-md`).

---

## 4. Cards de Receitas (Componente Chave)

Baseado no layout "Minha Receita":

- **Layout**: Imagem de topo full-width no card.
- **Conteúdo**: Título abaixo da imagem, seguido por metadados (tempo, porções).
- **Detalhes**: Ícones pequenos para tempo/dificuldade.
- **Background**: Branco.
- **Sombra**: `shadow-md` que evolui para `shadow-xl` no hover.
- **Borda**: Pode ser inexistente ou muito sutil (`border-gray-100`).

---

## 5. Header e Navegação
- **Background**: Gradiente ou cor sólida `Seara Orange` (`#F04E23` a `#D93616`).
- **Logo**: Seara + Branding "Minha Receita".
- **Menu**: Texto Branco, hover com sublinhado ou leve opacidade.
- **Search Bar**: Pill-shape (arredondada), contorno branco/transparente.

### Elementos Decorativos
- Uso de **curvas e formas orgânicas** nos divisores de seção para evocar "natureza" e "fluidez".
- Ícones em estilo **outline** ou **solid** com a cor Seara Yellow para detalhes.

---

## 6. Toasts e Notificações

Pequenos avisos flutuantes no canto superior ou inferior direito.

- **Background**: Branco
- **Borda lateral esquerda**: Colorida conforme o tipo (Verde para sucesso, Vermelho para erro).
- **Conteúdo**: Ícone + Título curto + Mensagem.
- **Sombra**: `shadow-xl`
- **Animação**: Slide in da direita.
