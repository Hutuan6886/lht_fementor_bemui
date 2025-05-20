import type { FilterType } from "../../type"
import { useThemeStore } from "../theme-store/useThemeStore"


interface FilterTagProps {
    filterData: FilterType
    handleFilter: () => void
}
function FilterTag({ filterData, handleFilter }: FilterTagProps) {
    const { theme } = useThemeStore()
    return (
        <div className={`px-4 py-1
                         rounded-[1.7rem]
                        cursor-pointer
                        ${filterData.isActive ? `${theme === 'light' ? "text-[#FBFDFE]" : "text-black"} border-0 bg-[#C7221A] hover:bg-[#DE473F]` : `${theme === 'light' ? "bg-white text-black hover:bg-[#FBFDFE] hover:text-[#5e5e5e]" : "bg-[#212636] text-[#FBFDFE] hover:bg-[#2F364B]"}`}
                        shadow-[0_0_1px_0_#545969]
                         active:outline-2 active:outline-offset-1 active:outline-[#F25C54]`}

            onClick={handleFilter}>
            <p className="text-[0.9rem] font-[550]">{filterData.label}</p>
        </div>
    )
}

export default FilterTag
