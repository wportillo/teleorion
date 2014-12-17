/**
 *  jquery.getfroms.js
 *
 *  Version 1.0 
 */

(function ($) {
			
			$.initcredit = function(selector){
					
					userinfo																	  = $.getdata('customer_info,credit_info,date_info,product_info');
				   
					creditinfo 																      = userinfo.credit_info;
		
				   creditinfo.number												   	      = null;
				   
				   creditinfo.cvv														  	  = null;
				   
				   creditinfo.payment_method										  = userinfo.customer_info.payment_method;
				   
				   creditinfo.automatic_debit 									  	  = userinfo.customer_info.automatic_debit;
				   
				   $.setvalues(creditinfo,'#');
				
				  $.paymentmethod(userinfo.customer_info.payment_method);
			};
			
			$.showplan = function(){

				product = $j.getdata('product_info');

				switch(product.product_info.key_product){
					case 'basico':
						$('#u12115').css('visibility','hidden');
					break;
					case 'mundo':
						$('#u12116').css('visibility','hidden');
					break;
				}
			};
			
			$.initcinfo = function(){
				
				userinfo				 = $.getdata('customer_info,credit_info,date_info,product_info');
			    
				userinfo.customer_info.password=null;

				$.countrynumber(userinfo.customer_info.country);
			
				$.setvalues(userinfo.customer_info,'#');
			
			};
			
			$.validfree	= function(){
				
		
				valid		  = this.datenull(userinfo.date_info.valid); 
			
				if(valid){
				
					expired = (this.timestamp(this.mysqldatetogmt(valid)) < this.timestampnow())? true : false;
				
					if(expired){
					
						this('#expiredfree').show();
					
					}else{
						
						this.makepremium();
					}
					
				}
			};
			
			$.validpremium = function(){
			
				
				
				valid		  = this.datenull(userinfo.date_info.next_payment); 
			
				
				if(valid){
						
						expired = (this.timestamp(this.mysqldatetogmt(valid)) < this.timestampnow())? true : false;
						
						if(expired){
							this('#expiredpremium').show();
						}
				}
			};
			
			$.makeform = function(){
				
			
				
				product       		= this.getproduct(userinfo.product_info.key_product);
				
				nextpayment 	= this.mysqldatetogmt(userinfo.date_info.next_payment)
				
				this('#productmessage').html(product['description_product_'+enviroment.lang]);
				
				this('#amount').html('$US '+product.subscription);
				
				switch(userinfo.customer_info.payment_method){
					case 'credit':
						this('#payment_method').html('Credit');
					break;
					case 'paypal':
						this('#payment_method').html('Paypal');		
					break;
				}
			
				if(nextpayment){
					this('#valid').append(this.hdate(nextpayment));
				}else{
					this('#valid').hide();
				}
				
			};
			
			$.getpaymenthistory = function(){
				
				payment		= $.getdata('payment_history');
				
				html=''; 

				this.each(payment.payment_history,function(key,value){   

				     if(value.i_payment){        
				   
				         html+='<ul class="history">';
				    
				         html+='<li>'+$.hdate($.mysqldatetogmt(value.transdate))+'</li>', html+='<li>'+value.authcode+'</li>', html+='<li>$ '+value.amount+'</li>';
				     
				         html+='</ul>';
				     }    
				});

				this('.table').append(html);
			};
			
}( $j));