document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {
        inDuration: 2000
    });

    var elem = document.querySelectorAll('.tabs');
    M.Tabs.init(elem);

    var options = {
        height: 350,
        duration: 1500
    }
    
    var ele = document.querySelector('.slider');
    M.Slider.init(ele, options);
    var instance = M.Slider.getInstance(ele);
    instance.pause();
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