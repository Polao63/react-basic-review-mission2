import { useState } from 'react'
import reactData from "./data/data.json";
import StudyList from './components/StudyList';

import './App.css'

function App() {
  
  console.log(reactData);

  const [selectedId,setSelectedId] = useState(null);
  const [category,setCategory] = useState("all");
  const [keyword, setKeyword] = useState("");


  const handleSelect = (id) => {
    setSelectedId(id);
  }

  const filteredData = reactData.filter((item)=>{
    const isCategoryMatch = (category === "all" || item.category === category);
    const isKeywordMatch = (keyword === "" || item.title.toLowerCase().includes(keyword.toLowerCase()));

    return isCategoryMatch && isKeywordMatch;
  })




  return (
    <>
      <h1>React Basic Review Mission 2</h1>
      <h2>전체 학습 항목 수 : {reactData.length}개</h2>
      <hr />
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
      <hr />
      <h2>검색</h2>
      <input type="text" 
        value={keyword}
        onChange={(e)=>{
          console.log(e.target.value);
          setKeyword(e.target.value);
        }} />
      <h2>학습 목록</h2>
      <StudyList 
        items={filteredData}
        selectedId={selectedId}
        onSelect={handleSelect}
      />
    </>
  )
}

export default App
