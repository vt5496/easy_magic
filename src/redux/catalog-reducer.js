const initialState = {

    dishes: [
        {
            idDish: 0,
            type: 'Pizza',
            name: 'Карбонара',
            img: 'https://make-eat.ru/assets/cache_image/img/piczcza-karbonara_0x280_d74.jpg',
            cost: 120,
            weight: 1000,
            composition: 'сыр моцарелла, бекон, ветчина, помидор черри, перепелиное яйцо, соус бальзамико, соус сливочный, пармезан',
            description: '',
            likes: 0,
            comments: [
                {
                    idUser: 0,
                    idComment: 0,
                    date: '08.08.2020',
                    value: 'FirstComment'
                }
            ],
            get lengthCom() {
                return this.comments.length;
            },
            rating: ''
        },
        {
            idDish: 1,
            type: 'Pizza',
            name: 'Барбекю',
            img: 'https://holyfood.com.ua/wp-content/uploads/2018/11/pizza-pizza-barbeku-1200x1200.jpg',
            cost: 140,
            weight: 800,
            composition: 'Шашлык, соус BBQ, бекон, грибы, моцарелла, перец болгарский, лук, зелень',
            description: '',
            likes: 0,
            comments: [],
            get lengthCom() {
                return this.comments.length;
            },
            rating: ''
        },
        {
            idDish: 2,
            type: 'Pizza',
            name: 'Вегетарианская',
            img: 'http://i.siteapi.org/h3oBdjtFkoGSjE7AdquYJ6iWnKk=/fit-in/1024x768/center/top/filters:quality(95)/95144f557808652.s.siteapi.org/img/9aba494d756b2ce7dc6dc6f87e84bff71a38b4c4.png',
            cost: 80,
            weight: 800,
            composition: 'грибы, моцарелла, перец болгарский, лук, зелень, помидор, огурец соленый, маслины ',
            description: '',
            likes: 0,
            comments: [],
            get lengthCom() {
                return this.comments.length;
            },
            rating: ''
        },
        {
            idDish: 3,
            type: 'Pizza',
            name: '4 сыра',
            img: 'https://holyfood.com.ua/wp-content/uploads/2018/11/pizza-pizza-4-syra-1200x1200.jpg',
            cost: 120,
            weight: 900,
            composition: 'сыр моцарелла, Дор Блю, радомер, пармезан',
            description: '',
            likes: 0,
            comments: [],
            get lengthCom() {
                return this.comments.length;
            },
            rating: ''
        },
        {
            idDish: 4,
            type: 'Pizza',
            name: 'Филадельфия',
            img: 'https://nikolaev-pizza.znakachestva.ua/uploads/thumbs/store/product/365x365_ff828d64a70b9aeb4fa90334d5deca72.png',
            cost: 150,
            weight: 850,
            composition: 'Лосось, сыр пармезан, моцарелла, сыр филадельфия, маслины, пармезан, кунжут',
            description: '',
            likes: 0,
            comments: [],
            get lengthCom() {
                return this.comments.length;
            },
            rating: ''
        },
        {
            idDish: 5,
            type: 'Pizza',
            name: 'Гавайская',
            img: 'https://holyfood.com.ua/wp-content/uploads/2018/11/pizza-pizza-havaiskaya-1200x1200.jpg',
            cost: 120,
            weight: 800,
            composition: 'Курица, ананас, моцарелла, соус',
            description: '',
            likes: 0,
            comments: [],
            get lengthCom() {
                return this.comments.length;
            },
            rating: ''
        }
    ],
    sortBy: ['name']
};

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-LIKE':
            return {
                ...state, dishes: [...state.dishes.map(dish =>
                    (action.idDish === dish.idDish) ?
                        {...dish, likes: ++dish.likes} :
                        dish
                )]
            }
        case 'REMOVE-LIKE':
            return {
                ...state, dishes: [...state.dishes.map(dish =>
                    (action.idDish === dish.idDish) ?
                        {...dish, likes: --dish.likes} :
                        dish
                )]
            }
        case 'ADD-COMMENT':
            return {
                ...state, dishes: [...state.dishes.map(dish =>
                    (action.idDish === dish.idDish) ?
                        {
                            ...dish,
                            comments: [...dish.comments, {
                                idUser: action.idUser,
                                idComment: action.idComment,
                                value: action.newCommentTextValue,
                                date: new Date()
                            }]
                        } :
                        dish
                )]
            }

        case 'SORT-BY-NAME':
            return {
                ...state,
                sortBy: action.sortBy,
                dishes: [...state.dishes.sort(action.func)]
            }

        case 'SORT-BY-COST':
            return {
                ...state,
                sortBy: action.sortedBy,
                dishes: [...state.dishes.sort(action.func)]
            }

        default:
            return state;
    }

    return state;
}

export const addLikeAC = idDish => ({
    type: 'ADD-LIKE',
    idDish
});
export const removeLikeAC = idDish => ({
    type: 'REMOVE-LIKE',
    idDish,
});

export const addCommentAC = (user, {idDish, comments}) => {
    let newCommentTextValue = user.newCommentText.find(d => d.idDish === idDish).value;
    return ({
        type: 'ADD-COMMENT',
        idDish,
        idUser: user.idUser,
        idComment: comments.length,
        newCommentTextValue
    });
}

export const sortByAC = sortedBy =>
    (sortedBy === 'cost') ?
        ({
            type: 'SORT-BY-COST',
            sortedBy,
            func(a, b) {
                return a.cost - b.cost;
            }
        }) :
        ({
            type: 'SORT-BY-NAME',
            sortedBy,
            func(a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                // a должно быть равным b
                return 0;
            }
        })


export default catalogReducer;