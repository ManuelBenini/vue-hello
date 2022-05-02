const app = new Vue({
  el: '#app',

  data: {
    messaggio: 'Hello World!',
    nome: '',
    cognome: '',
    textColor: false,
    isTxtUnderline: false,
    immagine: 'img/1.jpg'
  },

  methods: {
    textUnderline(){
      this.isTxtUnderline =  !this.isTxtUnderline;
    }
  }
});

