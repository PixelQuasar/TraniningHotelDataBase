# TraniningHotelDataBase

API for your projects


## Navigate:

(Hotel database)[api/hotelDB]
(Shop database)[api/shopDB]
(Users database)[users]
(Pizza database)[api/shopDB]

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

## GET /getHotelById/:hotelId
Returns one hotel by id

### parameters;: 
    hotelId - id of requested hotel

### body: 
    none

### response: 
    Hotel

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
    <any value from schema> - filter value

### body: 
    none

### response: 
    [ Array ]

## GET /searchHotels/:searchString
Searches and returns hotels by search string

### parameters:
    searchString - search string

### body:
    none

### response:
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
    beds:
        oneDoubleBed: boolean,
        twoSingleBeds: boolean,
        sofaBed: boolean

## GET /getRoomById/:roomId
Returns room by id

### parameters
    roomId - id of requested room

### body
    none

### response:
    Room

## GET /getAllRooms
Returns all rooms in database

### parameters:
    page - number of requested page

### body:
    none

### response: 
    [ Array ]

## GET /getHotels
Returns rooms in database by filter

### parameters: 
    <any value from schema> - filter value

### body: 
    none

response: 
    [ Array ]

## GET /searchRooms/:searchString
Searches and returns rooms by search string

### parameters:
    searchString - search string

### body:
    none

### response:
    [ Array ]

## POST /addRoom
Add new room

### parameters: 
    none

### body: 
    {
        "hotelId": "myHotelId",
        "price": 99.99,
        "name": "cozy demo room",
        "description": "description of demo room",
        "type": "type of my room",
        "photosUrl": ["https://pic1", "https://pic2", "https://pic3"],
        "roomAmount": 5,
        "peopleCapacity": 3,
        "oneDoubleBed": true,
        "twoSingleBeds": false,
        "sofaBed": true
    }

response: 
    Room


## POST /deleteByFilter
Delete room by filter

### parameters: 
    none

### body: 
    {
        "filter": {

        }
    }

response: 
    Room



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

## GET /getProductById/:productId
Returns product from database by id

## parameters: 
    productId - id of the product

## body:
    none

## response:
    product

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
    <any value from schema> - filter value

### body: 
    none

response: 
    [ Array ]

## GET /searchProducts/:searchString
Searches and returns products by search string

### parameters:
    searchString - search string

### body:
    none

### response:
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

# users

## api/hotelDB/users

### Schema: 
    login: string,
    fullName?: string,
    email?: string,
    phoneNumber?: string,
    password: string

## GET users/
get all users

### parameters:
    none

### body:
    none

### response:
    [ User ]


## GET users/:userId
get specific user by id

### parameters:
    userId - user's id

### body:
    none

### response:
    User



## POST users/register
register user request

### parameters:
    none

### body:
    {
        "login": "admin",
        "password": "qwerty123",
        "tryPassword": "qwerty123",
        "email": "max281115@gmai.com",
        "phoneHumber": "+77477234220",
        "fullName": "Maxim Yermolayev"
    }

### response: 
    User

## POST users/login
login request

### parameters:
    none

### body:
    {
        "login": "login",
        "password": "password"
    }

### response:
    User

## POST users/deleteByFilter
delete users request

### parameters:
    none

### body:
    {
        "filter": {

        }
    }

### response:
    [ User ]

# api/pizzaDB

### Schema (Product): 
    name: string,
    type: "burger" | "pizza" | "fries"
    time?: number,
    sizes?: Array<string>,
    price: number,
    photosURL?: Array<string>

## GET pizzaDB/products/
get all products

### parameters:
    none

### body:
    none

### response:
    [ Product ]

## GET pizzaDB/products/:id
get specific product

### parameters:
    id - id of product

### body:
    none

### response:
    Product

## GET pizzaDB/products/category/:type
get products of category (for example, only pizza or only burgers)

### parameters:
    type - type of category

### body:
    none

### response:
    [ Product ]


## GET pizzaDB/products/searchProducts/:searchString
search for products

### parameters:
    searchString - search string

### body:
    none

### response:
    [ Product ]

## POST pizzaDB/products/addProduct
add new product

### parameters:
    none

### body:
    Product

### response:
    Product


## POST pizzaDB/products/deleteByFilter
delete products by filter

### parameters:
    none

### body:
    {
        filter: {
            ...
        }
    }

### response:
    [ Product ]

