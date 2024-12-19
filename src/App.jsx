import './App.css'
import NavBar from  "./components/NavBar/NavBar"
import Banner from './components/Banner/Banner'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    
      <div>
        <NavBar />
        <ItemListContainer greeting={"Bienvenido a mi ecommerce"}/>
      <Banner/>
      </div>
      
  )
}

export default App
