import React from 'react';

import styles from './LogoViewer.module.sass'
import './styles.sass'

import {UserOutlined} from '@ant-design/icons'
import {Modal} from "antd";
import {LogoUploadPreview} from "../../LogoTools/LogoUploadPreview";

type Props = {
    img: { file: (File | null), imagePreviewUrl: string }
    setImg: any
};
export const LogoViewer = ({img, setImg}: Props) => {

    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
    const [onHovered, setOnHovered] = React.useState<boolean>(false)
    const [uploadedImg, setUploadedImg] = React.useState<any>(
        {
            file: null,
            imagePreviewUrl: ''
        }
    )

    React.useEffect(() => {
        if(img.file) {
            setUploadedImg(img)
        }
    }, [])

    const addPhoto = ({file, imagePreviewUrl}: { file: (File | null), imagePreviewUrl: string }): void => {
        setUploadedImg({
            file: file, imagePreviewUrl: imagePreviewUrl
        })
    }

    const submit = () => {
        return setImg(uploadedImg)
    }

    return (
        <>
            <div className={styles.preview}
                 onMouseEnter={() => setOnHovered(true)}
                 onMouseLeave={() => setOnHovered(false)}
                 onClick={() => setIsModalOpen(true)}
            >
                {img.file?<img alt='logo' src={img.imagePreviewUrl}/>:<UserOutlined/>}
                {onHovered && <span className={styles.previewMessage}> Click to change/upload logo </span>}
            </div>
            {
                isModalOpen &&
                <Modal className={styles.modal} title="Upload Logo" visible={isModalOpen} onOk={submit} onCancel={() => setIsModalOpen(false)}>
                    <LogoUploadPreview key={uploadedImg.imagePreviewUrl} logoPhoto={uploadedImg} setLogoPhoto={addPhoto}/>
                </Modal>
            }
        </>

    );
};