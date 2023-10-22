import { SEARCH_API, TOP_GAINER_LOSER } from "@/app/apis";
import { filterData } from "@/app/libs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: any) {
  let { symbol } = context.params;
  console.log(SEARCH_API + symbol);
  let data: any = await fetch(SEARCH_API + symbol);
  data = await data.json();
  return NextResponse.json({ data: data });
}
