# Basic API for buying tickets for movies

## Endpoints

### GET - /api/movies

returns:
{
  "message": 'Movies from DB.',
  "data": {
    "movies": [
      {
        "movie_id": 8,
        "title": "John Wich 2",
        "imageUrl": "https://i.pinimg.com/originals/db/da/ac/dbdaac06f59b7df6f37e81e60280a588.jpg"
      },
      ...movies
    ],
    "schedules": [
      {
        "movie": {
        "movie_id": 1,
        "title": "Matrix",
        "imageUrl": "https://image.tmdb.org/t/p/original/2EO6c3NAZRcfwGNZyZ03dgnuvVY.jpg"
      },
      "auditorium": "a-1",
      "schedule": [
        {
          "id_schedule": 2,
          "date_time": "2024-12-08T17:00:00.000Z"
        },
        {
          "id_schedule": 3,
          "date_time": "2024-12-08T17:30:00.000Z"
        },
        {
          "id_schedule": 4,
          "date_time": "2024-12-08T17:50:00.000Z"
        },
        {
          "id_schedule": 5,
          "date_time": "2024-12-08T06:20:00.000Z"
        }
      ]
    },
    ...schedules
    ],
  }
}

### GET - /api/ticket

input:
{
  "purchaseId": 13,
}

returns:
{
    "message": "Ticket from DB.",
    "ticket": {
        "purchase_id": 13,
        "client_name": "irvin",
        "movie": "Matrix",
        "seats": "2,3,4,5",
        "schedule": "2024-12-18T17:30:00.000Z"
    }
}

### POST - /api/ticket

input:
{
  "clientName": "irvin",
  "movie": "Matrix",
  "schedule": "2024-12-08T06:20:00.000Z",
  "seats": "2,3,4,5"
}

returns:
{
  "message": "Compra exitosa.",
  "result": {
    "id": lshjkdfgiouh34r,
    "payment": 703.55,
    "client": "irvin",
    "schedule": "2024-12-08T06:20:00.000Z",
    "seats": "2,3,4,5"
  }
}