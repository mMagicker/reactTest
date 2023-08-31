import { createContext } from 'react'

export interface NavigateContextProps {
	navigate: (path: string) => void
}

export const NavigateContext = createContext<NavigateContextProps | null>(null)
