class Api {
  constructor({ host, token }) {
    this._host = host;
    this._token = token;

  }
  _getJsonOnError(res) {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Ошибка при загрузке данных");
  }
  _getHeaders() {
    return {
      authorization: this._token,
    };
  }
  getCards() {
    return fetch(`${this._host}/cards`, {
      headers: this._getHeaders(),
    }).then((res) => this._getJsonOnError(res));
  }
  addCard(data) {
    return fetch(`${this._host}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => this._getJsonOnError(res));
  }
  deleteCard(cardId) {
    return fetch(`${this._host}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then((res) => this._getJsonOnError(res));
  }
  getUserInfo() {
    return fetch(`${this._host}/users/me`, {
      method: "GET",
      headers: this._getHeaders(),
    }).then((res) => this._getJsonOnError(res));
  }
  editUserInfo(data) {
    return fetch(`${this._host}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.rank,
      }),
    }).then((res) => this._getJsonOnError(res));
  }
  editAvatar(data) {
    return fetch(`${this._host}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: data.link,
      }),
    }).then((res) => this._getJsonOnError(res));
  }
  setLikeCard(cardId) {
    return fetch(`${this._host}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
    }).then((res) => this._getJsonOnError(res));
  }
  removeLikeCard(cardId) {
    return fetch(`${this._host}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
    }).then((res) => this._getJsonOnError(res));
  }
}

export default Api;
