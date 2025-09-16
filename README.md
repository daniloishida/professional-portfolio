# Danilo Issida Gonçalves - Professional Portfolio
Bem-vindo ao repositório do site de portfólio profissional de Danilo Issida Gonçalves. Este é o repositório do meu portfólio pessoal, uma landing page estática e responsiva construída para apresentar minhas habilidades, experiências e projetos.

O site é totalmente interativo, suporta múltiplos idiomas (PT/EN) e inclui uma integração dinâmica com a API do Google Gemini para sugestões de projetos.

## 📋 Funcionalidades
Design Responsivo: Totalmente adaptável para desktops, tablets e dispositivos móveis, utilizando TailwindCSS.

Suporte Multi-idioma: Alternância dinâmica entre Português (pt) e Inglês (en) sem recarregar a página, gerenciada por um objeto de tradução em JavaScript.

Integração com IA (Google Gemini): A seção "Projetos" possui botões que consomem a API do Google Gemini em tempo real para gerar sugestões de melhorias para cada projeto.

Componentes Dinâmicos: O site inclui componentes interativos como menu mobile (hambúrguer), modais, timelines de experiência e barras de proficiência de skills.


## 🛠️ Estrutura do Projeto
O site foi desenvolvido como uma página única (single-page) utilizando HTML, TailwindCSS (via CDN) e JavaScript puro para toda a interatividade.


## Estrutura de Arquivos
O projeto é intencionalmente simples, consistindo em apenas um arquivo principal:

.
├── index.html     # Contém todo o HTML, CSS (Tailwind) e JavaScript.
└── README.md      # Este arquivo.
Nota: Não há pastas css/ ou imagens/ neste projeto, pois o Tailwind é carregado via CDN e as imagens estão hospedadas externamente (GitHub e placeholders).

## Principais Seções (IDs)
O conteúdo é organizado pelas seguintes seções navegáveis:

#hero (Banner principal e CTAs)

#about (Sobre Mim)

#stats (Destaques em Números)

#experience (Timeline de Experiência Profissional)

#testimonials (Depoimentos)

#skills (Principais Competências com barras de proficiência)

#portfolio (Projetos Pessoais com integração de IA)

#education (Timeline de Formação Acadêmica)

#certifications (Grid de Certificações)

#services (Como Posso Ajudar?)

#contact (Links de Contato)
---
## 🚀 Como Rodar o Projeto
Este projeto requer duas etapas cruciais: configurar a API e executá-lo em um servidor local (para evitar erros de CORS).

1. Configurar a Chave de API (Obrigatório)
A funcionalidade de IA não funcionará sem uma chave de API válida do Google Gemini.

Acesse o Google AI Studio e crie uma nova chave de API.

Abra o arquivo index.html.

No final do arquivo, dentro do bloco <script>, localize a linha:

JavaScript

const apiKey = ""; // IMPORTANTE: Adicione sua chave de API do Gemini aqui
Insira sua chave de API entre as aspas:

JavaScript

const apiKey = "SUA_CHAVE_DE_API_VAI_AQUI";
2. Rodar o Projeto
Você não pode simplesmente clicar duas vezes no arquivo index.html e abri-lo no navegador (via file:///...). Navegadores modernos bloquearão as chamadas de API (fetch) por razões de segurança (CORS).

Você deve servi-lo a partir de um servidor local. A forma mais fácil é:

Use a extensão Live Server no VS Code.

Clique com o botão direito no index.html e selecione "Open with Live Server".


## 📂 Recursos e Personalizações
Toda a personalização de texto é centralizada para facilitar a manutenção.

1. Para Atualizar Textos e Traduções
Todo o conteúdo (títulos, descrições, nomes, etc.) é gerenciado por um único objeto JavaScript no final do index.html.

Localize o objeto const translations.

Edite os valores dentro de pt: { ... } para o conteúdo em português.

Edite os valores correspondentes em en: { ... } para o conteúdo em inglês.

Exemplo:

JavaScript

pt: {
    hero_title: "Meu Novo Título de Herói.",
    about_p1: "Minha nova descrição sobre mim...",
    exp_trizy_desc: "Minha descrição real sobre a Trizy aqui...",
    // ...
}
2. Para Atualizar Imagens
As imagens (perfil, logos de certificados) estão atualmente linkadas de fontes externas (placeholders e GitHub). Para alterá-las:

Faça o upload das suas imagens para um local público (como o próprio repositório GitHub, Imgur, ou um serviço de CDN).

No index.html, encontre a tag <img> que deseja alterar.

Substitua o valor no atributo src="..." pelo seu novo link URL.

## 🌐 Tecnologias Utilizadas
HTML5: Estrutura semântica do site.

TailwindCSS (via CDN): Framework Utility-First para toda a estilização e layout responsivo.

JavaScript (Vanilla ES6+): Usado para a manipulação do DOM, funcionalidade do menu mobile, sistema de tradução e chamadas de API.

Google Gemini API: Consumida para a funcionalidade interativa de sugestões de projetos.

## 📄 Licença
Este projeto está licenciado sob a Licença MIT. Sinta-se à vontade para usar este código como base para seu próprio portfólio.
