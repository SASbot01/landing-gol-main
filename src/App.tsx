import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Walkthrough from './pages/Walkthrough'
import Checkout from './pages/Checkout'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import ThankYou from './pages/ThankYou'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/walkthrough" element={<Walkthrough />} />
            <Route path="/demo" element={<Walkthrough />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default App

