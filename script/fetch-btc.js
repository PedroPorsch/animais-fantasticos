export default function fetchBtc(){

    const spanBtc = document.querySelector('#btc');

    async function fetchBtc(){

       const priceBtc = await fetch('https://blockchain.info/ticker').then((r) =>{
            return r.json()
        }).then((r) =>{
            return 100 / r.BRL.buy;
        })
        spanBtc.innerText = priceBtc.toFixed(5) + ' ';
    }

    fetchBtc()

}