/**
 * 
 */
var page = require('webpage').create();

// page.open('http://baidu.com', function(status) {
//   console.log("Status: " + status);
//   if(status === "success") {
//     page.render('baiduHome.png');
//   }
//   phantom.exit();
// });

page.open('http://aoe.scnu.edu.cn', function(status) {
  console.log("状态Status: " + status);
  if(status === "success") {
    page.render('AOEHome.png');
  }
  phantom.exit();
});

