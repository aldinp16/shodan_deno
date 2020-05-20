import {
  IShodanSearchOpt,
  IShodanHostOpt,
  IShodanSearch,
  IShodanHost,
  IShodanProfile,
  IShodanApiInfo,
} from "./types.ts";
import { queryParam } from "./utils.ts";

export class Shodan {
  private url: string = "https://api.shodan.io";
  constructor(
    private key: string,
  ) {}

  async profile(): Promise<IShodanProfile> {
    const qs = { key: this.key };
    return fetch(`${this.url}/account/profile?${queryParam(qs)}`)
      .then((resp) => resp.json());
  }

  async myIP(): Promise<string> {
    const qs = { key: this.key };
    return fetch(`${this.url}/tools/myip?${queryParam(qs)}`)
      .then((resp) => resp.json());
  }

  async apiInfo(): Promise<IShodanApiInfo> {
    const qs = { key: this.key };
    return fetch(`${this.url}/api-info?${queryParam(qs)}`)
      .then((resp) => resp.json());
  }

  async host(ip: string, opt?: IShodanHostOpt): Promise<IShodanHost> {
    const qs = { key: this.key, ...opt };
    return fetch(`${this.url}/shodan/host/${ip}?${queryParam(qs)}`)
      .then((resp) => resp.json());
  }

  async search(query: string, opt?: IShodanSearchOpt): Promise<IShodanSearch> {
    const qs = { key: this.key, query, ...opt };
    return fetch(`${this.url}/shodan/host/search?${queryParam(qs)}`)
      .then((resp) => resp.json());
  }
}
