document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {
        inDuration: 2000
    });

    var elem = document.querySelectorAll('.tabs');
    M.Tabs.init(elem);

    var options = {
        height: 350,
        duration: 1500,
        interval: 30000,
        indicators: false
    }
    
    var el = document.querySelector('#slides-modal3-1');
    M.Slider.init(el, options);
    var instan = M.Slider.getInstance(el);
    instan.pause();

});

function prev(){
    var ele = document.querySelector('.slider');
    var instance = M.Slider.getInstance(ele);
    instance.prev(-1);
    var elem = document.getElementById("prev");
    elem.classList.add("hide");
    var elem1 = document.getElementById("next");
    elem1.classList.remove("hide");
}

function next(){
    var ele = document.querySelector('.slider');
    var instance = M.Slider.getInstance(ele);
    instance.next(1);
    var elem = document.getElementById("next");
    elem.classList.add("hide");
    var elem1 = document.getElementById("prev");
    elem1.classList.remove("hide");
}

function modal3_1_prev(){
    var ele = document.querySelector('#slides-modal3-1');
    var instance = M.Slider.getInstance(ele);
    instance.prev(-1);
    flechanext();
}

function modal3_1_next(){
    var ele = document.querySelector('#slides-modal3-1');
    var instance = M.Slider.getInstance(ele);
    instance.next(1);
    flechaprev();
}

function flechaprev(){
    var el = document.querySelector('#slides-modal3-1 .slides li:nth-child(2).active');
    if(el != null){
        var elem = document.querySelector('#modal3-1-prev');
        elem.classList.remove("hide")
    }
    var ele = document.querySelector('#slides-modal3-1 .slides li:nth-child(5).active');
    if(ele != null){
        var elem = document.querySelector('#modal3-1-next');
        elem.classList.add("hide")
    }
}

function flechanext(){
    var el = document.querySelector('#slides-modal3-1 .slides li:nth-child(1).active');
    if(el != null){
        var elem = document.querySelector('#modal3-1-prev');
        elem.classList.add("hide")
    }
    var ele = document.querySelector('#slides-modal3-1 .slides li:nth-child(4).active');
    if(ele != null){
        var elem = document.querySelector('#modal3-1-next');
        elem.classList.remove("hide")
    }
}

function btnModal1(){
    var elem = document.getElementById("btnModal1");
    elem.classList.remove("pulse");
    var elem1 = document.getElementById("btnModal3");
    elem1.classList.remove("pulse");
    var elem2 = document.getElementById("btnModal2");
    elem2.classList.add("pulse");
}

function btnModal2(){
    var elem = document.getElementById("btnModal1");
    elem.classList.remove("pulse");
    var elem1 = document.getElementById("btnModal2");
    elem1.classList.remove("pulse");
    var elem2 = document.getElementById("btnModal3");
    elem2.classList.add("pulse");
}

function btnModal3(){
    var elem = document.getElementById("btnModal1");
    elem.classList.remove("pulse");
    var elem1 = document.getElementById("btnModal2");
    elem1.classList.remove("pulse");
    var elem2 = document.getElementById("btnModal3");
    elem2.classList.remove("pulse");
}

function hideIntro(){
    var elem = document.getElementById("intro");
    elem.classList.add("hide");
}

function showIntro(){
    var elem = document.getElementById("intro");
    elem.classList.remove("hide");
}

function btnModal2_1(){
    var elem = document.getElementById("imgModal2-1");
    elem.classList.remove("pulse");
    var elem1 = document.getElementById("imgModal2-2");
    elem1.classList.add("pulse");
}

function btnModal2_2(){
    var elem = document.getElementById("imgModal2-2");
    elem.classList.remove("pulse");
    var elem1 = document.getElementById("imgModal2-3");
    elem1.classList.add("pulse");
}

function btnModal2_3() {
    var elem = document.getElementById("imgModal2-3");
    elem.classList.remove("pulse");
    var elem1 = document.getElementById("imgModal2-4");
    elem1.classList.add("pulse");
}

function btnModal2_1_1_1() {
    var elem = document.getElementById("imgModal2-1-1-1");
    elem.classList.remove("pulse");
    var elem1 = document.getElementById("imgModal2-1-1-2");
    elem1.classList.add("pulse");
}

function btnModal2_1_1_2() {
    var elem = document.getElementById("imgModal2-1-1-2");
    elem.classList.remove("pulse");
    var elem1 = document.getElementById("imgModal2-1-1-3");
    elem1.classList.add("pulse");
}

function btnModal3_1(){
    var elem = document.getElementById("imgModal3-1");
    elem.classList.remove("pulse");
    var elem1 = document.getElementById("imgModal3-2");
    elem1.classList.add("pulse");
}

function btnModal3_2(){
    var elem = document.getElementById("imgModal3-2");
    elem.classList.remove("pulse");
}