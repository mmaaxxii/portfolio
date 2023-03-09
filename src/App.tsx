import { SnackbarProvider } from 'notistack'
import { Provider, useSelector } from 'react-redux'
import './App.css'
import store, { AppStore } from './redux/store'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes, Roles } from './models'
import { AuthGuard, RoleGuard } from './guards'
import { RoutesWithNotFound, SnackbarUtilitiesConfigurator } from './utilities'
import { lazy, Suspense } from 'react'
import { Logout } from './components/Logout'
const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/Private/Private'))
import Dashboard from './pages/Private/Dashboard/Dashboard';

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<>Loading</>}>
        <Provider store={store}>
          <SnackbarProvider>
            <SnackbarUtilitiesConfigurator />
            <BrowserRouter>
              <Logout />
              <RoutesWithNotFound>
                <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
                <Route element={<AuthGuard privateValidation={true} />}>
                  <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
                </Route>
                <Route element={<RoleGuard role={Roles.ADMIN} />} >
                  <Route path={`${PrivateRoutes.DASHBOARD}/*`} element={<Dashboard />} />
                </Route>
              </RoutesWithNotFound>
            </BrowserRouter>
          </SnackbarProvider>
        </Provider>
      </Suspense>
    </div>
  )
}
export default App

//*<p>{JSON.stringify(user)}</p>
