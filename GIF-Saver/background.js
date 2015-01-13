var gifFuncs = {
  hasCheck: function(arr,item){
              for(var index in arr){
                if(arr[index] == item){
                  return true;
                }
              }
              return false;
            },

  onClickSave: function(info, tab) {
                var gifUrl = String(info.srcUrl);
                if(gifUrl.substring(gifUrl.length-3,gifUrl.length) == 'gif'){
                  chrome.storage.local.get(function(items) {
                    var urls = [];
                    if('saveKey' in items){
                      urls = items.saveKey;
                    }
                    
                    if(gifFuncs.hasCheck(urls, gifUrl)){
                      alert('gif has already been saved');
                    }
                    else{
                      urls.push(gifUrl);
                      chrome.storage.local.set({saveKey:urls});
                    }
                  });
                }
                else{
                  alert('Ain\'t a gif bruh');
                }
              },

onClickDelete: function(info, tab) {
                 var gifUrl = String(info.srcUrl);
                 chrome.storage.local.get(function(items){
                   var urls = items.saveKey;
                   if(gifFuncs.hasCheck(urls,gifUrl)){
                     var findGif = urls.indexOf(gifUrl);
                     urls.splice(findGif,1);
                     chrome.storage.local.set({saveKey:urls});
                   }
                   else{
                     alert('you ain\'t save this yet fam');
                   }
                 });
               }
};

chrome.contextMenus.create({'title': 'Save gif', 
                            'contexts':['image'],
                            'onclick': gifFuncs.onClickSave});

chrome.contextMenus.create({'title': 'Delete gif', 
                            'contexts':['image'],
                            'onclick': gifFuncs.onClickDelete});



    



