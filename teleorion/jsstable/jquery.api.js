/**
 *  jquery.api.js
 *
 *  Version 1.0 
 */

var enviroment,param,i_sess;

(function ($) {
	
	$.readcookie = function(cookie){
		return this.jsondecode(this.cookie(cookie));
	};
	
	$.hdate = function(gmt){
		return 	gmt.getDate()+ '/'+(gmt.getMonth()+1) + '/' + gmt.getFullYear();
	};
	
	$.timestamp = function (gmt){
		return gmt.getTime();
	};
	
	$.fn.enterkey = function (fnc) {
	    return this.each(function () {
	        $(this).keypress(function (ev) {
	             keycode = (ev.keyCode ? ev.keyCode : ev.which);
	            if (keycode == '13') {
	                fnc.call(this, ev);
	            }
	        })
	    })
	};
	
	$.timestampnow = function (){
		
		date = new Date();
		
		return date.getTime();
	};
	
	$.hideloadbox=function(){
		  this('#loading,#mask').hide();
	};
	
	$.showloadbox=function(){
		this('#loading,#mask').show();
	};

	$.seterrorbox = function(message){
		
		this('.error').show();
		
		this('#errormessage').html(message);
	};
	
	$.datenull	= function(date){
		return 	(date=='0000-00-00 00:00:00')? false : date;
	};
	
	$.mysqldatetogmt = function (stringdate) {  
	
		if(stringdate!='0000-00-00 00:00:00'){
		
			date = new Date();  
		    
		    parts = String(stringdate).split(/[- :]/);  
		      
		    date.setFullYear(parts[0]);  
		    
		    date.setMonth(parts[1] - 1);  
		    
		    date.setDate(parts[2]);  
		    
		    date.setHours(parts[3]);  
		    
		    date.setMinutes(parts[4]);  
		    
		    date.setSeconds(parts[5]);  
		   
		    date.setMilliseconds(0);  
		      
		    return date;  
		
		}else{
			return null;
		}
	},
	
	$.getproduct = function(keyproduct){

	     sent          	    = {object:'Memberactions',method:'getproducts',key_product:keyproduct};

	    return       		this.jsondecode(this.senddata(sent));
	 };
	
	 $.getparam = function( sname ){
		
	   params = location.search.substr(location.search.indexOf('?')+1);
	  
	   sval = '';
	  
	   params = params.split('&');
	   
  		for ( i=0; i<params.length; i++){
         temp = params[i].split('=');
         if ( [temp[0]] == sname ) { sval = temp[1]; }
       }
    
    	return sval;
	};
	
	$.setcookie = function(data,name,expirate){
		
    	if(expirate){	 
    		
    		$.cookie(name,this.jsonencode(data),{expires:parseInt(expirate)});
		
    	}else{
    		
    		$.cookie(name,this.jsonencode(data));
		
    	}
	};
	
	$.setinterval = function(name,time){
		 
		setInterval(function () {
            
			$[name]();
             
         }, time);	
	};
	
	$.redirect    = function(url,target){
	
		if(!enviroment.dev){
			
			document.location.href='/'+url;
		
			if(target==true){
				document.location.target='_blank';
			}
		}
	};
	
	$.message = function(data){
	
		this.seterrorbox(data.error[enviroment.lang.toString()]);
	};
	
	$.isfunction = function(x) {
		  return Object.prototype.toString.call(x) == '[object Function]';
	}
	
	$.scriptget   = function (script_name) {
		 
		 scripts = document.getElementsByTagName('script');
		
		  	for( i=0; i<scripts.length; i++) {

			    if(scripts[i].src.indexOf('/' + script_name) > -1) {
			
			    	 pa = scripts[i].src.split('?').pop().split('&');

			    	 p = {};
			      
			    	for( j=0; j<pa.length; j++) {
			        
			    	 kv = pa[j].split('=');
			 
			    	if(kv[1].indexOf('|')){
			    		
			    		kv[1] = kv[1].split('|');
			    	}
			    	
			    	p[kv[0]] = kv[1];
			    }
			    	
			    if(kv.length >= 2){
			    	return p;
			    }else{
			    	return null;
			    }
		    }
		 }
		  
		  return null;
	};
	$.enviroment = function(){
			return this.scriptget('jquery.api');	
	};
	$.getsess	  = function(){
		
		 sess = this.readcookie('teleorion');
		 
		 if(sess){
			 return sess; 
		}else{
			return null;
		}
	};
	
	$.jsondecode = function(data){
		 
		 	try {
			   response = $.parseJSON(data);
			 }
			 catch(e){
			    response = data;
			}
		 	
			 return response;
	};
	
	$.jsonencode = function(data){
		
	 	try {
		    response   = window.JSON.stringify(data);
		 }
		 catch(e){
			   response = data;
		}
	 	
		 return	response;
	};
	
	$.fn.getvalues = function(){
		
		value = {};
	
		this.each(function(){

			
			switch($(this).attr('type')){
				case 'checkbox':
				case'radio':
					if($(this).prop('checked') ){
					 	value[$(this).attr('id')]  = true;
					 }else{
					 	value[$(this).attr('id')] = false;
					 }
				break;
				default:
					value[$(this).attr('id')] = $(this).val();
			 	break;
			}
		});
		
		return value;
	};
	
	$.setvalues = function(data,selector){
			
		this.each(data,function(key,value){
		
				element = $(selector+key);
				
				switch(element.prop('type')){
					default:
						$(selector+key).val(value);
					break;
					case 'radio':
					case 'check':
						$(selector +key).prop('checked',true);
					break;
				}
		});
	};
	
	$.initfunction = function(param){
		
		if(!param){
		
			 param = this.scriptget('jquery.init');	
		
			if(param){
			
				if(param.readystate){
	
					this.each(param.readystate,function(key,value){
						
							if($.isfunction($[value])){
								$[value]();
							}
					});
				}
			}
		}else{
			
			 valuesent = param.split('|');
		
			if($.isfunction($[valuesent[0]])){
				$[valuesent[0]](valuesent[1]);
			}
			
		}
	};
	
	$.bind = function(){
	
		this('.buttonsent').bind('click',function(){
			$.initfunction($(this).attr('name'));
		});
		
		this('.loadchannel').bind('click',function(){
			$.initfunction($(this).attr('name'));
		});
		
		this('.enterkey').enterkey(function () {
			$.initfunction($(this).attr('name'));
		});
	};
	
	$.senddata  = function(data){
		
		result 	        = null;
		 
		data.i_sess	= i_sess;
		
		data.lang	= enviroment.lang.toString();
		
		ajaxsent = this.ajax({
	    	  url	  	        : 'https://www.teleorion.info:444/api',
	    	  type	  		: 'POST',
	    	  data	  		: {formdata:$.jsonencode(data)},
	    	  async   		:  false,
	    	  dataType	        : 'text',
                  crossDomain           : true,

	    	  beforeSend: function(){
	    		  $.showloadbox();
	    	  },
	    	  complete: function(){
	    		  $.hideloadbox();
	    	  },
	    	  success:function(data) {
	    		  result = data;
	    	  },
		 });
		
		if(ajaxsent.readyState==4){
			return this.jsondecode(result);
		}
	};
	
}( $j ));