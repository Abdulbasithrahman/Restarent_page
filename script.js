var imagecarousel_slider = function (){
    var img_coro = document.getElementById("image-carousel");
    var img_width = img_coro.offsetWidth;
    var img_cont = document.getElementById("slide-container");
    var count = 1;
    var img_items = img_cont.querySelectorAll('li').length;
    var prev_img = document.getElementById("prev-image");
    var next_img = document.getElementById("next-image");

window.addEventListener('resize', function(){
    img_width = img_coro.offsetWidth;
});

var previmageslide = function (){
    if(count > 1){
        count = count -2;
        img_cont.style.left = "-" + count * img_width + "px";
        count++;
    }
};

var nextimageslide = function (){
     if(count < img_items){
        img_cont.style.left = "-" + count * img_width +"px";
        count++;
     }
     else if(count == img_items){
        img_cont.style.left = "0px";
        count = 1;
     }
};

next_img.addEventListener("click", function (){
    nextimageslide();
});

prev_img.addEventListener("click", function (){
    previmageslide();
});

setInterval(function (){
  nextimageslide();
},3000);
};

window.onload = function (){
    imagecarousel_slider();
};

var coll = document.getElementsByClassName('collapsible');
var i;

for(i=0;i<coll.length;i++){
    coll[i].addEventListener('click',function(){
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if(content.style.display =='block'){
            content.style.display='none';
        }
        else{
            content.style.display ='block';
        }
    })
}
