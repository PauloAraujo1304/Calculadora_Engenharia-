# Calculadora de Engenharia Elétrica

Uma ferramenta completa e profissional para cálculos de engenharia elétrica, desenvolvida para estudantes e profissionais.

## Recursos

### 1. Cálculo de Resistências Equivalentes
- **Resistências em Série**: R_eq = R1 + R2 + ... + Rn
- **Resistências em Paralelo**: 1/R_eq = 1/R1 + 1/R2 + ... + 1/Rn
- 5 campos de entrada para cada configuração
- Resultado com precisão de até 6 casas decimais

### 2. Cálculo de Capacitâncias Equivalentes
- **Capacitâncias em Série**: 1/C_eq = 1/C1 + 1/C2 + ... + 1/Cn
- **Capacitâncias em Paralelo**: C_eq = C1 + C2 + ... + Cn
- 5 campos de entrada para cada configuração
- Suporta valores em Farad (F) com conversão automática de unidades

### 3. Cálculo de Indutâncias Equivalentes
- **Indutâncias em Série**: L_eq = L1 + L2 + ... + Ln
- **Indutâncias em Paralelo**: 1/L_eq = 1/L1 + 1/L2 + ... + 1/Ln
- 5 campos de entrada para cada configuração
- Resultados em Henry (H)

### 4. Análise Transitória - Circuito RC
- Cálculo da tensão no capacitor em regime transitório
- Fórmula: Vc(t) = V(1 - e^(-t/τ))
- Constante de tempo: τ = RC
- **Campos de entrada**:
  - Tensão aplicada ao circuito (V)
  - Valor da resistência (Ω)
  - Valor da capacitância (F)
  - Tempo de análise (s)
- **Campos de saída**:
  - Tensão sobre o capacitor no tempo especificado (V)
  - Constante de tempo do circuito (s)

### 5. Análise Transitória - Circuito RL
- Cálculo da tensão no indutor em regime transitório
- Fórmula: VL(t) = V·e^(-t/τ)
- Constante de tempo: τ = L/R
- **Campos de entrada**:
  - Tensão aplicada ao circuito (V)
  - Valor da resistência (Ω)
  - Valor da indutância (H)
  - Tempo de análise (s)
- **Campos de saída**:
  - Tensão sobre o indutor no tempo especificado (V)
  - Constante de tempo do circuito (s)

### 6. Divisor de Tensão
- Cálculo da tensão em um ponto específico de um divisor resistivo
- Fórmula: Vx = Vt × (Rx / (R1 + R2 + ... + Rn))
- **Campos de entrada**:
  - 4 campos para resistências do divisor (Ω)
  - Tensão aplicada ao circuito (V)
  - Resistência medida (que determina o ponto de divisão) (Ω)
- **Campo de saída**:
  - Tensão no ponto medido (V)

### 7. Divisor de Corrente
- Cálculo da corrente em um ramo específico de um circuito paralelo
- Fórmula: I1 = (R2 / (R1 + R2)) × It
- **Campos de entrada**:
  - Resistência oposta (R2) (Ω)
  - Corrente aplicada (It) (A)
  - Resistência medida (R1) (Ω)
- **Campo de saída**:
  - Corrente no ramo medido (A)

### 8. Filtros - Frequências de Corte
- **Filtro Passa-Baixa**: Atenuação de frequências acima da frequência de corte
- **Filtro Passa-Alta**: Atenuação de frequências abaixo da frequência de corte
- Fórmula para ambos: Fo = 1 / (2π × R × C)
- **Campos de entrada**:
  - Resistência (Ω)
  - Capacitância (F)
- **Campo de saída**:
  - Frequência de corte (Hz)

## Internacionalização

O site suporta três idiomas:
- **Português Brasileiro** (pt-BR) - Padrão
- **Inglês** (en)
- **Espanhol** (es)

Você pode trocar de idioma usando o seletor de idioma localizado no canto superior direito do cabeçalho. A escolha é armazenada automaticamente no navegador.

## Estrutura do Projeto

```
EECalculator/
├── index.html           # Página principal com todas as calculadoras
├── css/
│   └── style.css       # Estilos CSS da aplicação
├── js/
│   └── calculations.js # Funções JavaScript para cálculos
└── README.md           # Este arquivo
```

## Como Usar

1. Abra o arquivo `index.html` em um navegador web
2. A página inicial exibe informações sobre o projeto
3. Use o menu de navegação para acessar as calculadoras desejadas
4. Insira os valores nos campos de entrada
5. Clique no botão "Calcular" para obter os resultados
6. Use o botão "Limpar" para resetar os campos

