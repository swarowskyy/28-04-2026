<strong>⚖️Documentação da API de Conversão de Medidas</strong><br>
Esta API foi desenvolvida para realizar conversões de unidades de medida de forma simples através de rotas HTTP.🚀


<strong>📍 Endereço Base</strong><br>
A estrutura das rotas segue o padrão:
http://localhost:3000/[categoria]/[tipo-de-conversao]/[valor]


<strong>🛠️ Funcionalidades e Rotas</strong><br>
Abaixo estão as categorias disponíveis e seus respectivos caminhos para conversão:


<strong>📏 Comprimento</strong><br>
Ideal para medir distâncias e extensões.


Metros ➡️ Quilômetros: /comprimento/metros-para-km/5000


Metros ➡️ Milhas: /comprimento/metros-para-milha/5000


Metros ➡️ Pés: /comprimento/metros-para-pes/5000

<strong>🗺️ Área</strong><br>
Para cálculos de superfícies e terrenos.


m² ➡️ km²: /area/metros-quadrados-para-km-quadrado/5000


m² ➡️ Acres: /area/metros-quadrados-para-acre/5000


m² ➡️ Pés Quadrados: /area/metros-quadrados-para-pes-quadrados/5000


<strong>⚖️ Massa</strong><br>
Conversão de pesos e cargas.


Quilos ➡️ Gramas: /massa/quilos-para-gramas/5000


Quilos ➡️ Libras: /massa/quilos-para-libras/5000


Quilos ➡️ Onças: /massa/quilos-para-oncas/5000


<strong>🏎️ Velocidade</strong><br>
Para quem precisa de rapidez nos cálculos de deslocamento.


km/h ➡️ m/s: /velocidade/km-para-m/s/5000


km/h ➡️ mph: /velocidade/km-para-mph/5000


Nós ➡️ km/h: /velocidade/nos-para-km/5000


<strong>🌡️ Temperatura</strong><br>
Ajuste suas escalas térmicas num piscar de olhos.


Celsius 🌡️ Fahrenheit: /temperatura/celsius-para-fahrenheit/5000


Celsius 🌡️ Kelvin: /temperatura/celsius-para-kelvin/5000


Fahrenheit 🌡️ Celsius: /temperatura/fahrenheit-para-celsius/5000


<strong>🚀 Como Testar</strong><br>
Certifique-se de que o servidor está rodando.


Abra o seu navegador ou uma ferramenta como Postman/Insomnia.


Digite a URL com o valor que deseja converter.


<strong>Exemplo prático:</strong><br>
Para descobrir quantos quilômetros existem em 5000 metros:
👉 http://localhost:3000/comprimento/metros-para-km/5000
