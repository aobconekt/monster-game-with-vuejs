var cpmnt= {
	data: function(){
		return{
			info: "this is true"
		}
	},
	template: "<h3>{{ info }} <button @click='changeInfo'>click</button></h3>",
	methods: {
		changeInfo: function(){
			this.info= "Vue is cool";
		}
	}
};

new Vue({
	el: "#app",
	components: {
		'jb-tag': cpmnt
	}
})

new Vue({
	el: "#app2",
	components: {
		'jb-tag': cpmnt
	}
})