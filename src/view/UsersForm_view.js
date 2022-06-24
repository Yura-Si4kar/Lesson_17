export default class UsersFormView {
    static FORM_TEMPLATE = `<form class="input_block" class="form">
        <input class="input_elements" type="text" id="name" placeholder="Enter your name!">
        <input class="input_elements" type="text" id="surname" placeholder="Enter your surname!">
        <input class="input_elements" type="text" id="email" placeholder="Enter your e-mail!">
        <button class="input_btn" type="submit">Add Contact</button>
    </form>`;

    static INPUT_NAME = '#name';
    static INPUT_SURNAME = '#surname';
    static INPUT_EMAIL = '#email';

    constructor(config) {
        this._config = config;

        this.$el = $(UsersFormView.FORM_TEMPLATE).on(
            'submit',
            (e) => this.onFormSubmit(e),
        );
    }

    onFormSubmit(e) {
        e.preventDefault();

        const usersName = this.$el.find(UsersFormView.INPUT_NAME).val();
        const usersSurname = this.$el.find(UsersFormView.INPUT_SURNAME).val();
        const usersEmail = this.$el.find(UsersFormView.INPUT_EMAIL).val();

        this._config.onAdd && this._config.onAdd({
            name: usersName,
            surname: usersSurname,
            email: usersEmail,
        });

        this.$el.trigger('reset');
    }
}