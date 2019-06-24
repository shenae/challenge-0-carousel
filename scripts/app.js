var carouselIndex = 1

const showImages=(n)=> { 
    let x = document.getElementsByClassName("these-slides");
    let i;
    if(n >x.length) {
        carouselIndex = 1
    }
    if (n < 1) {
        carouselIndex = x.length}
        for (i = 0; i < x.length; i++){
            x[i].style.display = "none";
        }
        x[carouselIndex-1].style.display = "block";
    }
    function rotateImages(n){
        showImages(carouselIndex += n);
    }
    showImages(carouselIndex);