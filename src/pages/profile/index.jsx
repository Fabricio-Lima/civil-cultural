/* ----------- RESOURCES ----------- */
import { useTheme } from 'Hooks/useTheme'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

/* ----------- COMPONENTS ----------- */
import { Layout } from 'utils/Layout'
import MainLayout from 'Layouts/MainLayout'
import Input from 'Components/Input'
import { FloatingLabel } from 'react-bootstrap'
import Button from 'Components/Button'

/* ----------- ICONS ----------- */
import { MdLocationPin } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';

/* ----------- STYLES ----------- */
import styles from 'Pages/profile/styles.module.scss'

function Profile() {
  const { theme } = useTheme()
  const { t } = useTranslation();
  const [editMode, setEditMode] = useState(true)

  return (
    <div className={`d-flex col-md row g-0 ${styles.body} ${styles[theme]}`}>
        <section className={`col-md-4 ${styles.profile_container} ${styles[theme]}`}>
          <div className={`border ${styles.profile_container_card}`}>
           <span onClick={() => setEditMode(!editMode)}>
              <AiFillEdit className={`${styles.edit_icon} ${!editMode ? styles.blue_edit_button : ""}`}/>
           </span>
            <div className={`d-flex justify-content-center ${styles.profile_container_img}`}>
              <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvPm9NjtkiWYuwmr0q33RHCaXLCLyGTWht77TOxwWj_opyyGPySxZ61s_rRyqus_3kcM&usqp=CAU"
              alt="Sua imagem de perfil"
              className={`rounded-3  ${styles.profile_img}`}
              />
            </div>
            <div className={`d-flex justify-content-center ${styles.profile_container_name} ${styles[theme]}`}>
              <FloatingLabel className={`${styles.profile_container_label} ${styles[theme]}`} 
              label={t('forms.name')}>
                <Input disabled={editMode}
                placeholder={t('forms.name')}
                aria-label={t('forms.name')}
                className={`${styles.profile_name_input}`}
                />
              </FloatingLabel>
            </div>
            <div className={`d-flex justify-content-center ${styles.profile_container_location}`}>
               <span className={styles.location_icon}><MdLocationPin/></span>
               <FloatingLabel label={t('forms.country')} className={`${styles.profile_container_label} ${styles[theme]}`}>
                  <Input disabled={editMode}
                  placeholder={t('forms.country')}
                  aria-label={t('forms.country')}
                  className={`${styles.profile_location}`}
                  />
               </FloatingLabel>
            </div> 
            <div className={`d-flex justify-content-center ${styles.profile_container_location}`}>
               <span className={styles.location_icon}><MdLocationPin/></span>
               <FloatingLabel label={t('forms.state')} className={`${styles.profile_container_label} ${styles[theme]}`}>
                  <Input disabled={editMode}
                  placeholder={t('forms.state')}
                  aria-label={t('forms.state')}
                  className={`${styles.profile_location}`}
                  />
               </FloatingLabel>
            </div>
            <div className={`d-flex justify-content-center ${styles.profile_container_location}`}>
              <span className={styles.location_icon}><MdLocationPin/></span>
               <FloatingLabel className={`${styles.profile_container_label} ${styles[theme]}`} label={t('forms.city')}>
                  <Input disabled={editMode}
                  placeholder={t('forms.city')}
                  aria-label={t('forms.city')}
                  className={`${styles.profile_location}`}
                  />
               </FloatingLabel>
            </div>
          </div>
        </section>
        <section className={`col-md-8 container ${styles.infos_container} ${styles[theme]}`}>
          <div className={`row justify-content-center ${styles[theme]}`}>
            <div className={`col-md-8 ${styles.campo}`}>
              <FloatingLabel className={`${styles.campo_label} ${styles[theme]}`} label='E-mail'>
                <Input disabled={editMode}
                placeholder='E-mail'
                aria-label='E-mail'
                className={styles.campo_input}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className={`row justify-content-center ${styles[theme]}`}>
            <div className={`col-md-8 ${styles.campo}`}>
              <FloatingLabel className={`${styles.campo_label} ${styles[theme]}`} 
              label={t('forms.phone_cell')}>
                <Input disabled={editMode}
                placeholder={t('forms.phone_cell')}
                aria-label={t('forms.phone_cell')}
                className={styles.campo_input}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className={`row justify-content-center ${styles[theme]}`}>
            <div className={`col-md-8 ${styles.campo}`}>
              <FloatingLabel className={`${styles.campo_label} ${styles[theme]}`} 
              label={t('forms.landline')}>
                <Input disabled={editMode}
                placeholder={t('forms.landline')}
                aria-label={t('forms.landline')}
                className={styles.campo_input}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className={`row justify-content-center`}>
            <div className={`col-md-8 ${styles.campo}`}>
              <FloatingLabel className={`${styles.campo_label} ${styles[theme]}`} 
              label={t('forms.personal_identification')}>
                <Input disabled={editMode}
                placeholder={t('forms.personal_indentification')}
                aria-label={t('forms.personal_indentification')}
                className={styles.campo_input}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className={`row justify-content-center`}>
            <div className={`col-md-8 ${styles.campo}`}>
              <FloatingLabel className={`${styles.campo_label} ${styles[theme]}`} label='CEP'>
                <Input disabled={editMode}
                placeholder='CEP'
                aria-label='CEP'
                className={styles.campo_input}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className={`row justify-content-center`}>
            <div className={`col-md-8 ${styles.campo}`}>
              <FloatingLabel className={`${styles.campo_label} ${styles[theme]}`} 
              label={t('forms.address')}>
                <Input disabled={editMode}
                placeholder={t('forms.address')}
                aria-label={t('forms.address')}
                className={styles.campo_input}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className={`row justify-content-center`}>
            <div className={`col-md-8 ${styles.save_button_container}`}>
              <Button className={`${styles.save_button}`} disabled={editMode}>Salvar</Button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Layout(
  Profile,
  MainLayout,
  {
    title: 'Perfil de Usúario'
  }
)

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

// 
//add descansar mouse no botao de edit e estilizar, pondo fundo