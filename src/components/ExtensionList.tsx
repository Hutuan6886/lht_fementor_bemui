
import type { ExtensionType } from "../../type"
import ExtensionItem from "./ExtensionItem"
import type React from "react"

interface ExtensionListProps {
    extensionsFilter: ExtensionType[]
    setExtensionsFilter: React.Dispatch<React.SetStateAction<ExtensionType[]>>
    extensions: ExtensionType[]
    setExtensions: React.Dispatch<React.SetStateAction<ExtensionType[]>>
}

function ExtensionList({ extensionsFilter, setExtensionsFilter, extensions, setExtensions }: ExtensionListProps) {
    const handleRemove = (name: string) => {
        const newExtensionFilter = extensionsFilter.filter((extension) => extension.name !== name)
        setExtensionsFilter(newExtensionFilter)
        const newExtensions = extensions.filter((extension) => extension.name !== name)
        setExtensions(newExtensions)
    }
    const handleSwitch = (name: string) => {
        const newExtensionsFilter: ExtensionType[] = extensionsFilter.map((extension) => {
            if (extension.name === name) {
                return { ...extension, isActive: !extension.isActive }
            }
            return extension
        })
        setExtensionsFilter(newExtensionsFilter)
        const newExtensions: ExtensionType[] = extensions.map((extension) => {
            if (extension.name === name) {
                return { ...extension, isActive: !extension.isActive }
            }
            return extension
        })
        setExtensions(newExtensions)
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {extensionsFilter.map((extension: ExtensionType, i: number) => (
                <ExtensionItem key={i} extensionData={extension} handleRemove={() => handleRemove(extension.name)} handleSwitch={() => handleSwitch(extension.name)} />
            ))}
        </div>
    )
}

export default ExtensionList
