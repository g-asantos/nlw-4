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