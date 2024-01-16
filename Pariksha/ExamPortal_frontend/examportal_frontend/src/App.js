import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { AllRoutes } from './Routes/AllRoutes';
import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:8080';
Axios.defaults.headers.common['Authorization'] = 'Bearer ' +localStorage.getItem('token');



function App() {
  return (
    <div >
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
