import Layout from "@/components/Layout"
import axios from "axios"
import { Router } from "next/router"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function DeleteProductPage() {
    const router = useRouter()
    const [productInfo, setProductInfo] = useState()
    const{id} = router.query
    useEffect(() => {
        if (id) {
            return
        }
        axios.get('/api/products?id='+id).then(response => {
            setProductInfo(response.data)
        })
    }, [id])
    function goBack() {
        Router.push('/products')
    }
    return (
        <Layout>
            <h1>Do you really want to delete &nbsp;"{productInfo?.title}"?</h1>
            <button className="btn-red">Yes</button>
            <button className="btn-default" onClick={goBack}>No</button>
        </Layout>
    )
}