import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default function Homepage({product}) {
  return (
    <div>
      <Header />
      <Featured product={product}/>
    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '320de2b12aa291ebdf213d29';
  await mongooseConnect()
  const product = await Product.findById(featuredProductId)
  return {
    props: {product: JSON.parse(JSON.stringify(product))},
  }
}