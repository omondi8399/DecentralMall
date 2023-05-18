import Layout from "@/components/Layout";
import Link from "next/link"
import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('/api/products').then(response => {
            setProducts(response.data)
        })
    }, [])
    return (
        <Layout>
            <Link className="bg-blue-900 text-white rounded-md py-1 px-2" href={'/products/new'}>Add new products</Link>
            <table className="basic">
                <thead>
                    <tr>
                        <td>Product name</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, i) => (
                        <tr key={i}>
                            <td>{product.title}</td>
                            <td>buttons</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}