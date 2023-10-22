import { TOP_GAINER_LOSER } from "@/app/apis";
import { filterData } from "@/app/libs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: any) {
  let data: any = await fetch(TOP_GAINER_LOSER, {
    method: "GET",
  });
  data = await data.json();
  let resData = filterData(data.top_gainers, context.params);
  if (resData && resData?.length) {
    return NextResponse.json({ data: resData });
  }
  resData = filterData(data.top_losers, context.params);
  return NextResponse.json({ data: resData });
}
