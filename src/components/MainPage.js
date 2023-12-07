import { useState } from 'react';
import '../css/Mainpage.css';

import NoList from './Nolist';
import List from './List';
import Modal from './Modal';

export default function Mainpage() {
  let [list, setList] = useState([]);

  let [modal, setModal] = useState(false);
  let [titleNum, setTitleNum] = useState();
  let [inputText, setInputText] = useState('');

  let openModal = (i) => {
    setModal(true);
    setTitleNum(i);
  };
  let closeModal = () => {
    setModal(false);
  };
  let addItem = () => {
    let copy = [...list];
    copy.unshift(inputText);
    setList(copy);
    setInputText('');
  };
  let delItem = (i) => {
    let copy = [...list];
    copy.splice(i, 1);
    setList(copy);
  };
  return (
    <main>
      <div className='inputCon'>
        <input
          value={inputText}
          placeholder='가고싶은 여행지를 등록하세요'
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        ></input>
        <button onClick={addItem}>add</button>
      </div>

      <div className='listArea'>
        <p>
          <strong>total</strong>
          <span>{list.length}</span>
        </p>

        {list.length === 0 ? (
          <NoList />
        ) : (
          <ul className='listCon'>
            {list.map((listItem, i) => {
              return (
                <List
                  listItem={listItem}
                  i={i}
                  key={i}
                  openModal={openModal}
                  delItem={delItem}
                />
              );
            })}
          </ul>
        )}
      </div>
      {modal === true ? (
        <Modal list={list} titleNum={titleNum} closeModal={closeModal} />
      ) : null}
    </main>
  );
}
