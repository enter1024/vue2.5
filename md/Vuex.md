#### Vuex总结

##### 一、什么是vuex

> 1.vuex就相当于一个仓库
>
> 2.作用：集中存储及管理所有组件的状态



##### 二、怎样使用vuex

> 1.src目录下面新建一个vuex的文件夹
>
> 2.vuex 文件夹里面新建一个store.js文件
>
> 3.安装vuex  命令 cnpm install vuex --save
>
> 4.在store.js文件中引入vue 及vuex 并且use vuex
>
> 5.实例化对象并对外暴露

```javascript
// 文件名store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  
  /*1.state在vuex中用于存储数据*/
  state: {
    count: 0
  },
  
  /*2.mutations里面放的是方法，方法主要用于改变state里面的数据*/
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store; //对外暴露该对象
```



##### 三、在根组件中注册

> 在根组件中为所有的子组件注入store对象。如下代码

```javascript
const app = new Vue({
  el: '#app',  // vue实例挂载到根元素
  store, // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})
```



##### 四、子组件使用store

> 子组件使用store对象的方式：在组件(任何组件)中调用 store 中的状态简单到仅需要在计算属性中返回即可(需要使用哪一个数据就返回它即可)。触发变化也仅仅是在组件的 methods 中提交 mutation对象中的方法即可。

```javascript
// 1.获取state里面的数据  this.$store.state.数据
// 2.触发 mutations 改变 state里面的数据 this.$store.commit('方法名'); 

// 创建一个 Counter 子组件并在子组件中使用store
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count;
    }
  },
  methods: {
    changeCount () {
  		this.$store.commit('increment'); 
	}
  }
}
```

