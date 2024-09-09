import "./style/Header.css"
const Header = () => {
    return (
        <header>
            <div className='logo'>
                <span>Task Management</span>
            </div>
            <div className='theme-container'>
                <span>Light mode</span>
                <span className='icon'>Switch</span>
            </div>
        </header>
    )
}

export default Header