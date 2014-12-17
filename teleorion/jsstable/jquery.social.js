(function($){
	
	$.fb = function(){
		
		FB.init({
		      appId  : '1430575503865178',
		      secret : '2d4572ed3a7ab670dfd29fd27427e63d'
		 });   
	};
	
	$.logoutfb = function(){
		
		FB.logout();
	};

	$.getfbdata = function(func){

		FB.api('/me',function(fbdata){
			if($.isfunction($[func])){
				$[func](response);
			}
		});
	};
	
	$.getfb = function(uriredirect){
		
		FB.login(function(response){
		
			if (response.authResponse) {
					
					console.info(response);
					
					data = {i_fbid : response.authResponse.userID,uriredirect: uriredirect, expirate:365};
					
					$.loginfb(data);
			
			}else{
				$.redirect('');
		    }
		
		},{scope: 'email,user_likes'});
		
	};
	
	$.savefb = function(uriredirect){
		
		FB.login(function(response){
			
			if (response.authResponse) {
				
					 data = {i_fbid : response.authResponse.userID,id:iuser,uriredirect: uriredirect};
					
					 $.registerfb(data);
			
			}else{
				$.redirect('');
		    }
		
		},{scope: 'email,user_likes'});
	
	};	
	
}($j));