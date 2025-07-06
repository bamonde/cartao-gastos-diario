#!/bin/bash

# Script de Deploy para Vercel
# Calculadora de Cartão de Crédito

echo "🚀 Iniciando deploy da Calculadora de Cartão de Crédito..."

# Verificar se o Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI não encontrado. Instalando..."
    npm install -g vercel
fi

# Verificar se está logado no Vercel
if ! vercel whoami &> /dev/null; then
    echo "🔐 Faça login no Vercel..."
    vercel login
fi

# Instalar dependências
echo "📦 Instalando dependências..."
yarn install

# Executar testes
echo "🧪 Executando testes..."
yarn test --watchAll=false --passWithNoTests

# Build da aplicação
echo "🔨 Fazendo build da aplicação..."
yarn build

# Deploy para produção
echo "🌐 Fazendo deploy para produção..."
vercel --prod

echo "✅ Deploy concluído com sucesso!"
echo "🌍 Acesse: https://calculadora-cartao.vercel.app"
