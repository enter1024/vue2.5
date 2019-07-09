// 一个vue实例的常用属性说明，最佳使用情况
var v = new Vue({
	el: '#root',// 将实例挂载在id为root的元素上
	
	data: {
		// 实例对象可以直接访问的数据
		// 建议将要使用到的数据预先在data内声明
		message: '通过插值语法{{message}}就可以访问数据'
	},
	
	// 里面的方法可以直接被调用，通常使用<@事件>的方式调用
	methods: {
		handlerClose: function(){
			// 关闭页面的逻辑
		}
	},
	
	//计算属性(注重将结果返回)，计算属性有缓存
	computed: {
		sum: function(num1,num2){
			return num1+num2;
		}
	},
	
	// 侦听器，监控data对象里面属性状态的变化
	watch: {
		message: function(){
			// message的值发生变化时会执行该函数
		}
	}
})

// 指令说明：
// v-model="name" 双向数据绑定属性， 只有表单元素可以使用该属性，对其他元素无效
// v-text
// v-on:click="handlerFn"  为元素绑定点击时要执行的函数，绑定时不需要括号; 通常会使用@代替v-on, 如@click="handlerFn"
// 
