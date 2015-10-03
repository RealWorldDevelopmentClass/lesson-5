
function reNewRequest(response){
	
	if(response){
		console.log(response);
		if(response.searched){
			window.location.href = "http://www.wordreference.com/enit/"+ response.searched;
		}
	}else{
	    chrome.extension.sendRequest({wordReferenceBackground: 1}, reNewRequest);
	}
}

var $_GET = {};

function init(){
	console.log("init blurum");
	
	if(window.location.href.replace('http://www.wordreference.com/enit/','').length == 0)
	    reNewRequest();
	else{
	   var traduzione = $('#articleWRD').html();
	    chrome.extension.sendRequest({wordReferenceBackground: 1, traduzione: traduzione}, reNewRequest);
	}
	
}


$(document).ready(init);
