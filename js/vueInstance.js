// 一个vue实例的常用属性说明，最佳使用情况
var v = new Vue({
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
	 * 2.计算属性里面定义的函数名可以直接在html代码中使用，通过{{sum}}即可以显示结果
	 * 3.计算属性里面的方法无需调用，所依赖的数据一旦改变，自动执行并返回或显示最新结果
	 * 4.如果一个功能可以使用computed，watch，methods等方式实现，优先使用computed
	 * 5.computed里面的函数会在实例化组件的beforeMount和mounted生命周期函数之间执行完成(mounted之前完成)
	 */
	computed: {
		sum: function(num1,num2){
			console.log("sum");
			return num1+num2;
		},
		getFullAddress: function() {
			console.log("getFullAddress");
			return this.country + this.address; // 依赖的数据一旦改变自动执行该方法
		}
	},
	
	// 侦听器，监控data对象里面属性状态的变化
	watch: {
		message: function(){
			// message的值发生变化时会执行该函数
			console.log("watch-message函数被执行！");
		}
	},
	
	beforeCreate: function () {
 		console.log("beforeCreate","初始化vue实例前的一些准备");
 	},
 	created: function() {
 		console.log(this);
 		console.log(this.$el);
 		console.log("created","初始化vue实例已经完成，但还没有拿到根元素");
 	},
 	
 	beforeMount: function(){
 		// 已经拿到根元素，但是还没有和vue实例的数据结合
 		console.log(this.$el);
 		console.log("beforeMount","vue实例没有和根元素el挂载");
 	},
 	mounted: function() {
 		console.log(this.$el);
 		console.log("mounted","vue实例已经和根元素el挂载完成");
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
