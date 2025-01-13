import { createContext, useEffect, useState } from "react";
import { apiClient } from "../api";

const CategoryContext = createContext();

const CategoryProvider = ({children}) => {

    const [category, setCategory] = useState([]);
    const [erro, setErro] = useState('');

    async function fetchCategory() {
        try {
            const data = await apiClient.get('/category');
            setCategory(data.data);
        } catch (error) {
            setErro(error);
        }
    }
    useEffect(() => {
        fetchCategory();
    },[])

    return (
        <CategoryContext.Provider value={{category, erro}}>
            {children}
        </CategoryContext.Provider>
    )
}

export {CategoryContext, CategoryProvider}