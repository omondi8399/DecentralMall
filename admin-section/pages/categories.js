import Layout from "@/components/Layout";

export default function Categories() {
    return (
        <Layout>
            <h1>Categories</h1>
            <label>New Categories name</label>
            <div className="flex">
            <input type="text" placeholder={'Category name'} />
            <button></button>
            </div>
        </Layout>
    )
}