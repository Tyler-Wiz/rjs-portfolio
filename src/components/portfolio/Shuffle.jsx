import {useState, useEffect } from "react";
import { PortfolioData } from "../data/PortfolioData";

export const Shuffle = () => {
  
    const [filter, setFilter] = useState('All')
   const [data, setData] = useState([])

   useEffect(() => {
       setData(PortfolioData)
   }, [])

   useEffect(() => {
    setData([]);
    const filtered = PortfolioData.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setData(filtered);
  }, [filter]);

    return[filter, data, setFilter]
}
