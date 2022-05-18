const BASE_URL = process.env.NEXT_PUBLIC_URL_API;
const CREDENTIALS = process.env.NODE_ENV === "production" ? "same-origin" : "include";

/**
 * For when response is json but not ok.
 */
function throw_if_not_ok(method: string, route: string, res: Response, json?: any) {
  if (!res.ok) {
    throw new Error(`${method}(${route}) (${res.status}) ${res.statusText}. ${JSON.stringify(json)}`);
  }
}

async function request(route: string, init: RequestInit) {
  const defaultInit: RequestInit = {
    credentials: CREDENTIALS,
  };
  Object.assign(defaultInit, init);
  const url = `${BASE_URL}${route}`;
  return fetch(url, defaultInit);
}

/** GET to api route. Return response */
async function get_res(route: string) {
  return request(route, { method: "GET" });
}

/** DELETE to api route. Return response */
async function remove_res(route: string) {
  return request(route, { method: "DELETE" });
}

/** POST to api route. Return response */
async function post_res(route: string, body: any) {
  return request(route, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

/** PATCH to api route. Return response */
async function update_res(route: string, body: any) {
  return request(route, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

///////////////////////////////////////////////////////////////////////////////

/** GET to api route. Return json. Throw error if `!res.ok` */
async function get<T = any>(route: string) {
  const res = await get_res(route);
  const json: T = await res.json();
  throw_if_not_ok("get", route, res, json);
  return json;
}

/** DELETE to api route. Return json. Throw error if `!res.ok` */
async function remove<T = any>(route: string) {
  const res = await remove_res(route);
  const json: T = await res.json();
  throw_if_not_ok("remove", route, res, json);
  return json;
}

/** POST to api route. Return json. Throw error if `!res.ok` */
async function post<T = any>(route: string, body: any) {
  const res = await post_res(route, body);
  const json: T = await res.json();
  throw_if_not_ok("post", route, res, json);
  return json;
}

/** POST to api route. Return json. Throw error if `!res.ok` */
async function update<T = any>(route: string, body: any) {
  const res = await update_res(route, body);
  const json: T = await res.json();
  throw_if_not_ok("post", route, res, json);
  return json;
}

const api = { get, remove, post, update, get_res, remove_res, post_res, update_res };
export default api;
