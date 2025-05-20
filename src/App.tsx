import './App.css'
import Extension from './components/Extension'
import Navbar from './components/Navbar'
import { useThemeStore } from './theme-store/useThemeStore'

function App() {
  const { theme } = useThemeStore()

  return (
    <div style={{ background: theme === 'light' ? "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)" : "linear-gradient(180deg, #040918 0%, #091540 100%)" }} className="w-full h-full transition-all overflow-y-scroll">
      <div className="w-[90%] sm:w-[85%] m-auto py-5
                      flex flex-col gap-y-7 sm:gap-y-14">
        <Navbar />
        <Extension />
      </div>;
    </div>
  )
}

export default App
