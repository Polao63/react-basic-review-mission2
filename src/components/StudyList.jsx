import StudyItem from "./StudyItem"


export default function StudyList({items, favoriteIds, onFavorite}){
  const mapHTML = items.map((item) => {
    return (
      <div 
        key={item.id}
      >
        <hr />
        <StudyItem 
          id={item.id} 
          title={item.title} 
          desc={item.desc} 
          category={item.category}
          level={item.level}
          isFavorite={favoriteIds.includes(item.id)}
          onToggleFavorite={onFavorite}
        />
        <hr /> 
      </div>
    )
  });

  return(
    <div>
      {mapHTML}
    </div>
  );
}