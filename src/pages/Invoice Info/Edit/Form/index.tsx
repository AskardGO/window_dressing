import React from 'react';

import styles from './EditInvoiceForm.module.sass'
import {Button, Form, Input} from "antd";
import {Link} from "react-router-dom";
import Title from "antd/es/typography/Title";

type Props = {

};

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export const EditInvoiceForm = ({form, invoice}: any) => {

    React.useEffect(() => {
        console.log(invoice)
    })

    const onFinish = (values: any) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div className={styles.container}>
            <Title level={4}> Edit Invoice </Title>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item
                    name="displayName"
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="total"
                    label="Total"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <div className={styles.buttons}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        {
                            !invoice &&
                            <Button>
                                <Link to='/'>
                                    Cancel
                                </Link>
                            </Button>
                        }
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};