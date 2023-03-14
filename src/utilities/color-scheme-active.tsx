
import { persistLocalStorage } from './localStorage.utility';

export const  ColorSchemeActive = (): string => { 
    if (localStorage.getItem('color-scheme') === 'dark' || localStorage.getItem('color-scheme') === 'light'  ) {
        let colorScheme = localStorage.getItem('color-scheme')?.toString() as string
        document.querySelector('html')?.setAttribute('data-theme', colorScheme)
        return colorScheme 
    } else {
        localStorage.setItem('color-scheme', 'dark')
        document.querySelector('html')?.setAttribute('data-theme', 'dark')
        return 'dark'
    }
    
}