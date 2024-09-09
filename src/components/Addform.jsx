import "./style/AddForm.css"
const Addfor = ({ title, setTitle, saveTask, editID, }) => {

    return (
        <>
            <h2>Task Management Form</h2>
            <form onSubmit={saveTask}  >
                <div className="form-control">
                    <input type="text" className="text-input" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    {/* value จะเท่ากับ State title ที่่ส่งเป็น props มา  */}
                    <button type="submit" className="submit-btn">{editID ? "Update" : "Add"}</button>
                </div>
            </form>
        </>
    )
}

export default Addfor