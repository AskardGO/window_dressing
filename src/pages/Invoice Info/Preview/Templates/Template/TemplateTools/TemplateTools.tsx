import React from 'react';
import {TemplateHeader} from "./TemplateHeader";
import styles from './TemplateTools.module.sass'
import {Scaler} from "./Scaler/Scaler";

type Props = {
    scalerValue: number,
    setScalerValue: React.Dispatch<React.SetStateAction<number>>,
    saveChanges: () => void
};
export const TemplateTools = ({scalerValue, setScalerValue, saveChanges}: Props) => {
    return (
        <div className={styles.container}>
            <TemplateHeader save={saveChanges}/>
            <Scaler value={scalerValue} setValue={setScalerValue}/>
        </div>
    );
};