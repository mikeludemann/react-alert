import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './alert.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import '@fortawesome/fontawesome-free/js/fontawesome.min.js';

export default class Alert extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {

    var mainAlert = document.getElementById("alert--custom");
    var headline = document.getElementById("headline");
    var contentText = document.getElementById("text");
    var icon = document.getElementsByClassName("icon")[0];
    var close = document.getElementsByClassName("close")[0];

    if(this.props.position == "bottom"){

      mainAlert.style.bottom = "0%";
      mainAlert.style.transform = "translate(-50%, 0%)";

    } else if(this.props.position == "top"){

      mainAlert.style.top = "0%";
      mainAlert.style.transform = "translate(-50%, 0%)";

    } else if(this.props.position == "middle"){

      mainAlert.style.top = "50%";
      mainAlert.style.transform = "translate(-50%, -50%)";

    }

    if(this.props.type == "success"){

      mainAlert.className += " success";
      headline.innerHTML = "Success!";
      contentText.innerHTML = this.props.text || "Indicates a successful or positive action.";
      icon.children[0].className += " fa-check-circle";

    } else if(this.props.type == "warning"){

      mainAlert.className += " warning";
      headline.innerHTML = "Warning!";
      contentText.innerHTML = this.props.text || "Indicates a warning that might need attention.";
      icon.children[0].className += " fa-exclamation-triangle";

    } else if(this.props.type == "info"){

      mainAlert.className += " info";
      headline.innerHTML = "Info!";
      contentText.innerHTML = this.props.text || "Indicates a neutral informative change or action.";
      icon.children[0].className += " fa-info-circle";

    } else if(this.props.type == "danger"){

      mainAlert.className += " danger";
      headline.innerHTML = "Danger!";
      contentText.innerHTML = this.props.text || "Indicates a dangerous or potentially negative action.";
      icon.children[0].className += " fa-exclamation-circle";

    } else if(this.props.type == "default"){

      mainAlert.className += "";
      headline.innerHTML = "Default!";
      contentText.innerHTML = this.props.text || "Indicates a default action.";
      icon.children[0].className += " fa-info-circle";

    } else {

      mainAlert.className += "";
      headline.innerHTML = "Default!";
      contentText.innerHTML = this.props.text || "Indicates a default action.";
      icon.children[0].className += " fa-info-circle";

    }

    close.addEventListener("click", function(){
      var div = this.parentElement.parentElement;
      div.style.opacity = "0";
      setTimeout(function(){ 
        div.style.display = "none"; 
      }, 600);
    })

	}

	render() {
		return (
			<div id="alert--custom" className="alert">
				<div className="alert--container">
					<div className="icon">
						<i className="fa-2x fas"></i>
					</div> 
					<div className="context">
						<strong id="headline"></strong><br/>
						<span id="text"></span>
					</div>
					<div className="close">
						<span className="closebtn"><i className="fas fa-times fa-lg"></i></span>
					</div>
				</div>
      </div>
		);
	}
}

Alert.propTypes = {
	position: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}
