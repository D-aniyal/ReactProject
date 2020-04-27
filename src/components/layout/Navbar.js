import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Navbar extends Component {

    static defaultProps = {
        title : "Github-finder" ,
        icon : "fas fa-github"

        
    };

    static propTypes = {

        title: PropTypes.string.isRequired,
        icon : PropTypes.string.isRequired

    };

    render() {
        return (
          <nav className="navbar bg-primary">
             <h1> 
             <i classname = {this.props.icon}></i> {this.props.title} 
                 </h1>
              </nav>
        )
    }
}

export default Navbar