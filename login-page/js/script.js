






let eyeimg = document.querySelector('.pass-visibility');
let passinput = document.querySelector('.pass-input');

eyeimg.addEventListener('click',function(){

    let passInputType = passinput.getAttribute('type');

    if(passInputType=='password'){
        eyeimg.setAttribute('src','images/invisible-eye.png');
        passinput.setAttribute('type','text');
    }
    
    else{
        passinput.setAttribute('type','password');
        eyeimg.setAttribute('src','images/visible-eye.png');
    }
});

passinput.addEventListener('keyup',function (){
    let passinputlength = passinput.value.length;
    if(passinputlength==0){
        eyeimg.style.display = 'none';
    }else{
        eyeimg.style.display = 'inline-block';
    }

})

