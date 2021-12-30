
/* Components */
import {
  Navbar,
  Nav,
  Offcanvas,
} from 'react-bootstrap'

/* Styles */
import styles from 'Components/Sidebar/styles.module.scss';


export default function Sidebar({ active }: { active: boolean }) {
  return (
    <Navbar expand={active} >
      <Navbar.Offcanvas
        id='sidebar'
        aria-labelledby='sidebarLabel'
        placement='left'
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  )
}