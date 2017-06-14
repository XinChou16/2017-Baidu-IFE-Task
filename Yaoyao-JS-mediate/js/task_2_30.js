var $ = function (selector) {
        return (document.querySelectorAll(selector));
};

// 获取的变量
var $input = $('input');
var inputValue = $input[0].value;
var tip = $('.tip');
var flag;

/**
 * 名称输入格式验证
*/
$input[0].onfocus = function () {
    tip[0].innerHTML = '长度必须为为4-16个字符';
    $input[0].style.borderColor = '';
};

$input[0].onblur = function () {
    var nameLength = lengthCheck($input[0].value);

    if ($input[0].value == '') {
        tip[0].innerHTML = '输入为空，请重新输入';
        $input[0].style.borderColor = 'red';
        flag = false;
        return;
        }
    if ($input[0].value == '' || nameLength < 4 || nameLength > 16) {
        tip[0].innerHTML = '长度必须为为4-16个字符';
        flag = false;
        return;
    }
    tip[0].innerHTML = '名称格式正确';
    flag = true;
    return;
};

function lengthCheck(value) {
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

/**
 * 密码输入格式验证
*/    
$input[1].onfocus = function () {
    tip[1].innerHTML = '密码必须包含英文，数字';
    $input[1].style.borderColor = '';
};

$input[1].onblur = function () {
    var reg = /\d[a-z]/g.test($input[1].value);
    var nameLength = lengthCheck($input[1].value);
    
    if ($input[1].value == '') {
        tip[1].innerHTML = '输入为空，请重新输入';
        $input[1].style.borderColor = 'red';
        flag = false;
        return;
    }
    if (!reg ) {
        tip[1].innerHTML = '密码必须包含英文，数字';
        $input[1].style.borderColor = 'red';
        flag = false;
        return;
    }
    if (nameLength < 4 || nameLength > 16) {
        tip[1].innerHTML = '长度必须为为4-16个字符';
        $input[1].style.borderColor = 'red';
        flag = false;
        return;
    }
    tip[1].innerHTML = '输入格式正确';
    flag = true;
    return;
};

/**
 * 密码确认验证
*/
$input[2].onfocus = function () {
    tip[2].innerHTML = '两次输入密码必须一致';
    $input[2].style.borderColor = '';
};

$input[2].onblur = function () {
    var nameLength = lengthCheck($input[2].value);
    
    if ($input[2].value == '') {
        tip[2].innerHTML = '输入为空，请重新输入';
        $input[2].style.borderColor = 'red';
        flag = false;
        return;
    }
    if ($input[1].value != $input[2].value) {
        tip[2].innerHTML = '两次输入密码必须一致';
        $input[2].style.borderColor = 'red';
        flag = false;
        return;
    }
    tip[2].innerHTML = '输入正确';
    flag = true;
    return;
};

/**
 * 邮箱格式验证
*/
$input[3].onfocus = function () {
    tip[3].innerHTML = '请输入常用邮箱';
    $input[3].style.borderColor = '';
};

$input[3].onblur = function () {
    var reg3 = /.com$/g.test($input[3].value);
    
    if ($input[3].value == '') {
        tip[3].innerHTML = '输入为空，请重新输入';
        $input[3].style.borderColor = 'red';
        flag = false;
        return;
    }
    if (!reg3) {
        tip[3].innerHTML = '邮箱格式不正确，请重新输入';
        $input[3].style.borderColor = 'red';
        flag = false;
        return;
    }
    tip[3].innerHTML = '输入正确';
    flag = true;
    return;
};

/**
 * 手机输入格式验证
*/
$input[4].onfocus = function () {
    tip[4].innerHTML = '请输入常用手机';
    $input[4].style.borderColor = '';
};

$input[4].onblur = function () {
    var reg4 = /\d{10}\d$/g.test($input[4].value);
    
    if(reg4) console.log(1)
    if ($input[4].value == '') {
        tip[4].innerHTML = '输入为空，请重新输入';
        $input[4].style.borderColor = 'red';
        flag = false;
        return;
    }
    if (!reg4) {
        tip[4].innerHTML = '手机格式不正确，请重新输入';
        $input[4].style.borderColor = 'red';
        flag = false;
        return;
    }
    tip[4].innerHTML = '手机格式正确';
    flag = true;
    return;
};

/**
 * 提交按钮验证
 */

function sumbitCheck() {
    var $sumbit = $('input')[5];

    $sumbit.onclick = function(){
        if (!flag) {
            alert('提交有误，请重新检查输入')
        }else{
            alert('提交成功')
        }

    }
} 

sumbitCheck();
