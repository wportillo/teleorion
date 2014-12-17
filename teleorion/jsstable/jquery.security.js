/**
 *  jquery.security.js
 *
 *  Version 1.0 
 */
(function ($) {
	

	$.getdata = function(dataname){
	    
			userdata = {object:'Memberactions',method :'getdata',dataname:dataname};

			result = this.senddata(userdata);
					
			return result;
	};
	$.login = function(uriredirect){
	
		expirate						= false;
		
		sentdata						= {};
		
		sentdata 					= this('.customer').getvalues();
				
		sentdata.object  	 	= 'Security';
		
		sentdata.method  	= 'login';
	
	
		if(sentdata.persistent){
				expirate = 365;
		}
	
		message  =  this.senddata(sentdata);
	
		if(message.error){
		 		this.message(message);
		}else{
		  		this.redirect(uriredirect);
	   }
	};
	
	$.updateuser = function(){
		
		expirate         = this.readcookie('tvmiaexpirate');
		
			if(customerinfo){
					
				userdata ={
					action   :'security',
					method :'update',
					id			 : iuser
				};
				
				message = this.senddata(userdata);
				
				message.expirate = customerinfo.expirate;
				
				if(!message.error){
				
					this.setcookie(message,'tvmiauser',expirate);
				
				}
				
				if(message.error){
					 alert(message.error);
				}
		}
	};
}( $j));
