import React from "react";
import styles from "./LogoTool.module.sass";
import {Button} from "antd";

export const DropButton = React.forwardRef((props, ref) =>
    <div style={{width: '100%', height: '100%'}} title='Upload image' onClick={() => {
        // @ts-ignore
        ref.current.click()
    }}/>
)