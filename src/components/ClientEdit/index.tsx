import React from 'react';
import {Button, Form, FormInstance, Input} from "antd";
import {LogoUploadPreview} from "../LogoTools/LogoUploadPreview";

import PhoneInput from "react-phone-input-2";

import styles from './ClientEdit.module.sass'
import {ClientAddForm} from "../ClientAdd/ClientAddForm";
import {LogoViewer} from "./LogoViewer";

type Props = {};
export const ClientEdit = ({}: Props) => {

    const [logo, setLogo] = React.useState<{ file: File | null, imagePreviewUrl: string }>({
        file: null,
        imagePreviewUrl: ''
    })
    const [data, setData] = React.useState<any>(null)

    const [form] = Form.useForm<FormInstance>()

    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerContent}>
                    <LogoViewer img={logo} setImg={setLogo}/>
                    <Form
                        onSubmitCapture={(e) => {
                            console.log(e)
                        }}
                        form={form}
                        layout="horizontal"
                        name="form_in_modal"
                        initialValues={{
                            modifier: 'public',
                        }}
                    >
                        <ClientAddForm/>
                    </Form>
                </div>
                <div className={styles.containerContent}>
                    <LogoViewer img={logo} setImg={setLogo}/>
                    <Form
                        onSubmitCapture={(e) => {
                            console.log(e)
                        }}
                        form={form}
                        layout="horizontal"
                        name="form_in_modal"
                        initialValues={{
                            modifier: 'public',
                        }}
                    >
                        <ClientAddForm/>
                    </Form>
                </div>
                <div className={styles.containerSubmit}>
                    <Button htmlType='submit'
                            onClick={() => {
                                form.validateFields().then((_) => {
                                    console.log(_)
                                })
                            }}
                    > Save </Button>
                </div>
            </div>
        </>
    );
};