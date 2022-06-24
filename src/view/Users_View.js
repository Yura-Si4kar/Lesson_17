import UsersListView from './UsersList_view';
import UsersFormView from './UsersForm_view';

export default class UsersView {
    constructor($container, config) {
        this.UsersView = new UsersListView(config);

        this.FormView = new UsersFormView(config);

        $container.append(this.UsersView.$el);
        $container.append(this.FormView.$el);
    }

    renderList(data) {
        this.UsersView.renderList(data);
    }
}