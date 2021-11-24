import React, {ChangeEvent, SetStateAction, useEffect, useState} from 'react';
import styles from './LogoTool.module.sass'
import {Button} from "antd";
import {DragAndDrop} from "./DragAndDrop";
import {CropImage} from "./CropImage";

type LogoComponentProps = {
    logoPhoto: {
        file: File | null
        imagePreviewUrl: string | ArrayBuffer | null
    }
    setLogoPhoto: SetStateAction<any>,
}

export const LogoUploadPreview = ({logoPhoto, setLogoPhoto}: LogoComponentProps) => {

    const imageRef = React.useRef<any>()
    const fileRef = React.createRef<any>()

    const [buttonsIsDisable, setButtonsIsDisable] = React.useState(true)
    const [cropIsDisable, setCropIsDisable] = React.useState(true)

    useEffect(() => {
        setButtonsIsDisable(false)
    }, [logoPhoto])

    const _handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        let reader = new FileReader()
        if (e.target.files) {
            const file = e.target.files[0]
            reader.readAsDataURL(file)
            reader.onload = () => {
                setLogoPhoto(
                    {
                        file: file,
                        imagePreviewUrl: reader.result
                    }
                )
            }
        }
    }

    return (
        <>
            <div className={styles.container}>
                <input
                    ref={fileRef}
                    type="file"
                    onChange={(e) => _handleImageChange(e)}/>
                <div className={styles.containerImage} ref={imageRef}>
                    {
                        logoPhoto.file ?

                            cropIsDisable ? <img src={logoPhoto.imagePreviewUrl as string} alt='logo'/> :
                                <CropImage src={logoPhoto.imagePreviewUrl as string}
                                           setIsAble={setCropIsDisable} setPhoto={setLogoPhoto} fileRef={fileRef}
                                />
                            :
                            <DragAndDrop setPhoto={setLogoPhoto} element={fileRef}/>
                    }
                </div>
                <div className={styles.containerButtons}>
                    {logoPhoto.file &&
                    <div className={styles.containerButtonsBlock}>
                        {
                            cropIsDisable &&
                                <>
                                    <Button disabled={buttonsIsDisable} size='small' title='Crop uploaded image'
                                            onClick={() => setCropIsDisable(!cropIsDisable)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"/>
                                        </svg>
                                    </Button>
                                    <Button disabled={buttonsIsDisable} size='small' title='Delete uploaded image' onClick={() => {
                                        setButtonsIsDisable(true)
                                        imageRef.current.className = styles.containerScaleImage
                                        setTimeout(
                                            () => {
                                                setLogoPhoto({file: null, imagePreviewUrl: ''})
                                            }, 400
                                        )
                                    }
                                    }>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                        </svg>
                                    </Button>
                                    <Button disabled={buttonsIsDisable} size='small' title='Upload another image' onClick={() => {
                                        // @ts-ignore
                                        fileRef.current.click()
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                                        </svg>
                                    </Button>
                                </>
                        }
                    </div>
                    }
                </div>
            </div>
        </>
    );
};