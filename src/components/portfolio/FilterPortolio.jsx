import { FilterPort,FilterButton  } from "../styled/Portfolio.Style";


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
          >
            Front
          </FilterButton>
          <FilterButton
            href="/#"
            active={props.filter === "HTML"}
            onClick={() => props.setFilter("HTML")}
          >
            HTML
          </FilterButton>
          <FilterButton
            href="/#"
            active={props.filter === "UX-UI"}
            onClick={() => props.setFilter("UX-UI")}
          >
            UX/UI
          </FilterButton>
          <FilterButton
            href="/#"
            active={props.filter === "React"}
            onClick={() => props.setFilter("React")}
          >
            React
          </FilterButton>
      </FilterPort>
    )
}
