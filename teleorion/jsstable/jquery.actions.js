/**
 *  jquery.actions.js
 *
 *  Version 1.0 
 */
(function ($) {
	
	$.changeplan = function(uriredirect){
		
		sentdata 			  	  = this('.customer').getvalues();
		
		sentdata.object			  = 'Memberactions';
		
		sentdata.method  	 	  = 'changeplan';

		sentdata.i_product	  = this.getparam('product');
	
		message  =  this.senddata(sentdata);
	 
	   if(message.error){
		 		this.message(message);
		}else{
			
			if(message.paypal){
				
				document.location.href=message.paypal;
			
			}else{
			
				this.redirect(uriredirect);
			}
	   
		}		
	};
	
	$.updatecreditinfo = function(uriredirect){
	 
	 		sentdata 			  	 	  	  = this('.customer').getvalues();
								
	 		sentdata.object			  ='Memberactions';
			
	 		sentdata.method  	 	  = 'updatecreditinfo';

			message  =  this.senddata(sentdata);
			 
		   if(message.error){
			 		this.message(message);
			}else{
					this.redirect(uriredirect);
		   }		
 	 };
 	
 	 $.recoverypass = function(uriredirect){
					 
	 		sentdata 			  	 	  = this('.customer').getvalues();
				
	 		sentdata.object		  ='Actions';
			
	 		sentdata.method  	  = 'recoverypass';
	
			message  =  this.senddata(sentdata);
		 
		   if(message.error){
			 		this.message(message);
			}else{
					this.redirect(uriredirect);
		   }		
 	};
 	
	$.addfree = function(uriredirect){
		
 		sentdata 			  	 	= this('.customer').getvalues();
			
		sentdata.areacode  = (sentdata.country=='United States')? '1' : sentdata.areacode;
		
		sentdata.object		= 'Actions';
		
		sentdata.method  	 = 'addfree';
		
		message  =  this.senddata(sentdata);
		 
		   if(message.error){
			 		this.message(message);
			}else{
					this.redirect(uriredirect);
		   }
	};
	
	$.linkdevice = function(uriredirect){
		
 		sentdata 			  	 	= this('.customer').getvalues();
			
		sentdata.object		= 'Memberactions';
		
		sentdata.method  	 = 'linkdevice';
		
		message  =  this.senddata(sentdata);
		 
		   if(message.error){
			 		this.message(message);
			}else{
					this.redirect(uriredirect);
		   }
	};
	
	$.contact  =  function(uriredirect){
		
 		sentdata 			  	 	= this('.customer').getvalues();
				
		sentdata.areacode  = (sentdata.country=='United States')? '1' : sentdata.areacode;
		
		sentdata.method  	= 'contact';
		
		sentdata.object		=  'Actions';
                    
                message                 = this.senddata(sentdata);
		 
		   if(message.error){
			 		this.message(message);
			}else{
					this.redirect(uriredirect);
		   }
	};
	
	$.addpremium = function(uriredirect){

 		sentdata 			  	 	 	 = this('.customer').getvalues();
				
 		sentdata.object			 =	'Actions';
		
 		sentdata.method  	 	 = 'addpremium';
			
		sentdata.areacode   = (sentdata.country=='United States')? '1' : sentdata.areacode;
		
		message  =  this.senddata(sentdata);
		 
		if(message.error){
		 		this.message(message);
		}else{
		
			if(message.paypal){
				
				document.location.href=message.paypal;
			
			}else{
			
				this.redirect(uriredirect);
			}
		}
	 };
	
	 $.makecustomerpayment = function(uriredirect){
		 
	 		sentdata 			  	 	= this('.customer').getvalues();
	 			 		
	 		sentdata.object		= 'Memberactions';
	 		
	 		sentdata.method		= 'makecustomerpayment';
	 		
	 		message  				=  this.senddata(sentdata);
			 
			   if(message.error){
				 		this.message(message);
				}else{
					
					if(message.paypal){
						
						document.location.href=message.paypal;
					
					}else{
					
						this.redirect(uriredirect);
					}
			   }
	};
	
		$.updateinfo  =   function(uriredirect){
		 
 		sentdata 			  	 	= this('.customer').getvalues();
			
		sentdata.areacode  = (sentdata.country=='United States')? '1' : sentdata.areacode;
		
		sentdata.object		= 'Memberactions';
		
		sentdata.method		= 'updateinfo';
		
		message  =  this.senddata(sentdata);
		 
		   if(message.error){
			 		this.message(message);
			}else{
					this.redirect(uriredirect);
		   }
	};

}($j));