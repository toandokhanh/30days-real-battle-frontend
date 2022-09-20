const imgElements = document.querySelectorAll('.image img')
const overViewElement = document.querySelector('.overview')
const iconCloseElement = document.querySelector('.overview__close i')
const imgOverViewElement = document.querySelector('.overview__img img')
const overViewLeftElement = document.querySelector('.overview__left')
const overViewRightElement = document.querySelector('.overview__right')
//show
const showOverView = () => {
    checkLeft();
    checkRight();
    imgOverViewElement.src = imgElements[curretIndex].src
    overViewElement.classList.add('active');
} 
//hidden
const hiddenOverView = () => {
    overViewElement.classList.remove('active');
}

//chuyển ảnh sang phải
const toTheRight = () => {
    if(curretIndex < imgElements.length - 1)
    ++curretIndex;
    showOverView();
}

//chuyển ảnh sang trái
const toTheLeft = () => {
    if (curretIndex > 0){
        --curretIndex;
        showOverView();

    }
}
// hàm kiêm tra
const checkLeft = () => {
    if(curretIndex == 0){
        overViewLeftElement.classList.add('hide')
    }else{
        overViewLeftElement.classList.remove('hide')
    }
}
const checkRight = () => {
    if(curretIndex == imgElements.length - 1){
        overViewRightElement.classList.add('hide')
    }else{
        overViewRightElement.classList.remove('hide')
    }
}
var curretIndex = 0;
imgElements.forEach((imgElement, index) => {
    imgElement.addEventListener('click',() => {
        curretIndex = index;
        showOverView();
    });
})

iconCloseElement.addEventListener('click',hiddenOverView);
overViewLeftElement.addEventListener('click',() => {
    toTheLeft();
});

overViewRightElement.addEventListener('click',() => {
    toTheRight();
});

// kiểm tra tương tác bàn phím của người dùng
document.onkeydown = (e) => {
    if(e.keyCode === 37){
        // toTheLeft();
        toTheLeft();
    }
    if(e.keyCode === 27){
        hiddenOverView();
    }
    if(e.keyCode === 39){
        // toTheLeft();
        toTheRight();

    }
}
