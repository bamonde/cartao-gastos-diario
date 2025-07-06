# Calculadora de Gasto Diário - Cartão de Crédito

Uma aplicação web desenvolvida em React para calcular o valor máximo que pode ser gasto diariamente no cartão de crédito, baseado no valor atual da fatura, limite do cartão e data de fechamento.

## 📋 Descrição do Projeto

Esta calculadora ajuda os usuários a gerenciar seus gastos no cartão de crédito de forma inteligente. Com base em três parâmetros principais, a aplicação calcula automaticamente o valor diário máximo que pode ser gasto sem ultrapassar o limite do cartão.

### Funcionalidades Principais

- ✅ **Cálculo automático** do valor diário máximo de gastos
- ✅ **Interface responsiva** que funciona em desktop e mobile
- ✅ **Salvamento automático** dos dados no navegador (localStorage)
- ✅ **Restauração automática** dos dados ao reabrir a aplicação
- ✅ **Formatação de moeda** brasileira (R$)
- ✅ **Design moderno** com Bootstrap e animações

### Fórmula de Cálculo

```
VDM = VD ÷ DR

Onde:
- VDM = Valor Diário Máximo
- VD = Valor Disponível (VMF - VAF)
- DR = Dias Restantes (Data de Fechamento - Data Atual)
- VMF = Valor Máximo da Fatura
- VAF = Valor Atual da Fatura
```

## 🛠️ Stack Tecnológica

### Frontend
- **React 19.1.0** - Biblioteca JavaScript para construção de interfaces
- **Bootstrap 5.3.7** - Framework CSS para design responsivo
- **Bootstrap Icons** - Ícones para interface
- **CSS3** - Estilos customizados com animações

### Gerenciamento de Pacotes
- **Yarn** - Gerenciador de dependências JavaScript

### Desenvolvimento
- **Create React App** - Ferramenta para inicialização de projetos React
- **ESLint** - Linter para qualidade de código
- **Webpack** - Bundler de módulos (configurado pelo CRA)

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- Yarn (recomendado) ou npm

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd calculadora-cartao
   ```

2. **Instale as dependências**
   ```bash
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   yarn start
   ```

4. **Acesse a aplicação**
   - Abra [http://localhost:3000](http://localhost:3000) no seu navegador
   - A aplicação recarregará automaticamente quando você fizer alterações

### Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento
yarn start

# Cria build de produção
yarn build

# Executa os testes
yarn test

# Ejetar configurações (não recomendado)
yarn eject
```

## 📱 Como Usar

1. **Preencha os dados:**
   - **Valor Atual da Fatura (VAF)**: Digite quanto já gastou no cartão
   - **Valor Máximo da Fatura (VMF)**: Digite o limite do seu cartão
   - **Data de Fechamento (DF)**: Selecione quando fecha a fatura

2. **Visualize os resultados:**
   - O **Valor Diário Máximo** será calculado automaticamente
   - Você verá também o **Valor Disponível** e **Dias Restantes**
   - Os dados são salvos automaticamente no navegador

3. **Gerencie seus dados:**
   - Use o botão de lixeira para limpar todos os dados salvos
   - Os dados são restaurados automaticamente ao reabrir a aplicação

## 🎨 Interface

A aplicação possui uma interface moderna e intuitiva:

- **Design responsivo** que se adapta a diferentes tamanhos de tela
- **Gradientes e animações** para uma experiência visual agradável
- **Cores semânticas** (verde para sucesso, azul para informações)
- **Ícones intuitivos** do Bootstrap Icons
- **Formatação de moeda** brasileira

## 💾 Armazenamento de Dados

A aplicação utiliza o **localStorage** do navegador para:

- Salvar automaticamente os dados inseridos
- Restaurar os dados ao reabrir a aplicação
- Manter a privacidade (dados ficam apenas no seu navegador)

## 📦 Estrutura do Projeto

```
calculadora-cartao/
├── public/
│   ├── index.html          # HTML principal
│   └── manifest.json       # Configuração PWA
├── src/
│   ├── App.js             # Componente principal
│   ├── App.css            # Estilos da aplicação
│   ├── index.js           # Ponto de entrada
│   └── index.css          # Estilos globais
├── package.json           # Dependências e scripts
├── yarn.lock             # Versões fixas das dependências
└── README.md             # Este arquivo
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

### Licença MIT

```
MIT License

Copyright (c) 2024 Calculadora de Cartão de Crédito

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Suporte

Se você encontrar algum problema ou tiver sugestões, por favor:

1. Verifique se o problema já foi reportado nas [Issues](../../issues)
2. Crie uma nova issue com detalhes do problema
3. Inclua informações sobre seu navegador e sistema operacional

---

**Desenvolvido com ❤️ para ajudar no controle financeiro pessoal**
