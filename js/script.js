// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Vue Email List',
            emailList: [],
            basePath: 'https://flynn.boolean.careers/exercises/api/'
        }
    },
    methods: {
        getEmailData() {
            this.emailList = [];
            for(let i = 0; i < 10; i++) {
                axios.get(this.basePath + 'random/mail').then((res) => {
                    console.log(res.data.response)
                    this.emailList.push(res.data.response);
                    });
            }     
        }
    },
    mounted() {

    }
}).mount('#app');
