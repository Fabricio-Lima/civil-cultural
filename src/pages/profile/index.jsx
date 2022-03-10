/* ----------- RESOURCES ----------- */
import { useTheme } from 'Hooks/useTheme'
import { useState } from 'react'
import { Layout } from 'utils/Layout'

/* ----------- COMPONENTS ----------- */
import Input from 'Components/Input'
import Label from 'Components/Label'
import MainLayout from 'Layouts/MainLayout'

/* ----------- ICONS ----------- */
import { MdLocationPin } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';

/* ----------- STYLES ----------- */
import styles from 'Pages/profile/styles.module.scss'

function Profile() {
  const { theme } = useTheme()
  const [editMode, setEditMode] = useState(true)

  return (
    <div className={`d-flex row g-0 ${styles.body} ${styles[theme]}`}>
        <section className={`col-md-3 ${styles.profile_container} ${styles[theme]} `}>
          <div className={`border ${styles.profile_container_card}`}>
           <span className={`${styles.edit_icon}`} onClick={() => setEditMode(!editMode)}>
              <AiFillEdit />
           </span>
            <div className={`d-flex justify-content-center ${styles.profile_container_img}`}>
              <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvPm9NjtkiWYuwmr0q33RHCaXLCLyGTWht77TOxwWj_opyyGPySxZ61s_rRyqus_3kcM&usqp=CAU"
              alt="Sua imagem de perfil"
              className={`rounded-3  ${styles.profile_img}`}
              />
            </div>
            <div className={`d-flex justify-content-center ${styles.profile_container_name}`}>
              <Label className={styles.profile_container_label} label='Nome'>
                <Input disabled={editMode}
                placeholder='Identificação pessoal'
                aria-label='Identificação pessoal'
                className={`${styles.profile_name_input}`}
                />
              </Label>  
            </div>
            <div className={`d-flex justify-content-center ${styles.profile_container_location}`}>
               <span className={styles.location_icon}><MdLocationPin/></span> 
               <Label label='Estado' className={styles.profile_container_label}>
                  <Input disabled={editMode}
                  placeholder='Identificação pessoal'
                  aria-label='Identificação pessoal'
                  className={`${styles.profile_location}`}
                  />
               </Label>
            </div>
            <div className={`d-flex justify-content-center ${styles.profile_container_location}`}>
              <span className={styles.location_icon}><MdLocationPin/></span>  
               <Label className={`${styles.profile_container_label}`} label='Cidade'>
                  <Input disabled={editMode}
                  placeholder='Identificação pessoal'
                  aria-label='Identificação pessoal'
                  className={`${styles.profile_location}`}
                  />
               </Label>
            </div>
          </div>
        </section>
        <section className={`col-md-4 container align-middle ${styles.infos_container}`}>
          <div className={`row justify-content-center`}>
            <div className={`col-md-8 ${styles.campo}`}>
              <Label className={styles.campo_label} label='E-mail'>
                <Input disabled={editMode}
                placeholder='E-mail'
                aria-label='E-mail'
                className={styles.campo_input}
                />
              </Label>
            </div>
          </div>
          <div className={`row justify-content-center`}>
            <div className={`col-md-8 ${styles.campo}`}>
              <Label className={styles.campo_label} label='Celular'>
                <Input disabled={editMode}
                placeholder='Celular'
                aria-label='Celular'
                className={styles.campo_input}
                />
              </Label>  
            </div>
          </div>
          <div className={`row justify-content-center`}>
            <div className={`col-md-8 ${styles.campo}`}>
              <Label className={styles.campo_label} label='Telefone fixo'>
                <Input disabled={editMode}
                placeholder='Telefone fixo'
                aria-label='Telefone fixo'
                className={styles.campo_input}
                />
              </Label>  
            </div>
          </div>
          <div className={`row justify-content-center`}>
            <div className={`col-md-8 ${styles.campo}`}>
              <Label className={styles.campo_label} label='Identificação pessoal'>
                <Input disabled={editMode}
                placeholder='Identificação pessoal'
                aria-label='Identificação pessoal'
                className={styles.campo_input}
                />
              </Label>  
            </div>
          </div>
          <div className={`row justify-content-center`}>
            <div className={`col-md-8 ${styles.campo}`}>
              <Label className={styles.campo_label} label='CEP'>
                <Input disabled={editMode}
                placeholder='CEP'
                aria-label='CEP'
                className={styles.campo_input}
                />
              </Label>  
            </div>
          </div>
          <div className={`row justify-content-center`}>
            <div className={`col-md-8 ${styles.campo}`}>
              <Label className={styles.campo_label} label='Endereço'>
                <Input disabled={editMode}
                placeholder='Endereço'
                aria-label='Endereço'
                className={styles.campo_input}
                />
              </Label>  
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

//centralizar inputs 
//organizar ordem das chamadas no css
//add botao de salvar
//add descansar mouse no botao de edit e estilizar, pondo fundo