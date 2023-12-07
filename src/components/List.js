export default function List({ listItem, i, openModal, delItem }) {
  return (
    <li className="list">
      <p
        onClick={() => {
          openModal(i);
        }}
      >
        {listItem}
      </p>
      <i
        className="fa-solid fa-trash-can"
        onClick={() => {
          delItem(i);
        }}
      ></i>
    </li>
  );
}
