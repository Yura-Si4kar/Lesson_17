class UsersFormView {
    static FORM_TEMPLATE = `<form class="input_block" class="form">
        <input class="input_elements" type="text" id="name" placeholder="Enter your name!">
        <input class="input_elements" type="text" id="surname" placeholder="Enter your surname!">
        <input class="input_elements" type="text" id="email" placeholder="Enter your e-mail!">
        <button class="input_btn" type="submit">Add Contact</button>
    </form>`;

    static INPUT_NAME = '#name';
    static INPUT_SURNAME = '#surname';
    static INPUT_EMAIL = '#email';

    constructor() {
        this.$form = $(UsersFormView.FORM_TEMPLATE).on(
            'submit',
            (e) => this.onFormSubmit(e),
        );
    }

    onFormSubmit(e) {
        e.preventDefault();

        const usersName = this.$form.find(UsersFormView.INPUT_NAME).val();
        const usersSurname = this.$form.find(UsersFormView.INPUT_SURNAME).val();
        const usersEmail = this.$form.find(UsersFormView.INPUT_EMAIL).val();

        this.config.onSave && this.config.onSave({
            name: usersName,
            surname: usersSurname,
            usersEmail: usersEmail,
        });

        this.$form.trigger('reset');
    }
}