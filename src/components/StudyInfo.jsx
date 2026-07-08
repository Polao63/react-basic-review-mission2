export default function StudyInfo({id, title, desc, category}){
  return(
    <div>
      <h2>{id}. {title}</h2>
      <p>{desc}</p>
      <p>분류: {category}</p>
    </div>
  )
}