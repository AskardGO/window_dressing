import React, {CSSProperties} from 'react';
import {TemplateElement} from "../Elements";


export const TemplateBlock = ({t, wasEdited, blockIndex, updateBlock}:any) => {

    const updateData = (data: string, index: number) => {
        t.data[index].value = data
        updateBlock(t.data, blockIndex)
    }

    const style = (t:any):CSSProperties => {
        return {
            position: 'absolute',
            transform: `translate(${t.position.x}px, ${t.position.y}px)`,
            width: '80%'
        }
    };

    return (
        <div style={style(t)}>
            {
                t.data.map((el: any, index: number) => <TemplateElement key={el.type + index} data={el}
                                                                        updateData={updateData}
                                                                        index={index}
                                                                        setEdited={wasEdited}/>)
            }
        </div>
    );
};