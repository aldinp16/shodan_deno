export interface ILocation {
  city?: any;
  region_code?: any;
  area_code?: any;
  longitude: number;
  country_code3: string;
  country_name: string;
  postal_code?: any;
  dma_code?: any;
  country_code: string;
  latitude: number;
}

export interface IOpts {}

export interface IData {
  product: string;
  os?: any;
  timestamp: Date;
  isp: string;
  asn: string;
  banner: string;
  hostnames: any[];
  devicetype: string;
  location: ILocation;
  ip: string;
  domains: any[];
  org: string;
  port: number;
  opts: IOpts;
}

export interface IOrg {
  count: number;
  value: string;
}

export interface IFacets {
  org: IOrg[];
}

export interface IMatches {
  os?: any;
  timestamp: Date;
  isp: string;
  asn: string;
  hostnames: any[];
  location: ILocation;
  ip: string;
  domains: any[];
  org: string;
  data: string;
  port: number;
  ip_str: string;
}

export interface IUsageLimits {
  scan_credits: number;
  query_credits: number;
  monitored_ips: number;
}

export interface IShodanHostOpt {
  history?: boolean;
  minify?: boolean;
}

export interface IShodanSearchOpt {
  facets?: string;
  page?: number;
  minify?: boolean;
}

export interface IShodanProfile {
  member: boolean;
  credits: number;
  display_name: string;
  created: Date;
}

export interface IShodanApiInfo extends IUsageLimits {
  usage_limits: IUsageLimits;
  plan: string;
  https: boolean;
  unlocked: boolean;
  unlocked_left: number;
  telnet: boolean;
}

export interface IShodanHost {
  region_code?: any;
  ip: string;
  area_code?: any;
  country_name: string;
  hostnames: any[];
  postal_code?: any;
  dma_code?: any;
  country_code: string;
  data: IData[];
  city?: any;
  longitude: number;
  country_code3: string;
  latitude: number;
  os?: any;
  ports: number[];
}

export interface IShodanSearch {
  matches: IMatches[];
  facets: IFacets[];
  total: number;
}
