import { Routes, Route } from 'react-router-dom'; 
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/signin/sign-in.component';





const Shop = () => {
  return <h1>Shop</h1>;
}

const App = () => {

 return (

 <Routes>
  <Route path='/' element={<Navigation />}>
   <Route index element={<Home />} />
   {/* index tells us that it is the main page */}
   <Route path='shop' element={<Shop />} />
   <Route path='sign-in' element={<SignIn />} />

    </Route>

 </Routes>

)};

export default App;
