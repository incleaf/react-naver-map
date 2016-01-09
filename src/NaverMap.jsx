import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Util from './utils/Util.js';
import NaverMapLoader from './NaverMapLoader.js';

const NaverMap = React.createClass({
    componentDidMount() {
        let naverMap = new NaverMapLoader(this.props).init();
    },

    render () {
        return (
            <div className="naver-map-conatiner">
                <div className="naver-map" id={this.props.elementId}>
                </div>
            </div>
        )
    }
})

export default NaverMap
