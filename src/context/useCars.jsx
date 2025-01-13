import React, { createContext, useEffect, useState } from 'react';
import { http } from '../api/http.js';

const CarsContext = createContext();
const CarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState([]);
  const [category, setCategory] = useState('MLB1743');
  const [count, setCount] = useState(40);

  function pageFront() {
    setCount((prevCount) => prevCount + 40);
    page.offset = count;
  }
  
  function pageBack(e) {
    setCount((prevCount) => prevCount - 40);
    page.offset = count;
  }



  async function fetchCars() {
    try {
        if(page.offset === undefined) {
          const req = await http.get('sites/MLB/search?category=MLB1743&limit=40&offset=0');
          setData(req.data.results)
          setPage(req.data.paging);
        }else {
          const req = await http.get('sites/MLB/search?category=MLB1743&limit=40&offset='+page.offset);
          setData(req.data.results)
          setPage(req.data.paging);
        }
        
    } catch (error) {
        console.log('Erro')
    }
  }

  useEffect(() => {
    fetchCars();
  },[count])

  return (
    <CarsContext.Provider value={{ data, setData, pageFront, pageBack }}>
      {children}
    </CarsContext.Provider>
  );
};

export { CarsProvider, CarsContext };
