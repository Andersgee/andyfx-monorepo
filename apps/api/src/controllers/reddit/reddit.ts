import fetch, { RequestInit } from "node-fetch";

const TOKEN_BASE_URL = "https://www.reddit.com/api/v1/access_token";
const API_BASE_URL = "https://oauth.reddit.com";

interface Options {
  clientId: string;
  clientSecret: string;
  userAgent: string;
}

interface Token {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
}

/**
 * Wrapper for reddit api. With oath and standard fetch()
 */
export class Reddit {
  clientId: string;
  clientSecret: string;
  userAgent: string;
  token: null | Token;
  tokenExpireDate: number;

  constructor(options: Options) {
    this.clientId = options.clientId;
    this.clientSecret = options.clientSecret;
    this.userAgent = options.userAgent;

    this.token = null;
    this.tokenExpireDate = 0;
  }

  async refreshToken() {
    if (Date.now() / 1000 <= this.tokenExpireDate) {
      return this.token;
    }

    try {
      const token = (await fetch(`${TOKEN_BASE_URL}?grant_type=client_credentials`, {
        method: "POST",
        headers: {
          authorization: `Basic ${Buffer.from(`${this.clientId}:${this.clientSecret}`).toString("base64")}`,
        },
      }).then((res) => res.json())) as Token;

      this.token = token;
      this.tokenExpireDate = Date.now() / 1000 + token.expires_in - 10; //subtract 10 seconds to avoid race condition
    } catch (err) {
      this.token = null;
      console.log(err);
      throw new Error("no token");
    }
  }

  async fetch(path: string, options: RequestInit = {}) {
    await this.refreshToken();
    if (this.token) {
      const opt = {
        headers: { Authorization: `${this.token.token_type} ${this.token.access_token}` },
      };

      Object.assign(options, opt);
      return await fetch(`${API_BASE_URL}${path}`, options).then((res) => res.json());
    } else {
      throw new Error("no token");
    }
  }
}
