import React, {DragEventHandler} from 'react';
import styles from "./LogoTool.module.sass";
import './DragAndDrop.sass'
import { InboxOutlined } from '@ant-design/icons';
import {Button} from "antd";

export const DragAndDrop = (({children, setPhoto, element}:any) => {

        const [drag, setDrag] = React.useState(false)

        const dragStartHandler = (e: React.DragEvent) => {
            e.preventDefault()
            setDrag(true)
        }

        function dragLeaveHandler(e: React.DragEvent) {
            e.preventDefault()
            setDrag(false)
        }

        function dropHandle(e: React.DragEvent) {
            e.preventDefault()
            // @ts-ignore
            let files = [...e.dataTransfer.files]
            let reader = new FileReader()
            if (files) {
                const file = files[0]
                reader.readAsDataURL(file)
                reader.onload = () => {
                    setPhoto(
                        {
                            file: file,
                            imagePreviewUrl: reader.result
                        }
                    )
                    setDrag(false)
                }
            }
        }

        return (
            <>
                {/*#40a9ff*/}
                {
                    <div className={`ant-upload ant-upload-drag ${drag?'dragged':''}`}
                         onDragStart={e => dragStartHandler(e)}
                         onDragLeave={e => dragLeaveHandler(e)}
                         onDragOver={e => dragStartHandler(e)}
                         onDrop={e => dropHandle(e)}
                         onClick={() => element.current.click()}
                    >
                        <>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                band files
                            </p>
                            {children}
                        </>
                    </div>
                }
            </>
        )
    }
)