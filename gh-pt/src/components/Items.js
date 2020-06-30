import React, { useState } from 'react';
import stats from '../stats';
import head from '../assets/equip-slots/head.png';
import body from '../assets/equip-slots/body.png';
import legs from '../assets/equip-slots/legs.png';
import hand from '../assets/equip-slots/hand.png';
import small from '../assets/equip-slots/small.png';


export default function Items(props) {
    const [items, setItems] = useState(stats[props.route].items);
    const [shop, setShop] = useState({visible: false});
    let headItems = [], bodyItems = [], legItems = [], handItems = [], smallItems = [];
    
    for (let i=0; i<items.length; i++) {
        for (const item of items[i].name) {
            switch (items[i].type) {
                case 'head':
                    headItems.push(item);
                    break;
                case 'body':
                    bodyItems.push(item);
                    break;
                case 'leg':
                    legItems.push(item);
                    break;
                case 'hand':
                    handItems.push(item);
                    break;
                case 'small':
                    smallItems.push(item);
                    break;
            }
        }
    }

    switch (shop.visible) {
        case false:
            return (
                <>
                    <h3 className='modal-header'>Items</h3>
                    <div>
                        {headItems.length > 0 && <img src={head} className="item-logo"/>}
                        {headItems.map((item, key) => {
                                return (
                                    <>
                                        <p key={key}>{item}</p>
                                        {key < headItems.length -1}
                                    </>
                                );
                            })}
                        {headItems.length > 0 && <hr />}
                        {bodyItems.length > 0 && <img src={body} className="item-logo"/>}
                        {bodyItems.map((item, key) => {
                                return (
                                    <>
                                        <p key={key}>{item}</p>
                                        {key < bodyItems.length -1}
                                    </>
                                );
                            })}
                        {bodyItems.length > 0 && <hr />}
                        {legItems.length > 0 && <img src={legs} className="item-logo"/>}
                        {legItems.map((item, key) => {
                                return (
                                    <>
                                        <p key={key}>{item}</p>
                                        {key < legItems.length -1}
                                    </>
                                );
                            })}
                        {legItems.length > 0 && <hr />}
                        {handItems.length > 0 && <img src={hand} className="item-logo"/>}
                        {handItems.map((item, key) => {
                                return (
                                    <>
                                        <p key={key}>{item}</p>
                                        {key < handItems.length -1}
                                    </>
                                );
                            })}
                        {handItems.length > 0 && <hr />}
                        {smallItems.length > 0 && <img src={small} className="item-logo"/>}
                        {smallItems.map((item, key) => {
                                return (
                                    <>
                                        <p key={key}>{item}</p>
                                        {key < smallItems.length -1}
                                    </>
                                );
                            })}
                            
                    <button className="additem" onPress={setShop({visible: true})}>Add Item</button>
                    </div>
                </>
            );
        case true:
            return (
                <>
                    <h3 className='modal-header'>Items</h3>
                </>
            );
    }
}
