export const login = async (logindata) => {
  const url = process.env.MYAPI + 'login-user';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(logindata)
    })
    const result = await response.json();
    if(!result.status) return;
    return { isLogged: true, token: result.data.token, data: result.data }
  } catch (err) {
    return;
  }
}


export const register = async (data) => {
  const url = this.MYAPI + 'register-user';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    const result = await response.json();
    if(!result.status) return;
    return { isLogged: true, token: result.data.token, data: result.data }
  } catch (err) {
    return;
  }
}

