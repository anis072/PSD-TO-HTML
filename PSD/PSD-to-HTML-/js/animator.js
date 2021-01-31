function Animator(element) {
	this.el = element;
	
	var animationIntervalId;
	this.animation = false;
	this.finalValue = 0;
	this.property;
	
	this.animate = function(cssProperty, value, duration) {
		var style = window.getComputedStyle(element);
		var initial = style.getPropertyValue(cssProperty);
		initial = parseInt(initial);
		this.finalValue = value;
		this.property = cssProperty;
		var tempInitial = initial;
		var intervalLength = 10;

		var step = (value - initial) / (duration / intervalLength);
        var counter=0;
        animationIntervalId= window.setInterval(function() {
        this.animation = true;
        counter++;
        initial+=step;
        // element.style[cssProperty] = parseInt(style.getPropertyValue(cssProperty))+step + 'px';
        element.style[cssProperty] = initial + 'px';
            if (counter >= duration/intervalLength){
                window.clearInterval(animationIntervalId);
                this.animation = false;
            }
        }, intervalLength);

	}
    
	// should stop the animation and element's properties should be at "end" value
	this.finishAnimation = function() {
		window.clearInterval(animationIntervalId);
		var style = window.getComputedStyle(element);
		console.log('final value: ',this.finalValue);
		element.style[this.property] = this.finalValue + 'px';
		this.animation==false;
		
	}
}