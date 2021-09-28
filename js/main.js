
window.onload = function () {

    let k = 0;
    let i = 0;

    // var img = new Image();
    // img.src = 'img/girls/card/1.jpg';
    // img.onload = function () {
    //     check = true;
    // };

    // setTimeout(() => {
    //     console.log(check);
    // }, 0)



    setTimeout(() => {
        for (const item of document.querySelectorAll('.master_item')) {
            k++;
            setTimeout(() => {
                i++;
                var imageUrl = `img/girls/big/${k}/${i}.jpg`;
                imageExists(imageUrl, function (exists) {
                    if (exists) {
                        console.log(1);
                    }
                    else {
                        k++;
                        i = 0;
                    }
                    console.log('RESULT: url=' + imageUrl + ', exists=' + exists);
                });


            }, 100)

        }
    }, 100)

    function imageExists(url, callback) {
        var img = new Image();
        img.onload = function () { callback(true); };
        img.onerror = function () { callback(false); };
        img.src = url;
    }

    // Sample usage



    // function loadImg(item, n) {
    //     for (let m = 2; m <= 5; m++) {
    //         let img = new Image();
    //         img.src = `img/girls/big/${n}-${m}.jpg`;

    //         img.onload = function () {
    //             console.log(n, m);
    //             console.log('true');
    //             item.insertAdjacentHTML('beforeend', ` <div class="img_warp-${n}-${m} none "  data-fancybox="girl-${n}" data-src="img/girls/big/${n}-${m}.jpg"><div>`);
    //         };
    //         img.onerror = function () {
    //             k++;
    //             console.log(n, m);
    //             console.log('false');
    //         };
    //     }

    // }
};

