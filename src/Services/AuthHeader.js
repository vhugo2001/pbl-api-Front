export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

  
    if (user && user.accessToken) {
      console.log('user')
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      console.log('nao entrou')
      return {};
    }
  }