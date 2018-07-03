new Vue({
    el: '#app',
    data: {
        msg: 'this is the message',
        x:0,
        y: 0,
        counter: 0,
        newCounter: 0,
        useRed: false,
        color: "green",
        width: 100,
        show: true
    },
    computed:{
        output: function(){
            console.log("computed");
        return this.counter > 5 ? 'greater than 5' : 'Smaller than 5';
        },
        divlasses: function(){
            return{
                red: this.useRed,
                blue: !this.useRed,
            };
        },
        myStyle: function(){
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            }
        }
    },
    watch: {
        counter: function(value){
            var vm= this;
            setTimeout(function(){
                vm.counter= 0;
            }, 2000);
        }
    },
    methods:{
        getCoordinate: function(event){
            this.x= event.clientX;
            this.y= event.clientY;
        },
        alertMe: function(){
            alert("key up");
        },
        // increase: function(show, event){
        //     this.counter ++;
        //     this.result= this.counter > 4 ? 'result is greater than 4' : 'not greater than 4';
        // },
        // decrease: function() {
        //     this.counter --;
        //     this.result= this.counter > 4 ? 'result is greater than 4' : 'not greater than 4';
        // }
        result: function(){
            console.log("methods");
            return this.counter > 5 ? 'greater than 5' : 'Smaller than 5';
        }
    }
});

new Vue({
    el: '#soft',
    data: {
        states: ["osun", "ogun", "oyo", "eko"],
        persons: [
            {name: 'John', age:25, color: 'blue'},
            {name: 'Mat', age:22, color: 'Purple'}
        ]
    }
});

// for events, v- = @;
// v-bind = : ;