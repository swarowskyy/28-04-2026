<strong>⚖️Documentação da API de Conversão de Medidas</strong><br>
Esta API foi desenvolvida para realizar conversões de unidades de medida de forma simples através de rotas HTTP.🚀<br><br>


<strong>📍 Endereço Base</strong><br>
A estrutura das rotas segue o padrão:
http://localhost:3000/[categoria]/[tipo-de-conversao]/[valor]<br><br>


<strong>🛠️ Funcionalidades e Rotas</strong><br>
Abaixo estão as categorias disponíveis e seus respectivos caminhos para conversão:<br><br>


<strong>📏 Comprimento</strong><br>
Ideal para medir distâncias e extensões.<br>


Metros ➡️ Quilômetros: localhost:3000/comprimento/metros-para-km/5000


Metros ➡️ Milhas: localhost:3000/comprimento/metros-para-milha/5000


Metros ➡️ Pés: localhost:3000/comprimento/metros-para-pes/5000<br><br>

<strong>🗺️ Área</strong><br>
Para cálculos de superfícies e terrenos.<br>


m² ➡️ km²: localhost:3000/area/metros-quadrados-para-km-quadrado/5000


m² ➡️ Acres: localhost:3000/area/metros-quadrados-para-acre/5000


m² ➡️ Pés Quadrados: localhost:3000/area/metros-quadrados-para-pes-quadrados/5000<br><br>


<strong>⚖️ Massa</strong><br>
Conversão de pesos e cargas.


Quilos ➡️ Gramas: localhost:3000/massa/quilos-para-gramas/5000


Quilos ➡️ Libras: localhost:3000/massa/quilos-para-libras/5000


Quilos ➡️ Onças: localhost:3000/massa/quilos-para-oncas/5000<br><br>


<strong>🏎️ Velocidade</strong><br>
Para quem precisa de rapidez nos cálculos de deslocamento.


km/h ➡️ m/s: localhost:3000/velocidade/km-para-m/s/5000


km/h ➡️ mph: localhost:3000/velocidade/km-para-mph/5000


Nós ➡️ km/h: localhost:3000/velocidade/nos-para-km/5000<br><br>


<strong>🌡️ Temperatura</strong><br>
Ajuste suas escalas térmicas num piscar de olhos.

Celsius ➡️ Fahrenheit: localhost:3000/temperatura/celsius-para-fahrenheit/5000

Celsius ➡️ Kelvin: localhost:3000/temperatura/celsius-para-kelvin/5000

Fahrenheit ➡️ Celsius: localhost:3000/temperatura/fahrenheit-para-celsius/5000<br><br>


<strong>🚀 Como Testar</strong><br>
Certifique-se de que o servidor está rodando.

Abra o seu navegador ou uma ferramenta como Postman/Insomnia.

Digite a URL com o valor que deseja converter.<br><br>


<strong>Exemplo prático:</strong><br>
Para descobrir quantos quilômetros existem em 5000 metros:
👉 http://localhost:3000/comprimento/metros-para-km/5000
