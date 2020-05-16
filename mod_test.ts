import { stub, Stub, assertEquals } from "./dev_deps.ts";
import Shodan from "./mod.ts";
import { assert } from "https://deno.land/std@0.50.0/testing/asserts.ts";
Deno.test("host() assert", async () => {
  const shodan = new Shodan("somekey");
  const mockResponse = {
    ip: 11111,
    country_code: "SG",
    org: "Microsoft Azure",
    data: [{
      ip: 11111,
      port: 22,
      transport: "tcp",
      version: "7.6p1 Ubuntu-4ubuntu0.3",
      product: "OpenSSH",
      timestamp: "2020-05-08T19:33:51.534128",
      org: "Microsoft Azure",
      info: "protocol 2.0",
      isp: "Microsoft Corporation",
      ip_str: "127.0.0.1",
    }],
    city: "Singapore",
    isp: "Microsoft Corporation",
    last_update: "2020-05-08T19:33:51.534128",
    country_name: "Singapore",
    ip_str: "127.0.0.1",
    ports: [22],
  };

  const host: Stub<Shodan> = stub(shodan, "host", () => mockResponse);
  assertEquals(await shodan.host("127.0.01"), mockResponse);
});

Deno.test("search() assert", async () => {
  const shodan = new Shodan("somekey");
  const mockResponse = {
    matches: [{
      tags: ["cloud"],
      ip: 111111,
      isp: "Amazon.com",
      http: {
        title: "Some website title",
        securitytxt: null,
        robots: "User-agent: *\nDisallow:\n",
        location: "/",
        server: "nginx",
      },
      port: 80,
      hostnames: ["somehostname.compute.amazonaws.com"],
      location: {
        city: "London",
        region_code: "ENG",
        country_name: "United Kingdom",
        country_code: "GB",
      },
      timestamp: "2020-05-10T10:03:01.419191",
      domains: ["amazonaws.com"],
      org: "Amazon.com",
      transport: "tcp",
      ip_str: "127.0.0.1",
    }],
    total: 1,
  };

  const search: Stub<Shodan> = stub(shodan, "search", () => mockResponse);
  assertEquals(await shodan.search("laravel port:80"), mockResponse);
});

Deno.test("profile() assert", async () => {
  const shodan = new Shodan("somekey");
  const mockResponse = {
    "member": true,
    "credits": 42,
    "display_name": "Woyo",
    "created": "2014-04-15T07:34:40",
  };

  const profile: Stub<Shodan> = stub(shodan, "profile", () => mockResponse);
  assertEquals(await shodan.profile(), mockResponse);
});

Deno.test("myIP() assert", async () => {
  const shodan = new Shodan("somekey");
  const myIP: Stub<Shodan> = stub(shodan, "myIP", () => `"74.125.227.230"`);
  assertEquals(await shodan.myIP(), `"74.125.227.230"`);
});
