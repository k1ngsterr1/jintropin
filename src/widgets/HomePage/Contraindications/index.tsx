import React from 'react'
import Paragraph from '@shared/ui/Paragraph'
import { ContraindicationsTab } from '../../../features/Tab__Components/ContraindicationsTab'

import styles from './styles.module.scss'

export const Contraindications = () => {
    return (
        <div className={styles.container}>
            <h5 className={styles.container__heading}>ПРОТИВОПОКАЗАНИЯ</h5>
            <Paragraph width='25%' margin='m-auto pt-4' align='text-center' text='С медицинскими противопоказаниями можно ознакомиться в инструкции:' paragraphType='yellow' />
            <ContraindicationsTab />
        </div>
    )
}
