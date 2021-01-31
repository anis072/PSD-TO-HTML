//    var imgWidth = window.innerHeight;
    var imgWidth =1080;
    var active = 1;
    var slider = document.getElementsByClassName("sliderLong")[0];
    var sliderLong = slider.children[0];
    var slides = slider.children;

    var myanimation = new Animator(sliderLong);

    var sliding = false;

    var navElement = document.getElementsByClassName('slider')[0];
    var navigate = new Navigator(navElement);
    navigate.generateNavigator(slides.length);
    navigate.mark(active);

    function slide() {
        if(myanimation.animation==false){
            active = active == slides.length ? active = 1 : ++active;
            var ml = (imgWidth * (active-1) * -1);
            myanimation.animate("margin-top",ml,1000);    
            navigate.mark(active);
        }

    }

    var intervalId=setInterval(slide, 3000);



    function changeSlide(slideIndex){
        myanimation.finishAnimation();
        window.clearInterval(intervalId);
        active = slideIndex+1;
        var ml = (imgWidth * (active-1) * -1);
        myanimation.animate("margin-top",ml,1000);
        navigate.mark(active);	
        intervalId=setInterval(slide, 3000);

    }
