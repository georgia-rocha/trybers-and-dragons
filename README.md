# Boas vindas ao repositório do projeto Trybers and Dragons! ☘️

 ## O que foi desenvolvido 🚀

  Foi desenvolvido a estrutura de um jogos de `RPG` (_Role Playing Game_) com intuito de aplicar os princípios da arquitetura `SOLID` e os princípios de `POO`.

  Foi necessário: 

  - O conhecimento dos pilares da Programação Orientada a Objetos: Herança, Abstração, Encapsulamento e Polimorfismo.
  - A habilidade de criar e utilizar Interface;
  - A habilidade de utilizar Composição;
  - Implementar, em TypeScript, Classes, Instâncias, Atributos, Métodos e Objetos;
  - O conhecimento e aplicação dos princípios SOLID.

# Tecnologias utilizadas <a name="tecnologias"></a>

- [**TypeScript**](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [**Node JS**](https://nodejs.org/en/)
- [**Mocha**](https://mochajs.org/)
- [**Nodemon**](https://www.npmjs.com/package/nodemon)
- [**Linter**](https://eslint.org/docs/latest/)

 # Orientações

<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker

  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `trybers_and_dragons`.
  - A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybers_and_dragons bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  ⚠ Atenção ⚠ O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.


✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais. 

---
  
  ## Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`
  
  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

  ✨ **Dica:** O avaliador espera que a versão do `node` utilizada seja a 16.

  <br/>
</details>

<details>
<summary><strong> 👩‍🎓 Para Clonar e Testar a Aplicação</strong></summary>

1. Para rodar a aplicação:

```
A aplicação é executada automaticamente
```

2. Para abrir o terminal do docker
```
 docker exec -it trybers_and_dragons bash
```

3.  Para testar a aplicação:
 - Testar todas:
  
```
npm test
```
 - Testar individuamente:

```
npm test **01** 
```

</details>

## Requisitos obrigatórios do Projeto 100%

- [x] 1. Crie a classe Race
- [x] 2. Crie classes que herdam de Race
- [x] 3. Crie a interface Energy
- [x] 4. Crie a classe Archetype
- [x] 5. Crie classes que herdam de Archetype
- [x] 6. Crie a interface Fighter
- [x] 7. Crie a classe Character
- [x] 8. Crie a interface SimpleFighter
- [x] 9. Crie a classe Monster
- [x] 10. Crie a classe PVP

## Requisitos Bônus 100%

- [x] 11. Criar a classe PVE
- [x] 12. Crie a classe Dragon
- [x] 13. Crie objetos no arquivo index
