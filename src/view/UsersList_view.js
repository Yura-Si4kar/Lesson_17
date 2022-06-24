export default class UsersListView{
    static USERS_LIST_TEMPLATE = `<table class="input_blocks"></table>`;

    static USERS_INSERT_TEMPLATE = `<tr class="list_elements" data-id='{{id}}'>
        <td>{{Name}}</td>
        <td>{{Surname}}</td>
        <td>{{Email}}</td>
        <td>
            <button type="button" class="edit-btn">Edit</button>
            <button class="delete-btn">Delete User</button>
        </td>
    </tr>`;

    static USERS_SELECTOR = '.list_elements';
    static DELETE_BTN = '.delete-btn';
    static EDIT_BTN = '.edit-btn';

    static creatUsersList (users) {
        return $(UsersListView.USERS_INSERT_TEMPLATE
            .replace('{{id}}', users.id)
            .replace('{{Name}}', users.name)
            .replace('{{Surname}}', users.surname)
            .replace('{{Email}}', users.email)
        );
    }

    constructor(config = {}) {
        this.$el = $(UsersListView.USERS_LIST_TEMPLATE).on(
            'click',
            UsersListView.DELETE_BTN,
            (e) => {
                config.onDelete(
                    $(e.target)
                        .closest(UsersListView.USERS_SELECTOR)
                        .data('id'));
            })
            .on(
            'click',
            UsersListView.EDIT_BTN,
            (e) => {
                config.onEdit(
                    $(e.target)
                        .closest(UsersListView.USERS_SELECTOR)
                        .data('id'));
            }
        )
    }

    renderList(list) {
        this.$el.empty();
        this.$el.append(list.map(UsersListView.creatUsersList));
    }
}