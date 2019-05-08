function login(e) {
    e.preventDefault();
    let login = document.querySelector('#login');
    let password = document.querySelector('#password');

    login.classList.remove('fail');
    password.classList.remove('fail');

    let data = {
        login: login.value,
        password: password.value,
    };

    console.log(data);
    fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(response => {
            if (response.status == 200) {
                window.location = 'dashboard.html';
            } else {
                login.classList.add('fail');
                password.classList.add('fail');
            }
        });
}

document.querySelector('#submit').addEventListener('click', login);