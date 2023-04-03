import React from 'react';
import axios from 'axios';

import ProductPageMore from './ProductPageComp/ProductPageMore';
import ProductPageHeader from './ProductPageComp/ProductPageHeader';
import ProductPageName from './ProductPageComp/ProductPageName';
import ProductPageFeedback from './ProductPageComp/ProductPageFeedback';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from React

function ProductPage () {
    const [product, setProduct] = useState([])
    const [arrayOfStars, setArrayOfStars] = useState([0, 1, 2, 3, 4])
    const paramsData = useParams()

    useEffect(() => {
        setProduct(await getData())

        console.log(paramsData)
    }, [] )




    const getData = async () => {
        const apiUrl = `http://cepbep.ddns.net:2500/api/shopDB/products/getProductById/${paramsData.product_id}`
        const response = await axios.get(apiUrl)
        return response.data
    }
    
    return (
        <div className='product-page'>
            <ProductPageHeader />
            <ProductPageName productData={product} />
            <ProductPageFeedback />
            <ProductPageMore />
        </div >
    )
}

class ProductPage1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayOfProducts: [],
            arrayOfStars: [0, 1, 2, 3, 4],
            photoCount: 0,
            photosURL: []
        }
    }

    getKey = () => {
        this.setState({photoCount: this.state.photoCount+1})
        return this.state.photoCount
    }

    componentDidMount = async () => {
        this.setState({ arrayOfProducts: await this.getData() });
        const data = useParams();
        console.log(data);
    }

    nextPage = () => {
        this.setState({
            loadedArray: this.state.arrayOfProducts.slice(0, page*6),
            page: this.state.page+1
        })
    }

    componentDidUpdate = async () => {
        if (this.state.photosURL == [])
        {
            let photosArray = []
            for (let i = 0; i < this.props.photosURL.length; i++){
                photosArray.push({
                    id: i,
                    url: this.props.photosURL[i]
                })
            }
            this.setState({photosURL: photosArray})
        }
    }

    getData = async () => {
        const apiUrl = `http://cepbep.ddns.net:2500/api/shopDB/products/getProductById/${localStorage.getItem('Product_Id')}`
        const response = await axios.get(apiUrl)
        return response.data
    }

    Gettt = () => {
        console.log(this.state.arrayOfProducts)
    }

    render() {
        return (
            <div className='product-page'>
                <ProductPageHeader />
                <ProductPageName />
                <ProductPageFeedback />
                <ProductPageMore />
            </div >
        )
    }
}

export default ProductPage