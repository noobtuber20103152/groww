let key: string = "XU71HXMRLDS9CUMC";
let baseURL: string = "https://www.alphavantage.co/query?function=";
let TOP_GAINER_LOSER = baseURL + `TOP_GAINERS_LOSERS&apikey=${key}`;
let COMPANY_OVERVIEW = baseURL + `OVERVIEW&apikey=XU71HXMRLDS9CUMC&symbol=`;
// www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=XU71HXMRLDS9CUMC
let SEARCH_API = baseURL + `SYMBOL_SEARCH&apikey=${key}&keywords=`;
let API_URL = "http://localhost:3000";
export { TOP_GAINER_LOSER, COMPANY_OVERVIEW, API_URL, SEARCH_API };
