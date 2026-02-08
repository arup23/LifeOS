import { NextResponse } from "next/server";
import { checkInSchema, generateQuests } from "../../lib/questEngine";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = checkInSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid check-in payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const quests = generateQuests(parsed.data);

  return NextResponse.json({
    status: "ok",
    quests,
    recoveryMode: parsed.data.energy <= 2 || parsed.data.stress >= 4
  });
}
