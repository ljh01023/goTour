// 리스트의 개수가 0일때 보여지는 component
export default function NoList() {
  return (
    <div className="noList">
      <i className="fa-regular fa-rectangle-list"></i>
      <p>등록된 여행지가 없습니다.</p>
    </div>
  );
}
