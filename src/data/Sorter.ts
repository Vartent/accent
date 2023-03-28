import { SelectProps } from "antd"
import { SorterEnum } from "@/ui/Filter/index.type"

export const sorterOptions: SelectProps["options"] = [
    {label: "newest",
    value: SorterEnum.newest},
    {label: "relevance",
    value: SorterEnum.relevance},
] 