 new Vue({
     el:'#desafio',
     data: {
        idade: 22,
        nome: 'Ramon',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRA8gQ_zSDdr80j4pRYjKVCsMXgT4YWemFB7QLe7W7LVdNIlQqy'
     },
     methods: {
        numeroRandomico() {
            return Math.random()
        },
        idadeVezes3() {
            return this.idade * 3
        }
     }
 })