(function($) {
    
	
	$.initjcarousel = function(){

    	var jcarousel = $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

            var setup = function(data) {
            
        	var html = '<ul>';
        	
        	$.each(data, function() {
        		
        		html += '<li><img src="' + this.imagesite + '" alt="' + this.name + '"  class="loadchannel" onclick="$j.makeplayer('+this.i_channel+');"></li>';
            });

            html += '</ul>';

            // Append items
            jcarousel.html(html);

            // Reload carousel
            jcarousel.jcarousel('reload');
        };
        	
        	if($('.bigcontent').length > 0){
        		
        		channels = $.getchannellist(2);
        		
        		if(!channels.error){
	        	    setup(channels);
	            }else{
	            	
	            	switch(channels.error.code){
	            	    case '050':
	            	    	html = '<a href="/cambioplan"><img src="/imageapi/blockaccountfree.png" ></a>';
	            	    
	            	    	$('.bigcontent').html(html);
	            	   
	            	    break;
	            	    case '062':
	            	    
	            	    	html = '<a href="/realicepago"><img src="/imageapi/blockaccount.png" ></a>';
	
	                    	$('.bigcontent').html(html);
	            	    
	                    break;
	            	}
	            	
	            	$('.jcarousel-wrapper').hide();
	            }
        	}
        };
})($j);
