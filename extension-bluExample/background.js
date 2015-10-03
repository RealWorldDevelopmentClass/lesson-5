var iframe;
var GET_background = "8fhasd";

var lastLinks = [];

function iframeFunc(){
	    iframe = document.body.appendChild(document.createElement('iframe'));
		iframe.src = 'https://www.blurum.it/Web/?' + GET_background + "=1";
}

var sendMessage = null;

function sendBlurumBackground(object){
	if(sendMessage != null){
		sendMessage(object);
		sendMessage = null;
	}else{
		// wait timeout
	}
	
}


window.onload = function(){
	
	chrome.extension.onRequest.addListener(
	  function(request, sender, sendResponse) {
	  	if(request.google == 1)
			sendBlurumBackground({search : request.search});
	  	if(request.blurumBackground == 1)
	  		sendMessage = sendResponse;
	  	}
	  
	);
	iframeFunc();
}
