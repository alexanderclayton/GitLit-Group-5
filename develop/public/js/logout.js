const logout = async () => {
    const response = await fetch(PLACEHOLDER_USER_LOGOUT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace(PLACEHOLDER_URL_REDIRECT);
    } else {
      alert(response.statusText);
    }
  };
  
  document.getElementById(PLACEHOLDER_LOGOUT_HTML_ID).addEventListener('click', logout);
  