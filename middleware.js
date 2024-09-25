import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["bn", "en"];
const defaultLocale = "en";

function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;

  let headers = { "accept-language": acceptedLanguage };
  const languages = new Negotiator({ headers }.languages());

  return match(languages, locales, defaultLocale);
}

export function middelware(request){
  const pathname=request.nextUrl.pathname

  const pathNameIsMissingLocale=locales.every(
    (locale)=>!pathname.starsWith(`/${locale}`) && pathname!==`${locale}`)
    if(pathNameIsMissingLocale){
      const locale=getLocale(request)
      return NextResponse.redirect(new URL(`/${locales}/${pathname}`,request.url))
    }

    
}