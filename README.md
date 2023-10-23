
# A web application for a stocks/etfs broking website.




This Next.js web app is a user-friendly platform for stock and ETF trading. It features an Explore page where users can easily check top gainers and losers. Each stock/ETF has a dedicated Product Page displaying basic info and price trends. The app offers a hassle-free search bar, suggesting stocks as users type. It's designed for both beginners and experienced investors, making stock market navigation simple and accessible, empowering users to make smart investment choices.

## API Reference

#### Get all top gainers

```http
  GET /api/v1/top_gainer
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get all top losers

```http
  GET /api/v1/top_loser
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key`      | `string` | **Required**. Your API key|

#### Get all search results

```http
  GET /api/v1/search
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key`      | `string` | **Required**. Your API key|


#### Get company overview

```http
  GET /api/v1/company_overview/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key`      | `string` | **Required**. Your API key|
| `id`      | `string` | **Required**. Id of item to fetch|



## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |




## 🚀 About Me
I'm a full stack developer...



    
## Screenshots

![App Screenshot](https://github.com/Binita-tech/Binita-tech/assets/78761614/7d3958c8-e167-4164-8397-f834284e60b2)

![App Screenshot](https://github.com/Binita-tech/Binita-tech/assets/78761614/5ccb92a3-1910-444a-bcb5-eae4f15352e9)

![App Screenshot](https://github.com/Binita-tech/Binita-tech/assets/78761614/99a8b000-4403-4b50-97b0-a4bf69c8e9c2)




## Run Locally

Clone the project

```bash
  git clone https://github.com/noobtuber20103152/groww
```

Go to the project directory

```bash
  cd groww
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

