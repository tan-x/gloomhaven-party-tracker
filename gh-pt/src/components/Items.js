import React, { useState } from 'react';
import stats from '../stats';
import icon from '../assets/class-icons/07 Sun.png'

export default function Items(props) {
	const [items, setitems] = useState(stats[props.route].items);
	var itemNames = items.map((item) => {
		return item.name.map(name => name);
    });
    itemNames = itemNames.flat();
    console.log(itemNames);
	return (
		<>
			<h3 className='modal-header'>Items</h3>
			<div>
				{itemNames.map((item, key) => {
                        return (
                            <>
                                <img src={icon} className="header-class-logo"/>
                                <p key={key}>{item}</p>
                                {key < itemNames.length -1 && <hr />}
                            </>
                        );
                    })}
			</div>
		</>
	);
}
