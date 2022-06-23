class Users_Controller {
    constructor($container) {
        this.UsersView = new UsersListView({
            onDelete: (id) => this.onDelete(id),
            onEdit: (id) => this.changeUsersInfo(id),
        });

        this.FormView = new UsersFormView({
            onSave: (user) => this.addUsers(user),
        });

        $container.append(this.UsersView.$el);
        $container.append(this.FormView.$form);

        this._usersList = new Users_Collection();
        this._usersList.getUsersList()
            .then(() => this.UsersView.renderList(this._usersList.list));
    }

    onDelete(id) {
        this._usersList.removeUsers(id)
            .then(() => this.UsersView.renderList(this._usersList.list));
    }

    addUsers(user) {
        this._usersList.addUsers(user)
            .then(() => this.UsersView.renderList(this._usersList.list));
    }
}