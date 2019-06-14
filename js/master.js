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

    var options2 = {
        height: 260,
        duration: 1500,
        interval: 30000,
        indicators: false
    }
    
    var el = document.querySelector('#slides-modal3-1');
    M.Slider.init(el, options);
    var instan = M.Slider.getInstance(el);
    instan.pause();

    var slider3_1 = document.querySelector('#slides-modal3-2-1');
    M.Slider.init(slider3_1, options2);
    var insSlider3_1 = M.Slider.getInstance(slider3_1);
    insSlider3_1.pause();

    var slider3_2 = document.querySelector('#slides-modal3-2-2');
    M.Slider.init(slider3_2, options2);
    var insSlider3_2 = M.Slider.getInstance(slider3_2);
    insSlider3_2.pause();

    var slider3_3 = document.querySelector('#slides-modal3-2-3');
    M.Slider.init(slider3_3, options2);
    var insSlider3_3 = M.Slider.getInstance(slider3_3);
    insSlider3_3.pause();
    
    var slider3_4 = document.querySelector('#slides-modal3-2-4');
    M.Slider.init(slider3_4, options2);
    var insSlider3_4 = M.Slider.getInstance(slider3_4);
    insSlider3_4.pause();

});

function btnModal2_1_1_6_1() {
    var elem = document.getElementById("imgModal2-1-1-6-1");
    elem.classList.remove("pulse");
    var text = document.getElementById("modal2-1-1-6_P2");
    text.style.display = "none";
    var text1 = document.getElementById("modal2-1-1-6_P0");
    text1.style.display = "table";
    var elem1 = document.getElementById("imgModal2-1-1-6-2");
    elem1.classList.add("pulse");
}


function btnModal2_1_1_6_2() {
    var elem = document.getElementById("imgModal2-1-1-6-2");
    elem.classList.remove("pulse");
    var text = document.getElementById("modal2-1-1-6_P0");
    text.style.display = "none";
    var text1 = document.getElementById("modal2-1-1-6_P1");
    text1.style.display = "table";
    var elem1 = document.getElementById("imgModal2-1-1-6-3");
    elem1.classList.add("pulse");
}

function btnModal2_1_1_6_3() {
    var elem = document.getElementById("imgModal2-1-1-6-3");
    elem.classList.remove("pulse");
    var text = document.getElementById("modal2-1-1-6_P1");
    text.style.display = "none";
    var text1 = document.getElementById("modal2-1-1-6_P2");
    text1.style.display = "table";
    var elem1 = document.getElementById("imgModal2-1-1-6-1");
    elem1.classList.add("pulse");
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
}

function btnModal2_1_1_1() {
    var elem_1 = document.getElementById("imgModal2-1-1-1");
    var elem_2 = document.getElementById("imgModal2-1-1-3");
    var elem_3 = document.getElementById("imgModal2-1-1-4");
    var elem_4 = document.getElementById("imgModal2-1-1-5");
    var elem_5 = document.getElementById("imgModal2-1-1-6");
    elem_1.classList.remove("pulse");
    elem_2.classList.remove("pulse");
    elem_3.classList.remove("pulse");
    elem_4.classList.remove("pulse");
    elem_5.classList.remove("pulse");
    var elem1 = document.getElementById("imgModal2-1-1-2");
    elem1.classList.add("pulse");
}

function btnModal2_1_1_2() {
    var elem_1 = document.getElementById("imgModal2-1-1-2");
    var elem_2 = document.getElementById("imgModal2-1-1-4");
    var elem_3 = document.getElementById("imgModal2-1-1-5");
    var elem_4 = document.getElementById("imgModal2-1-1-6");
    var elem_5 = document.getElementById("imgModal2-1-1-1");
    elem_1.classList.remove("pulse");
    elem_2.classList.remove("pulse");
    elem_3.classList.remove("pulse");
    elem_4.classList.remove("pulse");
    elem_5.classList.remove("pulse");
    var elem1 = document.getElementById("imgModal2-1-1-3");
    elem1.classList.add("pulse");
}

