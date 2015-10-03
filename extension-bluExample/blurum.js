
function reNewRequest(response){
	
	if(response){
		console.log(response);
		if(response.search){
			// il background ordina all'iframe di cercare qualcosa
		}
	}

	chrome.extension.sendRequest({background: 1}, reNewRequest);
}

var $_GET = {};

function init(){
	console.log("init blurum");
	
	reNewRequest();
	
	
}


$(document).ready(init);
