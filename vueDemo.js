var obj={
    flag2:'1'
};
Object.freeze(obj);
var intro=new Vue({
    el:'#intro',
    data:{
        message:'悬停就能看到我辣！',
        message2:'hey!',
        message3:0,
        message4:'',
        a:[],
        num:'1',
        obj,
        rawHtml:'<span style="color:red">red</span>',
        Color:'red',
        flag:true,
        isTrue:true,
        lists:[
            {text:'aaa'},
            {text:'bbb'}
        ],
        list2:{
            1:'想吃蛋糕',
            2:'蛋糕巨好吃'
        },
    },
    methods: {
        change: function () {
            this.message2 = this.message2.split('').reverse().join('')
        },
        change2:function(){
            if(this.num==='1'){
                this.num='2'
            }else {
                this.num='1'
            }
        },
        change3:function () {
            this.isTrue=!this.isTrue
        },
        change4:function () {
            this.flag=!this.flag
        },
        add:function () {
            this.message3++;
        },
        hi:function () {
            alert("hi!")
        }
    }
});



