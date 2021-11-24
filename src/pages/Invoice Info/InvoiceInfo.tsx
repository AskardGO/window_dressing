import React, {useEffect, useState} from 'react';

import './InvoiceInfoMarkUp.css'
import {getInvoice} from "../../services/InvoiceServices";

import styles from './InvoiceInfo.module.sass'

import {Template} from "./Preview/Templates/Template";
import {TemplateTools} from "./Preview/Templates/Template/TemplateTools/TemplateTools";
import useNotification from "../../hooks/useNotification";


const InvoiceInformation = (props: any) => {

    const [invoice, setInvoice] = useState<any>(null)
    const [updatedInvoice, setUpdatedInvoice] = useState<any>(null)
    const [scaleValue, setScaleValue] = React.useState(80)
    const createNotification = useNotification()

    useEffect(() => {
        (async () => {
            const data = await getInvoice(props.location.state)
            if (data[0]) {
                setInvoice(data[0].data.data)
            } else {
                alert(data[1])
            }
        })()
    }, [props])

    const updateTemplateData = (newData: any) => {
        setUpdatedInvoice(Object.assign({}, invoice, {template: newData}))
    }

    const saveChanges = async () => {

        try {
            if(updatedInvoice) {

                console.log("send to back", updatedInvoice)

                createNotification({
                    type: 'success',
                    message: 'Your changes have been saved',
                    duration: 5
                })
            }
            else {
                createNotification({
                    type: 'fail',
                    message: 'There are any changes',
                    duration: 5
                })
            }
        }
        catch (err) {
            console.log(err)
        }

        //if fail
        // createNotification({
        //     type: 'fail',
        //     message: 'Your changes have not been saved',
        //     duration: 5
        // })
    }

    return (
        <div className={styles.block}>
            <TemplateTools scalerValue={scaleValue} setScalerValue={setScaleValue} saveChanges={saveChanges}/>
            <div className={styles.content}>
                {
                    invoice && <Template scale={scaleValue} invoice={invoice} updateInvoiceTemplate={updateTemplateData}/>
                }
            </div>
        </div>
    );
};

export default InvoiceInformation;
