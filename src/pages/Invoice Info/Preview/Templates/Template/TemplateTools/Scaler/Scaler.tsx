import React from 'react';
import { ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import {Affix, Slider} from "antd";
import styles from '../TemplateTools.module.sass'
import './styles.sass'

type Props = {
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
};
export const Scaler = ({value, setValue}:Props) => {

    const [offset, setOffset] = React.useState(0)
    const ref = React.useRef<any>(undefined)

    React.useEffect(() => setOffset((window.innerHeight - ref.current.clientHeight) / 2))


    return (
        <Affix offsetTop={offset} className={styles.scaler}>
            <div ref={ref} className={styles.scalerContent}>
                <ZoomInOutlined />
                <Slider style={{}} min={20} vertical onChange={(_v: number) => setValue(_v)} value={value} />
                <ZoomOutOutlined />
            </div>
        </Affix>
    );
};