<strong>⚖️Documentação da API de Conversão de Medidas</strong><br>
Esta API foi desenvolvida para realizar conversões de unidades de medida de forma simples através de rotas HTTP.🚀<br><br>


<strong>📍 Endereço Base</strong><br>
A estrutura das rotas segue o padrão:
http://localhost:3000/[categoria]/[tipo-de-conversao]/[valor]<br><br>


<strong>🛠️ Funcionalidades e Rotas</strong><br>
Abaixo estão as categorias disponíveis e seus respectivos caminhos para conversão:<br><br>


<strong>📏 Comprimento</strong><br>
Ideal para medir distâncias e extensões.<br>


<strong>Metros ➡️ Quilômetros: /comprimento/metros-para-km/5000


<strong>Metros ➡️ Milhas: /comprimento/metros-para-milha/5000


<strong>Metros ➡️ Pés: /comprimento/metros-para-pes/5000<br><br>

<strong>🗺️ Área</strong><br>
Para cálculos de superfícies e terrenos.<br>


<strong>m² ➡️ km²: /area/metros-quadrados-para-km-quadrado/5000


<strong>m² ➡️ Acres: /area/metros-quadrados-para-acre/5000


<strong>m² ➡️ Pés Quadrados: /area/metros-quadrados-para-pes-quadrados/5000<br><br>


<strong>⚖️ Massa</strong><br>
Conversão de pesos e cargas.


<strong>Quilos ➡️ Gramas:</strong> /massa/quilos-para-gramas/5000


<strong>Quilos ➡️ Libras:</strong> /massa/quilos-para-libras/5000


<strong>Quilos ➡️ Onças:</strong> /massa/quilos-para-oncas/5000<br><br>


<strong>🏎️ Velocidade</strong><br>
Para quem precisa de rapidez nos cálculos de deslocamento.


<strong>km/h ➡️ m/s:</strong> /velocidade/km-para-m/s/5000


<strong>km/h ➡️ mph:</strong> /velocidade/km-para-mph/5000


<strong>Nós ➡️ km/h:</strong> /velocidade/nos-para-km/5000<br><br>


<strong>🌡️ Temperatura</strong><br>
Ajuste suas escalas térmicas num piscar de olhos.

<strong>Celsius ➡️ Fahrenheit:</strong> /temperatura/celsius-para-fahrenheit/5000

<strong>Celsius ➡️ Kelvin:</strong> /temperatura/celsius-para-kelvin/5000

<strong>Fahrenheit ➡️ Celsius:</strong> /temperatura/fahrenheit-para-celsius/5000<br><br>


<strong>🚀 Como Testar</strong><br>
Certifique-se de que o servidor está rodando.

Abra o seu navegador ou uma ferramenta como Postman/Insomnia.

Digite a URL com o valor que deseja converter.<br><br>


<strong>Exemplo prático:</strong><br>
Para descobrir quantos quilômetros existem em 5000 metros:
👉 http://localhost:3000/comprimento/metros-para-km/5000