function btnModal2_1_1_3() {
    var elem_1 = document.getElementById("imgModal2-1-1-3");
    var elem_2 = document.getElementById("imgModal2-1-1-5");
    var elem_3 = document.getElementById("imgModal2-1-1-6");
    var elem_4 = document.getElementById("imgModal2-1-1-1");
    var elem_5 = document.getElementById("imgModal2-1-1-2");
    elem_1.classList.remove("pulse");
    elem_2.classList.remove("pulse");
    elem_3.classList.remove("pulse");
    elem_4.classList.remove("pulse");
    elem_5.classList.remove("pulse");
    var elem1 = document.getElementById("imgModal2-1-1-4");
    elem1.classList.add("pulse");
}

function btnModal2_1_1_4() {
    var elem_1 = document.getElementById("imgModal2-1-1-4");
    var elem_2 = document.getElementById("imgModal2-1-1-6");
    var elem_3 = document.getElementById("imgModal2-1-1-1");
    var elem_4 = document.getElementById("imgModal2-1-1-2");
    var elem_5 = document.getElementById("imgModal2-1-1-3");
    elem_1.classList.remove("pulse");
    elem_2.classList.remove("pulse");
    elem_3.classList.remove("pulse");
    elem_4.classList.remove("pulse");
    elem_5.classList.remove("pulse");
    var elem1 = document.getElementById("imgModal2-1-1-5");
    elem1.classList.add("pulse");
}

function btnModal2_1_1_5() {
    var elem_1 = document.getElementById("imgModal2-1-1-5");
    var elem_2 = document.getElementById("imgModal2-1-1-1");
    var elem_3 = document.getElementById("imgModal2-1-1-2");
    var elem_4 = document.getElementById("imgModal2-1-1-3");
    var elem_5 = document.getElementById("imgModal2-1-1-4");
    elem_1.classList.remove("pulse");
    elem_2.classList.remove("pulse");
    elem_3.classList.remove("pulse");
    elem_4.classList.remove("pulse");
    elem_5.classList.remove("pulse");
    var elem1 = document.getElementById("imgModal2-1-1-6");
    elem1.classList.add("pulse");
}

