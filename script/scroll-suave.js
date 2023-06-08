export default function scrollSuave(){
    
    const links = document.querySelectorAll('.links');

    if(links){

        function scrollTo(e){

            e.preventDefault();
            const elemento = document.getElementById(e.target.innerText.toLowerCase());
    
            const opcoes = {
                behavior: 'smooth',
                block: 'start'
            }
    
            elemento.scrollIntoView(opcoes)
        }
    
        links.forEach((link) =>{
            link.addEventListener('click', scrollTo);
        })
    

    }


    
}