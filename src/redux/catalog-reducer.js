let initialState = [
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
];

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-LIKE':
            state[action.idDish].likes++;
            break;
        case 'REMOVE-LIKE':
            state[action.idDish].likes--;
            break;
        case 'ADD-COMMENT':
            state[action.idDish].comments.push({
                idUser: action.idUser,
                idComment: action.idComment,
                value: action.value,
                date: new Date()
            });
            break;

        default:
            return state;
    }

    return state;
}


export const addLikeActionCreator = dish => ({
    type: 'ADD-LIKE',
    idDish: dish.idDish
});
export const removeLikeActionCreator = dish => ({
    type: 'REMOVE-LIKE',
    idDish: dish.idDish,
});

export const addCommentActionCreator = (props, dish) => ({
    type: 'ADD-COMMENT',
    idDish: dish.idDish,
    idUser: props.user.idUser,
    idComment: dish.comments.length,
    value: props.user.newCommentText[dish.idDish].value
});


export default catalogReducer;