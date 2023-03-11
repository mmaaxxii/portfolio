import { SnackbarProvider } from 'notistack'
import { Provider, useSelector } from 'react-redux'
import './App.css'
import store, { AppStore } from './redux/store'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes, Roles } from './models'
import { AuthGuard, RoleGuard } from './guards'
import { RoutesWithNotFound, SnackbarUtilitiesConfigurator } from './utilities'
import { lazy, Suspense } from 'react'
import { Portfolio } from './pages'
const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/Private/Private'))
const Dashboard =lazy(() => import( './pages/Private/Dashboard/Dashboard'))
//const Portfolio =lazy(() => import( './pages/Portfolio/Portfolio'))

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<>Loading</>}>
        <Provider store={store}>
          <SnackbarProvider> 
            <SnackbarUtilitiesConfigurator />
            <BrowserRouter>
              <RoutesWithNotFound>
                <Route path='/' element={<Portfolio route={PublicRoutes.ABOUTME}/>} />
                {/*<Route path='/asd' element={<Navigate to={PrivateRoutes.PRIVATE} />} /> */}
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
                <Route path={PublicRoutes.ABOUTME} element={<Portfolio route={PublicRoutes.ABOUTME}/>} />
                <Route path={PublicRoutes.SKILLS} element={<Portfolio route={PublicRoutes.SKILLS}/>} />
                <Route path={PublicRoutes.PROJECTS} element={<Portfolio route={PublicRoutes.PROJECTS}/>} />
                <Route path={PublicRoutes.CONTACT} element={<Portfolio route={PublicRoutes.CONTACT}/>} />
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
