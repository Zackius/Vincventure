import React, { createContext, useEffect, useState } from 'react'

export const CategoryContext=createContext()
const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchCategories = async () => {
            const resp = await fetch('https://fakestoreapi.com/products/categories');
            const categoryData = await resp.json()
            setCategories(categoryData)
        }
        fetchCategories()
    }, [])
    

    return (
        <CategoryContext.Provider value={{categories}
}>{children}</CategoryContext.Provider>
  )
}

export default CategoryProvider 