
var schoolData = [{
    city: '北京',
    schools:['北京大学','清华大学','北京航空航天大学']
    },{
    city: '广州',
    schools:['华南师范大学','华南理工大学','中山大学']
    },{
    city: '南昌',
    schools:['南昌航空大学','南昌大学','南昌航空大学']
}];

var city = document.getElementById('cityList');
var school = document.getElementById('schoolList');
var schoolSelect = document.getElementById('school');
var companySelect = document.getElementById('company');
var inSchool = document.getElementById('inSchool');
var outSchool = document.getElementById('outSchool');

inSchool.onclick = function(){
    schoolSelect.style.display = 'block';
    companySelect.style.display = 'none';
}

outSchool.onclick = function(){
    schoolSelect.style.display = 'none';
    companySelect.style.display = 'block';
}

function chooseSchool(){
  var cityOption = '';
  var schoolOption = '';
  var cityChoose = city.getElementsByTagName('option');

  // 默认显示第一个城市   
  schoolData.forEach(function(data){
    cityOption += '<option value="city">'+data.city+'</option>';
  });
  schoolData.forEach(function(item,index,array){
    schoolOption += '<option value="college">';
    schoolOption += array[0].schools[index];
    schoolOption += '</option>';
  });
  
  city.innerHTML =cityOption;
  school.innerHTML =schoolOption;

    city.onchange =function(e){
        var cityIndex = e.target.selectedIndex;
        
        if (cityIndex == 0) {
            var schoolOption = '';
            schoolData.forEach(function(item,index,array){
            schoolOption += '<option value="college">';
            schoolOption += array[0].schools[index];
            schoolOption += '</option>';
        });
            school.innerHTML =schoolOption;
        }

        if (cityIndex == 1) {
            var schoolOption = '';
            schoolData.forEach(function(item,index,array){
            schoolOption += '<option value="college">';
            schoolOption += array[1].schools[index];
            schoolOption += '</option>';
        });
            school.innerHTML =schoolOption;
        }

        if (cityIndex == 2) {
            var schoolOption = '';//清空HTML
            schoolData.forEach(function(item,index,array){
            schoolOption += '<option value="college">';
            schoolOption += array[2].schools[index];
            schoolOption += '</option>';
        });
            school.innerHTML =schoolOption;
        }
    }
}

window.onload = chooseSchool;
