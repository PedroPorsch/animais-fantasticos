export default function animacaoScroll(){

        const areas = document.querySelectorAll('.js-scroll');


        if(areas){
            function animaScroll(e){
        
                areas.forEach((area) =>{
                    const areaTop = area.getBoundingClientRect().top ;
                    const metade = window.innerHeight * 0.6;
                    if(areaTop < metade){
                        area.classList.add('active');
                    }else{
                        area.classList.remove('active');
                    }
                })
        
            }
        
            window.addEventListener('scroll', animaScroll);
            animaScroll();
        
        }

        


}