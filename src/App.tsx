import DataComponents from "./components/DataComponents"
import DetailsForm from "./components/DetailsForm"
import {Routes,Route} from 'react-router-dom'
function App() {


  return (
    <>
   
     <Routes>
      <Route path="/" element={<DetailsForm></DetailsForm>}/>
      <Route path="/data" element={<DataComponents></DataComponents>}/>
     </Routes>
    </>
  )
}

export default App
