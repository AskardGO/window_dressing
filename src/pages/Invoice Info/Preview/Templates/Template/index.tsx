import React, {CSSProperties} from 'react';
import {TemplateElement} from "../../Elements";

import styles from './Template.module.sass'
import {TemplateBlock} from "../TemplateBlock";

export const Template = ({invoice, scale, updateInvoiceTemplate}: any) => {

    const [isWasEdited, setIsWasEdited] = React.useState<boolean>(false)
    const [template, setTemplate] = React.useState(invoice.template)

    const elements = () => template.map(
            (t: any, index: any) =>
            {
                return <TemplateBlock t={t} wasEdited={setIsWasEdited} blockIndex={index} updateBlock={updateBlock}/>
            }
            )

    React.useEffect(() => {
        console.log(isWasEdited)
    },[isWasEdited])

    const updateBlock = (data: [], index: number) => {
        const newArray = template.slice()
        newArray[index].data = data
        updateInvoiceTemplate(newArray)
    }

    return (
        <>
            {
                invoice ?
                    <div className={styles.container} style={{transform: `scale(${(scale / 100)})`}}>
                        <div>
                            {elements()}
                        </div>
                    </div>
                    :
                    <div> Load </div>
            }
        </>
    );
};