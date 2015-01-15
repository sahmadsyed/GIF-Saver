chrome.storage.local.get(
	function(items) {
		if('saveKey' in items){
			document.body.style.backgroundColor = 'black';
			urls = items.saveKey;
			for(var index in urls){
		    	var newGif = document.createElement('IMG');
		   		newGif.setAttribute('src', urls[index]);
		   		newGif.style.border = '30px solid black'
		   		document.body.appendChild(newGif);
			}
		}
	}
);







    






