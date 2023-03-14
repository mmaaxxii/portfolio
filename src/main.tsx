import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AxiosInterceptor } from './interceptors/axios.interceptor';
import { PortfolioWrapperContextProvider } from './pages/Portfolio/wrapper/context';

AxiosInterceptor()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    
    <PortfolioWrapperContextProvider>
        <App />
    </PortfolioWrapperContextProvider>
    
)
