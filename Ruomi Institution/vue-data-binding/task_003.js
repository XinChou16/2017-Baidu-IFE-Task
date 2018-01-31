// URL: http://ife.baidu.com/course/detail/id/21


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
          return val;
      },
      set: function(newVal) {
          if(newVal == val) return;
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
  name: {
    fn: 'xin',
    ln: 'zhou'
  },
  age: 23,
  school: 'SCNU'
}) 

console.log(stu.data.name); 
stu.$watch('name', newName => {
  console.log(`我的姓名发生了变化，可能是姓氏变了，也可能是名字变了。`)
})

console.log(stu.data.name); 


