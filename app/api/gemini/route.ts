import { NextResponse } from "next/server";
import { getGeminiSuggestion } from "../../lib/gemini";

export async function GET() {
  const suggestion = await getGeminiSuggestion();
  return NextResponse.json({ status: "ok", suggestion });
}
