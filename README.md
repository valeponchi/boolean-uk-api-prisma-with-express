# boolean-uk-api-prisma-with-express

*Steps already done:*

1) **[in VSCode]**

 create ".gitignore" file with "node_modules" ".env"

2) **[in the TERMINAL]** ps: nodemon is installed globally on my laptop. you will have to install it if you need to.
npm init -y

npm i express morgan dotenv prisma

npx prisma init

3) **[in ElephantSQL and VSCode]**

set up the DATABASE_URL and the SHADOW_DATABASE_URL and save them in the the .env file

4) **[in schema.prisma]**

create your first model

5) **[in the TERMINAL]**

npx prisma migrate dev --name {name-of-migration} 

example: npx prisma migrate dev --name create_books
    
    
    
