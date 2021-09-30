import axios from "axios";
// @ts-ignore
import jwt from 'jsonwebtoken';

class api {
    private readonly publicKey :string
    private readonly currentDomain :string
    private readonly basePath :string

    constructor(publicKey :string, currentDomain :string, basePath :string) {
        this.publicKey = publicKey
        this.currentDomain = currentDomain
        this.basePath = basePath
    }

    private getToken() {
        const token = this.getTokenString()
        if (token !== undefined && token !== null) {
            try {
                jwt.verify(token, this.publicKey, {algorithms: ['RS256']})
                return token
            } catch (e) {
                api.removeToken()
                return null
            }
        }
    }

    private static setToken (token: string) {
        localStorage.setItem('local_token', token)
    }

    private getTokenString (): string | undefined {
        let localToken: string | null | undefined = localStorage.getItem('local_token')
        if (localToken !== null && localToken !== '') {
            return localToken
        }

        const name = 'hh[session_key]'
        let matches = document.cookie.match(new RegExp(
            // eslint-disable-next-line
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));

        localToken = matches ? decodeURIComponent(matches[1]) : undefined;

        if (localToken === undefined || localToken === null) {
            return localToken
        }

        localStorage.setItem('local_token', localToken);
        document.cookie = name + `=;domain=${this.currentDomain};expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;

        return localToken
    }

    private static removeToken () {
        localStorage.removeItem('local_token');
    }

    private getRequestHeader () {
        let token = this.getToken()
        token = (token === undefined) ? null : token;
        if (token === null) {
            return {}
        }

        return {
            'Authorization': `Bearer ${token}`
        }
    }

    public get (link: string, data: Object) {
        return axios.get(
            `${this.basePath}${link}`,
            {
                params: data,
                headers: this.getRequestHeader(),
                withCredentials: true
            }
        ).then((resp) => {
            return {
                error: 0,
                data: resp.data
            }
        }).catch((err) => {
            console.error(err)

            return {
                error: 1,
                data: null
            }
        })
    }

    public post (link: string, data: Object) {
        return axios.post(
            `${this.basePath}${link}`,
            data,
            {
                headers: this.getRequestHeader(),
                withCredentials: true
            }
        ).then((resp) => {
            return {
                error: 0,
                data: resp.data
            }
        }).catch((err) => {
            console.error(err)

            return {
                error: 1,
                data: null
            }
        })
    }
}

export default (api)