import React from 'react';
import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css'
import {Button} from "antd";
import styles from "./LogoTool.module.sass";


type Props = {
    src: string,
    setIsAble: React.Dispatch<React.SetStateAction<any>>
    setPhoto: React.Dispatch<React.SetStateAction<any>>
    fileRef: any
};
export const CropImage = ({src, setIsAble, setPhoto, fileRef}: Props) => {
    const [upImg, setUpImg] = React.useState<any>(src);
    const imgRef = React.useRef<any>(null);
    const previewCanvasRef = React.useRef<any>(null);
    const [crop, setCrop] = React.useState<any>({unit: '%', width: 50, aspect: 16 / 16, x: 25, y: 25});
    const [completedCrop, setCompletedCrop] = React.useState<any>(null);

    const onLoad = React.useCallback((img) => {
        imgRef.current = img;
    }, []);

    React.useEffect(() => {
        if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
            return;
        } else {
            const image = imgRef.current;
            const canvas = previewCanvasRef.current;
            const crop = completedCrop;

            const scaleX = image.naturalWidth / image.width;
            const scaleY = image.naturalHeight / image.height;
            const ctx = canvas.getContext('2d');
            const pixelRatio = window.devicePixelRatio;

            canvas.width = crop.width * pixelRatio * scaleX;
            canvas.height = crop.height * pixelRatio * scaleY;

            ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            ctx.imageSmoothingQuality = 'high';

            ctx.drawImage(
                image,
                crop.x * scaleX,
                crop.y * scaleY,
                crop.width * scaleX,
                crop.height * scaleY,
                0,
                0,
                crop.width * scaleX,
                crop.height * scaleY
            )
        }


    }, [completedCrop]);

    const setCroppedImage = () => {
        const file = previewCanvasRef.current.toDataURL('image/jpeg', 1)
        setPhoto(
            {
                file: new File([file], "logo.avif"),
                imagePreviewUrl: file
            }
        )
    }

    return (
        <>
            <ReactCrop
                src={upImg}
                onImageLoaded={onLoad}
                crop={crop}
                onChange={(c) => setCrop(c)}
                onComplete={(c) => setCompletedCrop(c)}
            />
            <div className={styles.containerButtons}>
                <div className={styles.containerButtonsBlock}>
                    <Button size='small' title='Save cropped image'
                            onClick={setCroppedImage}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                    </Button>
                    <Button size='small' title='Cancel' onClick={() => {
                        setIsAble(true)
                    }
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </Button>
                </div>
            </div>
            <div>
                <canvas
                    ref={previewCanvasRef}
                    style={{
                        display: 'none'
                    }}
                />
            </div>
        </>
    );
};