import StudyInfo from "./StudyInfo"
import '../components/StudyList.css'


export default function StudyList({items, selectedId, onSelect}){

  const mapHTML = items.map((item) => {
    return (
      <div 
        key={item.id}
        onClick={()=>onSelect(item.id)}
        className={item.id === selectedId ? "active" : ""}
      >
        <hr />
        <StudyInfo 
          id={item.id} 
          title={item.title} 
          desc={item.desc} 
          category={item.category}
        />
        {item.id === selectedId && (
            <p>선택된 항목입니다.</p>
        )}
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