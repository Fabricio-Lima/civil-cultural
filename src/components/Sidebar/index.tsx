/* ----------- RESOURCES ----------- */
import { useTheme } from 'Hooks/useTheme'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

/* ----------- COMPONENTS ----------- */
import { IoClose } from 'react-icons/io5'
import {
  Col,
  Nav,
  Offcanvas,
} from 'react-bootstrap'

/* ----------- STYLES ----------- */
import styles from 'Components/Sidebar/styles.module.scss'


interface SidebarState {
  active: boolean;
  setClose: () => void;
}


export default function Sidebar({ active, setClose }: SidebarState) {
  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <nav className={styles.sidebar}>
      <header>
        <div className={styles.image_text}>
          <span className="image">
            <img src="logo.png" alt="" />
          </span>

          <div className={`${styles.text} ${styles.logo_text}`}>
            <span className="name">Projeto civil cultural</span>
            <span className="profession">Web developer</span>
          </div>
        </div>

        <i className={`${styles.bx} ${styles.bx_chevron_right} ${styles.toggle}`}></i>
      </header>

      <div className={`${styles.menu_bar}`}>
        <div className={styles.menu}>

          <li className={styles.search_box}>
            <i className={`${styles.bx} ${styles.bx_search} ${styles.icon}`}></i>
            <input type="text" placeholder="Search..." />
          </li>

          <ul className={styles.menu_links}>
            <li className={styles.nav_link}>
              <a href="#">
                <i className={`${styles.bx} ${styles.bx_home_alt} ${styles.icon}`} ></i>
                <span className={`${styles.text} ${styles.nav_text}`}>Dashboard</span>
              </a>
            </li>

            <li className={styles.nav_link}>
              <a href="#">
                <i className='bx bx-bar-chart-alt-2 icon' ></i>
                <span className="text nav-text">Revenue</span>
              </a>
            </li>

            <li className={styles.nav_link}>
              <a href="#">
                <i className='bx bx-bell icon'></i>
                <span className="text nav-text">Notifications</span>
              </a>
            </li>

            <li className={styles.nav_link}>
              <a href="#">
                <i className='bx bx-pie-chart-alt icon' ></i>
                <span className="text nav-text">Analytics</span>
              </a>
            </li>

            <li className={styles.nav_link}>
              <a href="#">
                <i className='bx bx-heart icon' ></i>
                <span className="text nav-text">Likes</span>
              </a>
            </li>

            <li className={styles.nav_link}>
              <a href="#">
                <i className='bx bx-wallet icon' ></i>
                <span className="text nav-text">Wallets</span>
              </a>
            </li>

          </ul>
        </div>

        <div className="bottom-content">
          <li className="">
            <a href="#">
              <i className='bx bx-log-out icon' ></i>
              <span className="text nav-text">Logout</span>
            </a>
          </li>

          <li className="mode">
            <div className="sun-moon">
              <i className='bx bx-moon icon moon'></i>
              <i className='bx bx-sun icon sun'></i>
            </div>
            <span className="mode-text text">Dark mode</span>

            <div className="toggle-switch">
              <span className="switch"></span>
            </div>
          </li>

        </div>
      </div>

    </nav>

  )
}