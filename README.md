<strong>Documentação da API de Conversão de Medidas</strong>
Esta API foi desenvolvida para realizar conversões de unidades de medida de forma simples através de rotas HTTP. A API responde localmente no endereço http://localhost:3000.

Estrutura Base da URL
A estrutura das rotas segue o padrão:
http://localhost:3000/[categoria]/[tipo-de-conversao]/[valor]

1. Comprimento 
Transforma unidades de distância e extensão.

Metros para Quilómetros: /comprimento/metros-para-km/[valor]

Metros para Milhas: /comprimento/metros-para-milha/[valor]

Metros para Pés: /comprimento/metros-para-pes/[valor]

2. Área
Utilizada para conversão de medidas de superfície.

Metros Quadrados para Quilómetros Quadrados: /area/metros-quadrados-para-km-quadrado/[valor]

Metros Quadrados para Acres: /area/metros-quadrados-para-acre/[valor]

Metros Quadrados para Pés Quadrados: /area/metros-quadrados-para-pes-quadrados/[valor]

3. Massa
Conversão de pesos e quantidades de matéria.

Quilos para Gramas: /massa/quilos-para-gramas/[valor]

Quilos para Libras: /massa/quilos-para-libras/[valor]

Quilos para Onças: /massa/quilos-para-oncas/[valor]

4. Velocidade
Para cálculos de deslocamento por tempo.

Quilómetros por Hora para Metros por Segundo: /velocidade/km-para-m/s/[valor]

Quilómetros por Hora para Milhas por Hora: /velocidade/km-para-mph/[valor]

Nós para Quilómetros por Hora: /velocidade/nos-para-km/[valor]

5. Temperatura
Conversão entre as principais escalas térmicas.

Celsius para Fahrenheit: /temperatura/celsius-para-fahrenheit/[valor]

Celsius para Kelvin: /temperatura/celsius-para-kelvin/[valor]

Fahrenheit para Celsius: /temperatura/fahrenheit-para-celsius/[valor]

Como usar
Para utilizar a API, basta realizar uma requisição GET utilizando qualquer ferramenta (como o navegador, Insomnia ou Postman) inserindo o valor desejado ao final da URL.

Exemplo:
Para converter 5000 metros em quilómetros, aceda a:
http://localhost:3000/comprimento/metros-para-km/5000