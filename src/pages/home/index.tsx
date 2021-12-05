/* Resources */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { PublicationArrayProps } from 'Contracts/PageProps'
import { useTranslation } from 'next-i18next'

/* Components */
import Header from "Components/Header"
import Sidebar from 'Components/Sidebar'
import { Row, Col, Card, Placeholder } from 'react-bootstrap'

/* Styles */
import {
  HomeContainer,
  Main,
  DivHeader,
  CardContainer,
  SectionOthers,
  SectionCategories,
  BoxTitleMenu,
  TitleMenu,
  List,
  ListItem,
  BoxImg,
  CardTitle,
  CardText,
  CardTextDate,
  CardLink,
  BadgeCategories,
  BadgeLink
} from 'Pages/home/styles'


export default function Home() {
  const cardTest = Array(4).fill('teste');
  const { t } = useTranslation()

  return (
    <HomeContainer>
      <Head>
        <title>Civil cultural</title>
      </Head>
      <Header />
      <Main >
        <DivHeader />
        <Col as='section' className='row p-0 m-0' >
          <Sidebar />

          <Col className='col-11 col-xxl-8 col-lg-8 col-xl-8 col-md-9 col-sm-11 mx-auto border-1 border-secondary'>
            {
              /* COMPONENTE CARD */
              cardTest.map((x, i) => (
                <CardContainer key={i} className='col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-11 col-xs-11 mx-auto'>
                  <Row className='col-12'>
                    <Col className='col-10 px-0'>
                      <Card.Body>
                        <CardTextDate>10/05/2021 &#9679; há 4 horas</CardTextDate>
                        <CardTitle><Link href='#'><CardLink>Caixa Econômica divulga calendário de pagamento do Auxílio Brasil</CardLink></Link></CardTitle>
                        <CardText className='text-truncate'>
                          This is a wider card with supporting text below as a natural lead-in to
                          additional content. This content is a little bit longer.
                        </CardText>
                      </Card.Body>
                    </Col>
                    <Col className="col-2 p-0 m-0 d-flex justify-content-center align-content-center">
                      <BoxImg>
                        <Image
                          src="https://img.freepik.com/psd-gratuitas/maos-segurando-um-jornal-de-negocios-com-modelo-de-maquete-de-espaco-de-copia-na-mesa-preta-topview_185216-128.jpg?size=626&ext=jpg"
                          alt="Imagem de exemplo"
                          layout="fill"
                          objectFit='cover'
                        />
                      </BoxImg>
                    </Col>
                  </Row>
                </CardContainer>
              ))
              /* COMPONENT END */
            }

            {
              /* COMPONENTE CARD DE LOAD */
              <CardContainer className='col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-11 col-xs-11 mx-auto'>
                <Row className='col-12'>
                  <Col className='col-10 px-0'>
                    <Card.Body>
                      <Placeholder as={CardTextDate} animation='glow'>
                        <Placeholder className='col-5' />
                      </Placeholder>
                      <Placeholder as={CardTitle} animation='glow'>
                        <Placeholder className='col-7' />
                      </Placeholder>
                      <Placeholder as={CardText} animation='glow'>
                        <Placeholder className='col-12' />
                        <Placeholder className='col-12' />
                      </Placeholder>
                    </Card.Body>
                  </Col>
                  <Col className="col-2 p-0 m-0 d-flex justify-content-center align-content-center">
                    <Placeholder as={BoxImg} animation='glow'>
                      <Placeholder className='w-100 h-100' />
                    </Placeholder>
                  </Col>
                </Row>
              </CardContainer>
              /* COMPONENT END*/
            }
          </Col>

          <Col className='col-3 d-none d-md-block d-lg-block'>
            <SectionOthers>
              <BoxTitleMenu className='col-11 mx-auto'>
                <TitleMenu>{ t('pages.home.menu_publication') }</TitleMenu>
              </BoxTitleMenu>
              <List>
                {
                  Array(5).fill('teste').map((x, i) => (
                    <ListItem key={i}>
                      <CardTitle style={{ fontSize: '.86rem', lineHeight: '1.4em', fontWeight: '500' }}>
                        <Link href='#'>
                          <CardLink>Elon Musk deixa claro porque prefere Dogecoin á shiba Inu</CardLink>
                        </Link>
                      </CardTitle>
                      <CardTextDate>10/05/2021 ● há 1 dia</CardTextDate>
                    </ListItem>
                  ))
                }
              </List>
            </SectionOthers>
            <SectionCategories>
              <BoxTitleMenu className='col-11 mx-auto'>
                <TitleMenu>{ t('pages.home.menu_category') }</TitleMenu>
              </BoxTitleMenu>
              <Col className='col-11 mx-auto py-2 d-flex flex-wrap gap-1'>
                <BadgeCategories>
                  <Link href='#'>
                    <BadgeLink >Tecnologia</BadgeLink>
                  </Link>
                </BadgeCategories>
                <BadgeCategories>
                  <Link href='#'>
                    <BadgeLink >Saúde</BadgeLink>
                  </Link>
                </BadgeCategories>
                <BadgeCategories>
                  <Link href='#'>
                    <BadgeLink >Ciencia</BadgeLink>
                  </Link>
                </BadgeCategories>
                <BadgeCategories>
                  <Link href='#'>
                    <BadgeLink >Educação</BadgeLink>
                  </Link>
                </BadgeCategories>
                <BadgeCategories>
                  <Link href='#'>
                    <BadgeLink >Empreendedorismo</BadgeLink>
                  </Link>
                </BadgeCategories>
                <BadgeCategories>
                  <Link href='#'>
                    <BadgeLink >Finanças</BadgeLink>
                  </Link>
                </BadgeCategories>
                <BadgeCategories>
                  <Link href='#'>
                    <BadgeLink >Astronomia</BadgeLink>
                  </Link>
                </BadgeCategories>
                <BadgeCategories>
                  <Link href='#'>
                    <BadgeLink >IA</BadgeLink>
                  </Link>
                </BadgeCategories>
              </Col>
            </SectionCategories>
          </Col>
        </Col>
      </Main>
    </HomeContainer>
  )
}
