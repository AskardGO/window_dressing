import React from 'react';
import PhoneInput from 'react-phone-input-2'

import './ClientAddForm.sass'
import 'react-phone-input-2/lib/style.css'

import {
    Form,
    Input,
} from 'antd'

type Props = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    isOpen: boolean
    createClient: any
    form: any
};

export const ClientAddForm = ({ref}:any) => {

    const validateMobileNumber = (rule: any, value: string | any[], callback: any) => {
        if (value.length < 10) callback('Phone number is invalid!')
        else return Promise.resolve()
    }

    return (
        <>
            <Form
                form={ref}
                layout="horizontal"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                    <Form.Item
                        name='displayName'
                        label='Name'
                        rules={[
                            {required: true, message: 'Please, input company name!'}
                        ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            {type: 'email', message: 'The input is not valid E-mail!'},
                            {required: true, message: 'Please, input your E-mail!'},
                        ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="country"
                        label='Country'
                    >
                        {/*<CountryDropdown*/}
                        {/*    classes='ant-input'*/}
                        {/*    value={addressData.country}*/}
                        {/*    onChange={(val) => setAddressData({...addressData, country: val})}*/}
                        {/*/>*/}
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="city"
                        label="City"
                    >
                        {/*<RegionDropdown*/}
                        {/*    classes='ant-input'*/}
                        {/*    country={addressData.country}*/}
                        {/*    value={addressData.city} defaultOptionLabel='Select City'*/}
                        {/*    onChange={(val) => setAddressData({...addressData, city: val})}*/}
                        {/*/>*/}
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="street"
                        label="Street"
                        rules={[
                            {type: 'string', message: 'The input is not valid street!'},
                        ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="postCode"
                        label="Post Code"
                        rules={[
                            {type: 'string', message: 'The input is not valid street!'},
                        ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="phoneNumber"
                        label="Phone"
                        htmlFor='tel'
                        rules={[
                            {required: true, message: 'Please, input your Phone number!'},
                            {validator: validateMobileNumber}
                        ]}>
                        <PhoneInput
                            inputStyle={{border: "unset", height: "auto"}}
                            buttonStyle={{border: "unset", left: 0}}
                            containerClass='ant-input'
                            country='us'
                        />
                    </Form.Item>
            </Form>
        </>
    );
};