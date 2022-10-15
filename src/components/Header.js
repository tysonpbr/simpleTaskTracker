import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        {showAdd ? (<Button color='#ff3e34' text='Close' onClick={onAdd}/>) : (<Button color='#60a05b' text='Add' onClick={onAdd}/>)}
    </header>
  )
}

Header.defaultProps = {
    title: 'Todays Tasks',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header