const USERS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';

export default class Users_Collection {
    constructor() {
        this.list = [];
    }

    getUsersList() {
        return fetch(USERS_URL)
            .then((res) => res.json())
            .then((data) => (this.list=data));
    }

    removeUsers(todoId) {
        this.list = this.list.filter(({ id }) => id != todoId);

        return fetch(USERS_URL + todoId, {
            method: 'DELETE',
        });
    }

    addUsers(user) {
        return fetch(USERS_URL, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => this.list.push(data));
        
    }
}