import React from 'react';
import {Select, Tag} from "antd";
import {CloseCircleOutlined} from '@ant-design/icons'

import './StatusFilter.sass'

export const StatusFilterComponent = ({setStatuses}: any) => {

    const statuses = [
        {
            label: 'new',
            value: '#8c8c8c',
        },
        {
            label: 'approved',
            value: '#2ed573'
        },
        {
            label: 'rejected',
            value: '#ff4757'
        },
        {
            label: 'in progress',
            value: '#ffa502'
        },
        {
            label: 'draft',
            value: '#57606f'
        },
        {
            label: 'paid',
            value: '#00a14f'
        },
        {
            label: 'under review',
            value: '#ffd500'
        },
    ]

    function tagRender(props: any) {
        const { label, value, closable, onClose } = props;
        const onPreventMouseDown = (event: { preventDefault: () => void; stopPropagation: () => void; }) => {
            event.preventDefault();
            event.stopPropagation();
        };
        return (
            <Tag
                key={value}
                color={value}
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                closeIcon={
                    <div className='close-tag-icon'>
                        <CloseCircleOutlined />
                    </div>
                }
                style={{ marginRight: 3 }}
            >
                {label}
            </Tag>
        );
    }

    return (
        <Select
            mode="multiple"
            labelInValue
            showArrow
            tagRender={tagRender}
            defaultValue={[]}
            options={statuses}
            onChange={(arr: []) => setStatuses((arr.map((el: any) => el.label)))}
            placeholder='Select Status'
        />
    );
};