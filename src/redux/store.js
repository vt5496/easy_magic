
import dishReducer from "./dish-reducer";
import searchReducer from "./search-reducer";

let store = {
    _state: {

        catalog: [
            {
                idDish: 0,
                name: "Карбонара",
                img: "https://make-eat.ru/assets/cache_image/img/piczcza-karbonara_0x280_d74.jpg",
                cost: 120,
                weight: 1000,
                composition: "сыр моцарелла, бекон, ветчина, помидор черри, перепелиное яйцо, соус бальзамико, соус сливочный, пармезан",
                description: '',
                fav: 0,
                likes: 0,
                comments: [
                    {
                        user_id: 1,
                        value: 'Nice Pizza',
                    },
                    {
                        user_id: 1,
                        value: 'Good job'
                    }
                ],
                get lengthCom(){
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
                fav: 0,
                likes: 0,
                comments: [
                    {
                        user_id: 1,
                        value: 'Nice Pizza',
                    }
                ],
                get lengthCom(){
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
                fav: 0,
                likes: 0,
                comments: [
                    {
                        user_id: 1,
                        value: 'Nice Pizza',
                    }
                ],
                get lengthCom(){
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
                fav: 0,
                likes: 0,
                comments: [
                    {
                        user_id: 1,
                        value: 'Nice Pizza',
                    }
                ],
                get lengthCom(){
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
                fav: 0,
                likes: 0,
                comments: [
                    {
                        user_id: 1,
                        value: 'Nice Pizza',
                    }
                ],
                get lengthCom(){
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
                fav: 0,
                likes: 0,
                comments: [
                    {
                        user_id: 1,
                        value: 'Nice Pizza',
                    }
                ],
                get lengthCom(){
                    return this.comments.length;
                },
                rating: ''
            }
        ],
        oders: [
            {
                date: 'date',
                idOder: 1,
                dishs: [],
                rating: 231
            },
            {
                date: 'date',
                idOder: 1,
                dishs: [],
                rating: 231
            },
            {
                date: 'date',
                idOder: 1,
                dishs: [],
                rating: 231
            }
        ],
        users: [
            {
                idUser: 1,
                name: "Vlad",
                surname: "Tkachenko",
                number: 380635638793,
                img: "https://scontent.fiev25-2.fna.fbcdn.net/v/t1.0-9/104180479_2991544977600183_335949495529035300_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=11gcT-2cyd0AX-CCJX4&_nc_ht=scontent.fiev25-2.fna&oh=1fcdd51aa051373ed3b104a3360e3350&oe=5F13820B",
                favorites: [],
                comments: [],
                likes: [],
                settings: [],
                historyOders: [],
                popularityDishs: [],
                offers: []},
            {
                idUser: 2,
                name: "Vlad",
                surname: "Tkachenko",
                number: 380635638793,
                img: "https://scontent.fiev25-2.fna.fbcdn.net/v/t1.0-9/104180479_2991544977600183_335949495529035300_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=11gcT-2cyd0AX-CCJX4&_nc_ht=scontent.fiev25-2.fna&oh=1fcdd51aa051373ed3b104a3360e3350&oe=5F13820B",
                favorites: [],
                comments: [],
                likes: [],
                settings: [],
                historyOders: [],
                popularityDishs: [],
                offers: []
            },
            {
                idUser: 3,
                name: "Vlad",
                surname: "Tkachenko",
                number: 380635638793,
                img: "https://scontent.fiev25-2.fna.fbcdn.net/v/t1.0-9/104180479_2991544977600183_335949495529035300_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=11gcT-2cyd0AX-CCJX4&_nc_ht=scontent.fiev25-2.fna&oh=1fcdd51aa051373ed3b104a3360e3350&oe=5F13820B",
                favorites: [],
                comments: [],
                likes: [],
                settings: [],
                historyOders: [],
                popularityDishs: [],
                offers: []
            }
        ],
        user: {
            idUser: 1,
            name: "Vlad",
            surname: "Tkachenko",
            number: 380635638793,
            img: "https://scontent.fiev25-2.fna.fbcdn.net/v/t1.0-9/104180479_2991544977600183_335949495529035300_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=11gcT-2cyd0AX-CCJX4&_nc_ht=scontent.fiev25-2.fna&oh=1fcdd51aa051373ed3b104a3360e3350&oe=5F13820B",
            favorites: [],
            comments: [],
            likes: [],
            settings: [],
            historyOders: [],
            popularityDishs: [],
            offers: []
        },

        finder: {
            text: '',
            elements: []
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state = dishReducer(this._state, action);
        this._state = searchReducer(this._state, action)
        this._callSubscriber(this._state);
    }
};





export default store;