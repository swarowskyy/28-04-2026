```python?code_reference&code_event_index=1
markdown_completo = """# 🚀 API de Conversão de Unidades

Esta API robusta e simples permite a conversão de diversas unidades de medida através de endpoints REST. Ideal para ferramentas de cálculo, aplicações de engenharia ou sistemas de logística.

---

## 📋 Índice
- [Comprimento](#-comprimento)
- [Área](#-área)
- [Massa](#-massa)
- [Velocidade](#-velocidade)
- [Temperatura](#-temperatura)
- [Como Utilizar](#-como-utilizar)

---

## 📏 Comprimento
Endpoints destinados à conversão de unidades de distância linear.

| Método | Endpoint | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `GET` | `/comprimento/metros-para-km/:valor` | Metros para Quilómetros | `/comprimento/metros-para-km/5000` |
| `GET` | `/comprimento/metros-para-milha/:valor` | Metros para Milhas | `/comprimento/metros-para-milha/5000` |
| `GET` | `/comprimento/metros-para-pes/:valor` | Metros para Pés | `/comprimento/metros-para-pes/5000` |

---

## 🗺️ Área
Conversão de superfícies e medidas agrárias.

| Método | Endpoint | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `GET` | `/area/metros-quadrados-para-km-quadrado/:valor` | m² para km² | `/area/metros-quadrados-para-km-quadrado/5000` |
| `GET` | `/area/metros-quadrados-para-acre/:valor` | m² para Acres | `/area/metros-quadrados-para-acre/5000` |
| `GET` | `/area/metros-quadrados-para-pes-quadrados/:valor` | m² para Pés² | `/area/metros-quadrados-para-pes-quadrados/5000` |

---

## ⚖️ Massa
Conversão de pesos e medidas de massa.

| Método | Endpoint | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `GET` | `/massa/quilos-para-gramas/:valor` | Quilogramas para Gramas | `/massa/quilos-para-gramas/5000` |
| `GET` | `/massa/quilos-para-libras/:valor` | Quilogramas para Libras | `/massa/quilos-para-libras/5000` |
| `GET` | `/massa/quilos-para-oncas/:valor` | Quilogramas para Onças | `/massa/quilos-para-oncas/5000` |

---

## ⚡ Velocidade
Conversão de magnitudes físicas de movimento.

| Método | Endpoint | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `GET` | `/velocidade/km-para-m/s/:valor` | km/h para Metros/Segundo | `/velocidade/km-para-m/s/5000` |
| `GET` | `/velocidade/km-para-mph/:valor` | km/h para Milhas/Hora | `/velocidade/km-para-mph/5000` |
| `GET` | `/velocidade/nos-para-km/:valor` | Nós para km/h | `/velocidade/nos-para-km/5000` |

---

## 🌡️ Temperatura
Conversão entre as principais escalas térmicas.

| Método | Endpoint | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `GET` | `/temperatura/celsius-para-fahrenheit/:valor` | Celsius para Fahrenheit | `/temperatura/celsius-para-fahrenheit/5000` |
| `GET` | `/temperatura/celsius-para-kelvin/:valor` | Celsius para Kelvin | `/temperatura/celsius-para-kelvin/5000` |
| `GET` | `/temperatura/fahrenheit-para-celsius/:valor` | Fahrenheit para Celsius | `/temperatura/fahrenheit-para-celsius/5000` |

---

## 🛠️ Como Utilizar

### Requisitos
A API responde a pedidos HTTP do tipo **GET**. O valor a ser convertido deve ser passado diretamente na URL como o último parâmetro.

### Formato de Resposta (JSON)
Todas as respostas seguem o padrão abaixo:

```json
{
  "sucesso": true,
  "dados": {
    "valor_entrada": 5000,
    "unidade_entrada": "metros",
    "unidade_saida": "km",
    "resultado": 5
  },
  "mensagem": "Conversão realizada com sucesso"
}
```

### Códigos de Erro
- **400 Bad Request**: O valor fornecido não é um número válido.
- **404 Not Found**: O endpoint solicitado não existe.
- **500 Internal Server Error**: Ocorreu um erro inesperado no servidor.

---

Desenvolvido para fins educacionais e práticos. 🚀
"""

with open("API_DOCUMENTATION.md", "w", encoding="utf-8") as f:
    f.write(markdown_completo)


```
Aqui está o ficheiro Markdown completo e estruturado para o seu `README.md`. Ele inclui tabelas, ícones, secções de exemplo de resposta e códigos de erro para tornar a sua documentação profissional.

