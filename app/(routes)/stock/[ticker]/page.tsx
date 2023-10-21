import About from "@/app/_components/_product/_about";
import Header from "@/app/_components/_product/_header";
import Navbar from "@/app/_components/_reusable/Navbar";
import { API_URL } from "@/app/apis";
import React from "react";

async function Page({ params }: any) {
  console.log(`${API_URL}/api/v1/company_overview/${params.ticker}`);
  let response = await fetch(`${API_URL}/api/v1/company_overview/${params.ticker}`, {
  method: "GET",
  });
  if(response.ok){
    console.log(response);
  }
  return (
    <>
      <Navbar />
      <div className="mx-2 md:mx-auto font-sans max-w-6xl md:px-0 px-5 mt-10 ">
        <Header />
        <About />
      </div>
    </>
  );
}

export default Page;
