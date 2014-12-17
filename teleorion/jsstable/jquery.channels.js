(function($){
	
	$.getcategorylist = function(){
		
		 sentdata				    = {lang:enviroment.lang.toString(),object:'Content',method:'getcategorylist'};
			
		 return  this.senddata(sentdata);
	};
	
	$.getcategory = function(i_category){
		
		 sentdata		= {lang:enviroment.lang.toString(),object:'Content',method:'getcategory',i_category:i_category};
			
		 return  this.senddata(sentdata);
	};
	
	$.getchannel 	= function(i_channel){

		 sentdata				    = {lang:enviroment.lang.toString(),i_channel:i_channel,object:'Content',method:'getchannel'};
		
		return  this.senddata(sentdata);
	};
	
	$.getchannellist 	= function(i_category){

		 sentdata				    = {lang:enviroment.lang.toString(),i_category:i_category,object:'Content',method:'getchannellist'};
		
		return  this.senddata(sentdata);
	};
	
	
	
	$.makeplayer = function(id){

		channeldata = this.getchannel(id);
		
		if(!channeldata.error){
			
				streamdata  = {
					
					rtmp	     : channeldata.cdn_status == 'primary'  ?  channeldata.primary_rtmp : channeldata.secondary_rtmp,
		            
					hls		     : channeldata.cdn_status == 'primary'  ? channeldata.primary_hls : channeldata.secondary_hls,
				
					rtsp         : channeldata.cdn_status == 'primary'  ? channeldata.primary_rtsp : channeldata.secondary_rtsp,
					
				    token        : channeldata.token,
									
		            provider: 'rtmp'
				}	
			
			    this.player(streamdata);
		}else{
		     	this.message(channeldata);
		}
	};
	
	$.player = function(stream){
            
             
		if(!this.ismobile()){
			
                        jwplayer('bigcontent').setup({
                        flashplayer       : '/jsstable/jwplayer.flash.swf',
                            file		  			 : stream.rtmp,
                            width     			 	 : 600,
                            height    				 : 400,
                            autostart			 	 : true,
                        });			
			
		}else{

			if(!this.isandroid()){
                            
                                jwplayer('bigcontent').setup({
                                    file		  		 : stream.hls,
                                    width     			 : 600,
                                    height    			 : 400,
                                    autostart			 : true,
                                });
                        
			}else{
				
				document.location.href=stream.rtsp;
				
				document.location.target='_blank';
			
			}
		}
            
                };

}($j));