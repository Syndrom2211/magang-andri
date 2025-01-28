import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiHome, FiUsers, FiMessageSquare, FiShoppingBag, FiLogOut } from 'react-icons/fi';
import { MdOutlineWidgets } from 'react-icons/md';
import { LuSettings2 } from 'react-icons/lu';
import ContactUs from '../../assets/contact-mail.svg';
import Yukmari from '../../assets/YukMari.svg';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  return (
    <aside className={`sidebar ${!isOpen ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {isOpen && <img src={Yukmari} alt="Yukmari" />}
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FiMenu />
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className={location.pathname === '/dashboard' ? 'active' : ''}>
            <NavLink to="/dashboard">
              <FiHome />
              {isOpen && <span>Beranda</span>}
            </NavLink>
          </li>
          <li className={location.pathname === '/dashboard/tetangkami' ? 'active' : ''}>
            <NavLink to="/dashboard/tetangkami">
              <FiUsers />
              {isOpen && <span>Tentang Kami</span>}
            </NavLink>
          </li>
          <li className={location.pathname === '/dashboard/konsultasi' ? 'active' : ''}>
            <NavLink to="/dashboard/konsultasi">
              <FiMessageSquare />
              {isOpen && <span>Konsultasi</span>}
            </NavLink>
          </li>
          <li className={location.pathname === '/dashboard/projectbimble' ? 'active' : ''}>
            <NavLink to="/dashboard/projectbimble">
              <FiShoppingBag />
              {isOpen && <span>Project & Bimble</span>}
            </NavLink>
          </li>
          <li className={location.pathname === '/dashboard/programLainnya' ? 'active' : ''}>
            <NavLink to="/dashboard/programLainnya">
              <MdOutlineWidgets />
              {isOpen && <span>Program Lainnya</span>}
            </NavLink>
          </li>
          <li className={location.pathname === '/dashboard/kontakKami' ? 'active' : ''}>
            <NavLink to="/dashboard/kontakKami">
              <img src={ContactUs} alt=".." />
              {isOpen && <span>Kontak Kami</span>}
            </NavLink>
          </li>
          <li className={location.pathname === '/dashboard/settings' ? 'active' : ''}>
            <NavLink to="/dashboard/settings">
              <LuSettings2 />
              {isOpen && <span>Setting</span>}
            </NavLink>
          </li>
          <ul className="bottom-menu">
            <li>
              <NavLink to="/logout">
                <FiLogOut />
                {isOpen && <span>Logout</span>}
              </NavLink>
            </li>
          </ul>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
