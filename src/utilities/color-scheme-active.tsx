
import { persistLocalStorage } from './localStorage.utility';

export const  ColorSchemeActive = (): string => { 
    if (localStorage.getItem('color-scheme') === 'dark' || localStorage.getItem('color-scheme') === 'light'  ) {
        let colorScheme = localStorage.getItem('color-scheme')?.toString() as string
        return colorScheme 
    } else {
        persistLocalStorage('color-scheme', 'dark')
        return 'dark'
    }
    
}