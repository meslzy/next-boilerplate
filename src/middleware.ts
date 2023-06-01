import acceptLanguage from "accept-language";

import { NextRequest, NextResponse } from "next/server";

import { languages, languageCookieName, defaultLanguage } from "~i18n/config";

acceptLanguage.languages(languages);

export const config = {
  matcher: [ "/((?!api|_next/static|_next/image|favicon.ico).*)" ],
};

const getLanguage = ( request: NextRequest ) => {
  let language = request.cookies.get(languageCookieName)?.value;

  if ( !language ) {
    const acceptLanguageHeader = request.headers.get("accept-language");
    language = acceptLanguage.get(acceptLanguageHeader) || defaultLanguage;
  }

  if ( !languages.includes(language ?? "") ) {
    language = defaultLanguage;
  }

  return language;
};

const middleware = ( request: NextRequest ) => {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLanguage = languages.every(( language ) => {
    return !pathname.startsWith(`/${ language }/`) && pathname !== `/${ language }`;
  });

  let language = getLanguage(request);

  if ( pathnameIsMissingLanguage ) {
    const url = new URL(`/${ language }/${ pathname }`, request.url);

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

export default middleware;