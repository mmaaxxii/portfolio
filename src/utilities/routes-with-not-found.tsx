import { Route, Routes } from "react-router-dom"

interface Props {
    children: JSX.Element[] | JSX.Element
}


export default function RoutesWithNotFound({children}: Props) {
  return (
   <Routes>
    {children}
    <Route path='*' element={<h1>NOT FOUND</h1>} />
   </Routes>
  )
}
