let local_path = 'file:///Users/songyue/work/php-chunked-xhtml'; // todo:sy 配置页面设置
let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ local_path });
  console.log(`Default local path set to ${local_path}`);
});
