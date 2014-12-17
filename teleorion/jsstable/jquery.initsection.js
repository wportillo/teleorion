/**
 *  jquery.initsection.js
 *
 *  Version 1.0 
 */
(function($){
	
	$.initsection = function(){
	
		 param = this.scriptget('jquery.initsection');	
		
		if(param.readystate){
		
			 paramget = param.readystate;
			
			this.each(paramget,function(key,value){
				
				otherparam = value.split('-');
				
				if(otherparam.length>1){
				
					$.initfunction(otherparam.join('|'));
				
				}else{
				
					$.initfunction(value);
						
				}
			
			});
		}	
	};
}($j));