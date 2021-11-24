import React from 'react';
import {DatePicker} from "antd";

import {Moment} from "moment";

import './DatePicker.sass'

type Props = {
    setDate: React.Dispatch<React.SetStateAction<Moment | null>>
};

export const DatePickerComponent = ({setDate}: Props) => {

    const _handler = (v: any) => {
        setDate(v)
    }

    return (
        <DatePicker onChange={_handler} placeholder='Select Date'/>
    );
}
