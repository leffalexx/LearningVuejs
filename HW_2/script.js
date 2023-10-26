// Вы разрабатываете приложение для отображения и
// сортировки списка товаров. У вас есть массив объектов
// products, где каждый объект представляет товар с его
// названием и ценой. Вам необходимо отобразить список
// товаров и предоставить пользователю возможность
// сортировать товары по цене (по возрастанию и по
// убыванию).


const sortProducts = {
    data() {
        return {
            products: [
                {
                    name: 'product_1',
                    price: 99
                },
                {
                    name: 'product_2',
                    price: 249
                },
                {
                    name: 'product_3',
                    price: 24
                },
                {
                    name: 'product_4',
                    price: 199
                },
                {
                    name: 'product_5',
                    price: 149
                },
                {
                    name: 'product_6',
                    price: 14
                },
                {
                    name: 'product_7',
                    price: 29
                },
                {
                    name: 'product_8',
                    price: 69
                },
                {
                    name: 'product_9',
                    price: 789
                },
                {
                    name: 'product_0',
                    price: 49
                }
            ]
        }
    },


    methods: {
        sortAscending() {
            const result = this.products.sort((a, b) =>
                a.price - b.price);
            return result;
        },
        sortDescending() {
            const result = this.products.sort((a, b) =>
                b.price - a.price);
            return result;
        }
    }
}


Vue.createApp(sortProducts).mount('#products');