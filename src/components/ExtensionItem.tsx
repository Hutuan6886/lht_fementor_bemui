
import Switch from './Switch'
import RemoveTag from './RemoveTag'
import type { ExtensionType } from '../../type'
import { useThemeStore } from '../theme-store/useThemeStore'

interface ExtensionItemProps {
    extensionData: ExtensionType
    handleRemove: () => void
    handleSwitch: () => void
}
function ExtensionItem({ extensionData, handleRemove, handleSwitch }: ExtensionItemProps) {
    const { theme } = useThemeStore()
    return (
        <div className={`px-4 py-3.5
                        ${theme === 'light' ? "bg-[#FBFDFE]" : "bg-[#212636]"}
                        rounded-[1rem] shadow-[0_0_9px_0_rgba(0,0,0,0.1)]
                        flex flex-col gap-8`}>
            <div className='flex items-center justify-start gap-3'>
                <img src={extensionData.logo} alt={extensionData.logo} />
                <div className='flex flex-col gap-1'>
                    <h3 className={`font-bold
                                    ${theme === 'light' ? "text-[#09153E]" : "text-[#FBFDFE]"}`}>{extensionData.name}</h3>
                    <p className={`leading-4.5 text-sm ${theme === 'light' ? "text-[#444444]" : "text-[#C7C7C7]"}`}>{extensionData.description}</p>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <RemoveTag label='Remove' isRemove={false} handleRemove={handleRemove} />
                <Switch isActive={extensionData.isActive} handleSwitch={handleSwitch} />
            </div>
        </div >
    )
}

export default ExtensionItem
