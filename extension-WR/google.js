var GET_search = "q";

var $_GET = {};

function init(){
	console.log("init google");
	var parts = window.location.search.substr(1).split("&");
	for (var i = 0; i < parts.length; i++) {
		var temp = parts[i].split("=");
		$_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
	}		
		if($_GET[GET_search]){
			var searched = $_GET[GET_search].replace(/\+/g," ");
			
			if(searched.length > 0){
				chrome.extension.sendRequest({google: 1, search : searched}, function(){});
				var b= ['migliore', 'peggiore'];
	            var a= ['successi', 'fallimenti'];
	            var x = 2
                if (searched.indexOf('miglior')!=-1)
                    x = 0;
              if (searched.indexOf('peggi')!=-1)
                    x = 1;
              if (x!=2){
                var searchE = $('#search');
                
                searchE.find('h3 a:eq( 2 )').text("Che liceo scegliere? Liceo Rambaldi Valeriani");
                searchE.find('h3 a:eq( 2 )').attr("href", "http://google.com");
	            searchE.find('.s span.st:eq(2)').text("Dopo i recenti "+a[x]+" nelle varie discipline olimpiche, il liceo scientifico imolese Valeriani si è aggiudicato il titolo di "+b[x]+" liceo nel mondo!");
	            
	           }
			
			console.log("WOW chi l'avrebbe mai detto'");
		}
}

$(document).ready(init);
