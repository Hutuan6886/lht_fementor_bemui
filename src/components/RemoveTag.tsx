import { useThemeStore } from "../theme-store/useThemeStore"


interface RemoveTagProps {
    label: string
    isRemove: boolean
    handleRemove: () => void
}
function RemoveTag({ label, isRemove, handleRemove }: RemoveTagProps) {
    const { theme } = useThemeStore()
    return (
        <div className={`px-4 py-1
                         rounded-[1.7rem]
                        cursor-pointer
                        ${isRemove ? 'border-0 bg-[#C7221A] text-[#FBFDFE]' : `${theme === 'light' ? "bg-[#FBFDFE] text-[#09153E] hover:bg-[#EDEDED] active:text-[#FBFDFE]" : "bg-[#212636] text-[#FBFDFE] hover:bg-[#2F364B]"} active:text-black`} 
                        shadow-[0_0_1px_0_#545969]
                        active:outline-2 active:outline-offset-1 active:outline-[#F25C54] active:bg-[#DE473F]`}
            onClick={handleRemove}>
            <p className="text-[0.9rem] font-[550]">{label}</p>
        </div>
    )
}

export default RemoveTag
