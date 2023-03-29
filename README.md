# TraniningHotelDataBase

API for your projects

# api/hotelDB

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



## api/hotelDB/rooms

### Schema: 
    hotelId: string,
    price: number,
    name: string,
    description: string,
    type: string,
    photosURL: Array<String>
    roomAmount: number,
    peopleCapacity: number,
    beds: IBeds

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



# api/shopDB

## api/shopDB/products

### Schema: 
    name: string,
    category: string,
    description: string,
    photosURL: Array<String>,
    amount: number,
    price: number,
    sizes: Array<String>,
    colors: Array<String>,
    rating: number

## GET /getAllProducts
Returns all products in database

### parameters:
    page - number of requested page

### body:
    none

### response: 
    [ Array ]

## GET /getProducts
Returns products in database by filter

### parameters: 
    page - number of requested page

### body: 
    {
        "filter" {

        } 
    }

response: 
    [ Array ]

## POST /addProduct
Add new hotel

### parameters: 
    none

### body: 
    {
        "name": "demo product",
        "category": "demo category",
        "description": "demo description of the product",
        "photosURL": ["one", "two", "three"],
        "amount": 10,
        "price": 99.99,
        "sizes": ["S", "M", "L", "XL"],
        "colors": ["#ffffff", "#000000", "#ff0000"]
    }

response: 
    Product


## POST /deleteByFilter
Delete product by filter

### parameters: 
    none

### body: 
    {
        "filter": {

        }
    }

response: 
    Product


