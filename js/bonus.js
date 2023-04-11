const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Cocktail List API',
            cocktailList: [],
            searchName: ''
        }
    },
    methods: {
        getDrinks() {
            this.cocktailList = []
            this.searchName = '';
            for(let i = 0; i < 8; i++) {
                axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then((res) => {
                    console.log(res.data.drinks);
                    this.cocktailList.push(res.data.drinks)           
                })
            }     
       },
    },
    mounted() {
        
    }
}).mount('#app');