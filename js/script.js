
var app=new Vue({
  el:'#app',
  data:{
    logo:'img/logo.png',
    itemList:'',
    i:0,
    list:[]
  },

  methods:{

    //funzione per aggiungere un elemento
    addItem:function () {

      if (this.itemList=='') { //se non inserisco niente
        alert('inserisci un elemento');
      }else if (this.list.includes(this.itemList)) { //se l'input è gia stato inserito
        alert('elemento già inserito');
      }else {
        Vue.set(this.list,this.i,this.itemList);
        this.i++;
      }
      this.itemList='';
    },

    //funzione per eliminare l'elemento selezionato
    remove:function (index) {
      Vue.delete(this.list,index,this.itemList);
      this.i--;
    },

    //funzione per rimuovere cancellare tutta la lista
    removeAll:function () {
      this.list.length==0 ? alert('La lista è vuota') : this.list=[];
      this.i=0;
    }

  }
});
