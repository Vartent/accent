import { Select } from "antd"
import styles from "@/styles/Filter.module.css"
import { sorterOptions } from "@/data/Sorter"
import { SorterEnum } from "../Filter/index.type"

const Sorter = () => {

    const handleChange = () => {

    }

    return(
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <div style={{minWidth: "fit-content", marginRight: "15px"}}>Sort by</div>
            <Select 
                className={styles["filter-sorter-select"]} 
                options={sorterOptions}
                defaultValue={SorterEnum.relevance}
            />
        </div>
    )
}

export default Sorter