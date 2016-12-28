AdFrame.Util={};
AdFrame.Util.extend = function(destination,source){
	destination = destination || {};
	if(source){
	    for(var property in source){
			destination[property] = source[property];
	    }
	}
}

AdFrame.Base={};



