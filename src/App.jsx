import { useRef, useState, useMemo, useCallback } from 'react'
import reactData from "./data/data.json";
import StudyList from './components/StudyList';
import SearchForm from './components/SearchForm';
import CategoryFilter from './components/CategoryFilter';
import StudySummary from './components/StudySummary';

import './App.css'

function App() {
  
  console.log(reactData);

  const [keyword, setKeyword] = useState("");
  const [category,setCategory] = useState("all");
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteOnly, setFavoriteOnly] = useState(false);
  const [level, setLevel] = useState("all");

  const renderCount = useRef(0);

  renderCount.current++;

  // const handleToggleFavorite = (id) => {
  //   setFavoriteIds(prev =>
  //     prev.includes(id)
  //       ? prev.filter(itemId => itemId !== id)
  //       : [...prev, id]
  //   );
  // }

  const handleToggleFavorite = useCallback(id => {
    setFavoriteIds(prev =>
    prev.includes(id)
      ? prev.filter(itemId => itemId !== id)
      : [...prev, id]
    );
  }, []);



  const filteredData = useMemo(()=> {
    return reactData.filter((item)=>{
      const isCategoryMatch = (category === "all" || item.category === category);
      const isKeywordMatch = (keyword === "" || item.title.toLowerCase().includes(keyword.toLowerCase()));
      const isFavoriteMatch = (favoriteIds.includes(item.id) || !favoriteOnly);
      const isLevelMatch = (level === "all" || item.level === level);

      return isCategoryMatch && isKeywordMatch && isFavoriteMatch && isLevelMatch;
    });
  },[keyword, category, favoriteIds, favoriteOnly, level]);


  return (
    <>
      <p>React Basic Review Mission 8</p>
      <h1>React Hooks 학습 목록 관리</h1>
      <p>useState, useMemo, useCallback, useRef를 활용한 복습 미션입니다.</p>
      <hr />
      <h2>검색</h2>
      <SearchForm keyword={keyword} setKeyword={setKeyword} setCategory={setCategory} setFavoriteOnly={setFavoriteOnly} setLevel={setLevel}/>
      <hr />
      <CategoryFilter  setCategory={setCategory} setFavoriteOnly={setFavoriteOnly} setLevel={setLevel}/>
      <hr />
      <StudySummary
          totalCount={reactData.length}
          currentCount={filteredData.length}
          favoriteCount={favoriteIds.length}
          renderCount={renderCount.current}
      />
      <hr />
      <h2>학습 목록</h2>
      {
        filteredData.length === 0 && (
          <p>조건에 맞는 학습 항목이 없습니다.</p>
        )
      }
      <StudyList 
        items={filteredData}
        favoriteIds={favoriteIds}
        onFavorite={handleToggleFavorite}
      />

    </>
  )
}

export default App
