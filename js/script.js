var app=new Vue({
  el:'#app',
  data:{
    logo:'img/logo.png',
    itemList:'',
    list:[]
  },
  methods:{
    
    //funzione per aggiungere un elemento tramite tastiera
    enter:function () {
      // prima lettera maiuscola
      this.itemList = this.itemList.substr(0,1).toUpperCase()+this.itemList.substr(1,this.itemList.length).toLowerCase();

      if (this.itemList=='') { //se non inserisco niente
        alert('attenzione inserisci un elemento');
      }else if (this.list.includes(this.itemList)) { //se l'input è gia stato inserito
        alert('elemento già inserito');
      }else {
        this.list.push(this.itemList);
      }
      this.itemList='';
    },

    //funzione per aggiungere un elemento
    add:function () {
      // prima lettera maiuscola
      this.itemList = this.itemList.substr(0,1).toUpperCase()+this.itemList.substr(1,this.itemList.length).toLowerCase();

      if (this.itemList=='') { //se non inserisco niente
        alert('attenzione inserisci un elemento');
      }else if (this.list.includes(this.itemList)) { //se l'input è gia stato inserito
        alert('elemento già inserito');
      }else {
        this.list.push(this.itemList);
      }
      this.itemList='';
    },

    //funzione per eliminare l'elemento selezionato
    remove:function (index) {
       this.list.splice(index,1);
    }
  }
});
