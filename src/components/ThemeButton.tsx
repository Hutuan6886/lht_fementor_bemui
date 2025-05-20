import { useThemeStore } from "../theme-store/useThemeStore"

function ThemeButton() {
    const { theme, toggleTheme } = useThemeStore()

    return (
        <div className={`p-2
                            rounded-[0.6rem]
                            ${theme === 'light' ? "bg-[#EDEDED] hover:bg-[#C7C7C7]" : " bg-[#2F364B] hover:bg-[#545969]"} active:outline-2 active:outline-offset-1 active:outline-[#F25C54] transition cursor-pointer`}
            onClick={toggleTheme} >
            <img src={theme === 'light' ? "./assets/images/icon-moon.svg" : "./assets/images/icon-sun.svg"} alt={theme === 'light' ? 'icon-moon' : 'icon-light'} width={16} height={16} />
        </div >
    )
}

export default ThemeButton
