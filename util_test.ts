import { stub, Stub, assertEquals } from "./dev_deps.ts";
import { queryParam } from "./utils.ts";

Deno.test("queryParams() assert", () => {
  const qs = { key: "123", query: "ok" };
  const result = queryParam(qs);
  assertEquals(result, "key=123&query=ok");
});
