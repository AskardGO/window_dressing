import React from 'react';
import styles from './TemplateTools.module.sass'
import {Affix, Button} from "antd";

import {SaveOutlined, SyncOutlined} from '@ant-design/icons'
import {Link} from "react-router-dom";

export const TemplateHeader = ({save}: any) => {

    const [isSaveButtonPressed, setIsSaveButtonPressed] = React.useState(false)

    const onSaveHandler = () => {
        setIsSaveButtonPressed(true)
        setTimeout(() => {
            save();
            setIsSaveButtonPressed(false)
        }, 600)
    }

    return (
        <Affix className={styles.containerHeader}>
            <div className={styles.controls}>
                <Button children={
                    <Link to={'/'}>
                        Cancel
                    </Link>
                }/>
                <Button type='primary'
                        onClick={onSaveHandler}
                        children={
                    <div className={styles.controlsSave}>
                        Save
                        {
                            isSaveButtonPressed?<SyncOutlined spin/>:<SaveOutlined/>
                        }
                    </div>
                }/>
            </div>
        </Affix>
    );
};