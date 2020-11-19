var app=new Vue({
  el:'#app',
  data:{

    logo:'img/logo.png',
    itemList:'',
    list:[],

    // focus automatico sull'input
    focus:Vue.directive('focus',{
      inserted:function (el) {
        el.focus();
      }
    }),

    //funzione per aggiungere un elemento
    addItem:function () {

      if (this.itemList=='') { //se non inserisco niente
        alert('attenzione inserisci un elemento');
      }else if (this.list.includes(this.itemList)) { //se l'input è gia stato inserito
        alert('elemento già inserito');
      }else {
        this.list.push(this.itemList);
      }
      this.itemList='';
    }
  },

  methods:{

    //funzione per aggiungere un elemento tramite tastiera
    addItemKey:function () {
      this.addItem();
    },

    //funzione per aggiungere un elemento tramite button
    addItemButton:function () {
      this.addItem();
    },

    //funzione per eliminare l'elemento selezionato
    remove:function (index) {
       this.list.splice(index,1);
    },

    //funzione per rimuovere cancellare tutta la lista
    removeAll:function () {
      this.list.length==0 ? alert('La lista è vuota') : this.list=[];
    }

  }
});
