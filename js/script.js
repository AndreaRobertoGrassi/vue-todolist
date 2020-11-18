var app=new Vue({
  el:'#app',
  data:{
    logo:'img/logo.png',
    itemList:'',
    list:[]
  },
  methods:{
    add:function () {
      this.list.push(this.itemList);
      this.itemList='';

    },
    remove:function (index) {
       this.list.splice(index,1);
    }
  }
});
