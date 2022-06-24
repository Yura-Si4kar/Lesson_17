import Users_Controller from './controller/Users_Controller';
import './css/style.css';

$(() => {
    new Users_Controller($('.container'));
});