<strong>⚖️Documentação da API de Conversão de Medidas</strong>
Esta API foi desenvolvida para realizar conversões de unidades de medida de forma simples através de rotas HTTP.🚀

<strong>📍 Endereço Base</strong>
A estrutura das rotas segue o padrão:
http://localhost:3000/[categoria]/[tipo-de-conversao]/[valor]

<strong>🛠️ Funcionalidades e Rotas</strong>
Abaixo estão as categorias disponíveis e seus respectivos caminhos para conversão:

📏 Comprimento
Ideal para medir distâncias e extensões.

Metros ➡️ Quilômetros: /comprimento/metros-para-km/[valor]

Metros ➡️ Milhas: /comprimento/metros-para-milha/[valor]

Metros ➡️ Pés: /comprimento/metros-para-pes/[valor]

🗺️ Área
Para cálculos de superfícies e terrenos.

m² ➡️ km²: /area/metros-quadrados-para-km-quadrado/[valor]

m² ➡️ Acres: /area/metros-quadrados-para-acre/[valor]

m² ➡️ Pés Quadrados: /area/metros-quadrados-para-pes-quadrados/[valor]

⚖️ Massa
Conversão de pesos e cargas.

Quilos ➡️ Gramas: /massa/quilos-para-gramas/[valor]

Quilos ➡️ Libras: /massa/quilos-para-libras/[valor]

Quilos ➡️ Onças: /massa/quilos-para-oncas/[valor]

🏎️ Velocidade
Para quem precisa de rapidez nos cálculos de deslocamento.

km/h ➡️ m/s: /velocidade/km-para-m/s/[valor]

km/h ➡️ mph: /velocidade/km-para-mph/[valor]

Nós ➡️ km/h: /velocidade/nos-para-km/[valor]

🌡️ Temperatura
Ajuste suas escalas térmicas num piscar de olhos.

Celsius 🌡️ Fahrenheit: /temperatura/celsius-para-fahrenheit/[valor]

Celsius 🌡️ Kelvin: /temperatura/celsius-para-kelvin/[valor]

Fahrenheit 🌡️ Celsius: /temperatura/fahrenheit-para-celsius/[valor]

🚀 Como Testar
Certifique-se de que o servidor está rodando.

Abra o seu navegador ou uma ferramenta como Postman/Insomnia.

Digite a URL com o valor que deseja converter.

Exemplo prático:
Para descobrir quantos quilômetros existem em 5000 metros:
👉 http://localhost:3000/comprimento/metros-para-km/5000