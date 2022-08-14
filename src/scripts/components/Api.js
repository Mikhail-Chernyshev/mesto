class Api {
    constructor ({host, token}) {
        this._host = host;
        this._token = token;
       // this._getJsonOnError = this._getJsonOnError.bind(this)
    }
    // _getJsonOnError() {
    //     if (res.ok) {
    //         return res.json();
    //     }
    //     throw new Error("Ошибка при загрузке данных")
    // }
    _getHeaders() {
        return {
            authorization: this._token,
        }
    }
    getCards() {
        return fetch(`${this._host}/cards`, {
            headers: this._getHeaders(),
        })
        .then(res => {
            if (res.ok) {
            return res.json();
        }
        throw new Error("Ошибка при загрузке данных")})
    }
    addCard(data) {
        return fetch(`${this._host}/cards`, {
            method: 'POST',
            headers: {
                authorization: 'dfd0d591-2c36-49ee-a6dc-331afeedf1bc',
                'Content-Type': 'application/json' 
              },
            body: JSON.stringify({
                name: data.name,
                link: data.link
              })
        })
        .then(res => {
            if (res.ok) {
            return res.json();
        }
        throw new Error("Ошибка при загрузке данных")})
    }
    deleteCard(cardId) {
        return fetch(`${this._host}/cards/${cardId}`, {
          method: 'DELETE',
          headers: {
            authorization: 'dfd0d591-2c36-49ee-a6dc-331afeedf1bc',
            'Content-Type': 'application/json' 
          },
        })
        .then(res => {
            if (res.ok) {
            return res.json();
        }
        throw new Error("Ошибка при загрузке данных")})
      }
    getUserInfo() {
        return fetch(`${this._host}/users/me`, {
            method: 'GET',
            headers: this._getHeaders(),
          })
          .then(res => {
              if (res.ok) {
              return res.json();
          }
          throw new Error("Ошибка при загрузке данных")})
      }
    editUserInfo(data) {
        return fetch(`${this._host}/users/me`, {
          method: 'PATCH',
          headers: {
            authorization: 'dfd0d591-2c36-49ee-a6dc-331afeedf1bc',
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify ({
            name: data.name,
            about: data.rank
          })
        })
          .then(res => {
            if (res.ok) {
            return res.json();
        }
        throw new Error("Ошибка при загрузке данных")})
      }
      editAvatar(data) {
        return fetch(`${this._host}/users/me/avatar`, {
          method: 'PATCH',
          headers: {
            authorization: 'dfd0d591-2c36-49ee-a6dc-331afeedf1bc',
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify ({
            avatar: data.link,
          })
        })
          .then(res => {
            if (res.ok) {
            return res.json();
        }
        throw new Error("Ошибка при загрузке данных")})
      }
      setLikeCard(cardId) {
        return fetch(`${this._host}/cards/${cardId}/likes`, {
          method: 'PUT',
          headers: {
            authorization: 'dfd0d591-2c36-49ee-a6dc-331afeedf1bc',
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify ({
        
          })
        })
          .then(res => {
            if (res.ok) {
            return res.json();
        }
        throw new Error("Ошибка при загрузке данных")})
      }
      removeLikeCard(cardId) {
        return fetch(`${this._host}/cards/${cardId}/likes`, {
          method: 'DELETE',
          headers: {
            authorization: 'dfd0d591-2c36-49ee-a6dc-331afeedf1bc',
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify ({
            
          })
        })
          .then(res => {
            if (res.ok) {
            return res.json();
        }
        throw new Error("Ошибка при загрузке данных")})
      }
}

export default Api;