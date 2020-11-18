var app=new Vue({
  el:'#app',
  data:{
    logo:'img/logo.png',
    i:0,
    message:'',
    todos:[]
  },
  methods:{
    button:function () {
      this.testo=this.message;
      this.todos[this.i]=this.message;
      this.message='';
      this.i++;
    },
  }
});
