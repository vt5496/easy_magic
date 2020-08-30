const axios = require('axios').default

axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)
    .then(users => users.forEach(user => {
        if (user.id === 5) {
            console.log(user)
        }
    }));