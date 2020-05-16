interface ILocation {
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

interface IOpts {}

interface IData {
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

interface IOrg {
  count: number;
  value: string;
}

interface IFacets {
  org: IOrg[];
}

interface IMatches {
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

export interface IShodanHostOpt {
  history?: boolean;
  minify?: boolean;
}

export interface IShodanSearchOpt {
  facets?: string;
  page?: number;
  minify?: boolean;
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
