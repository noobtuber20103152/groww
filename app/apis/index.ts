let key: any = process.env.API_KEY;
let baseURL: string = "https://www.alphavantage.co/query?function=";
let TOP_GAINER_LOSER = baseURL + `TOP_GAINERS_LOSERS&apikey=${key}`;
let COMPANY_OVERVIEW = baseURL + `OVERVIEW&apikey=${key}&symbol=`;
let SEARCH_API = baseURL + `SYMBOL_SEARCH&apikey=${key}&keywords=`;
let API_URL = "https://groww-three.vercel.app/";
export { TOP_GAINER_LOSER, COMPANY_OVERVIEW, API_URL, SEARCH_API };
