var app=new Vue({
  el:'#app',
  data:{
    logo:'img/logo.png',
    itemList:'',
    list:[]
  },
  methods:{

    add:function () {
      
      this.itemList = this.itemList.substr(0,1).toUpperCase()+this.itemList.substr(1,this.itemList.length).toLowerCase();

      if (this.itemList=='') {
        alert('attenzione inserisci un elemento');
      }else if (this.list.includes(this.itemList)) {
        alert('elemento già inserito');
      }else {
        this.list.push(this.itemList);
      }
      this.itemList='';
    },

    remove:function (index) {
       this.list.splice(index,1);
    }
  }
});
