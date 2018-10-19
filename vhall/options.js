  let page = document.getElementById('buttonDiv');
  const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
  function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
      let button = document.createElement('button');
      button.style.backgroundColor = item;
      button.addEventListener('click', function() {
        chrome.storage.sync.set({color: item}, function() {
          console.log('color is ' + item);
        })
      });
      page.appendChild(button);
    }
  }
  constructOptions(kButtonColors);


  let inputDiv = document.getElementById('inputDiv');
  let data ={};
  const inputs = [{'label':'昵称', 'name':"nickname"},{'label':'手机号','name':'phone'}];
  function inputSetting(inputs) {
    for (let item of inputs) {
      let input = document.createElement('input');
      input.name = item.name;
      input.placeholder= item.label;
      chrome.storage.sync.get([input.name], function(result) { input.value = result[input.name]});
      input.addEventListener('change',function(){ data[this.name] = this.value});
      inputDiv.appendChild(input);
    }

      let button = document.createElement('button');
      button.innerHTML= '保存';
      button.style.width='50px';
      button.addEventListener('click',function(){
         chrome.storage.sync.set(data, function() {});
        console.log('保存'); 
      
      });
      inputDiv.appendChild(button);
  }
  inputSetting(inputs);
