import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import View from './pages/View'
import Edit from './pages/Edit';


const App = () => {


  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Add' element={<Add/>}/>
          <Route path='/View' element={<View/>}/>
          <Route path="/Edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App