import { TOP_GAINER_LOSER } from "@/app/apis";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  let data: any = await fetch(TOP_GAINER_LOSER, {
    method: "GET",
  });
  data = await data.json();
  return NextResponse.json({ data: data.top_losers });
}
