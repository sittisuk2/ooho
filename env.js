
const callback = ['http://localhost:3000/login.html', 'https://sittisuk2.github.io/ooho/login.html']

window.webAuth = new auth0.WebAuth({
  domain: 'sittisuk.auth0.com',
  clientID: 'AR6mzvSkwz1TMi5ZzMZB2lvdmvj1xX2z',
  redirectUri: callback[0],
  audience: 'https://sittisuk.auth0.com/userinfo',
  responseType: 'token id_token',
  scope: 'openid profile email'
})