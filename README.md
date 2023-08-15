# boilerplate-frontend-next
Um Boilerplate para projetos front-end que utiliza: Typescript, ReactJS, NextJS, Tailwind CSS,  Eslint, Prettier, Jest, Testing Library e Hooks

## Node

Este bolierplate foi desenvolvido usando o Node na versão 18.12. Alguns comandos e configurações podem funcionar apenas com o Node na versão 16 ou superior.

## Yarn

Este projeto propõe usar o Yarn como gerenciador de pacotes, não tem problema se quiser usar qualquer outro, apenas se atente que deve excluir o arquivo ``.lock`` do yarn antes de migrar de gerenciador.

Se você não tiver o yarn instalado, use o comando

```bash
npm install --global yarn
```

Ou use o corepack

```bash
corepack prepare yarn@stable --activate
```

Mais informações: https://yarnpkg.com/getting-started/install

## Next JS

Este projeto foi inicializado com o comando `create-next-app`

Versão do Next neste boilerplate: `next@13.4.15`

Use o comando `yarn` para instalar todas as dependências.

O comando para rodar em ambiente de desenvolvimento é `yarn dev`

Ele irá levantar um servidor de desenvolvimento no localhost: [http://localhost:3000](http://localhost:3000)

Você também conta com o [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para gerenciar as fontes do seu projeto.

Documentação Next.JS: [Next.js Documentation](https://nextjs.org/docs)

Tutorial interativo para Next.JS: [Learn Next.js](https://nextjs.org/learn)
## App Router

Foi configurado para utilizar o sistema de App Router do Next JS que permite a criação de um ambiente de roteamento organizado por pastas e por métodos que utilizam os server components do React.

Saiba mais sobre o App Router: [App Router](https://nextjs.org/docs/app/building-your-application/routing#the-app-router)

Saiba mais sobre server components: [Server components](https://nextjs.org/docs/getting-started/react-essentials#server-components)

Assim, as páginas da aplicação estarão dentro da pasta `app`

## EditorConfig

Procure utilizar as formatações configuradas no arquivo `.editorconfig`, e evite mudar sem comunicar todos os responsáveis pelo projeto.

## Eslint

Este projeto utiliza o Eslint para auxílio em buscas de erros no código.

Se você estiver usando o VS Code, sugiro instalar a extensão do Eslint para visualizar os erros em tempo de execução.

[Extensão ESLint para VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Para verificar se existem erros em todos os arquivos da pasta src, utilize o comando `yarn lint`

As configurações e preferências do ESlint são customizáveis no arquivo `.eslintrc.json` 

## Prettier

Neste projeto está configurado o Prettier como formatador e código

Se você estiver usando o VS Code, sugiro instalar a extensão do Prettier para visualizar os erros em tempo de execução.

[Extensão Prettier para VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

As configurações e preferências do Prettier são customizáveis no arquivo `.prettierrc` 