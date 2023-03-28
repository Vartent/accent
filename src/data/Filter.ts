import { SelectProps } from "antd"
import { FilterEnum } from "@/ui/Filter/index.type"

export const filterOptions: SelectProps["options"] = [
    {label: "all",
    value: FilterEnum.all},
    {label: "art",
    value: FilterEnum.art},
    {label: "biography",
    value: FilterEnum.biography},
    {label: "computers",
    value: FilterEnum.computers},
    {label: "history",
    value: FilterEnum.history},
    {label: "medical",
    value: FilterEnum.medical},
    {label: "poetry",
    value: FilterEnum.poetry},
] 
