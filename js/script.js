const app = new Vue({
  el: '#app',

  data: {
    messaggio: 'Hello World!',
    nome: '',
    cognome: '',
    textColor: false,
    isTxtUnderline: false,
    immagine: ''
  },

  methods: {
    textUnderline(){
      this.isTxtUnderline =  !this.isTxtUnderline;
    }
  }
});

