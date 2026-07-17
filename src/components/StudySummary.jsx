export default function StudySummary({totalCount, currentCount, favoriteCount, renderCount}){
  return(
    <div>
      <p>전체 항목 : {totalCount}개 / 현재 표시 : {currentCount}개 / 즐겨찾기 : {favoriteCount}개 / App 렌더링 횟수 : {renderCount}회</p>
    </div>
  );
}