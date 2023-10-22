"use client";
import React, { useEffect, useState } from "react";
import Card from "../_reusable/card";
import useFetch from "@/app/hooks/useFetch";
import { TOP_GAINER__LOSER_INTERFACE } from "@/app/_interfaces";
import Preloader from "../_reusable/preloader";

function TopGainer() {
  const { data, loading, error }: any = useFetch("/api/v1/top_gainer");
  return (
    <>
      {loading ? (
        <>
          <Preloader />
          <Preloader />
          <Preloader />
        </>
      ) : (
        <></>
      )}
      <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {data?.data?.map((stock: TOP_GAINER__LOSER_INTERFACE) => {
          return (
            <>
              <Card
                volume={stock.volume}
                change_percentage={stock.change_percentage}
                ticker={stock.ticker}
                price={stock.price}
                change_amount={stock.change_amount}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default TopGainer;