## Características Técnicas

- **Interface responsiva**: Funciona em desktop, tablet e dispositivos móveis
- **Design moderno**: Interface intuitiva com cores profissionais
- **Validação de entrada**: Verifica se os valores estão corretos antes de calcular
- **Mensagens de feedback**: Exibe mensagens de sucesso e erro
- **Navegação suave**: Transições entre páginas sem recarregar
- **Internacionalização completa**: Suporte para Português, Inglês e Espanhol
- **Armazenamento local**: Lembrar o idioma escolhido do usuário
- **Sem dependências externas**: Utiliza apenas HTML, CSS e JavaScript puro

## Fórmulas Utilizadas

### Resistências
- **Série**: R_eq = R1 + R2 + R3 + R4 + R5
- **Paralelo**: R_eq = 1 / (1/R1 + 1/R2 + 1/R3 + 1/R4 + 1/R5)

### Capacitâncias
- **Série**: C_eq = 1 / (1/C1 + 1/C2 + 1/C3 + 1/C4 + 1/C5)
- **Paralelo**: C_eq = C1 + C2 + C3 + C4 + C5

### Indutâncias
- **Série**: L_eq = L1 + L2 + L3 + L4 + L5
- **Paralelo**: L_eq = 1 / (1/L1 + 1/L2 + 1/L3 + 1/L4 + 1/L5)

### Circuito RC
- Constante de tempo: τ = R × C
- Tensão no capacitor: Vc(t) = V × (1 - e^(-t/τ))
- Tensão no resistor: VR(t) = V - Vc(t)

### Circuito RL
- Constante de tempo: τ = L / R
- Corrente: I(t) = (V/R) × (1 - e^(-t/τ))
- Tensão no indutor: VL(t) = V × e^(-t/τ)
- Tensão no resistor: VR(t) = V × (1 - e^(-t/τ))

### Divisor de Tensão
- Fórmula geral: Vx = Vt × (Rx / (R1 + R2 + ... + Rn))
- Para dois resistores: Vx = Vt × (Rx / (R1 + R2))

### Divisor de Corrente
- Fórmula: I1 = (R2 / (R1 + R2)) × It
- Onde: I1 é a corrente no ramo 1, R1 é a resistência do ramo 1, R2 é a resistência do ramo 2, It é a corrente total

### Filtros
- **Passa-Baixa**: Fo = 1 / (2π × R × C)
- **Passa-Alta**: Fo = 1 / (2π × R × C)
- Onde: Fo é a frequência de corte em Hz, R é a resistência em Ω, C é a capacitância em F, π ≈ 3,14159

## Informações sobre Constante de Tempo

- **τ (tau)**: Tempo necessário para uma grandeza atingir 63,2% do seu valor final
- **Em 5τ**: O sistema está em regime permanente (99,3% do valor final)
- **Importância**: Essencial para análise de circuitos transitórios e projetos de filtros

## Navegadores Suportados

- Google Chrome (versão 90+)
- Mozilla Firefox (versão 88+)
- Microsoft Edge (versão 90+)
- Safari (versão 14+)

## Desenvolvimento

Este projeto foi desenvolvido utilizando:
- **HTML5**: Estrutura semântica
- **CSS3**: Estilos e layouts responsivos
- **JavaScript vanilla**: Cálculos e lógica da aplicação

Nenhuma biblioteca ou framework externo foi utilizado, garantindo leveza e rapidez da aplicação.

## Autor

Desenvolvido para estudantes e profissionais de engenharia elétrica.

Data de criação: 2026

## Licença

Uso gratuito para fins educacionais e profissionais.

## Dicas de Uso

1. **Para conversão de unidades**: 
   - 1 mF (milifarad) = 0.001 F
   - 1 μF (microfarad) = 0.000001 F
   - 1 nF (nanofarad) = 0.000000001 F

2. **Constante de tempo**:
   - Quanto menor a constante de tempo, mais rápida a resposta do circuito
   - Circuits analógicos comuns têm τ entre milissegundos e segundos

3. **Valores práticos**:
   - Resistências comuns: 1 Ω a 1 MΩ
   - Capacitâncias comuns: nF a μF
   - Indutâncias comuns: μH a H

## Suporte e Feedback

Para dúvidas ou sugestões sobre este projeto, consulte a documentação de engenharia elétrica ou entre em contato com profissionais especializados.
