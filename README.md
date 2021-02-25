# NLW-4
Projeto em NodeJS desenvolvido durante a Next Level Week 4 da Rocketseat


# Reflexões do dia

## Dia 1

No primeiro dia de NLW, vimos os conceitos basicos necessários para o desenvolvimento da api que faremos. 

-- Houve uma breve explicação dos seguintes conceitos

* o que é uma API:


Requisição feita por cliente > Resposta em forma de estrutura de dados > cliente recebe resposta e processa resultado


* como funciona o NodeJS:


Arquitetura Event-Loop: Baseada em eventos(rotas)

Call Stack(while eterno executando em formato de pilha) LIFO

Node é single-thread, não executa ao msm tempo em tds os cores, só um core do processamento.

Non-blocking I/O = Input Output não bloqueante = Listagem > Não preciso retornar todos os dados de uma vez



-- Ainda, vimos o porquê de utilizar o Typescript com exemplos praticos.

Finalmente, fomos pra parte prática, onde criamos um projeto basico utilizando o Express e Typescript. Após uma explicação sobre os metodos https mais comuns de uma api REST, 
GET/POST/PUT/PATCH/DELETE, criamos uma rota GET e uma rota POST.

## Dia 2

O dia começa com a instalação e configuração do TypeORM que é um ORM criado para ser utilizado juntamente ao Typescript inspirado em hibernate(java). Criamos um banco de dados
em memoria utilizando sqlite2.

Criamos uma migration para criar a tabela Users e a rodamos utilizando comandos do typeorm.

*  O conceito de migrations ainda segue nebuloso para mim. As migrations existiriam por trás dos panos no Spring Data(java) ou é um conceito do typeorm?

Entao criamos um controller afim de isolar as regras relativas as interações com o User. O typeorm vem com o metodo getRepository que pega o repositorio da classe passada como argumento(não há necessidade de inicializar o repositorio?), além de vir com o metodo findOne
por padrão.

## Dia 3

O dia começa com a criação de repositórios, que extendem a classe Repository com o tipo
do model(lembra spring data). Criamos toda a parte do surveys(model,controller,repository) também.

Tivemos uma breve introdução aos diferentes tipos de testes

* Testes unitários

* Testes de integração

* Testes de ponta a ponta

E criamos testes de integração para testar as funcionalidades da aplicação até o momento,
como criação de usuarios/criação de surveys/listagem de surveys.

Também vimos a utilização de variaveis de ambiente, para poder alternar o banco de dados uti
lizado em ambiente de desenvolvimento e ambiente de testes.

## Dia 4

O dia começa com a criação da tabela pivot surveyUsers(migrations,model,repository) que
guarda os ids do usuario e da survey criados após o envio do email(como foreign keys).


Então foi criado o serviço para envio de email, utilizando o nodemailer para envio, handlebars para formatação do email a ser enviado, além de algumas features do proprio node
como fs. 


O controller responsavel por enviar emails realiza verificações caso usuario já tenha recebido a survey e por fim envia o email.

