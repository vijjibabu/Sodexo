import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Overview from './pages/Overview'
import LaborForecasting from './pages/LaborForecasting'
import LaborAnalytics from './pages/LaborAnalytics'
import TimePunchAnalytics from './pages/TimePunchAnalytics'
import AIRecommendations from './pages/AIRecommendations'
import AIAssistant from './pages/AIAssistant'
import DataQuality from './pages/DataQuality'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/labor-analytics" element={<LaborAnalytics />} />
        <Route path="/time-punch-analytics" element={<TimePunchAnalytics />} />
        <Route path="/labor-forecasting" element={<Navigate to="/labor-forecasting/model-training" replace />} />
        <Route path="/labor-forecasting/:section" element={<LaborForecasting />} />
        <Route path="/ai-recommendations" element={<AIRecommendations />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/model-performance" element={<Navigate to="/labor-forecasting/model-performance" replace />} />
        <Route path="/data-quality" element={<DataQuality />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
