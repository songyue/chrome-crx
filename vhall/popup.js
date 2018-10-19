  let autoInput = document.getElementById('autoInput');

  chrome.storage.sync.get(['color', 'phone', 'nickname'], function(data) {
    autoInput.style.backgroundColor = data.color;
      setData(autoInput, 'phone', data.phone);
      setData(autoInput, 'nickname', data.nickname);
  });

 autoInput.onclick = function(element) {

    let phone = element.target.getAttribute('phone');
    let nickname = element.target.getAttribute('nickname');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: "document.getElementsByName('phone')[0].value="+phone+";document.getElementsByName('nickname')[0].value='"+nickname+"'; document.getElementsByName('checkcode')[0].addEventListener('keyup', function(){ if(this.value.length >= 6) { document.getElementsByClassName('login')[0].querySelector('button').click();} });   setTimeout(function(){ document.getElementsByClassName('send-checkcode')[0].click() }, 500);" })
    });
  };

let setData = function (e, name, value){
        var atr=document.createAttribute(name);
        atr.nodeValue=value;
        //var h=document.getElementsByTagName("H1")[0];
        e.setAttributeNode(atr); 
}
