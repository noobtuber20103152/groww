import { COMPANY_OVERVIEW, TOP_GAINER_LOSER } from "@/app/apis";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: any) {
  try {
    let { ticker } = context.params;
    let data: any = await fetch(COMPANY_OVERVIEW + ticker, {
      method: "GET",
    });
    data = await data.json();
    // console.log(data);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ msg: error.message });
  }
}
