export default class UserInfo {
  constructor({ userName, userInfo, avatar }) {
    this._userName = document.querySelector(userName);
    this._userInfo = document.querySelector(userInfo);
    this._avatar = document.querySelector(avatar);
  }
  getUserInfo() {
    const userInfo = {
      username: this._userName.textContent,
      info: this._userInfo.textContent,
      avatar: this._avatar.src,
    };
    return userInfo;
  }
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.about;
    this._avatar.src = data.avatar;
  }
}
