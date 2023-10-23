function validateData(str: string) {
  return str?.length == 0 || !str ? "Not available" : str;
}

function filterData(data: any, ticker: any) {
  return data?.filter((e: any) => {
    return e.ticker === ticker.ticker;
  });
}

function getRandomFloat(min: number, max: number, decimalPlaces: number) {
  if (decimalPlaces < 0) decimalPlaces = 0;
  const scaleFactor = Math.pow(10, decimalPlaces);
  return (
    Math.round(
      (((Math.random() * (max - min) + min) * scaleFactor) / scaleFactor) * 100
    ) / 100
  );
}

function generateData() {
  let labels: any = [];
  let data: any = [];
  const startDate = new Date("2022-01-01");
  for (let i = 0; i < 400; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    const formattedDate = currentDate.toISOString().slice(0, 10);
    labels.push(formattedDate);
    // console.log(formattedDate);
    // console.log(getRandomFloat(5, 10, 2));
    data.push(getRandomFloat(5, 10, 100));
  }

  return { labels: labels, data: data };
}
export { validateData, filterData, generateData };
