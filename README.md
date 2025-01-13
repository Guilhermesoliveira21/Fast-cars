# 🚗 FastCars Compra e Simulação de Veículos

Este projeto tem como inspiração a webmotors, desenvolvida para listar veículos, exibir detalhes de suas especificações e realizar simulações de financiamento. A aplicação utiliza a **API do Mercado Livre** como fonte de dados para os veículos.

![Home](https://github.com/user-attachments/assets/f3f33afc-c4f4-4ca9-bd06-ff665ae4a490)

---

## 🛠️ Funcionalidades

### 🔍 Listagem de Veículos
- Exibe uma lista de veículos disponíveis para compra, com informações básicas, como nome, preço, localização, kilometragem e imagem.

![veiculos](https://github.com/user-attachments/assets/deeeb5ea-385b-4ab8-b5d1-41bfe3b85bda)


### 📄 Especificações de um Veículo
- Ao clicar em um veículo da lista, você pode visualizar informações detalhadas sobre o mesmo, incluindo:
  - Marca
  - Modelo
  - Ano
  - Preço
  - Localização
  - Entre outros informações

### 💸 Simulação de Financiamento
- Permite realizar uma simulação de financiamento para o veículo selecionado.
- O usuário pode informar o valor de entrada, o número de parcelas desejado, e o sistema calcula:
  - O valor total financiado.
  - O valor de cada parcela, com juros aplicados.
    
![veiculo](https://github.com/user-attachments/assets/74ad95af-8128-460c-ae61-6bde11aac01d)

---

## 🔗 API Utilizada

A aplicação consome dados diretamente da **API do Mercado Livre**. A categoria utilizada para buscar os veículos é `MLB1743`.

### Exemplo de Requisição
```http
GET https://api.mercadolibre.com
