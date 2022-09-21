// Write your code h


import './index.css'

ListProfile=props=>{
    const {each}=props
    const {id,imageUrl}=each
    <li>
        <img src={imageUrl} className="thumbnail" />
    </li>
}

export default ListProfile