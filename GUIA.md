npx create -next-app [name]

instalar dependencias do biome
yarn add --dev --exact @biomejs/biome
yarn biome init
configurar biome.json

instalar o shadcnui com todos os components
npx shadcn-ui@latest init
npx shadcn-ui@latest add 

criar e configurar arquivo docker-compose.yml
rodar o docker compose
docker compose up -d

instalar o prisma
npx prisma init
criar tabela para o Auth
configurar .env com os dados do compose
npx prisma generate
npx prisma db push

instalar react-icons
yarn add react-icons --save

instalar dependencias para o auth
yarn add next-auth@beta
yarn add @prisma/client @auth/prisma-adapter

yarn add bcryptjs
yarn add bcryptjs   

instalar dependencias para o provedor de email

yarn add resend
yarn add crypto  - pacote descontinuado - pesquisar alternativa

configurar rotas de paginas
criar src/app/ - (auth) (public) (dashboard)
