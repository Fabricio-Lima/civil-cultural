/* ----------- RESOURCES ----------- */
import { useTheme } from "Hooks/useTheme";
import { useTranslation } from "next-i18next";

/* ----------- ICONS ----------- */
import { IoHome, IoNewspaperSharp } from "react-icons/io5";

import {
  MdOutlineArticle,
  MdOutlineLightMode,
  MdDarkMode,
} from "react-icons/md";

/* ----------- COMPONENTS ----------- */
import Image from "next/image";
import Switch from "Components/Switch";
import NextLink from "next/link";
import Logo from "Components/Logo";
import { Col, Nav } from "react-bootstrap";

/* ----------- STYLES ----------- */
import styles from "Components/Sidebar/styles.module.scss";

interface SidebarState {
  active: boolean;
  handleClose: () => void;
}

export default function Sidebar({ active, handleClose }: SidebarState) {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const links = [
    {
      text: "Inicio",
      href: "/",
      Icon: IoHome,
    },
    {
      text: "Notícias",
      href: "/#",
      Icon: IoNewspaperSharp,
    },
    {
      text: "Artigos",
      href: "/#",
      Icon: MdOutlineArticle,
    },
  ];

  const linksCategory = [
    {
      text: "Política",
      href: "/#",
    },
    {
      text: "Economia",
      href: "/#",
    },
    {
      text: "Cultura",
      href: "/#",
    },
    {
      text: "Educação",
      href: "/#",
    },
    {
      text: "Saúde",
      href: "/#",
    },
    {
      text: "Empreendedorismo",
      href: "/#",
    },
    {
      text: "Financias",
      href: "/#",
    },
    {
      text: "Ciência",
      href: "/#",
    },
    {
      text: "Tecnologia",
      href: "/#",
    },
    {
      text: "Esporte",
      href: "/#",
    },
    {
      text: "Entretenimento",
      href: "/#",
    },
  ];

  return (
    <Col
      className={`${styles.sidebar_container} ${
        styles[theme]
      } d-none d-lg-flex  ${active ? styles.active : styles.inactive}`}
    >
      <Col
        className={`${styles.sidebar_header} col-auto d-flex align-items-center`}
      >
        <Logo width={26} height={26} />
        <h4 className={`${styles.logo_title} ${styles[theme]}`}>
          Civil Cultural
        </h4>
      </Col>

      <Col
        className={`${styles.sidebar_body} ${styles[theme]} flex-grow-1 col-auto`}
      >
        <Nav className="d-flex flex-column mt-4 gap-1">
          {links.map(({ href, text, Icon }, i) => (
            <NextLink href={href} key={i}>
              <Nav.Link href={href} className={i == 1 ? styles.active : ""}>
                {Icon && <Icon className="me-2" />} {text}
              </Nav.Link>
            </NextLink>
          ))}
        </Nav>
      </Col>

      <Col className={`${styles.sidebar_footer} col-auto`}>
        <Col className={`${styles.theme_mode} ${styles[theme]}`}>
          {theme == "light" ? (
            <>
              <MdOutlineLightMode />
              <span>Light</span>
            </>
          ) : (
            <>
              <MdDarkMode />
              <span>Dark</span>
            </>
          )}
          <Switch className="ms-2" />
        </Col>
      </Col>
    </Col>
  );
}
