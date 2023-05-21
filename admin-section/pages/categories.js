import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Categories() {
    const [name, setName] = useState('')
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetchCategories()
    }, [])

    function fetchCategories() {
        axios.get('/api/categories').then(result => {
            setCategories(result.data)
        })
    }
    async function saveCategory(e){
        e.preventDefault()
        await axios.post('/api/categories', {name})
        setName('')
        fetchCategories()
    }
    return (
        <Layout>
            <h1>Categories</h1>
            <label>New Categories name</label>
            <form onSubmit={saveCategory} className="flex gap-1">
            <input className="mb-0" type="text" placeholder={'Category name'} 
            onChange={e => setName(e.target.value)}  value={name}/>
            <select className="">
                <option value="0">No parent category</option>
            </select>
            <button type={'submit'} className="btn-primary py-1">Save</button>
            </form>
            <table className="basic mt-4">
                <thead>
                    <tr>
                        <td>Category name</td>
                    </tr>
                </thead>
                <tbody>
                    {categories.length > 0 && categories.map(
                        category => (
                        <tr key={category}>
                            <td>{category.name}</td>
                        </tr>
                        ))}
                </tbody>
            </table>
        </Layout>
    )
}