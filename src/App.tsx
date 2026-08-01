import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Merch from './pages/Merch'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/merch" element={<Merch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
