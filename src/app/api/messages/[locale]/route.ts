import { NextResponse } from "next/server";

import { getMessages } from "@/lib/content/messages";

type LocaleParam = { params: Promise<{ locale: string }> };

export async function GET(_request: Request, { params }: LocaleParam) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") {
    return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
  }
  return NextResponse.json(getMessages(locale));
}
