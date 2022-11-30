export const login = async (logindata) => {
  const url = process.env.MYAPI + 'login-user';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(logindata)
    });
    return await response.json();
  } catch (err) {
    return err;
  }
}


export const register = async (data) => {
  const url = process.env.MYAPI + 'register-user';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    return await response.json();
  } catch (err) {
    return err;
  }
}

export const findUser = async (searchQuery) => {
  const url = process.env.MYAPI + 'find-user?' + new URLSearchParams(searchQuery);
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    const res = await response.json();
    return res;
  } catch (err) {
    return err;
  }
}

export const findAccount = async ({providerAccountId, provider}) => {
  const url = process.env.MYAPI + 'find-account?' + new URLSearchParams({ providerAccountId, provider });
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });
    return await response.json();
  } catch (err) {
    return err;
  }
}

export const addAccount = async (providerInfo) => {
  const url = process.env.MYAPI + 'account';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(providerInfo)
    });
    const res = await response.json();
    return res;
  } catch (err) {
    return err;
  }
}

export const addSession = async (sessiondata) => {
  const url = process.env.MYAPI + 'sessions';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ ...sessiondata })
    });
    return await response.json();
  } catch (err) {
    return err;
  }
}