function btnModal2_1_1_6() {
    var elem_1 = document.getElementById("imgModal2-1-1-6");
    var elem_2 = document.getElementById("imgModal2-1-1-2");
    var elem_3 = document.getElementById("imgModal2-1-1-3");
    var elem_4 = document.getElementById("imgModal2-1-1-4");
    var elem_5 = document.getElementById("imgModal2-1-1-5");
    elem_1.classList.remove("pulse");
    elem_2.classList.remove("pulse");
    elem_3.classList.remove("pulse");
    elem_4.classList.remove("pulse");
    elem_5.classList.remove("pulse");
    var elem1 = document.getElementById("imgModal2-1-1-1");
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

// Para cambiar la img en el menu tab modal 3
//*******************************************************************
function changeIcon(ele1){
    var ele = document.querySelector('.menuTabs2 .tabs .tab a.active img');
    ele.src = "img/tab-inactive.png";
    var elem = document.getElementById(ele1);
    elem.src = "img/tab-active.png";
}

// Para el slider 1 en modal3-1
//*******************************************************************
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

// Para el slider 1 en menu tabs modal3-2
//*******************************************************************
function modal3_2_1_prev(){
    var ele = document.querySelector('#slides-modal3-2-1');
    var instance = M.Slider.getInstance(ele);
    instance.prev(-1);
    flechanext2();
}

function modal3_2_1_next(){
    var ele = document.querySelector('#slides-modal3-2-1');
    var instance = M.Slider.getInstance(ele);
    instance.next(1);
    flechaprev2();
}

function flechaprev2(){
    var el = document.querySelector('#slides-modal3-2-1 .slides li:nth-child(2).active');
    if(el != null){
        var elem = document.querySelector('#modal3-2-1-prev');
        elem.classList.remove("hide")
    }
    var ele = document.querySelector('#slides-modal3-2-1 .slides li:nth-child(4).active');
    if(ele != null){
        var elem = document.querySelector('#modal3-2-1-next');
        elem.classList.add("hide")
    }
}

function flechanext2(){
    var el = document.querySelector('#slides-modal3-2-1 .slides li:nth-child(1).active');
    if(el != null){
        var elem = document.querySelector('#modal3-2-1-prev');
        elem.classList.add("hide")
    }
    var ele = document.querySelector('#slides-modal3-2-1 .slides li:nth-child(3).active');
    if(ele != null){
        var elem = document.querySelector('#modal3-2-1-next');
        elem.classList.remove("hide")
    }
}

// Para el slider 2 en menu tabs modal3-2
//*******************************************************************
function modal3_2_2_prev(){
    var ele = document.querySelector('#slides-modal3-2-2');
    var instance = M.Slider.getInstance(ele);
    instance.prev(-1);
    flechanext3();
}

function modal3_2_2_next(){
    var ele = document.querySelector('#slides-modal3-2-2');
    var instance = M.Slider.getInstance(ele);
    instance.next(1);
    flechaprev3();
}

function flechaprev3(){
    var el = document.querySelector('#slides-modal3-2-2 .slides li:nth-child(2).active');
    if(el != null){
        var elem = document.querySelector('#modal3-2-2-prev');
        elem.classList.remove("hide")
    }
    var ele = document.querySelector('#slides-modal3-2-2 .slides li:nth-child(2).active');
    if(ele != null){
        var elem = document.querySelector('#modal3-2-2-next');
        elem.classList.add("hide")
    }
}

function flechanext3(){
    var el = document.querySelector('#slides-modal3-2-2 .slides li:nth-child(1).active');
    if(el != null){
        var elem = document.querySelector('#modal3-2-2-prev');
        elem.classList.add("hide")
    }
    var ele = document.querySelector('#slides-modal3-2-2 .slides li:nth-child(1).active');
    if(ele != null){
        var elem = document.querySelector('#modal3-2-2-next');
        elem.classList.remove("hide")
    }
}

// Para el slider 3 en menu tabs modal3-2
//*******************************************************************
function modal3_2_3_prev(){
    var ele = document.querySelector('#slides-modal3-2-3');
    var instance = M.Slider.getInstance(ele);
    instance.prev(-1);
    flechanext4();
}

function modal3_2_3_next(){
    var ele = document.querySelector('#slides-modal3-2-3');
    var instance = M.Slider.getInstance(ele);
    instance.next(1);
    flechaprev4();
}

function flechaprev4(){
    var el = document.querySelector('#slides-modal3-2-3 .slides li:nth-child(2).active');
    if(el != null){
        var elem = document.querySelector('#modal3-2-3-prev');
        elem.classList.remove("hide")
    }
    var ele = document.querySelector('#slides-modal3-2-3 .slides li:nth-child(2).active');
    if(ele != null){
        var elem = document.querySelector('#modal3-2-3-next');
        elem.classList.add("hide")
    }
}

function flechanext4(){
    var el = document.querySelector('#slides-modal3-2-3 .slides li:nth-child(1).active');
    if(el != null){
        var elem = document.querySelector('#modal3-2-3-prev');
        elem.classList.add("hide")
    }
    var ele = document.querySelector('#slides-modal3-2-3 .slides li:nth-child(1).active');
    if(ele != null){
        var elem = document.querySelector('#modal3-2-3-next');
        elem.classList.remove("hide")
    }
}

// Para el slider 4 en menu tabs modal3-2
//*******************************************************************
function modal3_2_4_prev(){
    var ele = document.querySelector('#slides-modal3-2-4');
    var instance = M.Slider.getInstance(ele);
    instance.prev(-1);
    flechanext5();
}

function modal3_2_4_next(){
    var ele = document.querySelector('#slides-modal3-2-4');
    var instance = M.Slider.getInstance(ele);
    instance.next(1);
    flechaprev5();
}

function flechaprev5(){
    var el = document.querySelector('#slides-modal3-2-4 .slides li:nth-child(2).active');
    if(el != null){
        var elem = document.querySelector('#modal3-2-4-prev');
        elem.classList.remove("hide")
    }
    var ele = document.querySelector('#slides-modal3-2-4 .slides li:nth-child(2).active');
    if(ele != null){
        var elem = document.querySelector('#modal3-2-4-next');
        elem.classList.add("hide")
    }
}

function flechanext5(){
    var el = document.querySelector('#slides-modal3-2-4 .slides li:nth-child(1).active');
    if(el != null){
        var elem = document.querySelector('#modal3-2-4-prev');
        elem.classList.add("hide")
    }
    var ele = document.querySelector('#slides-modal3-2-4 .slides li:nth-child(1).active');
    if(ele != null){
        var elem = document.querySelector('#modal3-2-4-next');
        elem.classList.remove("hide")
    }
}

function hide1(){
    var elem = document.getElementById("modal2-2-1P2");
    elem.classList.remove("hide");
    elem.classList.add("pulse");
    var elem1 = document.getElementById("modal2-2-1P1");
    elem1.classList.remove("pulse");
}

function hide2(){
    var elem = document.getElementById("modal2-2-1P3");
    elem.classList.remove("hide");
    elem.classList.add("pulse");
    var elem1 = document.getElementById("modal2-2-1P2");
    elem1.classList.remove("pulse");
}

function hide3(){
    var elem = document.getElementById("div-img");
    elem.classList.remove("hide");
    var elem1 = document.getElementById("modal2-2-1P3");
    elem1.classList.remove("pulse");
}

function hidden1(){
    var elem = document.getElementById("txtModal2-2-2-P2");
    elem.classList.remove("hide");
    elem.classList.add("pulse");
    var elem1 = document.getElementById("txtModal2-2-2-P1");
    elem1.classList.remove("pulse");
}

function hidden2(){
    var elem = document.getElementById("txtModal2-2-2-P3");
    elem.classList.remove("hide");
    var elem1 = document.getElementById("txtModal2-2-2-P2");
    elem1.classList.remove("pulse");
}

function removeHide(){
    var elem1 = document.getElementById("btn2-model2-3");
    elem1.classList.add("pulse");
    var elem2 = document.getElementById("textosModal2-3-P6");
    elem2.classList.add("hide");
    var elem3 = document.getElementById("textosModal2-3-P1");
    elem3.classList.remove("hide");
}
function removeHide1(){
    var elem = document.getElementById("btn2-model2-3");
    elem.classList.remove("pulse");
    var elem1 = document.getElementById("btn3-model2-3");
    elem1.classList.add("pulse");
    var elem2 = document.getElementById("textosModal2-3-P1");
    elem2.classList.add("hide");
    var elem3 = document.getElementById("textosModal2-3-P2");
    elem3.classList.remove("hide");
}

function removeHide2(){
    var elem = document.getElementById("btn3-model2-3");
    elem.classList.remove("pulse");
    var elem1 = document.getElementById("btn4-model2-3");
    elem1.classList.add("pulse");
    var elem2 = document.getElementById("textosModal2-3-P2");
    elem2.classList.add("hide");
    var elem3 = document.getElementById("textosModal2-3-P3");
    elem3.classList.remove("hide");
}

function removeHide3(){
    var elem = document.getElementById("btn4-model2-3");
    elem.classList.remove("pulse");
    var elem1 = document.getElementById("btn5-model2-3");
    elem1.classList.add("pulse");
    var elem2 = document.getElementById("textosModal2-3-P3");
    elem2.classList.add("hide");
    var elem3 = document.getElementById("textosModal2-3-P4");
    elem3.classList.remove("hide");
}

function removeHide4(){
    var elem = document.getElementById("btn5-model2-3");
    elem.classList.remove("pulse");
    var elem1 = document.getElementById("btn6-model2-3");
    elem1.classList.add("pulse");
    var elem2 = document.getElementById("textosModal2-3-P4");
    elem2.classList.add("hide");
    var elem3 = document.getElementById("textosModal2-3-P5");
    elem3.classList.remove("hide");
}

function removeHide5(){
    var elem = document.getElementById("btn6-model2-3");
    elem.classList.remove("pulse");
    var elem2 = document.getElementById("textosModal2-3-P5");
    elem2.classList.add("hide");
    var elem3 = document.getElementById("textosModal2-3-P6");
    elem3.classList.remove("hide");
}