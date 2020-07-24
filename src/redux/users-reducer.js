let initialState = [
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
        img: "https://scontent.fiev25-2.fna.fbcdn.net/v/t1.0-9/104180479_2991544977600183_335949495529035300_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=aIN5aE96wwQAX_H3Vxx&_nc_ht=scontent.fiev25-2.fna&oh=465a5e40190a1b8596bd1fb34ee8cbc8&oe=5F3B0F0B",
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
];

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTRATION-NEW-USER':
            let newUser = {
                name: action.name,
                surname: action.surname,
                email: action.email,
                number: action.number,
                img: action.img,
                login: action.login,
                password: action.password,
                favorites: [],
                comments: [],
                newCommentText: [],
                likes: [],
                settings: [],
                historyOders: [],
                popularityDishs: [],
                offers: []
            }
            return [...state, newUser]
        default:
            return state
    }
    return state;
}

export default usersReducer;