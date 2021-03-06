import like from '../img/heart.svg';
import likeO from '../img/heart-o.svg';
import favorite from '../img/star-o.svg';
import favoriteO from '../img/star.svg';


import catalogReducer from "./catalog-reducer";
import authorizationReducer from "./authorization-reducer";
import registrationReducer from './registration-reducer';

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
                likes: 0,
                comments: [
                    {
                        idUser: 0,
                        idComment: 0,
                        date: '08.08.2020',
                        value: 'FirstComment'
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
                likes: 0,
                comments: [],
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
                likes: 0,
                comments: [],
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
                likes: 0,
                comments: [],
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
                likes: 0,
                comments: [],
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
                likes: 0,
                comments: [],
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
                idUser: 0,
                login: 'vt5496',
                password: 'vt5496',
                name: "Vlad",
                surname: "Tkachenko",
                number: 380635638793,
                get fullName () {
                    return `${this.name} ${this.surname}`
                },
                img: "https://scontent.fiev25-2.fna.fbcdn.net/v/t1.0-9/104180479_2991544977600183_335949495529035300_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=11gcT-2cyd0AX-CCJX4&_nc_ht=scontent.fiev25-2.fna&oh=1fcdd51aa051373ed3b104a3360e3350&oe=5F13820B",
                comments: [],
                newCommentText: [],
                likes: [],
                searchText: '',
                search: [],
                settings: [],
                historyOders: [],
                popularityDishs: [],
                offers: []
            },
            {
                idUser: 1,
                login: 'skyline.vp',
                password: 'skyline.vp',
                name: "Vlad",
                surname: "Polishuk",
                number: 380930600236,
                get fullName () {
                    return `${this.name} ${this.surname}`
                },
                img: "https://instagram.fiev25-2.fna.fbcdn.net/v/t51.2885-19/s320x320/67667701_335155654093984_2226226195425394688_n.jpg?_nc_ht=instagram.fiev25-2.fna.fbcdn.net&_nc_ohc=cyiBlQjUqWQAX--UOyo&oh=2e303d228325cda0831caa3af870eb21&oe=5F34D480",
                comments: [],
                newCommentText: [],
                likes: [],
                searchText: '',
                search: [],
                settings: [],
                historyOders: [],
                popularityDishs: [],
                offers: []
            },
            {
                idUser: 2,
                login: 'yura_ne_dura',
                password: 'yura_ne_dura',
                name: "Yura",
                surname: "Platonov",
                number: 380950629249,
                get fullName () {
                    return `${this.name} ${this.surname}`
                },
                img: "https://instagram.fiev25-1.fna.fbcdn.net/v/t51.2885-19/s320x320/84434529_211320930266070_2314518529619001344_n.jpg?_nc_ht=instagram.fiev25-1.fna.fbcdn.net&_nc_ohc=XdDyvIEKVQMAX_GTAW1&oh=a47add67600fdbdd9f38fb675bc10b51&oe=5F329DCC",
                comments: [],
                newCommentText: [],
                likes: [],
                searchText: '',
                search: [],
                settings: [],
                historyOders: [],
                popularityDishs: [],
                offers: []
            },
            {
                idUser: 3,
                login: 'SichDan',
                password: 'SichDan',
                name: "Daniil",
                surname: "Sichov",
                number: 380950629249,
                get fullName () {
                    return `${this.name} ${this.surname}`
                },
                img: "https://instagram.fiev25-2.fna.fbcdn.net/v/t51.2885-19/s320x320/58939988_972744999594922_8714628762597064704_n.jpg?_nc_ht=instagram.fiev25-2.fna.fbcdn.net&_nc_ohc=dsLk7r4Q4Q0AX_xnPaw&oh=1a9446bed386db9ab4f9887a2861df8e&oe=5F37A24C",
                comments: [],
                newCommentText: [],
                likes: [],
                searchText: '',
                search: [],
                settings: [],
                historyOders: [],
                popularityDishs: [],
                offers: []
            },
            {
                idUser: 4,
                login: 'cookiestyle1',
                password: 'cookiestyle1',
                name: "Misha",
                surname: "Antufeev",
                number: 380950629249,
                get fullName () {
                    return `${this.name} ${this.surname}`
                },
                img: "https://instagram.fiev25-2.fna.fbcdn.net/v/t51.2885-19/s320x320/62224448_2414359058776707_9033437420405653504_n.jpg?_nc_ht=instagram.fiev25-2.fna.fbcdn.net&_nc_ohc=XCV4lmci-H0AX9cCc-b&oh=9ed3713b1d968101996fdf5bf60492c5&oe=5F346C37",
                comments: [],
                newCommentText: [],
                likes: [],
                searchText: '',
                search: [],
                settings: [],
                historyOders: [],
                popularityDishs: [],
                offers: []
            },
            {
                idUser: 5,
                login: 'solovyov.andreyka565',
                password: '1',
                name: "Andrey",
                surname: "Solovyov",
                number: 380950629249,
                get fullName () {
                    return `${this.name} ${this.surname}`
                },
                img: "https://instagram.fiev25-2.fna.fbcdn.net/v/t51.2885-19/s320x320/94355438_881288069055837_5523071644777578496_n.jpg?_nc_ht=instagram.fiev25-2.fna.fbcdn.net&_nc_ohc=DT6-MFcjPZgAX9_Z1IL&oh=98b80d557cfe46ff502da7927a174c35&oe=5F36A4B8",
                comments: [],
                newCommentText: [],
                likes: [],
                searchText: '',
                search: [],
                settings: [],
                historyOders: [],
                popularityDishs: [],
                offers: []
            },
            {
                idUser: 6,
                login: 'zhenya_galkin',
                password: '1',
                name: "Zhenya",
                surname: "Galkin",
                number: 380950629249,
                get fullName () {
                    return `${this.name} ${this.surname}`
                },
                img: "https://instagram.fiev25-2.fna.fbcdn.net/v/t51.2885-19/s320x320/81733282_2685359764887524_7554533614633877504_n.jpg?_nc_ht=instagram.fiev25-2.fna.fbcdn.net&_nc_ohc=-SF3PyyXzeUAX9CtuWX&oh=bc2372455a8411941525940d1d394bda&oe=5F38287D",
                favorites: [],
                comments: [],
                newCommentText: [],
                likes: [],
                searchText: '',
                search: [],
                settings: [],
                historyOders: [],
                popularityDishs: [],
                offers: []
            }
        ],
        user: {
            idUser: 0,
            login: 'vt5496',
            name: "Vlad",
            surname: "Tkachenko",
            number: 380635638793,
            get fullName () {
                return `${this.name} ${this.surname}`
            },
            img: "https://scontent.fiev25-2.fna.fbcdn.net/v/t1.0-9/104180479_2991544977600183_335949495529035300_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=11gcT-2cyd0AX-CCJX4&_nc_ht=scontent.fiev25-2.fna&oh=1fcdd51aa051373ed3b104a3360e3350&oe=5F13820B",
            comments: [],
            newCommentText: [],
            likes: [],
            searchText: '',
            search: [],
            settings: [],
            historyOders: [],
            popularityDishs: [],
            offers: []
        },

        img: {
            like1: like,
            likeO: likeO,
            favorite1: favorite,
            favoriteO: favoriteO,
        },

        newUser: [
            {
                login: '',
                password: ''
            },
            {
                name: '',
                surname: '',
                email: '',
                number: '',
                img: '',
                login: '',
                password: '',

            }
        ]
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
        this._state = authorizationReducer(this._state, action)
        this._state = registrationReducer(this._state, action)
        this._state = dishReducer(this._state, action);
        this._callSubscriber(this._state);
    }
};





export default store;
