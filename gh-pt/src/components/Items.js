import React, { useState } from 'react';
import stats from '../stats';
import shopItems from '../shop';
import head from '../assets/equip-slots/head.png';
import body from '../assets/equip-slots/body.png';
import legs from '../assets/equip-slots/legs.png';
import hand from '../assets/equip-slots/hand.png';
import small from '../assets/equip-slots/small.png';

export default function Items(props) {
	const [items, setItems] = useState(stats[props.route].items);
	const [shop, setShop] = useState(shopItems);
	const [shopVisible, setShopVisible] = useState({ visible: false });
	let headItems = [],
		bodyItems = [],
		legItems = [],
		handItems = [],
		smallItems = [];

	let headItemsShop = [],
		bodyItemsShop = [],
		legItemsShop = [],
		handItemsShop = [],
		smallItemsShop = [];

	for (let i = 0; i < items.length; i++) {
		for (const item of items[i].name) {
			switch (items[i].type) {
				case 'head':
					headItems.push(item);
					break;
				case 'body':
					bodyItems.push(item);
					break;
				case 'legs':
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

    console.log(headItems.find(name => name !== shop[0].name));
	for (let i = 0; i < shop.length; i++) {
		switch (shop[i].type) {
			case 'head':
                if(!headItems.some(item => item === shop[i].name) && shop[i].available > 0){
                    headItemsShop.push(shop[i]);
                }
				break;
			case 'body':
                if(!bodyItems.some(item => item === shop[i].name) && shop[i].available > 0){
                    bodyItemsShop.push(shop[i]);
                }
				break;
			case 'legs':
                if(!legItems.some(item => item === shop[i].name) && shop[i].available > 0){
                    legItemsShop.push(shop[i]);
                }
				break;
			case 'hand':
                if(!handItems.some(item => item === shop[i].name) && shop[i].available > 0){
                    handItemsShop.push(shop[i]);
                }
				break;
			case 'small':
                if(!smallItems.some(item => item === shop[i].name) && shop[i].available > 0){
                    smallItemsShop.push(shop[i]);
                }
				break;
		}
    }

	if (!shopVisible.visible) {
		return (
			<>
				<h3 className='modal-header'>Items</h3>
				<div>
					{headItems.length > 0 && <img src={head} className='item-logo' />}
					{headItems.map((item, key) => {
						return (
							<>
								<p key={key}>{item}</p>
								{key < headItems.length - 1}
							</>
						);
					})}
					{headItems.length > 0 && <hr />}
					{bodyItems.length > 0 && <img src={body} className='item-logo' />}
					{bodyItems.map((item, key) => {
						return (
							<>
								<p key={key}>{item}</p>
								{key < bodyItems.length - 1}
							</>
						);
					})}
					{bodyItems.length > 0 && <hr />}
					{legItems.length > 0 && <img src={legs} className='item-logo' />}
					{legItems.map((item, key) => {
						return (
							<>
								<p key={key}>{item}</p>
								{key < legItems.length - 1}
							</>
						);
					})}
					{legItems.length > 0 && <hr />}
					{handItems.length > 0 && <img src={hand} className='item-logo' />}
					{handItems.map((item, key) => {
						return (
							<>
								<p key={key}>{item}</p>
								{key < handItems.length - 1}
							</>
						);
					})}
					{handItems.length > 0 && <hr />}
					{smallItems.length > 0 && <img src={small} className='item-logo' />}
					{smallItems.map((item, key) => {
						return (
							<>
								<p key={key}>{item}</p>
								{key < smallItems.length - 1}
							</>
						);
					})}

					<button
						className='additem'
						onClick={() => {
							setShopVisible({ visible: true });
						}}
					>
						Add Item
					</button>
				</div>
			</>
		);
	} else {
		console.log(shopItems);
		return (
			<>
				<h3 className='modal-header'>Items</h3>
				<div>
					{headItemsShop.length > 0 && <img src={head} className='item-logo' />}
					{headItemsShop.map((item, key) => {
						return (
							<div className='shop-row'>
									<input
										type='checkbox'
										className='checkbox'
										perk={`${key}`}
										key={key}
									/>
									<p key={key}>{item.name} - {item.cost} Gold</p>
								</div>
						);
					})}
					{headItemsShop.length > 0 && <hr />}
					{bodyItemsShop.length > 0 && <img src={body} className='item-logo' />}
					{bodyItemsShop.map((item, key) => {
						return (
							<div className='shop-row'>
									<input
										type='checkbox'
										className='checkbox'
										perk={`${key}`}
										key={key}
									/>
									<p key={key}>{item.name} - {item.cost} Gold</p>
								</div>
						);
					})}
					{bodyItemsShop.length > 0 && <hr />}
					{legItemsShop.length > 0 && <img src={legs} className='item-logo' />}
					{legItemsShop.map((item, key) => {
						return (
							<>
								<div className='shop-row'>
									<input
										type='checkbox'
										className='checkbox'
										perk={`${key}`}
										key={key}
									/>
									<p key={key}>{item.name} - {item.cost} Gold</p>
								</div>
							</>
						);
					})}
					{legItemsShop.length > 0 && <hr />}
					{handItemsShop.length > 0 && <img src={hand} className='item-logo' />}
					{handItemsShop.map((item, key) => {
						return (
							<div className='shop-row'>
									<input
										type='checkbox'
										className='checkbox'
										perk={`${key}`}
										key={key}
									/>
									<p key={key}>{item.name} - {item.cost} Gold</p>
								</div>
						);
					})}
					{handItemsShop.length > 0 && <hr />}
					{smallItemsShop.length > 0 && <img src={small} className='item-logo' />}
					{smallItemsShop.map((item, key) => {
						return (
							<div className='shop-row'>
									<input
										type='checkbox'
										className='checkbox'
										perk={`${key}`}
										key={key}
									/>
									<p key={key}>{item.name} - {item.cost} Gold</p>
								</div>
						);
					})}
					<button
						className='additem'
						onClick={() => {
							setShopVisible({ visible: false });
						}}
					>
						Add Items
					</button>
				</div>
			</>
		);
	}
}
