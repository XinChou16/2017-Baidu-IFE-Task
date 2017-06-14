 var $ = function (selector) {
     return (document.querySelectorAll(selector));
 };

 $('.btn')[0].onclick = varify;

 function varify() {
     var name = $('input');
     var inputValue = name[0].value;
     var tip = $('.tip')[0];
     var proper = /\d/g.test(inputValue);

     console.log(proper)
     if (inputValue == '') {
         tip.innerHTML = '<p class="danger" >输入为空，请重新输入</p>';
         name[0].onfocus = function () {
             tip.innerHTML = '';
         };
         return;
     }
     var length = stringNum(name[0].value);
     if (length < 4 || length > 7) {
         tip.innerHTML = '<p class="warn" >名称长度为4-16个字符</p>';
         name[0].onfocus = function () {
             name[0].value = '';
             tip.innerHTML = '';
         };
         return;
     }
     tip.innerHTML = '<p class="success" >名称格式正确</p>';
     name[0].onfocus = function () {
         tip.innerHTML = '';
     };
 }

 function stringNum(value) {
     var arr = value.split('');
     var len = 0;
     arr.forEach(function (item, index) {
         if (item.charCodeAt() > 0x00 && item.charCodeAt() < 0xff) {
             len++;
         } else {
             len += 2;
         }
     });

     return len;
 }