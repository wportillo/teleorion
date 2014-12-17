/**
 *  jquery.init.js
 *
 *  Version 1.0 
 */
(function($){
	
	$.initload = function(){
	
		param 			= 	$.scriptget('jquery.init');
	
		enviroment  =  $.enviroment();
	};
	
	$initdone = function(){
		
		i_sess	= $.getsess();
	
		$.bind();
	};
	
	$(document).ready(function(){
			
			$.initload();
			
			if(param.domain){
				
				$.when(
						
						$.getScript(param.domain+'/jquery.effects.js'),
						
						$.getScript(param.domain+'/jquery.getforms.js'),
						
						$.getScript(param.domain+'/jquery.security.js'),
						
						$.getScript(param.domain+'/jquery.actions.js'),
						
						$.getScript(param.domain+'/jquery.mobile.js'),
				
						$.getScript('//connect.facebook.net/en_UK/all.js'),
				
						$.getScript(param.domain+'/jquery.social.js'),
						
                        $.getScript(param.domain+'/jwplayer.js'),
				
                        $.getScript(param.domain+'/jwplayer.html5.js'),
						
						$.getScript(param.domain+'/jquery.channels.js'),
						                        
						$.getScript(param.domain+'/jcarousel.lib.js'),
						
						$.getScript(param.domain+'/jquery.channels.grid.js')
						
				).done(function(){
					 
					jwplayer.key='10ERRpp3moJ7VHyJjuAj7HjdRBzlS3A2CWFNqw==';
					
					 $.initfunction();
					 
					 $initdone();
					
					 $.initjcarousel();
					 
					 if($.initsection){
						$.initsection();
					}
					 
				});
			}
	});
}($j));