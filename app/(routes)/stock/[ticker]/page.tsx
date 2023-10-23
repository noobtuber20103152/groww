import About from "@/app/_components/_product/_about";
import Header from "@/app/_components/_product/_header";
import ChartGraph from "@/app/_components/_product/chart";
import Navbar from "@/app/_components/_reusable/Navbar";
import PageNotFound from "@/app/_components/_reusable/pageNotFound";
import { API_URL } from "@/app/apis";
import React from "react";
async function getData(ticker: any) {
  const res = await fetch(`${API_URL}/api/v1/company_overview/${ticker}`, {
    next: { revalidate: 3600 },
  });
  return res.json();
}
async function getTicker(ticker: any) {
  const res = await fetch(`${API_URL}/api/v1/top_gainers_losers/${ticker}`, {
    next: { revalidate: 3600 },
  });
  return res.json();
}
async function Page({ params }: any) {
  let data = await getData(params.ticker);
  let tickerData: any = await getTicker(params.ticker);
  if (tickerData?.data?.length) {
    return (
      <>
        <Navbar />
        <div className="mx-2 md:mx-auto font-sans max-w-6xl md:px-0 px-5 mt-10 ">
          <Header AssetType={data.AssetType} data={tickerData.data[0]} />
          <ChartGraph />
          <About data={data} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="h-screen  border py-auto px-auto">
          <PageNotFound />
        </div>
      </>
    );
  }
}

export default Page;
