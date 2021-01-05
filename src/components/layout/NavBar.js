import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
            <nav class="navbar bg-primary">
                <h1>
                    {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default NavBar

// import PropTypes from 'prop-types';
// static defaultProps = {
//     title: 'Github Finder',
//     icon: 'fab fa-github'
// };

// static propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequires,
// }