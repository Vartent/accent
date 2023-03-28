import styles from "@/styles/Filter.module.css"
import { Select } from "antd"
import type { SelectProps } from "antd"
import { filterOptions } from "@/data/Filter"
import { FilterEnum } from "./index.type"


const Filter = () => {

    const handleChange = (value: SelectProps) => {
        
    }

    return(
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <div style={{minWidth: "fit-content", marginRight: "15px"}}>filter by</div>
            <Select 
                listHeight={150} 
                className={styles["filter-sorter-select"]} 
                options={filterOptions}
                defaultValue={FilterEnum.all}
            />
        </div>
    )
}

export default Filter