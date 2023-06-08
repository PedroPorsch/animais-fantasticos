export default function modal(){

const modal = document.querySelector('.modal-bg');
const botaoLogin = document.querySelector('.login');
const botaoFechar = document.querySelector('.botao-fechar');

if(modal && botaoLogin && botaoFechar ){

    function mostrarModal(e){

        e.preventDefault();
        modal.classList.toggle('active');
    
    }
    
    function fecharModal(e){
    
        if(e.target === modal){
            modal.classList.toggle('active')
        }
    
    }

    botaoFechar.addEventListener('click', mostrarModal)
    botaoLogin.addEventListener('click', mostrarModal);
    modal.addEventListener('click', fecharModal);
}




}