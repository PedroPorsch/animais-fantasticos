export default function dropdown(){

    const menuLi = document.querySelector('[data-dropdown]');
    const menuUl = document.querySelector('[data-dropdown] ul');
    const dropMenu = document.querySelector('#menuDrop');



    function mostrarMenu(e){
        e.preventDefault();
        dropMenu.classList.add('active')
        cliqueFora(this, () =>{
            menuUl.classList.remove('active')
        })
    }

    function cliqueFora(element, callback){
        const html = document.documentElement;
        html.addEventListener('click', cliqueForaRemvoer);
        function cliqueForaRemvoer(event){
            if(!element.contains(event.target)){
                callback();
            }
        }

    }

    menuLi.addEventListener('click', mostrarMenu);
  
}   