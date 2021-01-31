function Counter(element){
    var counterElement = element;
    
    var finalValue = counterElement.getElementsByTagName('p')[0].innerHTML;
   finalValue = finalValue.replace(/\./g,'');
    console.log(finalValue);
//    var finalValue = 3192989;
    var initialValue = 0;
    var step = 113;
    var counte
  //  console.log(finalValue);
    
    function getPos(el) {
    // yay readability
        for (var lx=0, ly=0;
            el != null;
            lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
        return {x: lx,y: ly};
    }
    var requiredScroll = getPos(counterElement).y;
    window.addEventListener('scroll',startCounter,true);


    function getFormat(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1.$2");
        return x;
        }

    
    
    function startCounter(){
        var top = document.documentElement.scrollTop;
        var screenHeight = screen.availHeight;
        if(top+screenHeight>= requiredScroll){
            var intervalid = setInterval(function(){
                if(initialValue>finalValue){
                    initialValue = finalValue;
                    window.removeEventListener('scroll',startCounter,true);
                    clearInterval(intervalid);
                }
                else{
                    initialValue += step;
                }
//                console.log('Before formatting :',initialValue);
               var formattedString = getFormat(initialValue);
//                console.log('After formatting :',formattedString);
                counterElement.getElementsByTagName('p')[0].innerHTML = formattedString;
      
            },20);
        }
    }
  
}
