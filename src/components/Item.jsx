import "./style/Item.css"
const Item = ({ data, deleteTask, editTask }) => {
    return (
        <div className="list-item" >
            <h4 className="title">{data.title}</h4>
            <div className="btn-container">
                <button className="btn" onClick={() => { deleteTask(data.id) }} >Delete</button>
                <button className="btn" onClick={() => { editTask(data.id) }}>Edit</button>
            </div>
        </div >
    )
}

export default Item