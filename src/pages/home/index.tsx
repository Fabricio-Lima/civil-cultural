/* Resources */
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useTheme } from 'Hooks/useTheme'

/* Components */
import Header from "Components/Header"
import Sidebar from 'Components/Sidebar'
import { Row, Col, Placeholder, Card, ListGroup } from 'react-bootstrap'

/* Styles */
import styles from 'Pages/home/styles.module.scss'


function CardPostLoad() {
  const { theme } = useTheme()

  return (
    <Card className={`${styles.cardContainer} ${styles[theme]} col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-11 col-xs-11 mx-auto`}>
      <Row className='col-12'>
        <Col className='col-10 px-0'>
          <Card.Body>
            <Placeholder className={`${styles.cardTextDate} ${styles[theme]}`} animation='glow'>
              <Placeholder className='col-5' />
            </Placeholder>
            <Placeholder className={`${styles.cardTitle} ${styles[theme]}`} animation='glow'>
              <Placeholder as={Card.Link} className='col-12' />
            </Placeholder>
            <Placeholder className={`${styles.cardText} ${styles[theme]}`} animation='glow'>
              <Placeholder className='col-12' />
              <Placeholder className='col-12' />
            </Placeholder>
          </Card.Body>
        </Col>
        <Col className="col-2 p-0 m-0 d-flex justify-content-center align-content-center">
          <Placeholder className={styles.boxImg} style={{ width: '95%' }} animation='glow'>
            <Placeholder className={`${styles.cardText} ${styles[theme]}`} style={{ height: '100%', width: '100%' }} />
          </Placeholder>
        </Col>
      </Row>
    </Card>
  )
}

function CardTopicsLoad() {
  const { theme } = useTheme()

  return (
    <ListGroup.Item className={styles.listItem}>
      <Placeholder as={Card.Title} className={styles.cardItem} animation='glow'>
        <Placeholder as={Card.Link} className={`${styles.cardTextDate} ${styles[theme]} col-10`}></Placeholder>
      </Placeholder>
      <Placeholder as={Card.Text} className={`${styles.cardTextDate} ${styles[theme]}`} animation='glow'>
        <Placeholder className='col-5' />
      </Placeholder>
    </ListGroup.Item>
  )
}


