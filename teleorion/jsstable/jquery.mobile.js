/**
 *  jquery.init.js
 *
 *  Version 1.0 
 */
(function($){
	
	$.isipad = function(){
		
		 isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
		
		if (isiPad){
			return true;
		}else{
			return false;
		}	
	};
	
	$.isiphone = function(){
		
		 isiPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
		
		if (isiPhone){
			return true;
		}else{
			return false;
		}	
	};
	
	$.isipod = function(){
		
		 isiPod = /ipod/i.test(navigator.userAgent.toLowerCase());
		
		if (isiPod){
			return true;
		}else{
			return false;
		}	
	};
	
	$.isidevice = function(){
		
		 isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());

		if (isiDevice){
			return true;
		}else{
			return false;
		}	
	};
	
	$.isandroid = function(){
		
		 isAndroid = /android/i.test(navigator.userAgent.toLowerCase());

		if (isAndroid){
			return true;
		}else{
			return false;
		}	
	};
	
	$.isblackberry = function(){
		
		 isBlackBerry = /blackberry/i.test(navigator.userAgent.toLowerCase());

		if (isBlackBerry){
			return true;
		}else{
			return false;
		}	
	};
	
	$.iswebos = function(){
		
		 iSWebOS = /webos/i.test(navigator.userAgent.toLowerCase());

		if (isWebOS){
			return true;
		}else{
			return false;
		}	
	};
	
	$.iswindowsphone = function(){
			
		 isWindowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
	
		if (isWindowsPhone){
				return true;
			}else{
				return false;
		}	
	};
	
	$.ismobile = function(){
		
		 isMobile = /ipad|iphone|ipod|android|blackberry|webos|windows phone/i.test(navigator.userAgent.toLowerCase());
	
		if (isMobile){
				return true;
			}else{
				return false;
		}	
	};
}($j));