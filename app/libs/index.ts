function validateData(str: string) {
  return str?.length == 0 || !str ? "Not available" : str;
}

function filterData(data: any, ticker: any) {
  return data?.filter((e: any) => {
    return e.ticker === ticker.ticker;
  });
}

export { validateData, filterData };
