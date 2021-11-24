import React from 'react';
import styles from './Element.module.sass'
import TextArea from "antd/es/input/TextArea";
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import {Button, Input} from "antd";

type Props = {

};
export const TemplateElement = ({data, setEdited, updateData, index}: any) => {

    const [isActive, setIsActive] = React.useState(false)
    const [value, setValue] = React.useState<any>(data.value)
    const [currentValue, setCurrentValue] = React.useState(data.value)

    const activeSwitcher = () => setIsActive(!isActive)

    const save = () => {
        if(value !== currentValue) {
            setEdited(true)
        }
        updateData(currentValue, index)
        setIsActive(!isActive)
    }

    const cancel = () => {
        setCurrentValue(value)
        setIsActive(!isActive)
    }

    return (
        <div key={data.type} className={styles.block}>
            {
                isActive?
                    <div className={styles.blockContent}>
                        <TextArea autoSize value={currentValue} onChange={({target}) => setCurrentValue(target.value)}/>
                        <div className={styles.blockButtons}>
                            <CheckOutlined
                                className={styles.blockButtonsSave}
                                onClick={save}
                            />
                            <CloseOutlined
                                className={styles.blockButtonsCancel}
                                onClick={cancel}
                            />
                        </div>
                    </div>
                    :
                    <div onClick={activeSwitcher} className={styles.text}>
                        {currentValue}
                    </div>
            }
        </div>
    );
};