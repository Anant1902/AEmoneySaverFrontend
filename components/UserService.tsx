export async function checkSignIn(email: any, pass: any) {
    const response = await fetch('/api/sign_in', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: email, pass: pass})
      });
    return await response.json();
}

export async function createUser(id: any, email: any, username: any, pass: any, name: any) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: id,
            email: email,
            username: username,
            pass: pass,
            name: name
        })
      })
    return await response.json();
}