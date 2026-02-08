import { NextResponse } from "next/server";
import { generateQuests } from "../../lib/questEngine";

export async function GET() {
  const quests = generateQuests({
    sleep: 4,
    energy: 3,
    mood: "😊",
    focusHours: 3.5,
    stress: 2
  });

  return NextResponse.json({
    status: "ok",
    quests
  });
}
