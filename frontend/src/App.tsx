import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Agendamentos from './pages/Agendamentos';
import Clientes from './pages/Clientes';
import Tutores from './pages/Tutores';
import Prontuarios from './pages/Prontuarios';
import Configuracoes from './pages/Configuracoes';
import Financeiro from './pages/Financeiro';
import Estoque from './pages/Estoque';
import Pets from './pages/Pets';
import Faturas from './pages/Faturas';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Rota pública */}
            <Route path="/login" element={<Login />} />
            
            {/* Rotas protegidas */}
            <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/agendamentos" element={<ProtectedRoute><Agendamentos /></ProtectedRoute>} />
            <Route path="/clientes" element={<ProtectedRoute><Clientes /></ProtectedRoute>} />
            <Route path="/tutores" element={<ProtectedRoute><Tutores /></ProtectedRoute>} />
            <Route path="/prontuarios" element={<ProtectedRoute><Prontuarios /></ProtectedRoute>} />
            <Route path="/configuracoes" element={<ProtectedRoute><Configuracoes /></ProtectedRoute>} />
            <Route path="/financeiro" element={<ProtectedRoute><Financeiro /></ProtectedRoute>} />
            <Route path="/estoque" element={<ProtectedRoute><Estoque /></ProtectedRoute>} />
            <Route path="/pets" element={<ProtectedRoute><Pets /></ProtectedRoute>} />
            <Route path="/faturas" element={<ProtectedRoute><Faturas /></ProtectedRoute>} />
            
            {/* Redirecionamento padrão */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;