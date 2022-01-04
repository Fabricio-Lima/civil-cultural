/* Resources */
import { useTheme } from 'Hooks/useTheme'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

/* Components */
import { IoClose } from 'react-icons/io5'
import {
  Col,
  Nav,
  Offcanvas,
} from 'react-bootstrap'

/* Styles */
import styles from 'Components/Sidebar/styles.module.scss'


interface SidebarState {
  active: boolean;
  setClose: () => void;
}


export default function Sidebar({ active, setClose }: SidebarState) {
  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <Offcanvas as={Col} className={`${styles.sidebarContainer} ${styles[theme]} col-12 col-xxl-3 col-md-3 col-sm-12`} show={active} onHide={setClose} keyboard>
      <Offcanvas.Header>
        <Offcanvas.Title className={`${styles.sidebarTitle} ${styles[theme]} d-flex align-items-center gap-2`} id="offcanvasNavbarLabel">
          <h5 className={`${styles.logoTitle} text-capitalize vertical-middle mt-1`}>Civil Cultural</h5>
          <Image 
            src='/civilcultural.png'
            width={32}
            height={32}
            objectFit='cover'
          />
        </Offcanvas.Title>
        <button type="button" className='btn p-0 remove-focus border-0 remove-bg-image' onClick={setClose} aria-label={t('components.sidebar.close')}>
          <IoClose className={`${styles.iconClose} ${styles[theme]}`} />
        </button>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column mb-1">
          <Nav.Link className={`${styles.navLink} ${styles[theme]} ${styles.active}`} href="#action1">{t('components.sidebar.topic')}</Nav.Link>
          <Nav.Link className={`${styles.navLink} ${styles[theme]}`} href="#action1">{t('components.sidebar.article')}</Nav.Link>
          <Nav.Link className={`${styles.navLink} ${styles[theme]}`} href="#action2">{t('components.sidebar.news')}</Nav.Link>
          <hr className={`${styles.verticalLine} ${styles[theme]} mx-auto`} />
          <Nav.Link className={`${styles.navLink} ${styles[theme]} align-self-center justify-content-start`} href="#action3">Login</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  )
}