// 按钮
let openLocalTab = document.getElementById("open_local_tab");
chrome.storage.sync.get("local_path", function(item) {
    openLocalTab.target_url = item.local_path;
    console.log(item)
});

// When the button is clicked, inject setPageBackgroundColor into current page
// 点击按钮事件
openLocalTab.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // 当前url
    current_url = tab.url
    // 判断是否为 php.net
    if(current_url.search(/\https:\/\/www.php.net\/manual\/([a-zA-Z\_])/) != 0) {
        return ;
    }
    local_url = current_url.replace(/(https|http):\/\/(www\.){0,1}php.net\/manual\/([a-z]+)/, openLocalTab.target_url)
    local_url = local_url.replace(/(php$)/, 'html')
    local_url = local_url.replace(/(php#)/, 'html#')

    await chrome.tabs.create({url: local_url});
});

