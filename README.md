# TraniningHotelDataBase

API for your projects

# api/HotelDB

## api/hotelDB/hotels

### Schema: 
    name: string,
    country: string,
    city: string,
    rating: number,
    stars: number,
    info:
        mainPhoto: string,
        description: string,
        services: Array<string>,
        photoAlbum: Array<string>

## GET /getAllHotels
Returns all hotels in database

### parameters:
    page - number of requested page

### body:
    none

### response: 
    [ Array ]

## GET /getHotels
Returns hotels in database by filter

### parameters: 
    page - number of requested page

### body: 
    {
        "filter" {

        } 
    }

response: 
    [ Array ]

## POST /addHotel
Add new hotel

### parameters: 
    none

### body: 
    {
    "name": "demo",
    "country": "Kazakhstan",
    "city": "Almaty",
    "stars": 4,
    "mainPhoto": "https://linkToPhoto",
    "description": "that's demo hotel description",
    "services": ["WIFI", "Something else"],
    "photoAlbum": ["https://linkToPhoto1", "https://linkToPhoto2", "https://linkToPhoto3"]
    }

response: 
    Hotel


## POST /deleteByFilter
Delete hotel by filter

### parameters: 
    none

### body: 
    {
        "filter": {

        }
    }

response: 
    Hotel


