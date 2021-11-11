import { FilterPort } from "../styled/FilterPortfolio.Styled"

export const FilterPortolio = (props) => {
   
    return (
        
      <FilterPort>
          <button 
          href="/#"
          active={props.filter === "All"} 
          onClick={() => props.setFilter("All")}
          className={props.filter === "All" ? "active" : "unactive"}
          >
            All
          </button>
          <button
            href="/#"
            active={props.filter === "Front-End"}
            onClick={() => props.setFilter("Front-End")}
            className={props.filter === "Front-End" ? "active" : "unactive"}
          >
            Front-End
          </button>
          <button
            href="/#"
            active={props.filter === "HTML"}
            onClick={() => props.setFilter("HTML")}
            className={props.filter === "HTML" ? "active" : "unactive"}
          >
            HTML
          </button>
          <button
            href="/#"
            active={props.filter === "UX-UI"}
            onClick={() => props.setFilter("UX-UI")}
            className={props.filter === "UX-UI" ? "active" : "unactive"}
          >
            UX/UI
          </button>
          <button
            href="/#"
            active={props.filter === "React"}
            onClick={() => props.setFilter("React")}
            className={props.filter === "React" ? "active" : "unactive"}
          >
            React
          </button>
      </FilterPort>
    )
}
