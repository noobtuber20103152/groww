let key: string = "XU71HXMRLDS9CUMC";
let baseURL: string = "https://www.alphavantage.co/query?function=";
let TOP_GAINER_LOSER = baseURL + `TOP_GAINERS_LOSERS&apikey=${key}`;
let COMPANY_OVERVIEW = baseURL + `OVERVIEW&apikey=XU71HXMRLDS9CUMC&symbol=`;
let API_URL = "http://localhost:3000";
export { TOP_GAINER_LOSER, COMPANY_OVERVIEW, API_URL };
