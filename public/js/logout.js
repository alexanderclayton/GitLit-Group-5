const logoutBtn = document.getElementById('logout-btn');

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/logout');
    } else {
      alert(response.statusText);
    }
  };
  
  if(logoutBtn) {
  logoutBtn.addEventListener('click', logout);
  }