const loginForm = async (event) => {
    event.preventDefault();

    const email = document.getElementById(PLACEHOLDER_EMAIL_HTML_ID).value.trim();
    const password = document.getElementById(PLACEHOLDER_PASSWORD_HTML_ID).value.trim();

    if (email && password) {

        const response = await fetch(PLACEHOLDER_USER_API_LOCATION, {
            method: 'POST',
            body: JSON.stringify({email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(PLACEHOLDER_REDIRECT_URL);
        } else {
            alert(response.statusText);
        }
    }
};

const signupForm = async (event) => {
    event.preventDefault();

    const name = document.getElementById(PLACEHOLDER_NAME_HTML_ID).value.trim();
    const email = document.getElementById(PLACEHOLDER_EMAIL_HTML_ID).value.trim();
    const password = document.getElementById(PLACEHOLDER_PASSWORD_HTML_ID).value.trim();

    if (name && email && password) {
        const response = await fetch(PLACEHOLDER_USER_API_LOCATION, {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(PLACEHOLDER_REDIRECT_URL)
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

document.getElementById(PLACEHOLDER_LOGIN_HTML_ID).addEventListener('submit', loginForm);
document.getElementById(PLACEHOLDER_LOGOUT_HTML_ID).addEventListener('click', logoutButton);
document.getElementById(PLACEHOLDER_SIGNUP_HTML_ID).addEventListener('submit', signupForm);