var Note = new Vue({
    el: '#note',
    data: {
        // state === true : 오픈
        // state === false : 미 오픈
        status: false
    }
})

$(document).scroll(function (){
    if (Note.status === false){
        if ($(document).scrollTop() >= 5) {
            document.getElementById('card-content').style.animationName="card-fadeIn";
            document.getElementById('card-fa').style.animationPlayState="paused";
            Note.status = true;
        }
    }
    else {
        if ($(document).scrollTop() < 1) {
            document.getElementById('card-content').style.animationName="card-fadeOut";
            document.getElementById('card-fa').style.animationPlayState="initial";
            Note.status = false;
        } 
    }
});