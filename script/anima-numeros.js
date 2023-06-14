export default function animaNumeros(){

    const numeros = document.querySelectorAll('[data-numero]')
    const obsTarget = document.querySelector('.numeros')


  function anima(){
    
    numeros.forEach((numero) =>{
        const total = +numero.innerText;
        const incremento = Math.floor(total / 100);

        let start = 0;
        const timer = setInterval(() =>{
            start += incremento;
            numero.innerText = start;
        if(start > total){
            numero.innerText = total
            clearInterval(timer);
        }
        }, 12)

    })

  }
   

    function handleMutation(mutation){
        if(mutation[0].target.classList.contains('active')){
            obs.disconnect()
            anima()
        }
    }

    const obs = new MutationObserver(handleMutation)

    obs.observe(obsTarget,  {attributes:true})

}