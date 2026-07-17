export default function CategoryFilter({setCategory, setFavoriteOnly, setLevel}){
  return(
    <>
      <div>
        <h2>카테고리 필터</h2>
        <button 
          type="button" 
          onClick={() => setCategory("all")}
        >전체</button>
        <button 
          type="button" 
          onClick={() => setCategory("concept")}
        >concept</button>
        <button 
          type="button" 
          onClick={() => setCategory("library")}
        >library</button>
        <button 
          type="button" 
          onClick={() => setCategory("hook")}
        >hook</button>
      </div>
      <div>
        <button type="button"
          onClick={()=> setFavoriteOnly(prev => !prev)}
        >즐겨찾기만 보기
        </button>
      </div>
      <div>
        <button type="button"
          onClick={()=> setLevel("all")}
        >전체 난이도
        </button>
        <button type="button"
          onClick={()=> setLevel("basic")}
        >basic
        </button>
        <button type="button"
          onClick={()=> setLevel("intermediate")}
        >intermediate
        </button>
      </div>
    </>
  )
}