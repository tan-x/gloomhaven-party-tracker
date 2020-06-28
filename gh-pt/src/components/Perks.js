import React, { useState } from 'react';
import stats from '../stats';

export default function Perks(props) {
    const [perks, setPerks] = useState(stats[props.route].perks);

    console.log(perks);
    return (
        <>
            <h3 className='modal-header'>Perks</h3>
            {perks.map((perk, key) => {
                return ( 
                    <div className='perk-row'>
                        <div className='checkboxes'>
                            {perk.checked.map((box, id) => {
                                console.log(box)
                                if (box) {
                                    return (
                                        <input type="checkbox" id={`perk${key}`} checked={perks[key].checked}></input>
                                        // setPerks([...perks, perks[key].checked[id] = !perks[key].checked[id]])
                                    )
                                } else {
                                    return (
                                        <input type="checkbox" id={`perk${key}`}></input>
                                    )
                                }
                            })}
                        </div>
                        {/* <input type="checkbox" id={`perk${key}`} checked={perks[key].checked}></input> */}
                        <p className="perk-text">{perk.text}</p>
                    </div>
                )
            })}
        </>
    )
}