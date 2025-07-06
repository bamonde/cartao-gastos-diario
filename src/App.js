import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [valorAtualFatura, setValorAtualFatura] = useState('');
  const [valorMaximoFatura, setValorMaximoFatura] = useState('');
  const [dataFechamento, setDataFechamento] = useState('');
  const [valorDiarioMaximo, setValorDiarioMaximo] = useState(null);
  const [valorDisponivel, setValorDisponivel] = useState(null);
  const [diasRestantes, setDiasRestantes] = useState(null);

  // Função para salvar dados no localStorage
  const salvarDados = useCallback((dados) => {
    try {
      localStorage.setItem('calculadoraCartao', JSON.stringify(dados));
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
  }, []);

  // Função para carregar dados do localStorage
  const carregarDados = useCallback(() => {
    try {
      const dadosSalvos = localStorage.getItem('calculadoraCartao');
      if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);
        setValorAtualFatura(dados.valorAtualFatura || '');
        setValorMaximoFatura(dados.valorMaximoFatura || '');
        setDataFechamento(dados.dataFechamento || '');
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  }, []);

  // Função para limpar dados salvos
  const limparDados = useCallback(() => {
    try {
      localStorage.removeItem('calculadoraCartao');
      setValorAtualFatura('');
      setValorMaximoFatura('');
      setDataFechamento('');
      setValorDiarioMaximo(null);
      setValorDisponivel(null);
      setDiasRestantes(null);
    } catch (error) {
      console.error('Erro ao limpar dados:', error);
    }
  }, []);

  const calcularValorDiario = useCallback(() => {
    if (!valorAtualFatura || !valorMaximoFatura || !dataFechamento) {
      return;
    }

    const vaf = parseFloat(valorAtualFatura);
    const vmf = parseFloat(valorMaximoFatura);
    const df = new Date(dataFechamento);
    const dataAtual = new Date();

    // Calcular valor disponível (vd)
    const vd = vmf - vaf;

    // Calcular dias restantes (dr)
    const diffTime = df.getTime() - dataAtual.getTime();
    const dr = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Calcular valor diário máximo (vdm)
    const vdm = dr > 0 ? vd / dr : 0;

    setValorDisponivel(vd);
    setDiasRestantes(dr);
    setValorDiarioMaximo(vdm);
  }, [valorAtualFatura, valorMaximoFatura, dataFechamento]);

  // Carregar dados salvos quando o componente montar
  useEffect(() => {
    carregarDados();
  }, [carregarDados]);

  // Calcular valor diário quando os dados mudarem
  useEffect(() => {
    calcularValorDiario();
  }, [calcularValorDiario]);

  // Salvar dados sempre que os valores mudarem
  useEffect(() => {
    if (valorAtualFatura || valorMaximoFatura || dataFechamento) {
      salvarDados({
        valorAtualFatura,
        valorMaximoFatura,
        dataFechamento,
        ultimaAtualizacao: new Date().toISOString()
      });
    }
  }, [valorAtualFatura, valorMaximoFatura, dataFechamento, salvarDados]);

  const formatarMoeda = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h2 className="text-center mb-0">
                <i className="bi bi-credit-card me-2"></i>
                Calculadora de Gasto Diário<br />Cartão de Crédito
              </h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label htmlFor="valorAtualFatura" className="form-label fw-bold">
                      Valor Atual da Fatura
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">R$</span>
                      <input
                        type="number"
                        className="form-control"
                        id="valorAtualFatura"
                        value={valorAtualFatura}
                        onChange={(e) => setValorAtualFatura(e.target.value)}
                        placeholder="0,00"
                        step="0.01"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="valorMaximoFatura" className="form-label fw-bold">
                      Valor Máximo da Fatura
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">R$</span>
                      <input
                        type="number"
                        className="form-control"
                        id="valorMaximoFatura"
                        value={valorMaximoFatura}
                        onChange={(e) => setValorMaximoFatura(e.target.value)}
                        placeholder="0,00"
                        step="0.01"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="dataFechamento" className="form-label fw-bold">
                      Data de Fechamento
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="dataFechamento"
                      value={dataFechamento}
                      onChange={(e) => setDataFechamento(e.target.value)}
                    />
                  </div>

                  {/* Indicador de dados salvos com botão de limpar */}
                  {(valorAtualFatura || valorMaximoFatura || dataFechamento) && (
                    <div className="alert alert-success alert-sm d-flex justify-content-between align-items-center">
                      <div>
                        <i className="bi bi-check-circle me-2"></i>
                        Dados salvos automaticamente
                      </div>
                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={limparDados}
                        title="Limpar dados salvos"
                      >
                        <i className="bi bi-trash me-1"></i>
                        Limpar
                      </button>
                    </div>
                  )}
                </div>

                <div className="col-md-12">
                  <div className="card bg-light">
                    <div className="card-body">
                      <h5 className="card-title text-center mb-4">Resultados</h5>

                      {valorDiarioMaximo !== null && (
                        <>
                          <div className="text-center mb-4">
                            <h3 className="text-success fw-bold">
                              Valor Diário Máximo
                            </h3>
                            <div className="display-4 text-success fw-bold">
                              {formatarMoeda(valorDiarioMaximo)}
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-6">
                              <div className="text-center">
                                <h6 className="text-muted">Valor Disponível</h6>
                                <p className="h5 text-primary fw-bold">
                                  {formatarMoeda(valorDisponivel)}
                                </p>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="text-center">
                                <h6 className="text-muted">Dias Restantes</h6>
                                <p className="h5 text-info fw-bold">
                                  {diasRestantes} dias
                                </p>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {valorDiarioMaximo === null && (
                        <div className="text-center text-muted">
                          <i className="bi bi-calculator display-1"></i>
                          <p className="mt-3">Preencha os dados para calcular</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
