// URL: http://ife.baidu.com/course/detail/id/20



function Observer(data) {
    this.data = data;
    this.runObserver(data);
    this.eventBus = new Event();
}

Observer.prototype.runObserver = function (obj) {
    let val;
    for( let key in obj) {
        if( obj.hasOwnProperty(key) && obj[key] != undefined ) { 
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

Observer.prototype.getAndSet = function (key, val) {
    let that = this;
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
            // 赋值的时候会触发$watch方法，监听则绑定在$watch 方法上，在这个方法里调用eventBus.on()方法
            val = newVal;
            that.eventBus.emit(key,  newVal)
        }
    }) 
}

Observer.prototype.$watch = function (attr, callback) {
    this.eventBus.on(attr, callback);
}

// 发布，订阅模式
function Event() {
    this.event = {};
}
Event.prototype = {
    // 监听事件
    on: function(attr,callback) {
        if( this.event.hasOwnProperty(attr) ) {
            this.eventt[attr].push(callback)
        }
        this.event[attr] =  [callback]
    },
    // 移除事件
    off: function(attr) {
        if(this.event.hasOwnProperty(attr)) {
            delete this.event[attr]
        }
    },
    // 触发事件
    emit: function(attr, ...args) {
        this.event[attr].forEach( cb => {
            cb(args);
        })
    }
} 

var stu = new Observer({
    name: 'xin',
    age: 23,
    school: 'SCNU'
})

console.log(stu.data.name); // 'xin'，你访问了name属性
console.log(stu.data.age); //23，你访问了age属性

stu.data.name = 'xinxin'; // 你设置了name，新的值为xinxin
console.log(stu.data.age);

stu.$watch('age', age => {
    console.log(`我的年龄已经变了， 现在是${age}岁了`)
})
stu.data.age=33; // "你设置了age属性, 新的值为33", 我的年龄已经变了， 现在是33岁了



