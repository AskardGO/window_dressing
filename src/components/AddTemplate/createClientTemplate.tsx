import React, {useEffect, useState} from 'react';
import {getTemplates} from "../../services/TemplateService";
import {Link} from "react-router-dom";
import {TemplateScrollList} from "./templateScrollList";
import classNames from './CreateTemplate.module.sass'
import {Affix} from "antd";

export const ClientTemplate = (props: any) => {

    const container = React.useRef(null)
    const [templates, setTemplates] = useState<any>([])
    const [templatesPhoto, setTemplatesPhoto] = useState([1, 2, 3, 4])

    useEffect(() => {
        (async () => {
            const templates = await getTemplates()
            if (templates[0]) {
                setTemplates(templates[0].data.data)
            }
        })()
    }, [props])

    useEffect(() => {
        console.log(templates)
    })

    const elements = (templates: any) => {
        return templates.map(
            (t: any) => {
                const element = t.data.map((el: any) => {
                        console.log(el.value)
                        return (
                            <div>
                                {el.value}
                            </div>
                        )
                    }
                )
                console.log(element)
                const styles = {
                    transform: `translate(${t.position.x}px, ${t.position.y}px)`
                };
                return (
                    <div className='absolute' style={styles}>
                        {element}
                    </div>
                )
            }
        )
    }

    const tableElement = (elements: any) => {

        const styles = {
            th: {
                border: '1px solid #eee'
            }
        }

        const theadElements = ['Description', 'HRS/QTY', 'Rate', 'Amount']
        const tbodyElements = ['description', '70', '50', '75']
        const tableElements = (arr: any) => {
            return arr.map(
                (el: any) => <td className='border'> {el} </td>
            )
        }

        return (
            <>
                <table className='w-full'>
                    <thead>
                    <tr className='font-semibold bg-gray-500' style={styles.th}>
                        {tableElements(theadElements)}
                    </tr>
                    </thead>
                    <tbody>
                    <tr className=''>
                        {tableElements(tbodyElements)}
                    </tr>
                    </tbody>


                </table>
                <div className='elements__paper-total'>
                    <span className='total__title'> Total </span>
                    <span className='total_var'> {elements.total} {elements.currency} </span>
                </div>
            </>
        )
    }

    return (
        templates.length ?
            <>
                <div ref={container}>
                    <Affix offsetTop={10} target={() => container.current}>
                        <Link to={'/'} className='absolute left-3 pt-3 z-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/>
                            </svg>
                        </Link>
                    </Affix>
                    <div className={classNames.container}>
                        <TemplateScrollList array={templatesPhoto}/>
                        <div className={classNames.containerPaper}>
                            <div className={classNames.containerPaperContent}>
                                <div> {templates[0].description} </div>
                                {tableElement(templates[0])}
                                {/*{elements(templates[0].Template)}*/}
                            </div>
                        </div>
                    </div>

                </div>
            </> : <div className='flex justify-self-center self-center'> No data </div>
    );
};