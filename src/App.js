import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthenticationLayout from './lsyouts/AuthenticationLayout';
import Dashboard from './pages/dashboard';
function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationLayout />} >
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
