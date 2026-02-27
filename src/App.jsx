
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Search from './Components/Search'

function App() {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
      {/* <Search/>/\ */}
    
    </div>
  )
 
}

export default App
