import {Routes,Route} from 'react-router-dom'
import { MainContent } from './homepage/main/main-content'
import { Header } from './homepage/header/header'

export const App=() => {
  return(
    <Routes>
      <Route path='/' element={
        <>
        <Header/>
        <MainContent/>
        </>
      }/>
      <Route path='/portfolio' element={
        <>
        <Header/>
        {/*тут какой то контент*/}
        </>
      }/>
      <Route path='/contacts' element={
        <>
        <Header/>
        {/*тут какой то контент*/}
        </>
      }/>
    </Routes>
  )
}