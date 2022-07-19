export default class UserInfo {
    constructor(  userName, userInfo ) {
        this._userName = userName.textContent;
        this._userInfo = userInfo.textContent;
    }
    getUserInfo() {
        const userInfo = {
            username: this._userName,
            info: this._userInfo,
          }
          return userInfo;

    }
    setUserInfo(data) {
        // this._userName.textContent = '1';
        // this._userInfo = data.rank;
    }
}