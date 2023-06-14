export default function tabNav(){

    const imgs = document.querySelectorAll('.fotos img');
    const conteudoSections = document.querySelectorAll('.conteudo section')


    if(imgs && conteudoSections){

        function tabMenu(e){

            conteudoSections.forEach((item) =>{
                item.classList.remove('active')
            })
            const itemClicado = document.querySelector(`[data-content='${e.target.dataset.imagem}']`)
            console.log(itemClicado)
            itemClicado.classList.add('active')
    
        }
    
        imgs.forEach((img) =>{
            img.addEventListener('click', tabMenu);
        })

    }

    
    

}