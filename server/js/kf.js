$(function(){
	$('.kf-sidebar').show();
	$('.kf').hide();
	
	$('.kf-sidebar .ico').click(function()
	{		
		$('.kf-sidebar').hide();
		$('.kf').show();
	
	});
	$('.os_x').click(function()
	{
		$('.kf').hide();
		$('.kf-sidebar').show();

	});
});

function opendialog(urlstr,w,h){
	 var t = (screen.height-h)/2;
	 var l = (screen.width-w)/2;
	 window.open(urlstr,"","width="+w+",height="+h+",top="+t+",left="+l);
	}