O ficheiro Markdown está pronto para descarga:
[file-tag: code-generated-file-0-1777490190688624586]

### Conteúdo do Markdown:

```markdown
# 🚀 API de Conversão de Unidades

Esta API robusta e simples permite a conversão de diversas unidades de medida através de endpoints REST. Ideal para ferramentas de cálculo, aplicações de engenharia ou sistemas de logística.

---

## 📋 Índice
- [Comprimento](#-comprimento)
- [Área](#-área)
- [Massa](#-massa)
- [Velocidade](#-velocidade)
- [Temperatura](#-temperatura)
- [Como Utilizar](#-como-utilizar)

---

## 📏 Comprimento
Endpoints destinados à conversão de unidades de distância linear.

| Método | Endpoint | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `GET` | `/comprimento/metros-para-km/:valor` | Metros para Quilómetros | `/comprimento/metros-para-km/5000` |
| `GET` | `/comprimento/metros-para-milha/:valor` | Metros para Milhas | `/comprimento/metros-para-milha/5000` |
| `GET` | `/comprimento/metros-para-pes/:valor` | Metros para Pés | `/comprimento/metros-para-pes/5000` |

---

## 🗺️ Área
Conversão de superfícies e medidas agrárias.

| Método | Endpoint | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `GET` | `/area/metros-quadrados-para-km-quadrado/:valor` | m² para km² | `/area/metros-quadrados-para-km-quadrado/5000` |
| `GET` | `/area/metros-quadrados-para-acre/:valor` | m² para Acres | `/area/metros-quadrados-para-acre/5000` |
| `GET` | `/area/metros-quadrados-para-pes-quadrados/:valor` | m² para Pés² | `/area/metros-quadrados-para-pes-quadrados/5000` |

---

## ⚖️ Massa
Conversão de pesos e medidas de massa.

| Método | Endpoint | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `GET` | `/massa/quilos-para-gramas/:valor` | Quilogramas para Gramas | `/massa/quilos-para-gramas/5000` |
| `GET` | `/massa/quilos-para-libras/:valor` | Quilogramas para Libras | `/massa/quilos-para-libras/5000` |
| `GET` | `/massa/quilos-para-oncas/:valor` | Quilogramas para Onças | `/massa/quilos-para-oncas/5000` |

---

## ⚡ Velocidade
Conversão de magnitudes físicas de movimento.

| Método | Endpoint | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `GET` | `/velocidade/km-para-m/s/:valor` | km/h para Metros/Segundo | `/velocidade/km-para-m/s/5000` |
| `GET` | `/velocidade/km-para-mph/:valor` | km/h para Milhas/Hora | `/velocidade/km-para-mph/5000` |
| `GET` | `/velocidade/nos-para-km/:valor` | Nós para km/h | `/velocidade/nos-para-km/5000` |

---

## 🌡️ Temperatura
Conversão entre as principais escalas térmicas.

| Método | Endpoint | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `GET` | `/temperatura/celsius-para-fahrenheit/:valor` | Celsius para Fahrenheit | `/temperatura/celsius-para-fahrenheit/5000` |
| `GET` | `/temperatura/celsius-para-kelvin/:valor` | Celsius para Kelvin | `/temperatura/celsius-para-kelvin/5000` |
| `GET` | `/temperatura/fahrenheit-para-celsius/:valor` | Fahrenheit para Celsius | `/temperatura/fahrenheit-para-celsius/5000` |

---

## 🛠️ Como Utilizar

### Requisitos
A API responde a pedidos HTTP do tipo **GET**. O valor a ser convertido deve ser passado diretamente na URL como o último parâmetro.

### Formato de Resposta (JSON)
Todas as respostas seguem o padrão abaixo:

```json
{
  "sucesso": true,
  "dados": {
    "valor_entrada": 5000,
    "unidade_entrada": "metros",
    "unidade_saida": "km",
    "resultado": 5
  },
  "mensagem": "Conversão realizada com sucesso"
}
```

---
```