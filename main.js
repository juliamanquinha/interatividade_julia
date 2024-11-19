//seleciona os elementos necessários
const botao = document.getElementById('botao')
const lampada = document.getElementById('lampada')
const statusTexto = document.getElementById('status')

//Função para alternar o estado da lâmpada
function alternarlampada() {
    if (botao.textContent == 'Ligar') {
        //muda para o estado acesso
        lampada.src = 'Ligado.png'; //Caminho da imagem acesa
        botao.textContent = 'Desligar'; //Muda o texto do botão para apagar
        statusTexto.textContent = 'Aceso';//Muda o status para'aceso'   
        statusTexto.style.color = 'Orange'; //Muda a co do texto para laranja
        statusTexto.style.fontSize = '30px'

     }else{
        //Muda para o estado "apagado"
        lampada.src = "Apagado.png"; // Caminho da imagem apagada
        botao.textContent = 'Ligar'; //Muda o texto do botao para "ligar"
        statusTexto.textContent = 'Apagado'; //Muda o status para apagado
        statusTexto.style.fontSize = '30px' 
        statusTexto.style.color = 'rgb( 126, 125, 125)' //Muda a cor do texto para cinza
     }
}

//adiciona o evento de clique ao botão
botao.addEventListener('click', alternarlampada)