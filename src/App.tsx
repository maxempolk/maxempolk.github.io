import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import BaseLayout from "./layouts/base"
import HomePage from "./pages/home"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
