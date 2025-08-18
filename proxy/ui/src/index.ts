enum CloudflareHeader {
  IpCountry = "cf-ipcountry",
  CfConnectingIp = "cf-connecting-ip",
  Referer = "referer",
  UserAgent = "user-agent",
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
      const url = new URL(request.url);
      console.log(
        JSON.stringify({
          level: "warn",
          message: "Blocked request from disallowed country",
          country: requestCountry || "unknown",
          allowedCountries,
          method: request.method,
          path: url.pathname,
          query: url.search,
          userAgent: request.headers.get(CloudflareHeader.UserAgent),
          referer: request.headers.get(CloudflareHeader.Referer),
          ip: request.headers.get(CloudflareHeader.CfConnectingIp),
          timestamp: new Date().toISOString(),
        })
      );

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
