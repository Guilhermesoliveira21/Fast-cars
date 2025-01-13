import { createContext, useEffect, useState } from "react";
import { http } from "../api/http";

export const CarUniqueContext = createContext();

export const CarUniqueProvider = ({children}) => {

    const [data, setData] = useState([]);
    const [erro, setErro] = useState(null);
    const [car, setCar] = useState('');
    const [loading, setLoading] = useState(true);

    async function fetchCar() {
        setLoading(true);
        try {
            const response = await http.get('/items/' + car);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setErro(error.data);
        }
        
    }

    useEffect(() => {
        fetchCar();
    }, [car])

    return (
        <CarUniqueContext.Provider value={{ data, erro, loading, setCar }}>
            {children}
        </CarUniqueContext.Provider>
    )
}