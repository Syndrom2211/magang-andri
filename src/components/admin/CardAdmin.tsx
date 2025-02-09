import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardContent from './DashboardContent';
import TetangKami from './TetangKami';
import Konsultasi from './Konsultasi';
import KontakKami from './KontakKami';
import ProjectBimble from './ProjectBimble';
import ProgramContent from './ProgramContent';
import SettingsContent from './SettingsContent';
import LogsMenu from './Logs';
import { SearchProvider } from '../../context/SearchContext';
import '../styles/styleAdmin.css'

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <SearchProvider>
    <div className="dashboard">
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
      <main className="main-content">
        <Header />
        <Routes>
          <Route path="/" element={<DashboardContent />} />
          <Route path="/tetangkami" element={<TetangKami />} />
          <Route path="/konsultasi" element={<Konsultasi />} />
          <Route path="/projectbimble" element={<ProjectBimble />} />
          <Route path="/programLainnya" element={<ProgramContent />} />
          <Route path="/kontakKami" element={<KontakKami />} />
          <Route path="/settings" element={<SettingsContent />} />
          <Route path='/logs' element={<LogsMenu/>}/>
        </Routes>
      </main>
    </div>
    </SearchProvider>
  );
};

export default Dashboard;
