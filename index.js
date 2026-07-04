// Banco de dados de perguntas e respostas adicionais//
 const bancoPerguntas = [ 
    { 

    pergunta: "Qual técnica ajuda o Agro Forte a produzir reduzindo o impacto ambiental?",
    opcoes: [
     { texto: "Monocultura intensiva contínua", resposta: "errado" },
     { texto: "Plantio Direto e Integração Lavoura-Pecuária-Floresta", resposta: "correto" },
     { texto: "Uso indiscriminado de defensivos agrícolas", resposta: "errado" },
     { texto: "Queimadas controladas anuais", resposta: "errado" }
    ],
     explicacao: "🌱 Correto! O Plantio Direto protege o solo e a Integração (ILPF) recupera áreas degradadas capturando carbono da atmosfera.",
     mostrarGrafico: false
     }
     ];

     let perguntaAtualIndex = 0; 
     const quizContent = document.getElementById('quiz-content');
    const textoResultado = document.getElementById('resultado'); 
    const graficoContainer = document.getElementById('grafico-container'); 
    const btnProxima = document.getElementById('btn-proxima');
     
    // Função que gerencia o clique nas opções//
    
     function configurarCliquesOpcoes() {
     const botoesOpcao = document.querySelectorAll('.opcao-btn'); 

     botoesOpcao.forEach(botao => { 
    botao.addEventListener('click', () => { 
    const tipoResposta = botao.getAttribute('data-respota');

   // Trava os botões para não clicar duas vezes
   botoesOpcao.forEach(b => b.disabled = true); 
  
  // Pergunta 1 fixa (Mostra o gráfico)

   if (perguntaAtualIndex === 0) { 
    graficoContainer.classList.remove('escondido');
    btnProxima.classList.remove('escondido');

     if (tipoResposta === 'correto') { 
    textoResultado.style.color = '#1b5e20'; 
    textoResultado.textContent = '🌱 Correto! Veja o gráfico abaixo: a mudança de uso da terra (desmatamento) lidera as emissões nacionais.';
     
    }else{
    textoResultado.style.color = '#b71c1c'; 
    textoResultado.textContent = '❌ Incorreto. Analise os dados reais do gráfico abaixo para entender as maiores fontes de emissões.'; 
    
}
}else{
     // Perguntas seguintes vindas do banco de dados
     const dadosAtual = bancoPerguntas[perguntaAtualIndex - 1]; 
     if (tipoResposta === 'correto') { textoResultado.style.color = '#1b5e20';
     textoResultado.textContent = dadosAtual.explicacao;
    
    } else{ 
    textoResultado.style.color = '#b71c1c';
     textoResultado.textContent = "❌ Incorreto. O correto seria práticas sustentáveis como o Plantio Direto e a ILPF.";
    }
    btnProxima.classList.add('escondido'); // Fim do Quiz curto
     }
     }); 
    }); 
}
 // Inicializa a primeira rodada
configurarCliquesOpcoes(); 
// // Avança para a próxima pergunta
   btnProxima.addEventListener('click', () => {
     perguntaAtualIndex++;
      graficoContainer.classList.add('escondido');
       btnProxima.classList.add('escondido');
    textoResultado.textContent = "";

        const proximaQuestao = bancoPerguntas[perguntaAtualIndex - 1];
 // Gera o HTML da nova pergunta de forma limpa e compacta 
   quizContent.innerHTML = `
    <p id="pergunta">${proximaQuestao.pergunta}</p>
     <div class="opcoes">
      ${proximaQuestao.opcoes.map(op => ` 
        <button class="opcao-btn" data-resposta="${op.resposta}">${op.texto}</button>
         `).join('')}
         </div>
          `; 
          configurarCliquesOpcoes();
         }); 
// Acessibilidade: Botão de Aumentar Fonte
     const btnFonte = document.getElementById('btn-fonte');
      btnFonte.addEventListener('click', () => { 
    document.body.classList.toggle('fonte-grande'); 
    btnFonte.textContent = document.body.classList.contains('fonte-grande') ? 'A- Diminuir Fonte' : 'A+ Aumentar Fonte';
 });
