
Vue.component("child", {
	template: '<div>{{text}}</div>',
	props: ['text'],
	data(){
		return {
			msg: '55'
		}
	},
	beforeCreate(){
		console.log(this); // 不能拿到text
//		console.log(this.text); // 不能拿到text
	},
	created() {
		console.log(this.text); // 可以拿到text(子组件需要在创建实例之后才能拿到父组件传递过来的props数据)
	}
})

// 一个vue实例的常用属性说明，最佳使用情况
var vm = new Vue({
	el: '#root',// 将实例挂载在id为root的元素上
	
	data: {
		// 实例对象可以直接访问的数据
		// 建议将要使用到的数据预先在data内声明
		lists: ['html', 'css', 'javascript', 'jquery', 'vue'],
		message: '通过插值语法{{message}}就可以访问数据',
		country: "中国",
		address: "广东省-深圳市-福田区-下沙社区-65坊605"
	},
	
	// 里面的方法可以直接被调用，通常使用<@事件>的方式调用
	methods: {
		handlerClick: function(key){
			alert(this.$refs[key][0].innerHTML);
			this.message = "message被改变！";
		},
		getAddress() {
			return this.address;
		}
	},
	
	/**
	 * 1.计算属性(注重将结果返回)，计算属性有缓存
	 * 2.计算属性里面定义的函数名可以直接在html代码中使用，通过{{getFullAddress}}即可以显示结果
	 * 3.计算属性里面的方法无需调用，所依赖的数据一旦改变，自动执行并返回或显示最新结果
	 * 4.如果一个功能可以使用computed，watch，methods等方式实现，优先使用computed
	 * 5.computed里面的函数会在实例化组件的beforeMount之后和mounted生命周期函数之前执行完成(mounted之前完成,此阶段数据和$el挂载完成)。
	 * 当所依赖的数据再次发生变化时会再次执行
	 */
	computed: {
		getFullAddress: function() {
			console.log("getFullAddress-----------------");
			return this.country + this.address; // 依赖的数据一旦改变自动执行该方法
		}
	},
	
	// 侦听器，监控data对象里面属性状态的变化
	watch: {
		message: function(){
			// message的值发生变化时会执行该函数
			console.log("watch-message函数被执行！");
			return "watch-----messages函数被执行";
		}
	},
	
	beforeCreate: function () {
 		console.log("beforeCreate","初始化vue实例前的一些准备");
 	},
 	created: function() {
 		// 此阶段已完成了数据的观测等，即data/methods/computed/watch已解析，可以被使用
 		console.log(this.$el);
 		console.log("created","初始化vue实例已经完成，但还没有拿到根元素，即$el为undefined");
 	},
 	
 	beforeMount: function(){
 		// 已经拿到根元素，但是还没有和vue实例的数据结合
 		// 此阶段会将父组件使用子组件时动态绑定的数据传递给子组件（子组件在实例化后才能使用父组件传递过去的数据）
 		console.log(this.$el);
 		console.log("beforeMount","vue实例没有和根元素el挂载");
 	},
 	mounted: function() {
 		// 在此阶段执行之前已完成向子组件传递数据的动作
 		console.log(this.$el);
 		console.log("mounted","vue实例已经和根元素el挂载完成,即完成数据的绑定");
 	},
 	
 	beforeUpdate:function(){
 		console.log("beforeUpdate","vue实例的数据没有发生变化！");
 	},
 	updated: function(){
 		console.log("updated","vue实例的数据发生变化后会调用该方法");
 	},
 	beforeDestroy: function() {
 		// 当调用vm.$destroy()方法销毁vue实例时会执行该方法（此时vue实例还存在）
 		console.log(vm.text);
 		console.log("beforeDestroy","vue实例销毁之前会调用");
 	},
 	destroyed: function(){
 		// vue实例被完全销毁之后才会执行该方法（和根元素解绑了）
 		vm.text = "vue实例被销毁了"; // 该数据会存在，但是页面的虚拟DOM不会发生改变
 		console.log(vm); // 此时vue实例已经和根元素没有关系了
 		console.log("destroyed","vue实例销毁之后才会调用");
 	}
})


// 指令说明：
// v-model="name" 双向数据绑定属性， 只有表单元素可以使用该属性，对其他元素无效
// v-text
// v-on:click="handlerFn"  为元素绑定点击时要执行的函数，绑定时不需要括号; 通常会使用@代替v-on, 如@click="handlerFn"
// 

// v-bind:title="message" (语法糖 :title="message")	将数据绑定到元素的title中，鼠标悬停到元素时才会显示message
// v-if="seen"    控制元素的显示或隐藏，seen为true时显示/false时隐藏，隐藏后不占dom位置，相当于display:none;
// v-for="(item, index) in items"    动态遍历生成元素


/**
 * 问题1：
 * computed 和 watch 属性有什么区别？
 */