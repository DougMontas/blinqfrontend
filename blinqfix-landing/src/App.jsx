import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './Landing';
import CustomerHome from './pages/CustomerHome';
import ProHome from './pages/ProHome';
import ProviderNetwork from './pages/ProviderNetwork';
import Customers from './pages/Customers';

export default function App(){
  return(
    <Routes>
      <Route path="/"        element={<Landing />} />
      <Route path="/customer" element={<CustomerHome />} />
      <Route path="/pro"      element={<ProHome />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/pros"      element={<ProviderNetwork />} />
      <Route path="*" element={<Navigate to="/" replace/>} />
    </Routes>
  );
}