export default function handler(req,res) {
    if (req.method !== 'POST') {
        res.json('should be a POST request')
        return
    }
    const {name,email,city,postalCode,streetAddress,country,products} = req.body;
    const productsIds = products.split(',')
    const uniqueIds = [...new Set(productsIds)]
    const productsInfos
}