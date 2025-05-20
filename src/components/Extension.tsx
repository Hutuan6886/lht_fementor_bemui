import FilterTag from './FilterTag'
import ExtensionList from './ExtensionList'
import data from '../../data.json'
import { useEffect, useState } from 'react'
import type { ExtensionType, FilterType } from '../../type'
import { useThemeStore } from '../theme-store/useThemeStore'

const filterData: FilterType[] = [
    {
        label: 'All',
        isActive: true,
    },
    {
        label: 'Active',
        isActive: false,
    },
    {
        label: 'Inactive',
        isActive: false,
    }
]
function Extension() {
    const [extensions, setExtensions] = useState<ExtensionType[]>(data)
    const [extensionsFilter, setExtensionsFilter] = useState<ExtensionType[]>(extensions)
    const [filter, setFilter] = useState<FilterType[]>(filterData)

    const { theme } = useThemeStore()

    useEffect(() => {
        const filterActive = filter.find((item) => item.isActive)
        if (filterActive?.label === "All") {
            setExtensionsFilter(extensions)
        }
        else if (filterActive?.label === "Active") {
            const activeExtensions = extensions.filter((item) => item.isActive)
            setExtensionsFilter(activeExtensions)
        }
        else if (filterActive?.label === "Inactive") {
            const inactiveExtensions = extensions.filter((item) => !item.isActive)
            setExtensionsFilter(inactiveExtensions)
        }
    }, [filter, extensions])

    const handleClickFilter = (label: string) => {
        const filterChange: FilterType[] = [...filter]
        for (let i = 0; i < filter.length; i++) {
            if (filter[i].label === label) {
                filter[i].isActive = true
            }
            else {
                filter[i].isActive = false
            }
        }
        setFilter(filterChange)
    }

    return (
        <div className='flex flex-col gap-6'>
            <div className='w-full
                            flex flex-col sm:flex-row items-center justify-between gap-4'>
                <h1 className={`${theme === 'light' ? "text-[#09153E]" : "text-[#FBFDFE]"} text-[2rem] sm:text-[1.5rem] font-bold`}>Extensions List</h1>
                <div className='flex items-center justify-end gap-4'>
                    {filter.map((filterItem, i) => (
                        <FilterTag key={i} filterData={filterItem} handleFilter={() => handleClickFilter(filterItem.label)} />
                    ))}
                </div>
            </div>
            <ExtensionList extensionsFilter={extensionsFilter} setExtensionsFilter={setExtensionsFilter} extensions={extensions} setExtensions={setExtensions} />
        </div>
    )
}

export default Extension
