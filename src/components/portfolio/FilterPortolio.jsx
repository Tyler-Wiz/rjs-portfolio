import { FilterPort,FilterButton } from "../styled/FilterPortfolio.Styled"

export const FilterPortolio = (props) => {
   
    return (
        
      <FilterPort toggle={props.filter}>
          <FilterButton
          href="/#"
          active={props.filter === "All"} 
          onClick={() => props.setFilter("All")}
          >
            All
          </FilterButton>
          <FilterButton
            href="/#"
            active={props.filter === "Front-End"}
            onClick={() => props.setFilter("Front-End")}
            className={props.filter === "Front-End" ? "active" : "unactive"}
          >
            Front-End
          </FilterButton>
          <FilterButton
            href="/#"
            active={props.filter === "HTML"}
            onClick={() => props.setFilter("HTML")}
            className={props.filter === "HTML" ? "active" : "unactive"}
          >
            HTML
          </FilterButton>
          <FilterButton
            href="/#"
            active={props.filter === "UX-UI"}
            onClick={() => props.setFilter("UX-UI")}
            className={props.filter === "UX-UI" ? "active" : "unactive"}
          >
            UX/UI
          </FilterButton>
          <FilterButton
            href="/#"
            active={props.filter === "React"}
            onClick={() => props.setFilter("React")}
            className={props.filter === "React" ? "active" : "unactive"}
          >
            React
          </FilterButton>
      </FilterPort>
    )
}
