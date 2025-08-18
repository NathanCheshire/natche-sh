enum CloudflareHeader {
  IpCountry = "cf-ipcountry",
}

enum ResponseCode {
  Forbidden = 403,
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const allowedCountries = env.ALLOWED_COUNTRIES?.split(",") || [];
    const requestCountry = request.headers.get(CloudflareHeader.IpCountry);

    if (!requestCountry || !allowedCountries.includes(requestCountry)) {
      // ToDo: log that we're blocking this request because its from some country
      // and also log out other details of the request
      return new Response("Forbidden", { status: ResponseCode.Forbidden });
    }

    const url = new URL(request.url);
    url.hostname = `${env.PAGES_PROJECT_ID}.pages.dev`;

    return fetch(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
  },
};
