let calScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    if(pos>100){
        scrollProgress.style.display = "grid";
    }
    else{
        scrollProgress.style.display = "none"
    }
    scrollProgress.addEventListener("click",() => {
        document.documentElement.scrollTop = 0;

    });
    scrollProgress.style.background = `conic-gradient(#ff004f ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calScrollValue;
window.onload = calScrollValue;



//Skill logo design------------------------------------------
const rating = document.getElementsByClassName('rating');
const block1 = document.getElementsByClassName('block1');
const block2 = document.getElementsByClassName('block2');
const block3 = document.getElementsByClassName('block3');
const block4 = document.getElementsByClassName('block4');

for(var i = 1; i<90; i++){
    rating[0].innerHTML += "<div class='block1'></div>";
    block1[i].style.transform = "rotate("+3.6* i +"deg)";
    block1[i].style.animationDelay = `${i/40}s`;
}
for(var i = 1; i<60; i++){
    rating[1].innerHTML += "<div class='block2'></div>";
    block2[i].style.transform = "rotate("+3.6* i +"deg)";
    block2[i].style.animationDelay = `${i/40}s`;
}
for(var i = 1; i<65; i++){
    rating[2].innerHTML += "<div class='block3'></div>";
    block3[i].style.transform = "rotate("+3.6* i +"deg)";
    block3[i].style.animationDelay = `${i/40}s`;
}
for(var i = 1; i<72; i++){
    rating[3].innerHTML += "<div class='block4'></div>";
    block4[i].style.transform = "rotate("+3.6* i +"deg)";
    block4[i].style.animationDelay = `${i/40}s`;
}
//animate the number


const counters=['.counter1','.counter2','.counter3','.counter4']
for(let j=0;j<4;j++){
    const counter = document.querySelector(counters[j]);
    counter.innerText = 0;

    const target = +counter.getAttribute('data-target');
    const NumberCounter1 = () => {
        const value = +counter.innerText;
        if(value < target){
            counter.innerText = Math.ceil(value + 1);
            setTimeout(() => {
                NumberCounter1()
            },25)
        }
    }
    NumberCounter1()
}



