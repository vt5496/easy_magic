const initialState = {

    pizza: [
        {
            idDish: 0,
            name: "Карбонара",
            img: "https://make-eat.ru/assets/cache_image/img/piczcza-karbonara_0x280_d74.jpg",
            cost: 120,
            weight: 1000,
            composition: "сыр моцарелла, бекон, ветчина, помидор черри, перепелиное яйцо, соус бальзамико, соус сливочный, пармезан",
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
            name: "Барбекю",
            img: "https://www.pizzaking.ua/resizer/resize/?w=472&h=472&type=c&image=./upload/catalog/4/4d169bd84ebf79363161938d676f2b78",
            cost: 140,
            weight: 800,
            composition: "Шашлык, соус BBQ, бекон, грибы, моцарелла, перец болгарский, лук, зелень",
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
            name: "Вегетарианская",
            img: "https://lh3.googleusercontent.com/proxy/MySJ4M1YWr2xcMGQO0GV_IQ9-xK37DmOoehRT-oTcJ9EP4XGxs2wZuwJ_sZnaAEAsD78LTT4W5CfYWMLdOCRkF1BtU60qqYR2JpL9bO0uv2Br8-cf47EAzVnuvE",
            cost: 80,
            weight: 800,
            composition: "грибы, моцарелла, перец болгарский, лук, зелень, помидор, огурец соленый, маслины ",
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
            name: "4 сыра",
            img: "https://vilkin.pro/wp-content/uploads/2019/11/picca-chetire-sira-770x513.jpg",
            cost: 120,
            weight: 900,
            composition: "сыр моцарелла, Дор Блю, радомер, пармезан",
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
            name: "Филадельфия",
            img: "https://nikolaev-pizza.znakachestva.ua/uploads/thumbs/store/product/365x365_ff828d64a70b9aeb4fa90334d5deca72.png",
            cost: 150,
            weight: 850,
            composition: "Лосось, сыр пармезан, моцарелла, сыр филадельфия, маслины, пармезан, кунжут",
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
            name: "Гавайская",
            img: "https://images.pizza33.ua/products/product/MQg5e2GkYToS2p4P3Xtc1ykakPMFcRFM.jpg",
            cost: 120,
            weight: 800,
            composition: "Курица, ананас, моцарелла, соус",
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
                ...state, pizza: [...state.pizza.map(dish =>
                    (action.idDish === dish.idDish) ?
                        {...dish, likes: ++dish.likes} :
                        dish
                )]
            }
        case 'REMOVE-LIKE':
            return {
                ...state, pizza: [...state.pizza.map(dish =>
                    (action.idDish === dish.idDish) ?
                        {...dish, likes: --dish.likes} :
                        dish
                )]
            }
        case 'ADD-COMMENT':
            return {
                ...state, pizza: [...state.pizza.map(dish =>
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
                pizza: [...state.pizza.sort(action.func)]
            }

        case 'SORT-BY-COST':
            return {
                ...state,
                sortBy: action.sortedBy,
                pizza: [...state.pizza.sort(action.func)]
            }

        default:
            return state;
    }

    return state;
}

export const addLikeAC = ({idDish}) => ({
    type: 'ADD-LIKE',
    idDish
});
export const removeLikeAC = ({idDish}) => ({
    type: 'REMOVE-LIKE',
    idDish,
});

export const addCommentAC = ({user}, {idDish, comments}) => {
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