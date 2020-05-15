import {
  IShodanSearchOpt,
  IShodanHostOpt,
  IShodanSearch,
  IShodanHost,
} from "./types.ts";
import { queryParam } from "./utils.ts";

export default class Shodan {
  private url: string = "https://api.shodan.io";
  constructor(
    private key: string,
  ) {}

  async host(ip: string, opt?: IShodanHostOpt): Promise<IShodanHost> {
    const qs = { key: this.key, ...opt };
    return await (
      await fetch(`${this.url}/shodan/host/${ip}?${queryParam(qs)}`)
    ).json();
  }

  async search(query: string, opt?: IShodanSearchOpt): Promise<IShodanSearch> {
    const qs = { key: this.key, query, ...opt };
    return await (
      await fetch(`${this.url}/shodan/host/search?${queryParam(qs)}`)
    ).json();
  }
}