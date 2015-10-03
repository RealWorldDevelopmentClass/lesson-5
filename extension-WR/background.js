var iframe;
var GET_background = "8fhasd";

var lastLinks = [];

function iframeFunc(){
	    iframe = document.body.appendChild(document.createElement('iframe'));
		iframe.src = 'http://www.wordreference.com/enit/?' + GET_background + "=1";
}

var cbWordReference = null;
var cbRichiedenteTraduzione = null;


function sendToWordReferenceBackground(object){
	if(cbWordReference != null){
		cbWordReference(object);
		cbWordReference = null;
	}else{
		// wait timeout
	}
	
}


window.onload = function(){
	
	chrome.extension.onRequest.addListener(
	  function(request, sender, cb) {
	  	if(request.richiestaTraduzione == 1){
	  	    
	  	    sendToWordReferenceBackground({searched:request.text});
	  	}
			//sendBlurumBackground({search : request.search});
	  	if(request.wordReferenceBackground == 1)
	  		cbWordReference = cb;
	  		
	  		cbRichiedenteTraduzione({tradotto: request.traduzione});
	  		cbRichiedenteTraduzione = null;
	  	}
	  
	);
	iframeFunc();
}
