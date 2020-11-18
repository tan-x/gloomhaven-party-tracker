import React, { useState, useContext, useEffect } from 'react';
import firebase from '../Firebase';
import StatContext from '../Context';
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';
import head from '../assets/equip-slots/head.png';
import body from '../assets/equip-slots/body.png';
import legs from '../assets/equip-slots/legs.png';
import hand from '../assets/equip-slots/hand.png';
import small from '../assets/equip-slots/small.png';

export default function Items(props) {
	const statContext = useContext(StatContext);
	const [items] = useState(statContext[0][props.route].items);
	const [shop] = useState(statContext[8].shop);
	const [target, setTarget] = useState('');
	const [options, setOptions] = useState([]);
	const [cart, setCart] = useState({ myCart: [], total: 0, nsf: false });
	const [shopVisible, setShopVisible] = useState({ visible: false });
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
	
	useEffect(() => {
		console.log(items);
		const tradeOptions = [];
		const statsRef = statContext[0];
		for (const char in statsRef) {
			if (char !== props.route && tradeOptions.length === 0) {
				setTarget(char);
				console.log(char);
			}
			if (char !== props.route && statsRef[char].inParty === true) {
				tradeOptions.push(<option>{statsRef[char].class}</option>);
			}
		}
		if (tradeOptions.length === 0) {
			setTarget('');
			tradeOptions.push(<option>None</option>);
		}
		setOptions(tradeOptions);
	}, [])

	// firebase.firestore().collection('template').doc(props.route).update(statContext[0][props.route]);

	for (const item in items) {
		switch (item) {
			case 'head':
				items[item].forEach(el => headItems.push(el));
				break;
			case 'body':
				items[item].forEach(el => bodyItems.push(el));
				break;
			case 'legs':
				items[item].forEach(el => legItems.push(el));
				break;
			case 'hand':
				items[item].forEach(el => handItems.push(el));
				break;
			case 'small':
				items[item].forEach(el => smallItems.push(el));
				break;
			default:
				console.log('uh oh');
		}
	}

	for (let i = 0; i < shop.length; i++) {
		switch (shop[i].type) {
			case 'head':
				if (!headItems.some((item) => item.name === shop[i].name) && shop[i].available > 0) {
					headItemsShop.push(shop[i]);
				}
				break;
			case 'body':
				if (!bodyItems.some((item) => item.name === shop[i].name) && shop[i].available > 0) {
					bodyItemsShop.push(shop[i]);
				}
				break;
			case 'legs':
				if (!legItems.some((item) => item.name === shop[i].name) && shop[i].available > 0) {
					legItemsShop.push(shop[i]);
				}
				break;
			case 'hand':
				if (!handItems.some((item) => item.name === shop[i].name) && shop[i].available > 0) {
					handItemsShop.push(shop[i]);
				}
				break;
			case 'small':
				if (!smallItems.some((item) => item.name === shop[i].name) && shop[i].available > 0) {
					smallItemsShop.push(shop[i]);
				}
				break;
			default:
				console.log('uh oh');
		}
	}

	function addItem(e) {
		if (shopVisible.visible === 'buy') {
			if (e.target.checked) {
				// update total of cart
				setCart({ ...cart, total: (cart.total += shop[e.target.id].cost) });
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
		} else if (shopVisible.visible === 'trade') {
			if (e.target.checked) {
				// create new cart copy
				let newItem = cart.myCart;
				// push item to cart array
				newItem.push(shop[e.target.id]);
				// setCart to new copy of cart with added item
				setCart({ ...cart, myCart: newItem });
			} else {
				// create new cart copy
				let deleteItem = cart.myCart;
				// splice item from cart, finding matching name to event target name attr
				let spliceIndex = deleteItem.findIndex((el) => shop[e.target.id].name == el.name);
				deleteItem.splice(spliceIndex, 1);
				setCart({ ...cart, myCart: deleteItem });
			}
		} else if (shopVisible.visible === 'sell') {
			if (e.target.checked) {
				// update total of cart
				setCart({ ...cart, total: (cart.total += (Math.round(shop[e.target.id].cost / 2))) });
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
				setCart({ ...cart, total: (cart.total -= (Math.round(shop[e.target.id].cost / 2))) });
				// create new cart copy
				let deleteItem = cart.myCart;
				// splice item from cart, finding matching name to event target name attr
				let spliceIndex = deleteItem.findIndex((el) => shop[e.target.id].name == el.name);
				deleteItem.splice(spliceIndex, 1);
			}
		}
	}

	function buyItems() {
		// if cart total is less than player's gold
		if (cart.total <= statContext[0][props.route].gold) {
			// create new copy of stats
			const newStats = Object.assign({}, statContext[0]);
			const newItems = Object.assign({}, statContext[8]);
			// for each item in cart, push it's name(string) to player's item object in the corresponding type array
			cart.myCart.forEach((item) => {
				newStats[props.route].items[item.type].push(item);
				newItems.shop[item.id].available -= 1;
			})
			// subtract cart total from player's gold
			newStats[props.route].gold -= cart.total;
			// set context to new stats
			statContext[1](newStats);
			statContext[9](newItems);
			// reset cart to empty array
			setCart({ ...cart, myCart: [], total: 0 });
			firebase
				.firestore()
				.collection(statContext[4][0])
				.doc(props.route)
				.update(newStats[props.route]);
			firebase
				.firestore()
				.collection(statContext[4][0])
				.doc('items')
				.update({shop: newItems.shop});
			setShopVisible({ visible: false });
		} else {
			// if cart total is greater than player's gold, alert them
			setCart({ nsf: true });
			setTimeout(() => setCart({ nsf: false }), 2000);
		}
	}

	const tradeItem = () => {
		if (cart.myCart !== [] && target !== '') {
			const targetItems = statContext[0][target];
			const traderItems = statContext[0][props.route];
			cart.myCart.forEach(item => {
				console.log(item.id)
				targetItems.items[item.type].forEach(el => {
					console.log(el.id)
				})
				console.log(targetItems.items[item.type].some(i => i.id !== item.id))
				console.log(targetItems.items[item.type].length === 0)
				// check to see if target already has chosen item
				if (targetItems.items[item.type].some(i => i.name !== item.name) || targetItems.items[item.type].length === 0) {
					targetItems.items[item.type].push(item);
					let removeIndex = traderItems.items[item.type].findIndex((el) => el.name === item.name);
					traderItems.items[item.type].splice(removeIndex, 1);
				} else {
					window.alert(`${target.charAt(0).toUpperCase() + target.slice(1)} already has ${item.name}`)
				}
			})
			setCart({ ...cart, myCart: []});
			statContext[1]({...statContext[0], [target]: targetItems, [props.route]: traderItems})
			firebase
				.firestore()
				.collection(statContext[4][0])
				.doc(props.route)
				.update(traderItems);
			firebase
				.firestore()
				.collection(statContext[4][0])
				.doc(target)
				.update(targetItems);
		}
		setShopVisible({ visible: false });
	};

	const sellItem = () => {
			// create new copy of stats
			const newStats = Object.assign({}, statContext[0]);
			const newItems = Object.assign({}, statContext[8]);
			// for each item in cart, push it's name(string) to player's item object in the corresponding type array
			cart.myCart.forEach((item) => {
				let deleteIndex = newStats[props.route].items[item.type].findIndex((el) => el.name === item.name);
				newStats[props.route].items[item.type].splice(deleteIndex, 1);
				newItems.shop[item.id].available += 1;
			})
			// subtract cart total from player's gold
			newStats[props.route].gold += cart.total;
			// set context to new stats
			statContext[1](newStats);
			statContext[9](newItems);
			// reset cart to empty array
			setCart({ ...cart, myCart: [], total: 0 });
			firebase
				.firestore()
				.collection(statContext[4][0])
				.doc(props.route)
				.update(newStats[props.route]);
			firebase
				.firestore()
				.collection(statContext[4][0])
				.doc('items')
				.update({shop: newItems.shop});
			setShopVisible({ visible: false });
	}

	if (!shopVisible.visible) {
		let totalItems =
			headItems.length + bodyItems.length + legItems.length + handItems.length + smallItems.length;
		if (totalItems === 0) {
			return (
				<>
					<h2 className='modal-header'>Items</h2>
					<div>
						<p>No Items in inventory!</p>
						<button
							className='additem'
							onClick={() => {
								setShopVisible({ visible: 'buy' });
							}}
						>
							Shop
						</button>
					</div>
				</>
			);
		}
		return (
			<>
				<h2 className='modal-header'>Items</h2>
				<div>
					{headItems.length > 0 && <img src={head} className='item-logo' alt='head' />}
					{headItems.map((item, key) => {
						return (
							<div key={key} className='shop-row'>
								<p key={key}>{item.name}</p>
							</div>
						);
					})}
					{headItems.length > 0 && <hr />}
					{bodyItems.length > 0 && <img src={body} className='item-logo' alt='body' />}
					{bodyItems.map((item, key) => {
						return (
							<div key={key} className='shop-row'>
								<p key={key}>{item.name}</p>
							</div>
						);
					})}
					{bodyItems.length > 0 && <hr />}
					{legItems.length > 0 && <img src={legs} className='item-logo' alt='legs' />}
					{legItems.map((item, key) => {
						return (
							<div key={key} className='shop-row'>
								<p key={key}>{item.name}</p>
							</div>
						);
					})}
					{legItems.length > 0 && <hr />}
					{handItems.length > 0 && <img src={hand} className='item-logo' alt='hand' />}
					{handItems.map((item, key) => {
						return (
							<div key={key} className='shop-row'>
								<p key={key}>{item.name}</p>
							</div>
						);
					})}
					{handItems.length > 0 && <hr />}
					{smallItems.length > 0 && <img src={small} className='item-logo' alt='small' />}
					{smallItems.map((item, key) => {
						return (
							<div key={key} className='shop-row'>
								<p key={key}>{item.name}</p>
							</div>
						);
					})}

					<button
						className='additem'
						onClick={() => {
							setShopVisible({ visible: 'buy' });
						}}
					>
						Shop
					</button>
					{target && <button
						className='additem'
						onClick={() => {
							setShopVisible({ visible: 'trade' });
						}}
					>
						Trade
					</button>}
					{totalItems > 0 && <button
						className='additem'
						onClick={() => {
							setShopVisible({ visible: 'sell' });
						}}
					>
						Sell
					</button>}
				</div>
			</>
		);
	} else if (shopVisible.visible === 'buy') {
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
					<option value='legs'>Leg Items</option>
					<option value='hand'>Hand Items</option>
					<option value='small'>Small Items</option>
				</select>
				<div>
					{itemType.selectValue === 'head' &&
						(headItemsShop.length > 0 ? (
							<img src={head} className='item-logo' alt='head' />
						) : (
							<p>No head items available!</p>
						))}
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
					{itemType.selectValue === 'body' &&
						(bodyItemsShop.length > 0 ? (
							<img src={body} className='item-logo' alt='body' />
						) : (
							<p>No body items available!</p>
						))}
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
					{itemType.selectValue === 'legs' &&
						(legItemsShop.length > 0 ? (
							<img src={legs} className='item-logo' alt='legs' />
						) : (
							<p>No leg items available!</p>
						))}
					{itemType.selectValue === 'legs' &&
						legItemsShop.map((item, key) => {
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
					{itemType.selectValue === 'hand' &&
						(handItemsShop.length > 0 ? (
							<img src={hand} className='item-logo' alt='hand' />
						) : (
							<p>No hand items available!</p>
						))}
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
					{itemType.selectValue === 'small' &&
						(smallItemsShop.length > 0 ? (
							<img src={small} className='item-logo' alt='small' />
						) : (
							<p>No small items available!</p>
						))}
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
						{cart.nsf === true && (
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
						Buy
					</button>
				</div>
			</>
		);
	} else if (shopVisible.visible === 'trade') {
		return (
			<>
				<h2 className='modal-header'>Items</h2>
				<div>
					{headItems.length > 0 && <img src={head} className='item-logo' alt='head' />}
					{headItems.map((item, key) => {
						return (
							<>
								<div key={key} className='shop-row'>
									<Fade left>
										<input
											type='checkbox'
											className='checkbox'
											name='head'
											id={item.id}
											onChange={(e) => addItem(e)}
										/>
									</Fade>
									<p key={key}>{item.name}</p>
								</div>
							</>
						);
					})}
					{headItems.length > 0 && <hr />}
					{bodyItems.length > 0 && <img src={body} className='item-logo' alt='body' />}
					{bodyItems.map((item, key) => {
						return (
							<>
								<div key={key} className='shop-row'>
									<Fade left>
										<input
											type='checkbox'
											className='checkbox'
											id={item.id}
											name='body'
											onChange={(e) => addItem(e)}
										/>
									</Fade>
									<p key={10 + key}>{item.name}</p>
								</div>
							</>
						);
					})}
					{bodyItems.length > 0 && <hr />}
					{legItems.length > 0 && <img src={legs} className='item-logo' alt='legs' />}
					{legItems.map((item, key) => {
						return (
							<>
								<div key={key} className='shop-row'>
									<Fade left>
										<input
											type='checkbox'
											className='checkbox'
											id={item.id}
											name='legs'
											onChange={(e) => addItem(e)}
										/>
									</Fade>
									<p key={20 + key}>{item.name}</p>
								</div>
							</>
						);
					})}
					{legItems.length > 0 && <hr />}
					{handItems.length > 0 && <img src={hand} className='item-logo' alt='hand' />}
					{handItems.map((item, key) => {
						return (
							<>
								<div key={key} className='shop-row'>
									<Fade left>
										<input
											type='checkbox'
											className='checkbox'
											id={item.id}
											name='hand'
											onChange={(e) => addItem(e)}
										/>
									</Fade>
									<p key={30 + key}>{item.name}</p>
								</div>
							</>
						);
					})}
					{handItems.length > 0 && <hr />}
					{smallItems.length > 0 && <img src={small} className='item-logo' alt='small' />}
					{smallItems.map((item, key) => {
						return (
							<>
								<div key={key} className='shop-row'>
									<Fade left>
										<input
											type='checkbox'
											className='checkbox'
											id={item.id}
											name='small'
											onChange={(e) => addItem(e)}
										/>
									</Fade>
									<p key={40 + key}>{item.name}</p>
								</div>
							</>
						);
					})}
					<select
						name='type'
						id='trade-filter'
						onChange={(e) => {
							let newTar = e.target.value.toLowerCase();
							if (newTar === 'red guard') {
								newTar = 'redGuard';
							}
							setTarget(newTar);
						}}
					>
						{options}
					</select>
					<br />
					<button
						className='additem'
						onClick={() => {
							tradeItem();
						}}
					>
						Trade
					</button>
				</div>
			</>
		);
	} else if (shopVisible.visible === 'sell') {
		return (
			<>
				<h2 className='modal-header'>Items</h2>
				<div>
					{headItems.length > 0 && <img src={head} className='item-logo' alt='head' />}
					{headItems.map((item, key) => {
						return (
							<>
								<div key={key} className='shop-row'>
									<Fade left>
										<input
											type='checkbox'
											className='checkbox'
											name='head'
											id={item.id}
											onChange={(e) => addItem(e)}
										/>
									</Fade>
									<p key={key}>{item.name} - {Math.round(item.cost / 2)}</p>
								</div>
							</>
						);
					})}
					{headItems.length > 0 && <hr />}
					{bodyItems.length > 0 && <img src={body} className='item-logo' alt='body' />}
					{bodyItems.map((item, key) => {
						console.log(item);
						return (
							<>
								<div key={key} className='shop-row'>
									<Fade left>
										<input
											type='checkbox'
											className='checkbox'
											id={item.id}
											name='body'
											onChange={(e) => addItem(e)}
										/>
									</Fade>
									<p key={10 + key}>{item.name} - {Math.round(item.cost / 2)}</p>
								</div>
							</>
						);
					})}
					{bodyItems.length > 0 && <hr />}
					{legItems.length > 0 && <img src={legs} className='item-logo' alt='legs' />}
					{legItems.map((item, key) => {
						return (
							<>
								<div key={key} className='shop-row'>
									<Fade left>
										<input
											type='checkbox'
											className='checkbox'
											id={item.id}
											name='legs'
											onChange={(e) => addItem(e)}
										/>
									</Fade>
									<p key={20 + key}>{item.name} - {Math.round(item.cost / 2)}</p>
								</div>
							</>
						);
					})}
					{legItems.length > 0 && <hr />}
					{handItems.length > 0 && <img src={hand} className='item-logo' alt='hand' />}
					{handItems.map((item, key) => {
						return (
							<>
								<div key={key} className='shop-row'>
									<Fade left>
										<input
											type='checkbox'
											className='checkbox'
											id={item.id}
											name='hand'
											onChange={(e) => addItem(e)}
										/>
									</Fade>
									<p key={30 + key}>{item.name} - {Math.round(item.cost / 2)}</p>
								</div>
							</>
						);
					})}
					{handItems.length > 0 && <hr />}
					{smallItems.length > 0 && <img src={small} className='item-logo' alt='small' />}
					{smallItems.map((item, key) => {
						return (
							<>
								<div key={key} className='shop-row'>
									<Fade left>
										<input
											type='checkbox'
											className='checkbox'
											id={item.id}
											name='small'
											onChange={(e) => addItem(e)}
										/>
									</Fade>
									<p key={40 + key}>{item.name} - {Math.round(item.cost / 2)}</p>
								</div>
							</>
						);
					})}
					<button
						className='additem'
						onClick={() => {
							sellItem();
						}}
					>
						Sell
					</button>
				</div>
			</>
		);
	}
}
