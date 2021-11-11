import {useState, useEffect } from "react";
import { PortfolioData } from "../data/PortfolioData";
import { FilterPortolio } from "./FilterPortolio";
import {SectionContainer} from '../styled/Container.styled'
import { StylePorfolio,PortfolioContent, PortfolioBox } from "../styled/Portfolio.Style";

export const Portfolio = () => {
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


    return (
    <SectionContainer Bg='i'>
        <div className='portfolio_desc'>
            <h2>My portfolio</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos reprehenderit necessitatibus doloremque labore fuga autem nam.</p>
        </div>

        
      <FilterPortolio filter={filter} setFilter={setFilter}/>
      <ul>
        {data.map(item =>
          item.filtered === true ? 
          <StylePorfolio>
               <li>
                  <div>
                     <img src={item.imgUrl} alt="" />  
                  </div>
                  <PortfolioBox>
                    <PortfolioContent>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </PortfolioContent>   
                  </PortfolioBox>  
                </li>
            </StylePorfolio>  
          : '' 
        )}
      </ul>
        
      </SectionContainer>
    )
}