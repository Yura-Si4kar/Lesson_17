import UsersView from '../view/Users_View';
import Users_Collection from '../model/Users_Collection';

export default class Users_Controller {
    constructor($container) {
        this._view = new UsersView($container, {
            onDelete: (id) => this.onDelete(id),
            onAdd: (user) => this.addUsers(user),
        });

        this._usersList = new Users_Collection();
        this._usersList.getUsersList()
            .then(() => this._view.renderList(this._usersList.list));
    }

    onDelete(id) {
        this._usersList.removeUsers(id);
        this._view.renderList(this._usersList.list);
    }

    addUsers(user) {
        this._usersList.addUsers(user)
            .then(() => this._view.renderList(this._usersList.list));
    }
}