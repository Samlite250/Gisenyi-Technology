import { Navigate, Routes, Route } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import HomePage from '../features/home/HomePage'
import AboutPage from '../features/about/AboutPage'
import ServicesPage from '../features/services/ServicesPage'
import ProjectsPage from '../features/projects/ProjectsPage'
import TrainingPage from '../features/training/TrainingPage'
import InternshipsPage from '../features/internships/InternshipsPage'
import ContactPage from '../features/contact/ContactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="work" element={<ProjectsPage />} />
        <Route path="training" element={<TrainingPage />} />
        <Route path="internships" element={<InternshipsPage />} />
        <Route path="insights" element={<Navigate to="/internships" replace />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
