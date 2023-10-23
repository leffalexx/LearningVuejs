// 1. Создать кнопку "Перевернуть". При клике на кнопку текст кнопки,
// должен перевернуться и отобразиться в обратном порядке.


const reverseLettersInsideButton = {
    data() {
        return {
            textButton: 'Перевернуть'
        }
    },
    methods: {
        reverseLetters() {
            this.textButton = this.textButton.split('').reverse().join('');
        },
    },
};

// 2. есть список элементов. Пользователь может добавлять новые
// элементы списка с текстом “Новый элемент списка” нажав на кнопку
// "Добавить".
// 3. * При клике на элемент списка он должен быть удален. (по желанию).


const manageElements = {
    data() {
        return {
            listElement: [],
            addText: 'Новый элемент списка',
            buttonName: 'Добавить'
        }
    },
    methods: {
        addNewTextElement() {
            this.listElement.push(this.addText);
            console.log(this.listElement);
        },
        deleteElement(e) {
            e.target.remove();
            this.listElement.pop();
        }
    }
};


Vue.createApp(reverseLettersInsideButton).mount('#reverseLetters');
Vue.createApp(manageElements).mount('#addElement');