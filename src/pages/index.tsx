import { useRouter } from 'next/dist/client/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Home from 'Pages/home'

const index = () => <Home/>

export default index

export async  function getStaticProps({ locale }) {

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en-US', ['common'])),
    },
  }
}
