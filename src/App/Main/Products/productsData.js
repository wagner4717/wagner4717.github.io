const productsData = [
    {
        id:1,
        name:"iPhone X",
        description:"This is iPhone X",
        type:"phone",
        capacity:64,
        price:500,
        image: "/images/Iphone.png"
    },
    {
        id: 2,
        name: "iPhone XS ",
        //description: "This is iPhone X",
        type: "phone",
        capacity:100,
        price:1700,
        image: "/images/iPad.png"
    },
    {
        id: 3,
        name: "iPhone XS Max",
        description: "This is iPhone X",
        type: "phone",
        capacity:150,
        price: 2000,
        image: "/images/iPad.png"
    },
    {
        id: 4,
        name: "iPhone 8",
        description: "This is iPhone X",
        type: "phone",
        capacity:32,
        price: 500,
        //image: "/images/iPad.png"
    },
]

export const getProductsMap = (array) => (
    array.reduce((accObj, product) => ({
        ...accObj,
        [product.id]: product
    }), {})
)

export default productsData