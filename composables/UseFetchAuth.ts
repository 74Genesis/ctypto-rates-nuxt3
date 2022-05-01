import { userStore } from "~/stores/user";
export const useFetchAuth = async (
  ...[url, opts]: Parameters<typeof $fetch>
) => {
  const user = userStore();
  // csrf token name
  // const csrf_cookie = "XSRF-TOKEN";

  // check for 'XSRF-TOKEN' cookie
  // const csrf = useCookie(csrf_cookie);

  // if 'XSRF-TOKEN' cookie isn't set, fetch and attempt to apply it
  // if (!csrf.value) {
  // let token: string = null;

  // if request is succesful, 'XSRF-TOKEN' cookie should be set
  // const csrfRes = await $fetch.raw("/sanctum/csrf-cookie");

  // if (process.server) {
  // On server, extract the csrf from the response
  // const cookies = csrfRes.headers.get("set-cookie");
  // token = cookies.split("XSRF-TOKEN=")[1].split(";")[0];
  // } else {
  // on client-side, the cookie should now be present in your browser
  // but nuxt isn't aware since the cookie was updated outside it's context
  // so we need to manually update our variable.
  // token = useCookie(csrf_cookie)?.value;
  // }

  // if (token) {
  // In SSR mode, this also sets the cookie on the client-side,
  // allowing it to be used for subsequent requests.
  // csrf.value = token;
  // }
  // }

  const headers: HeadersInit = {
    // if headers were provided, apply them
    Authorization: "Bearer " + user.token,
    "content-type": "application/json; charset=utf-8",
    ...(opts?.headers && opts.headers),

    // only needed if proxied cookies are required in SSR
    // cookie: useRequestHeaders(['cookie'])?.cookie,

    // if we have a token, set 'x-xsrf-token' header
    // ...(csrf.value && { "x-xsrf-token": csrf.value }),
  };

  const options = Object.assign(opts || {}, { headers });

  const config = useRuntimeConfig();
  return $fetch(config.baseUrl + url, options);
};
