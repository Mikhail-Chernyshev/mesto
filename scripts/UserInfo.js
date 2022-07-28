import {profileTitle, profileRank} from '../pages/index.js'
export default class UserInfo {
    constructor( { userName, userInfo } ) {
        this._userName = document.querySelector(userName);
        this._userInfo = document.querySelector(userInfo);
    }
    getUserInfo() {
        const userInfo =  {
            username: this._userName.textContent,
            info: this._userInfo.textContent,
          };
          return userInfo
    }
    setUserInfo(data) {
        console.log(data)
        this._userName.textContent = data.name;
        this._userInfo.textContent = data.rank;
    }
}