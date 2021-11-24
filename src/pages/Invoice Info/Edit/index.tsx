import React, {useEffect, useState} from "react";
import {EditInvoiceForm} from './Form';

import styles from './Edit.module.sass'
import {Form} from "antd";

export default function Edit({invoice}: any) {

    const [form] = Form.useForm()

    React.useEffect(() => {
            if (invoice) form.setFieldsValue(invoice)
        }, []
    )

    useEffect(() => {
        //some work with back
    }, [])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerContent}>
                    <EditInvoiceForm form={form} invoice={invoice}/>
                </div>
            </div>
        </>
    )
}
