import {useState, useEffect } from "react";
import { PortfolioData } from "../data/Data.jsx";
import { FilterPortolio } from "./FilterPortolio";
import { Container , Card, CardContent, CardWrapper, Wrapper,  } from "../styled/Portfolio.Style";
import { Title, DestkopTitle } from "../styled/About.Styled"

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
    <Wrapper>

      <div>
        <Title>My portfolio</Title>
        <DestkopTitle>
            <h1>Portfolio</h1>
            <h2>My portfolio</h2>
        </DestkopTitle>
      </div>
      <FilterPortolio filter={filter} setFilter={setFilter}/>

      <Container>
        {data.map((item , i) =>
          item.filtered === true ? 
               <CardWrapper key={i}>
                  <img src={item.imgUrl} alt="" />  
                  <Card>
                    <CardContent>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </CardContent>   
                  </Card>  
                </CardWrapper>
          : '' 
        )}
      </Container> 
      </Wrapper>
    )
}
