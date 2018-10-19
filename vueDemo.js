var intro=new Vue({
    el:'#intro',
    data:{
        message:'悬停就能看到我辣！',
        message2:'hey!',
        lists:[
            {text:'aaa'},
            {text:'bbb'}
        ],
    },
    methods: {
        change: function () {
            this.message2 = this.message2.split('').reverse().join('')
        }
    }
});

var obj={
    flag2:'1'
};
Object.freeze(obj);
var vm=new Vue({
    el:'#instance',
    data:{
        flag:'1',
        obj
    },
    methods: {
        change:function(){
            if(this.flag==='1'){
                this.flag='2'
            }else {
                this.flag='1'
            }
        }
    }
});

var grammer=new Vue({
    el:'#grammer',
    data:{
        rawHtml:'<span style="color:red">red</span>'
    }
});

var Css=new Vue({
    el:'#Css',
    data:{
        isTrue:true,
    },
    methods:{
        change:function () {
            this.isTrue=!this.isTrue
        }
    }
});

var If= new Vue({
    el:'#if',
    data:{
        flag:true
    },
    methods:{
        change:function () {
            this.flag=!this.flag
        }
    }
});

var list=new Vue({
    el:'#list',
    data:{
        list:{
            1:'想吃蛋糕',
            2:'蛋糕巨好吃'
        }
    }
});

var event=new Vue({
    el:'#event',
    data:{
        message:0
    },
    methods:{
        add:function () {
            this.message++;
        },
            hi:function () {
                alert("hi!")
            }
    }
});

var event=new Vue({
    el:'#input',
    data:{
        a:[],
        message:''
    }
})
