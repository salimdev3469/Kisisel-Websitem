import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Sayfa ve Bileşen Importları
import Home from './pages/Home';
import Login from './pages/Login';
import Manage from './pages/Manage';
import ProtectedRoute from './components/ProtectedRoute';
import theme from './theme/theme'; // Oluşturduğun tema dosyası

function App() {
  return (
    // 1. Tüm uygulamayı tema sağlayıcısı ile sarmalıyoruz
    <ThemeProvider theme={theme}>

      {/* 2. Tarayıcı varsayılan stillerini sıfırlayıp kendi temamıza uygun hale getiriyoruz */}
      <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/manage/*"
            element={
              <ProtectedRoute>
                <Manage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;