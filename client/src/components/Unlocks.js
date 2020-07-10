import React, { useState, useContext, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import firebase from '../Firebase';
import StatContext from '../Context';

export default function Unlocks(props) {
  const statContext = useContext(StatContext);
  const [unlockView, setUnlockView] = useState('scenario');
  const [rewardType, setRewardType] = useState('shop');
  const [rewardText, setRewardText] = useState('');
  const [rewardNum, setRewardNum] = useState(0);
  const unlocks = statContext[8].unlocks;
  
  useEffect(() => {
	  console.log('test')
    firebase
      .firestore()
      .collection(statContext[4][0])
      .doc('items')
      .get()
      .then((res) => {
        statContext[9](res.data());
      });
  }, []);

  const scenarioArray = [];
  const treasureArray = [];
  const eventArray = [];

  const handleUnlock = (e) => {
    let confirm = window.confirm('Are you sure you want to unlock?');
    if (confirm) {
      e.target.nextSibling.nextSibling.className = 'unlock-text';
      e.target.disabled = true;
      unlockItem(e.target.name, e.target.id);
    } else {
      e.target.checked = false;
    }
  };

  const unlockItem = (type, item) => {
    const newItems = Object.assign({}, statContext[8]);
    const itemRef = newItems.unlocks[type][item];
    newItems.unlocks[type][item].unlocked = true;
    if (itemRef.type === 'shop') {
      for (let i = itemRef.itemNum[0] - 1; i < itemRef.itemNum[1]; i++) {
        newItems.shop[i].available = newItems.shop[i].total;
      }
      setRewardType('shop');
    }
    if (itemRef.type === 'item') {
      if (newItems.shop[itemRef.itemNum - 1].available > 0) {
        newItems.shop[itemRef.itemNum - 1].available -= 1;
      }
      setRewardType('item');
    }
    statContext[9](newItems);
    firebase
      .firestore()
      .collection(statContext[4][0])
      .doc('items')
      .update(newItems);
    setRewardText(itemRef.info);
    setRewardNum(itemRef.itemNum);
    setUnlockView('reward');
  };

  unlocks.scenario.forEach((item, i) => {
    if (!item.unlocked) {
      scenarioArray.push(
        <div className='unlock-row' key={i}>
          <input
            type='checkbox'
            id={i}
            name='scenario'
            onChange={handleUnlock}
            checked={false}
          />
          <span className='unlock-num'>{item.scenario}. </span>
          <p className='unlock-blur unlock-text'>{item.info}</p>
        </div>
      );
    } else {
      scenarioArray.push(
        <div className='unlock-row' key={i}>
          <input type='checkbox' id={i} disabled checked />
          <span className='unlock-num'>{item.scenario}. </span>
          <p className='unlock-text'>{item.info}</p>
        </div>
      );
    }
  });

  unlocks.treasure.forEach((item, i) => {
    if (!item.unlocked) {
      treasureArray.push(
        <div className='unlock-row' key={i}>
          <input
            type='checkbox'
            id={i}
            name='treasure'
            onChange={handleUnlock}
            checked={false}
          />
          <span className='unlock-num'>{item.treasure}. </span>
          <p className='unlock-blur unlock-text'>{item.info}</p>
        </div>
      );
    } else {
      treasureArray.push(
        <div className='unlock-row' key={i}>
          <input type='checkbox' id={i} disabled checked />
          <span className='unlock-num'>{item.treasure}. </span>
          <p className='unlock-text'>{item.info}</p>
        </div>
      );
    }
  });

  unlocks.event.forEach((item, i) => {
    if (!item.unlocked) {
      eventArray.push(
        <div className='unlock-row' key={i}>
          <input
            type='checkbox'
            id={i}
            name='event'
            onChange={handleUnlock}
            checked={false}
          />
          <span className='unlock-num'>{item.event}. </span>
          <p className='unlock-blur unlock-text'>{item.info}</p>
        </div>
      );
    } else {
      eventArray.push(
        <div className='unlock-row' key={i}>
          <input type='checkbox' id={i} disabled checked />
          <span className='unlock-num'>{item.event}. </span>
          <p className='unlock-text'>{item.info}</p>
        </div>
      );
    }
  });

  const addItemToChar = (char, itemNum) => {
    if (char === 'red guard') {
      char = 'redGuard'
    }
    const newChar = Object.assign({}, statContext[0]);
    const itemRef = statContext[8].shop[itemNum - 1];
    newChar[char].items[itemRef.type].push(itemRef.name);
    statContext[1](newChar);
    firebase
      .firestore()
      .collection(statContext[4][0])
      .doc(char)
      .update({ items: newChar[char].items });
  };

  const renderUnlocks = () => {
    switch (unlockView) {
      case 'treasure':
        return treasureArray;
      case 'scenario':
        return scenarioArray;
      case 'events':
        return eventArray;
      default:
        return scenarioArray;
    }
  };

  if (unlockView === 'reward') {
    if (rewardType === 'shop') {
      return (
        <div className='columnFlex'>
          <h2 className='modal-header'>Reward Unlocked</h2>
          <Fade top><p>{rewardText} now available!</p></Fade>
          <button
            className='additem'
            onClick={() => {
              setUnlockView('scenario');
            }}
          >
            Confirm
          </button>
        </div>
      );
    } else {
      const statsRef = statContext[0];
      const availChars = [];
      const options = [];
      for (const char in statsRef) {
        if (statsRef[char].inParty === true) {
          availChars.push(statsRef[char].class);
          options.push(<option>{statsRef[char].class}</option>);
        }
      }
      return (
        <div className='columnFlex'>
          <h2 className='modal-header'>Reward Unlocked</h2>
          <Fade top><p>{rewardText} recieved!</p></Fade>
          <p>Choose a Character</p>
          <select name='type' id='shop-filter'>
            {options}
          </select>
          <button
            className='additem'
            onClick={(e) => {
              addItemToChar(
                e.target.previousSibling.value.toLowerCase(),
                rewardNum
              );
              setUnlockView('scenario');
            }}
            // onMouse={this.props.onclose}
          >
            Add
          </button>
        </div>
      );
    }
  } else {
    return (
      <>
        <h2 className='modal-header'>Unlocks</h2>
        <select
          name='type'
          id='unlock-filter'
          onChange={(e) => {
            setUnlockView(e.target.value);
          }}
        >
          <option value='scenario'>Scenario Rewards</option>
          <option value='treasure'>Treasure</option>
          <option value='events'>Events</option>
        </select>
        {renderUnlocks()}
      </>
    );
  }
}
