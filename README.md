# TraniningHotelDataBase

API for your projects

# api/HotelDB

## api/hotelDB/hotels

### schema: 
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

### /getAllHotels

### parameters:
    page - number of requested page

### body:
    none

### response: 
    [ Array ]

### /getHotels

### parameters: 
    page - number of requested page

### body: 
    filter {

    }

response: 
    [ Array ]