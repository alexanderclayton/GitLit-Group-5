const signup = document.getElementById('signup');
const login = document.getElementById('login');
const backToMain = document.getElementById('back');

const loginForm = async (event) => {
    event.preventDefault();

    const email = document.getElementById('email-textarea').value.trim();
    const password = document.getElementById('password-textarea').value.trim();

    if (email && password) {

        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

const signupForm = async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/thankYou')
        } else {
            alert(response.statusText);
        }
    }
};

const logoutButton = async () => {
    const response = await fetch(PLACEHOLDER__API_USER_LOCATION, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        console.log('Successfully logged out')
        document.location.replace(PLACEHOLDER_REDIRECT_URL)
    } else {
        alert(response.statusText);
    }
};

if(login) {
    login.addEventListener('click', loginForm)
}
// document.getElementById(PLACEHOLDER_LOGOUT_HTML_ID).addEventListener('click', logoutButton);
if(signup) {
    signup.addEventListener('click', signupForm);
}

if(backToMain) {
    backToMain.addEventListener('click', function(e) {
        e.preventDefault()
        document.location.replace('/')
    })
}

document.getElementById('signup-btn').addEventListener('click', function(e) {
    e.preventDefault()
    document.location.replace('/signup')
})

document.getElementById('login-btn').addEventListener('click', function(e) {
    e.preventDefault()
    document.location.replace('/login')
})