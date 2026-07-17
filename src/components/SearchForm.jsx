import { useRef, useEffect } from "react";

export default function SearchForm({keyword="", setKeyword, setCategory, setFavoriteOnly, setLevel}){
  const searchInputRef = useRef(null);
  const prevKeywordRef = useRef(null);
  const handleFocusSearch = () => {
    searchInputRef.current.focus();
  };

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  useEffect(() => {
    prevKeywordRef.current = keyword;
  }, [keyword]);

  return(
    <>
      <div>
        <input 
          ref={searchInputRef}
          type="text" 
          value={keyword}
          onChange={(e)=>{
            console.log(e.target.value);
            setKeyword(e.target.value);
          }}
          placeholder="학습 항목 검색"
          />
          <button onClick={handleFocusSearch}>
            검색창으로 이동
          </button>
          <button type="button"
            onClick={()=>{
              setKeyword("");
              setCategory("all");
              setFavoriteOnly(false);
              setLevel("all")
              searchInputRef.current.focus();
            }}
          >초기화</button>
      </div>
      <div>
        <p>현재 검색어: {keyword}</p>
        <p>이전 검색어: {prevKeywordRef.current}</p>
      </div>
    </>
  )
}