window.onload = function (){
    let k=0;
    for (const item of document.querySelectorAll('.master_item')) {
        k++;
        for (let i = 2; i <= 3; i++) {
            item.insertAdjacentHTML('beforeend', `  <div class="img_warp none " data-fancybox="girl-${k}" data-src="img/girls/big/${k}-${i}.jpg"><div>`)
            console.log(k,i)
        }
    }
};