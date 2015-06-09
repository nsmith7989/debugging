import $ from 'jquery';

export default function sendAjax(data) {
    return $.ajax('http://localhost:1337', {
        method: 'POST',
        data
    });
}