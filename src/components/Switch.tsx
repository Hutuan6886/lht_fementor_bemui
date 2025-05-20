import { useThemeStore } from "../theme-store/useThemeStore"


function Switch({ isActive, handleSwitch }: { isActive: boolean, handleSwitch: () => void }) {
    const { theme } = useThemeStore()
    return (
        <div className={`w-[2.2rem] h-[1.25rem]
                        flex flex-col justify-center    
                        rounded-[50px] cursor-pointer transition-all
                        ${isActive ? 'bg-[#C7221A]' : `${theme === 'light' ? "bg-[#C7C7C7]" : "bg-[#545969]"}`} active:outline-2 active:outline-offset-1 active:outline-[#F25C54] duration-300 ease-in-out`}
            onClick={handleSwitch}>
            <div className={`w-4 h-4 my-auto 
                            ${isActive ? 'mx-[1.115rem]' : 'mx-0.5'}
                            bg-white
                            rounded-[50px] shadow-md`}></div>
        </div>
    )
}

export default Switch
