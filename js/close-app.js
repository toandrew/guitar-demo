
var jq = jQuery.noConflict();
jq(function(){	
	var iNow=0;
    var timer=null;
         
    jq('.banner').hover(function(){
    	clearInterval(timer);
    },function(){
    	timer=setInterval(bannerTab,2500);
    });
    
    timer=setInterval(bannerTab,2500)  
    jq('.banner-btn span').click(function(){
        iNow = $(this).index(); 
        jq(this).addClass('active').siblings().removeClass('active');
        jq('.banner-img a').eq(iNow).show().siblings().hide();
    });
                       
    function bannerTab(){
        iNow++;
        if(iNow >= jq('.banner-btn span').size()){
           iNow = 0;
        };
        jq('.banner-img a').eq(iNow).show().siblings().hide();
        jq('.banner-btn span').eq(iNow).addClass('active').siblings().removeClass('active');
    };
    
    jq('.close_btn img').click(function(){
    	jq('.download_fixed').slideUp();
    });
});

