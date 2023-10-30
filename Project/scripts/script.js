const app = {
    data() {
        return {
            blogPostData: [
                { id: 2, src: '../img/BlogImage_1.jpg', alt: 'living room', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', button: 'Living Design' },
                { id: 1, src: '../img/BlogImage_2.jpg', alt: 'kitchen', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022', button: 'Kitchan Design' },
                { id: 3, src: '../img/BlogImage_3.jpg', alt: 'kitchen', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022', button: 'Interior Design' },
                { id: 4, src: '../img/BlogImage_4.jpg', alt: 'kitchen', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022', button: 'Kitchan Design' },
                { id: 5, src: '../img/BlogImage_5.jpg', alt: 'living room', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', button: 'Living Design' },
                { id: 6, src: '../img/BlogImage_6.jpg', alt: 'kitchen', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022', button: 'Interior Design' }
            ]
        };
    },
    methods: {

    },

};

Vue.createApp(app).mount('#blog-container');