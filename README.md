# Backend Challenge

Test application

## Common setup

Clone the repo and install the dependencies.

```bash
  git clone https://github.com/J-aros/backend-challenge.git
  cd backend-challenge
```

```bash
  npm install
```

## Common setup

To start the express server, run the following

```bash
  npm run dev
```

Open http://localhost:3000.

## API Reference

#### GET all cars

```http
  GET /
```

| Parameter | Type | Description     |
| :-------- | :--- | :-------------- |
|           |      | Return all cars |

#### GET car

```http
  GET /${id}
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `id`      | `string` | **Required**. Id of car to fetch |

#### CREATE car

```http
  POST /
```

| Parameter        | Type     | Description  |
| :--------------- | :------- | :----------- |
| `car`            | `string` | **Required** |
| `car_model`      | `string` | **Required** |
| `car_model_year` | `number` | **Required** |

#### PUT car

```http
  PUT /${id}
```

| Parameter        | Type     | Description                    |
| :--------------- | :------- | :----------------------------- |
| `id`             | `string` | **Required**. Id of car to put |
| `car`            | `string` |                                |
| `car_model`      | `string` |                                |
| `car_model_year` | `number` |                                |

#### Delete car

```http
  DELETE /${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of car to delete |

## Author

- [@J-aros](https://github.com/J-aros)
