export default function menuMobile(){

    const btnMenu = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');

    function addClass(e){
        
        e.preventDefault();
        menuList.classList.add('active')
        btnMenu.classList.add('active')
        outsideClick(menuList, () =>{
            menuList.classList.remove('active');
            btnMenu.classList.remove('active');
        })

    }

    function outsideClick(element, callback){
        const html = document.documentElement;
        setTimeout (()=> {
            html.addEventListener('click', remover);
        })
        function remover(e){
            if (e.target !== element && !element.contains(e.target)) {
                callback();
                html.removeEventListener('click', remover); 
            }

    }
}
btnMenu.addEventListener('click', addClass);

}