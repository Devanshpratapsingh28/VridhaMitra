import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import './index.css'
import Admin from './pages/Admin'
import User from './pages/user'
import HealthForm from './pages/user-features/HealthForm'
import Volunte from './pages/Volunte'
import MedicineReminder from './pages/user-features/MedicineReminder'
import App from './App'
import Login from './pages/login'
import Test from './pages/test'
import Signup from './pages/signup.jsx'
import PoseDetection from './pages/user-features/PoseDetection.jsx'
import Travel from './pages/user-features/travel.jsx'
import Fundraiser from './pages/user-features/fundraiser.jsx'
import AddUserForm from './pages/admin-features/add-user.jsx'
import TravelRequests from './pages/user-features/TravelRequests.jsx'
// import OTPVerify from './pages/otp-verify.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/test' element={<Test />} />
          <Route path='/user-home' element={<User />} />
          <Route path='/user-home/health-form' element={<HealthForm />} />
          <Route path='/user-home/medicine-reminder' element={<MedicineReminder />} />
          <Route path='/user-home/travel' element={<Travel />} />
          <Route path='/user-home/fundraiser' element={<Fundraiser />} />
               <Route path='/user-home/pose-detection' element={<PoseDetection/>}/>
          <Route path='/volunteer-home' element={<Volunte />} />
          <Route path='/user-home/travel-requests' element={<TravelRequests />} />
          <Route path='/admin-home' element={<Admin />} />
          <Route path='/admin-home/add-user' element={<AddUserForm />} />
        </Routes>
        <ToastContainer theme="dark" position='top-right' />

      </BrowserRouter>
    </Provider>
  </StrictMode>,
)