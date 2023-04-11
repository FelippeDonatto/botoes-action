<div align="center">
  <img src="https://user-images.githubusercontent.com/7221671/228865434-48fb40fe-58f8-49b1-8a7b-0627b1846165.png" width="150" />
</div>

<h2 align="center"> Teste botões - Desafio 3 - #bora codar Rocketseat</h2>

<div align="center"> 
  <img src="https://user-images.githubusercontent.com/7221671/231263508-9147888e-c1b7-4445-8489-eb3afdac82b1.png" />
</div>

<h1>Bora Codar - Teste botões</h1>

<p align="center"> Desenvolvi essa aplicação utilizando como base o modelo sugerido no evento da Rockeseat #boraCodar e também fiz uma versão minha, aproveitando os conceitos aplicados no modelo base. Colocando além de minha cara tecnologias como NEXT, Tailwind Radix Ui, CLSX, montando assim um componente mais prático e reutilizável.</p>

<h2>Referência</h2>

- [Template Bora Codar](https://www.figma.com/community/file/1197534710257750520/%23boraCodar---Desafio-3)
- [GitHub BoraCoadar](https://github.com/maykbrito/boracodar)

<h2>Licença</h2>

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

<h2>Documentação de cores</h2>

| Cor        | Hexadecimal                                                      |
| ---------- | ---------------------------------------------------------------- |
| Violet 900 | ![#130F1E](https://via.placeholder.com/10/130F1E?text=+) #130F1E |
| Violet 500 | ![#8257E5](https://via.placeholder.com/10/8257E5?text=+) #8257E5 |
| Violet 300 | ![#9674E5](https://via.placeholder.com/10/9674E5?text=+) #9674E5 |
| Violet 100 | ![#D9CDF7](https://via.placeholder.com/10/D9CDF7?text=+) #D9CDF7 |
| Gray 700   | ![#3C3748](https://via.placeholder.com/10/3C3748?text=+) #3C3748 |
| Gray 500   | ![#6A617F](https://via.placeholder.com/10/6A617F?text=+) #6A617F |
| White      | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |


<h2>Instalação</h2>

Instale Teste Botões com npm

_Para instalar as dependencias_

```bash
  npm intall
```

_Para rodar o projeto_

```bash
  npm run dev
```

<h2>Tecnologias utilizadas</h2>

_Instalação do Tailwind para Next_

```bash
  npm install -D tailwindcss postcss autoprefixer
```

```bash
  npx tailwindcss init -p
```

_Adicionar ao arquivo tailwind.config.js_

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      violet: {
        900: '#130F1E',
        500: '#8257E5',
        300: '#9674E5',
        100: '#D9CDF7'
      },

      gray: {
        700: '#3C3748',
        500: '#6A617F'
      },

      white: '#ffffff',
      transparent: 'transparent'
    },

    extend: {
      cursor: {
        default: 'url(/default.png), default',
        desabilitado: 'url(/disable.png), disable',
        loading: 'url(/loading.png), loading',
        move: 'url(/move.png), move'
      }
    }
  },
  plugins: []
}


```

_Adicione ao seu CSS global_

```bash
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```
