import { NextResponse } from "next/server";
import { fetchScheduleData } from "@/lib/sheetData";

export async function GET() {
  try {
    const data = await fetchScheduleData();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "시간표 데이터를 가져오는데 실패했습니다." },
      { status: 500 }
    );
  }
}
