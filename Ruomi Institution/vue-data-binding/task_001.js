// URL: http://ife.baidu.com/course/detail/id/15


function Observer(data) {
    this.data = data;
    this.runObserver(data)
}
Observer.prototype.getAndSet = function (key, val) {
    Object.defineProperty(this.data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            console.log(`你访问了${key}属性`);
            return val;
        },
        set: function(newVal) {
            if(newVal == val) return;
            console.log(`你设置了${key}属性, 新的值为${newVal}`);
            val = newVal;
        }
    })
}


Observer.prototype.runObserver = function (obj) {
    let val;
    for( let key in obj) {
        if( obj.hasOwnProperty(key)  ) { //&& obj[key] != undefined
            val = obj[key];
            // 深层遍历
            if( typeof obj[key] === 'object') {
                new Observer(obj[key])
            }
        }
        // monitor data's set and get
        this.getAndSet(key, val);
    }
}

var stu = new Observer({
    name: 'xin',
    age: 23,
    school: 'SCNU'
})

console.log(stu.data.name); // 'xin'，你访问了name
console.log(stu.data.age); //23
stu.data.name = 'xinxin'; // 你设置了name，新的值为xinxin
console.log(stu.data.age);


