export default function Modal({ list, titleNum, closeModal }) {
  return (
    <div className="modal">
      <h2>{list[titleNum]}</h2>
      <p>모달 내용</p>
      <button onClick={closeModal}>모달 닫기</button>
    </div>
  );
}
