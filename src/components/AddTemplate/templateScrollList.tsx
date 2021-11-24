import React, {useEffect, useState} from 'react';
import styles from './CreateTemplate.module.sass'

type Props = {
    array: any[]
};
export const TemplateScrollList = ({array}:Props) => {

    const [selected, setSelected] = useState(0)

    const TemplatePaper = ({element, index}:any) => {

        useEffect(() => {
            console.log(index)
        })

        return(
            <div className=''>
                <div className='flex relative bg-gray-500 w-32 h-52 justify-center justify-self-center items-center m-5' onClick={() => {setSelected(index)}}>
                    {element}
                    {(index === selected) &&
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute bottom-0 right-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    }
                </div>

            </div>

        )
    }

    return (
        <div className={styles.scroll}>
            {
                array.length && array.map((el, index) => <TemplatePaper element={el} index={index}/>)
            }
        </div>
    );
};