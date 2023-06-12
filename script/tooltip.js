export default function tooltip(){

    const tooltips = document.querySelectorAll('[data-tooltip]');

    function onMouseOver(e){

        const tooltipBox = criarTooltipBox(this);


        OnMouseLeave.tooltipBox = tooltipBox;
        OnMouseLeave.element = this;

        OnMouseMove.tooltipBox = tooltipBox;
        this.addEventListener('mousemove', OnMouseMove);

        this.addEventListener('mouseleave', OnMouseLeave);
    }

    const OnMouseLeave = {
        handleEvent(){
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave', OnMouseLeave);
            this.element.removeEventListener('mousemove', OnMouseMove);

        }
    }

    const OnMouseMove = {
        handleEvent(e){
            this.tooltipBox.style.left = e.pageX + 20 + 'px';
            this.tooltipBox.style.top = e.pageY + 20 + 'px';
        }
    }

    function criarTooltipBox(element){

        let tooltipBox = document.createElement('div');
        let texto = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = texto;
        document.body.appendChild(tooltipBox);
        return tooltipBox;
    }

    

    tooltips.forEach((e) =>{
        e.addEventListener('mouseover', onMouseOver)
    })


}