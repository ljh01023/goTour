export default function Modal({ list, titleNum, closeModal }) {
  return (
    <div className='modal'>
      <h2>{list[titleNum]}</h2>
      {/* <p>모달내용</p> */}
      <button onClick={closeModal}>close</button>
    </div>
  );
}
