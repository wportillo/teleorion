/**
 *  jquery.effects.js
 *
 *  Version 1.0 
 */
(function ($) {
	
	$.paymentmethod = function(value){
		switch(value){
			case 'paypal':
				$('.credit').fadeOut('slow');
			 break;
			case 'credit':
				$('.credit').fadeIn('slow');
			break;
		}
	};

	$.countrynumber =  function(value){
		
		switch(value){
		 case 'United States':
			 this('.phonenumber').show();
			this('.areacode').hide();
		 break;
		 default:
			 this('.phonenumber').show();
			 this('.areacode').show();
		 break;
		 case '0':
			 this('.phonenumber').hide();
		  break;
		}
	};
	
	$.shipping   =  function(value){
		(value) ? $('#shipping_form').show() :  $('#shipping_form').hide() ;
	};

}( $j));