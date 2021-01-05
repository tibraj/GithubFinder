import React from 'react'
import PropTypes from 'prop-types';

const NavBar = ({icon, title}) => {
    return (
        <nav class="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
        </nav>
    )
}

NavBar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequires,
}

export default NavBar

