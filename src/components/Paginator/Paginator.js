import React, { useState } from 'react'
import './Paginator.css'

export const Paginator = (props) => {
    let pageCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages[i] = i;
    }

    let portionCount = Math.ceil(pageCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    return (
        <div>
            {portionNumber >= 1 && <button onClick={ () => {setPortionNumber(portionNumber-1)}} disabled={portionNumber === 1 ? true : false}>PREV</button>}
            {pages
                .filter(p => p>= leftPortionPageNumber && p<= rightPortionPageNumber)
                .map((p) => {
                    return <span className={props.currentPage===p && "selected-page"} onClick={() => {props.onSetPage(p)}}>{p}</span>    

                })
            }
            {portionCount >= portionNumber && <button onClick={ () => {setPortionNumber(portionNumber+1)}} disabled={portionCount === portionNumber ? true : false}>NEXT</button>}
        </div>
    )
}

export default Paginator;