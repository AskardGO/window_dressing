import React from 'react';
import {ClientAddForm} from "./ClientAddForm";
import {Steps, Modal, Button, Form, FormInstance} from "antd";
import {LogoUploadPreview} from "../LogoTools/LogoUploadPreview";

import styles from './ClientAddForm.module.sass'
import './ClientAddForm.sass'

import {postClient} from "../../services/ClientServices";
import useNotification from "../../hooks/useNotification";

const {Step} = Steps;

export const AddUser = () => {

    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [logo, setLogo] = React.useState<{ file: File | null, imagePreviewUrl: string }>({
        file: null,
        imagePreviewUrl: ''
    })
    const [data, setData] = React.useState<any>(null)
    const [current, setCurrent] = React.useState(0)
    const createNotification = useNotification()
    const [form] = Form.useForm<FormInstance>()

    const addPhoto = ({file, imagePreviewUrl}: { file: (File | null), imagePreviewUrl: string }): void => {
        setLogo({
            file: file, imagePreviewUrl: imagePreviewUrl
        })
    }

    const next = () => {
        if (!current) {
            form
                .validateFields()
                .then((values) => {
                    setData(values)
                    setCurrent(current + 1)
                })
        } else {
            setCurrent(current + 1);
        }

    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const reset = () => {
        setCurrent(0)
        setIsOpen(!isOpen)
        setData(null)
        form.resetFields()
    }

    const create = () => {
        form
            .validateFields()
            .then(async (_) => {
                const postClientData = await postClient(data)
                if (!postClientData[1]) {
                    setIsOpen(false)
                    createNotification({
                        type: 'success',
                        message: 'Success! New Client was created',
                        duration: 5,
                    })
                    reset()
                } else {
                    createNotification({
                        type: 'fail',
                        message: 'Error! ' + postClientData[1],
                        duration: 5,
                    })
                }
            }).catch(
            (err) => console.log(err)
        )
    }

    const steps = [
        {
            title: 'General Info',
            content: <ClientAddForm ref={form}/>,
        },
        {
            title: 'Logo',
            content: <LogoUploadPreview key={logo.imagePreviewUrl + Math.random()} logoPhoto={logo}
                                        setLogoPhoto={addPhoto}/>,
        },
        {
            title: 'Employee',
            content: 'Some Info',
        },
    ]

    return (
        <div className={styles.container}>
            <Button onClick={() => setIsOpen(!isOpen)} onFocus={({target}) => setTimeout(target.blur(), 200)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                </svg>
            </Button>
            <Modal
                className={styles.modal}
                closable={false}
                visible={isOpen}
                title="Create a new Client"
                onOk={current < steps.length - 1 ? next : create}
                okText={current < steps.length - 1 ? 'Next' : 'Create'}
                onCancel={current ? prev : () => setIsOpen(false)}
                cancelText={current ? 'Previous' : 'Cancel'}
                okButtonProps={{disabled: false}}
                afterClose={() => {
                    form.resetFields()
                    setLogo(
                        {
                            file: null,
                            imagePreviewUrl: ''
                        }
                    )
                }}
            >
                    <Steps current={current}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title}/>
                        ))}
                    </Steps>
                    <div className={styles.form + " steps-content"}>{steps[current].content}</div>
            </Modal>

        </div>
    );
};