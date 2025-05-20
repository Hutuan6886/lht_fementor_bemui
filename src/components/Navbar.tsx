import { useThemeStore } from "../theme-store/useThemeStore"
import ThemeButton from "./ThemeButton"

function Navbar() {
    const { theme } = useThemeStore()
    return (
        <div className={`w-full p-2
                        rounded-[0.7rem] shadow-[0_0_9px_0_rgba(0,0,0,0.1)]
                        flex justify-between items-center
                        ${theme === 'light' ? "bg-white" : "bg-[#212636]"}`}>
            <img src={theme === 'light' ? "./assets/images/logo.svg" : "./assets/images/logo-night.svg"} alt={theme === 'light' ? 'logo-light' : 'logo-dark'} width={130} />
            <ThemeButton />
        </div>
    )
}

export default Navbar
