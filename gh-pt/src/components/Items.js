import React, { useState, useContext } from 'react';
import firebase from '../Firebase';
import StatContext from '../Context';
import Jump from 'react-reveal/Jump';
import shopJSON from '../data/shop.json';
import head from '../assets/equip-slots/head.png';
import body from '../assets/equip-slots/body.png';
import legs from '../assets/equip-slots/legs.png';
import hand from '../assets/equip-slots/hand.png';
import small from '../assets/equip-slots/small.png';

export default function Items(props) {
	const statContext = useContext(StatContext);
	const [items] = useState(statContext[0][props.route].items);
	const [shop] = useState(shopJSON);
	// const [total, setTotal] = useState({total: 0})
	const [cart, setCart] = useState({ myCart: [], total: 0 });
	const [shopVisible, setShopVisible] = useState({ visible: false, nsf: false });
	const [itemType, setItemType] = useState({ selectValue: 'head' });
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

	// firebase.firestore().collection('template').doc(props.route).update(statContext[0][props.route]);

	for (const item in items) {
		switch (item) {
			case 'head':
				headItems = headItems.concat(items[item]);
				break;
			case 'body':
				bodyItems = bodyItems.concat(items[item]);
				break;
			case 'legs':
				legItems = legItems.concat(items[item]);
				break;
			case 'hand':
				handItems = handItems.concat(items[item]);
				break;
			case 'small':
				smallItems = smallItems.concat(items[item]);
				break;
			default:
				console.log('uh oh');
		}
	}

	for (let i = 0; i < shop.length; i++) {
		switch (shop[i].type) {
			case 'head':
				if (!headItems.some((item) => item === shop[i].name) && shop[i].available > 0) {
					headItemsShop.push(shop[i]);
				}
				break;
			case 'body':
				if (!bodyItems.some((item) => item === shop[i].name) && shop[i].available > 0) {
					bodyItemsShop.push(shop[i]);
				}
				break;
			case 'legs':
				if (!legItems.some((item) => item === shop[i].name) && shop[i].available > 0) {
					legItemsShop.push(shop[i]);
				}
				break;
			case 'hand':
				if (!handItems.some((item) => item === shop[i].name) && shop[i].available > 0) {
					handItemsShop.push(shop[i]);
				}
				break;
			case 'small':
				if (!smallItems.some((item) => item === shop[i].name) && shop[i].available > 0) {
					smallItemsShop.push(shop[i]);
				}
				break;
			default:
				console.log('uh oh');
		}
	}

	function addItem(e) {
		if (e.target.checked) {
			// update total of cart
			setCart({ ...cart, cart: (cart.total += shop[e.target.id].cost) });
			// create new cart copy
			let newItem = cart.myCart;
			// push item to cart array
			newItem.push(shop[e.target.id]);
			// change id of item
			// newItem[newItem.length - 1] = {...newItem[newItem.length - 1], id: newItem[newItem.length - 1].id};
			// setCart to new copy of cart with added item
			setCart({ ...cart, myCart: newItem });
		} else {
			// update total of cart when unchecking
			setCart({ ...cart, total: (cart.total -= shop[e.target.id].cost) });
			// create new cart copy
			let deleteItem = cart.myCart;
			// splice item from cart, finding matching name to event target name attr
			let spliceIndex = deleteItem.findIndex((el) => shop[e.target.id].name == el.name);
			deleteItem.splice(spliceIndex, 1);
		}
	}

	function buyItems() {
		// if cart total is less than player's gold
		if (cart.total <= statContext[0][props.route].gold) {
			// create new copy of stats
			console.log(statContext[0][props.route].gold);
			const newStats = Object.assign({}, statContext[0]);
			// for each item in cart, push it's name(string) to player's item object in the corresponding type array
			cart.myCart.forEach((item) => newStats[props.route].items[item.type].push(item.name));
			// subtract cart total from player's gold
			newStats[props.route].gold -= cart.total;
			// set context to new stats
			statContext[1](newStats);
			// reset cart to empty array
			setCart({ ...cart, myCart: [], total: 0 });
			firebase
				.firestore()
				.collection(statContext[4][0])
				.doc(props.route)
				.update(newStats[props.route]);
			setShopVisible({ ...shopVisible, visible: false });
		} else {
			// if cart total is greater than player's gold, alert them
			setShopVisible({ ...shopVisible, nsf: true });
			setTimeout(() => setShopVisible({ ...shopVisible, nsf: false }), 2000);
		}
	}

	if (!shopVisible.visible) {
		return (
			<>
				<h2 className='modal-header'>Items</h2>
				<div>
					{headItems.length > 0 && <img src={head} className='item-logo' alt='head' />}
					{headItems.map((item, key) => {
						return (
							<>
								<p key={key}>{item}</p>
								{key < headItems.length - 1}
							</>
						);
					})}
					{headItems.length > 0 && <hr />}
					{bodyItems.length > 0 && <img src={body} className='item-logo' alt='body' />}
					{bodyItems.map((item, key) => {
						return (
							<>
								<p key={10 + key}>{item}</p>
								{key < bodyItems.length - 1}
							</>
						);
					})}
					{bodyItems.length > 0 && <hr />}
					{legItems.length > 0 && <img src={legs} className='item-logo' alt='legs' />}
					{legItems.map((item, key) => {
						return (
							<>
								<p key={20 + key}>{item}</p>
								{key < legItems.length - 1}
							</>
						);
					})}
					{legItems.length > 0 && <hr />}
					{handItems.length > 0 && <img src={hand} className='item-logo' alt='hand' />}
					{handItems.map((item, key) => {
						return (
							<>
								<p key={30 + key}>{item}</p>
								{key < handItems.length - 1}
							</>
						);
					})}
					{handItems.length > 0 && <hr />}
					{smallItems.length > 0 && <img src={small} className='item-logo' alt='small' />}
					{smallItems.map((item, key) => {
						return (
							<>
								<p key={40 + key}>{item}</p>
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
		return (
			<>
				<h2 className='modal-header'>Items</h2>
				<select
					name='type'
					id='shop-filter'
					onChange={(e) => {
						setItemType({ ...itemType, selectValue: e.target.value });
						setCart({ ...cart, total: 0 });
					}}
				>
					<option value='head'>Head Items</option>
					<option value='body'>Body Items</option>
					<option value='legs'>Legs Items</option>
					<option value='hand'>Hand Items</option>
					<option value='small'>Small Items</option>
				</select>
				<div>
					{itemType.selectValue === 'head' && headItemsShop.length > 0 && (
						<img src={head} className='item-logo' alt='head' />
					)}
					{itemType.selectValue === 'head' &&
						headItemsShop.map((item, key) => {
							return (
								<div key={key} className='shop-row'>
									<input
										type='checkbox'
										className='checkbox'
										id={item.id}
										onChange={(e) => addItem(e)}
									/>
									<p>
										{item.name} - {item.cost} Gold
									</p>
								</div>
							);
						})}
					{itemType.selectValue === 'body' && bodyItemsShop.length > 0 && (
						<img src={body} className='item-logo' alt='body' />
					)}
					{itemType.selectValue === 'body' &&
						bodyItemsShop.map((item, key) => {
							return (
								<div key={key} className='shop-row'>
									<input
										type='checkbox'
										className='checkbox'
										id={item.id}
										onChange={(e) => addItem(e)}
									/>
									<p>
										{item.name} - {item.cost} Gold
									</p>
								</div>
							);
						})}
					{itemType.selectValue === 'legs' && legItemsShop.length > 0 && (
						<img src={legs} className='item-logo' alt='legs' />
					)}
					{itemType.selectValue === 'legs' &&
						legItemsShop.map((item, key) => {
							return (
								<div className='shop-row'>
									<input
										type='checkbox'
										className='checkbox'
										id={item.id}
										onChange={(e) => addItem(e)}
									/>
									<p>
										{item.name} - {item.cost} Gold
									</p>
								</div>
							);
						})}
					{itemType.selectValue === 'hand' && handItemsShop.length > 0 && (
						<img src={hand} className='item-logo' alt='hand' />
					)}
					{itemType.selectValue === 'hand' &&
						handItemsShop.map((item, key) => {
							return (
								<div key={key} className='shop-row'>
									<input
										type='checkbox'
										className='checkbox'
										id={item.id}
										onChange={(e) => addItem(e)}
									/>
									<p>
										{item.name} - {item.cost} Gold
									</p>
								</div>
							);
						})}
					{itemType.selectValue === 'small' && smallItemsShop.length > 0 && (
						<img src={small} className='item-logo' alt='small' />
					)}
					{itemType.selectValue === 'small' &&
						smallItemsShop.map((item, key) => {
							return (
								<div key={key} className='shop-row'>
									<input
										type='checkbox'
										className='checkbox'
										id={item.id}
										onChange={(e) => addItem(e)}
									/>
									<p>
										{item.name} - {item.cost} Gold
									</p>
								</div>
							);
						})}
					<div className='lvlbox'>
						{shopVisible.nsf === true && (
							<Jump>
								<h3>Not enough gold!</h3>
							</Jump>
						)}
					</div>
					<h3>{statContext[0][props.route].gold} Gold</h3>
					<button
						className='additem'
						onClick={() => {
							buyItems();
						}}
					>
						Add Items
					</button>
				</div>
			</>
		);
	}
}
