import {useState, useEffect } from "react";
import { PortfolioData } from "../data/PortfolioData";
import { FilterPortolio } from "./FilterPortolio";
import {SectionContainer} from '../styled/Container.styled'
import { StylePorfolio,PortfolioContent, PortfolioBox, PortfolioTitle } from "../styled/Portfolio.Style";
import { Title } from "../styled/Title"

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
    <SectionContainer Bg='var(--background)'>
      <PortfolioTitle>
        <Title>My portfolio</Title>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos reprehenderit necessitatibus doloremque labore fuga autem nam.</p>
      </PortfolioTitle>
    
      <FilterPortolio filter={filter} setFilter={setFilter}/>
      <StylePorfolio>
        {data.map((item , i) =>
          item.filtered === true ? 
               <li key={i}>
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
          : '' 
        )}
      </StylePorfolio>
        
      </SectionContainer>
    )
}
