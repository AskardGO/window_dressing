import React from 'react';
import styles from './SearchInvoice.module.sass'
import {Input} from "antd";

type Props = {
    value: any
    setValue: React.Dispatch<React.SetStateAction<any>>
};
export const SearchInvoice = ({value, setValue}:Props) => {

    const [isCrossHover, setIsCrossHover] = React.useState<boolean>(false)

    return (
        <>
            <Input
                title={value?value:"Type search value here"}
                className={styles.container}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
                value={value}
                allowClear
                type="search" name="search" placeholder="Search"/>
        </>
    );
};