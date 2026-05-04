<h1 align="center">🚗 TheseRoads | Classic Cars React Store</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</p>

> **Acesse o projeto online:** [Classic Cars React Store](https://classic-cars-react-store.vercel.app/)

<br>


## Sobre o projeto

Este projeto consiste no desenvolvimento de uma **loja virtual fictícia de carros clássicos brasileiros**, utilizando **React com arquitetura componentizada**.

O objetivo principal foi aplicar conceitos fundamentais de desenvolvimento front-end moderno, com foco em:

* Componentização
* Reutilização de código
* Organização de projeto
* Estrutura de interface

---

## Tema

A aplicação simula uma loja especializada em veículos clássicos, apresentando modelos icônicos como:

* Chevrolet Opala
* Chevrolet Omega
* Ford Maverick
* Puma GTS
* Gol GTI
* Fusca "Bizorrão"

---

## Estrutura do Projeto

```bash
src/
├── assets/
│   └── images/
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── Banner.jsx
│   ├── CardProduto.jsx
│   ├── ListaProdutos.jsx
│   ├── Header.jsx
│   └── Sobre.jsx
│
├── pages/
│   ├── Inicio.jsx
│   ├── Produtos.jsx
│   └── Contato.jsx
│
├── index.css
├── main.jsx
└── App.jsx
```

---

## Componentes

### Header

* Nome da loja: **TheseRoads**
* Menu com navegação:

  * Início
  * Produtos
  * Contato

---

### Banner

* Destaque principal do site
* Frase:

> "Isso que é carro de verdade!"


---

### CardProduto (Reutilizável)

Cada produto é exibido em um componente reutilizável contendo:

* Imagem
* Marca e modelo
* Ano e versão
* Preço formatado automaticamente
* Botão de interação

✔ Uso de `props`
✔ Uso de `PropTypes`
✔ Formatação com `toLocaleString`

---

### ListaProdutos

* Renderiza os produtos dinamicamente
* Utiliza `.map()`
* Contém múltiplos veículos

---

### Sobre

* Breve descrição do site

---

### Footer

* Nome do aluno
* Ano
* Informações fictícias

---

## Design

O sistema visual foi baseado em uma identidade inspirada em carros clássicos:

| Tipo       | Cor     |
| ---------- | ------- |
| Primária   | #1A365D |
| Secundária | #E5A91A |
| Fundo      | #F4F1EA |
| Texto      | #2D3748 |

✔ Uso de variáveis CSS (`:root`)
✔ Layout limpo e organizado
✔ Destaque visual no banner

---

## Tecnologias

* React
* Vite
* JavaScript
* CSS
* React Router (estrutura preparada)

---

## Funcionalidades

* Listagem dinâmica de produtos
* Componentização reutilizável
* Formatação automática de valores
* Evento de interação no botão
* Estrutura pronta para expansão

---

## Como rodar o projeto

```bash
git clone https://github.com/Rodrigo-Mazzucco/classic-cars-react-store.git
cd classic-cars-react-store
npm install
npm run dev
```

---

## Preview

<img width="1904" height="938" alt="image" src="https://github.com/user-attachments/assets/37365923-eb1b-486d-936b-7a396462093a" />


---

## Autor

**Rodrigo Marchione Mazzucco**
2026

---

## Observações

Projeto desenvolvido para fins acadêmicos, com foco em prática de:

* React
* Componentização
* Estruturação de aplicações front-end
* Boas práticas de organização de código
