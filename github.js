class GitHub{
  constructor(){
    this.client_id = '5c2e1fa6684701e01350';
    this.client_secret = 'c66ca2efb7ee0a003842904d84a98aaadfbbb7ac';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return{
      profile: profile
    }
  }
}