/*
Utilização: colar no console do chrome. 
Passe como parâmetros da função a mensagem e a quantidade de vezes que quer mandá-la.
*/

((mensagem = 'Mensagem de teste', quantidadeDeVezes = 1) => {
  const caixaTexto = document.querySelector('._2S1VP')

  for (let i = 0; i < quantidadeDeVezes; i++) {
    caixaTexto.innerHTML = mensagem

    caixaTexto.dispatchEvent(new Event('input', { bubbles: true }))
  
    const botao = document.querySelector('._35EW6')
    botao.click()
  }

})()

// Versão minificada:
((a,b)=>{var c=document.querySelector('._2S1VP');for(var d=0;d<b;d++)c.innerHTML=a,c.dispatchEvent(new Event('input',{bubbles:!0})),document.querySelector('._35EW6').click()})('mensagem', 2);