export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false)
  const { theme } = useTheme()

  const cardTest = Array(4).fill('teste');
  const { t } = useTranslation()

  return (
    <div className={`${styles.homeContainer} ${styles[theme]}`}>
      <Head>
        <title>Civil cultural</title>
      </Head>
      <Header isActive={showSidebar} setIsActive={() => setShowSidebar(x => !x)} />
      <main className={styles.main}>
        <Sidebar active={showSidebar} />
        <div className={styles.divHeader} />
        <Col as='section' className='row p-0 m-0' >
          <Col className='col-11 col-xxl-8 col-lg-8 col-xl-8 col-md-9 col-sm-11 mx-auto border-1 border-secondary'>
            {
              /* COMPONENTE CARD */
              cardTest.map((x, i) => (
                <Card key={i} className={`${styles.cardContainer} ${styles[theme]} col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-11 col-xs-11 mx-auto`}>
                  <Row className='col-12'>
                    <Col className='col-10 px-0'>
                      <Card.Body>
                        <Card.Text className={`${styles.cardTextDate} ${styles[theme]}`}>10/05/2021 &#9679; há 4 horas</Card.Text>
                        <Card.Title className={styles.cardTitle}><Link href='#'><Card.Link className={styles.cardLink}>Caixa Economica divulga calendário de pagamento do Auxílio Brasil</Card.Link></Link></Card.Title>
                        <Card.Text className={`${styles.cardText} ${styles[theme]} text-truncate`}>
                          This is a wider card with supporting text below as a natural lead-in to
                          additional content. This content is a little bit longer.
                        </Card.Text>
                      </Card.Body>
                    </Col>
                    <Col className="col-2 p-0 m-0 d-flex justify-content-center align-content-center">
                      <Col className={styles.boxImg}>
                        <Image
                          src="https://img.freepik.com/psd-gratuitas/maos-segurando-um-jornal-de-negocios-com-modelo-de-maquete-de-espaco-de-copia-na-mesa-preta-topview_185216-128.jpg?size=626&ext=jpg"
                          alt="Imagem de exemplo"
                          layout="fill"
                          objectFit='cover'
                        />
                      </Col>
                    </Col>
                  </Row>
                </Card>
              ))
              /* COMPONENT END */
            }

            <CardPostLoad />
          </Col>

          <Col className='col-3 d-none d-md-block d-lg-block'>
            <section className={`${styles.sectionOthers} ${styles[theme]}`}>
              <Col className={`${styles.boxTitleMenu} ${styles[theme]} col-11 mx-auto`}>
                <h3 className={`${styles.titleMenu} ${styles[theme]}`}>{t('pages.home.menu_publication')}</h3>
              </Col>
              <ListGroup className={styles.list}>
                {
                  Array(5).fill('teste').map((x, i) => (
                    <ListGroup.Item key={i} className={styles.listItem}>
                      <Card.Title className={styles.cardItem} style={{ fontSize: '.86rem', lineHeight: '1.4em', fontWeight: '500' }}>
                        <Link href='#'>
                          <Card.Link className={`${styles.cardLink} ${styles[theme]}`}>Elon Musk deixa claro porque prefere Dogecoin á shiba Inu</Card.Link>
                        </Link>
                      </Card.Title>
                      <Card.Text className={`${styles.cardTextDate} ${styles[theme]}`}>10/05/2021 ● há 1 dia</Card.Text>
                    </ListGroup.Item>
                  ))
                }
                <CardTopicsLoad />
              </ListGroup>
            </section>

            <section className={`${styles.sectionCategories} ${styles[theme]}`}>
              <Col className={`${styles.boxTitleMenu} col-11 mx-auto`}>
                <h3 className={`${styles.titleMenu} ${styles[theme]}`}>{t('pages.home.menu_category')}</h3 >
              </Col>
              <Col className='col-11 mx-auto py-2 d-flex flex-wrap gap-1'>
                <span className={`${styles.badgeCategories} ${styles[theme]}`}>
                  <Link href='#'>
                    <a className={`${styles.badgeLink} ${styles[theme]}`} >Tecnologia</a>
                  </Link>
                </span>
                <span className={`${styles.badgeCategories} ${styles[theme]}`}>
                  <Link href='#'>
                    <a className={`${styles.badgeLink} ${styles[theme]}`} >Saúde</a>
                  </Link>
                </span>
                <span className={`${styles.badgeCategories} ${styles[theme]}`}>
                  <Link href='#'>
                    <a className={`${styles.badgeLink} ${styles[theme]}`} >Ciencia</a>
                  </Link>
                </span>
                <span className={`${styles.badgeCategories} ${styles[theme]}`}>
                  <Link href='#'>
                    <a className={`${styles.badgeLink} ${styles[theme]}`} >Educação</a>
                  </Link>
                </span>
                <span className={`${styles.badgeCategories} ${styles[theme]}`}>
                  <Link href='#'>
                    <a className={`${styles.badgeLink} ${styles[theme]}`} >Empreendedorismo</a>
                  </Link>
                </span>
                <span className={`${styles.badgeCategories} ${styles[theme]}`}>
                  <Link href='#'>
                    <a className={`${styles.badgeLink} ${styles[theme]}`} >Finanças</a>
                  </Link>
                </span>
                <span className={`${styles.badgeCategories} ${styles[theme]}`}>
                  <Link href='#'>
                    <a className={`${styles.badgeLink} ${styles[theme]}`} >Astronomia</a>
                  </Link>
                </span>
                <span className={`${styles.badgeCategories} ${styles[theme]}`}>
                  <Link href='#'>
                    <a className={`${styles.badgeLink} ${styles[theme]}`} >IA</a>
                  </Link>
                </span>
              </Col>
            </section>
          </Col>
        </Col>
      </main>
    </div>
  )
}
