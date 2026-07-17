import { memo } from 'react';

function StudyItem({id, title, desc, category, level, isFavorite, onToggleFavorite}){
  console.log(`${title} 렌더링`)

  return(
    <div>
      <h2>{id}. {title}</h2>
      <p>{desc}</p>
      <p>분류: {category} / 난이도: {level}</p>
      <button type="button"
      onClick={() => onToggleFavorite(id)}
      >
      {isFavorite ? "★ 즐겨찾기 해제" : "☆ 즐겨찾기"}
      </button>
    </div>
  )
}

export default memo(StudyItem);