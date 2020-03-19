import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Parallax extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {

		const imageStyle = {
			minHeight: "calc(100vh)",
			width: "100%",
			backgroundAttachment: "fixed",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			backgroundImage: "url(" + this.props.image + ")"
		};

		const contentStyle = {
			backgroundColor: "#fff",
			color: "#000",
			padding: "10px"
		}

		return (
			<div>
				<div className="parallax" style={imageStyle}>.</div>
				<div className="content" style={contentStyle}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

Parallax.propTypes = {
	image: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}
