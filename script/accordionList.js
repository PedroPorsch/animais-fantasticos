export default function accordionList(){

    const perguntas = document.querySelectorAll('.faq dt')

    function toggleClass(e){
        e.target.nextElementSibling.classList.toggle('active')
    }

    perguntas.forEach((e) =>{
        e.addEventListener('click', toggleClass);
    })
}