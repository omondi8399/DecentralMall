import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Table from "@/components/Table";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const ColumnWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.2fr .8fr;
    gap: 40px;
    margin-top: 40px;
`

const Box = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
`

const ProductInfoCell = styled.td`
    padding: 10px 0;
`
const ProductImageBox = styled.div`
    width: 100px;
    height: 100px;
    padding: 10px;
    box-shadow: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img{
        max-width: 80px;
        max-height: 80px;
    }
`

export default function CartPage() {
    const {cartProducts} = useContext(CartContext)
    const [products, setProducts] = useState([])
    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', {ids:cartProducts})
            .then(
                response => {
                    setProducts(response.data)
                })
        }
    }, [cartProducts])
    return (
        <>
            <Header />
            <Center>
                <ColumnWrapper>
                    <Box>
                    <h2>Cart</h2>
                        {!cartProducts?.length && (
                            <div>Your cart is empty</div>
                        )}
                        {products?.length > 0 && (
                        <Table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product => (
                                            <tr key={product}>
                                            <ProductInfoCell>
                                                <ProductImageBox>
                                                <img src={product.images[0]} alt="" />
                                                </ProductImageBox>
                                                {product.title}
                                            </ProductInfoCell>    : 
                                            <td>{cartProducts.filter(id => id === product._id).length}</td>
                                            </tr>
                                        ))}
                            </tbody>
                        </Table>
                        )}
                    </Box>
                    {!!cartProducts?.length && (
                        <Box>
                        <h2>Order Information</h2>
                        <input type="text" placeholder="Address" />
                        <input type="text" placeholder="Address" />
                        <Button black block>Continue to payment</Button>
                    </Box>
                    )}
                </ColumnWrapper>
            </Center>
        </>
    )
}