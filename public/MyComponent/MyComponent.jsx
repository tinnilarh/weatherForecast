import React from 'react';
import SubComponentA from './subcomponents/SubComponentA';
import {Button} from 'react-bootstrap';

/**
 * Component seed to demonstrate how to build a component.
 * For Component Lifecycle API go to:
 * https://facebook.github.io/react/docs/component-specs.html
 *
 * For component Documentation go to:
 * <INSERT DOC URL>
 */
export default class MyComponent extends React.Component {

    // ---------------------------------------------------
    // VIEW LIFECYCLE. THESE ARE CALLED BY REACT AUTOMATICALLY
    // ALL METHODS ARE OPTIONAL
    // ----------------------------------------------------
	constructor() {
		super();
		this.bindMethods();
        this.state = {userName:null};

	}

    componentDidMount() {
        var state = this.props.meta.state;
        this.setState(state);
    }

    // ---------------------------------------------------
    // MOVEMENT LIFECYCLE.
    // THESE ARE ALL CALLED BY THE LAYOUT MANAGER.
    // ----------------------------------------------------

	//Resize callbacks
	resizeStart() {
		console.log('resize started');
	}

	resize() {
		console.log('resize happening');
	}

	resizeStop() {
		console.log('resize stopped');
	}

	//drag callbacks
	dragStart() {
		console.log('drag started');
	}

	drag() {
		console.log('drag happening');
	}

	dragStop() {
		console.log('drag stopped');
	}

    // ---------------------------------------------------
    // ACTUAL CODE FOR COMPONENT THAT DOES ANYTHING
    // ----------------------------------------------------

    /**
     * Make the following methods accessible outside component
     * @return {[type]} [description]
     */

    bindMethods() {
        this.resizeStart = this.resizeStart.bind(this);
        this.resize = this.resize.bind(this);
        this.resizeStop = this.resizeStop.bind(this);
        this.dragStart = this.dragStart.bind(this);
        this.drag = this.drag.bind(this);
        this.dragStop = this.dragStop.bind(this);
    }

    assetFieldChanged(event) {
        var text = event.target.value;
        this.setState({userName:text}, function() {
            this.props.meta.state =  this.state;
        });
    }

    /*
    getLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(b);
        } 
    }
    

    b(locationData){
        var apiKey = '881fba76e9dc5539131b4f2965b8e308';
        var url = 'https://api.forecast.io/forecast/';
           
        var lati = locationData.coords.latitude;
        var longi = locationData.coords.longitude;
            
        var data;
        
        $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
              
            alert(data.currently.temperature);
            
        });
    }*/
    /*<input
                type="button"
                value="Weather"
                onClick={getLocation}
                <SubComponentA></SubComponentA>
            <input placeholder="Type your name" style={{width:'50%'}} type="text" value={this.state.userName} onChange={this.assetFieldChanged.bind(this)}></input>
            <br/>
            <p style={{color:'white'}}>Welcome: {this.state.userName} </p>
            <p style={{color:'white'}}> Hello, again</p> />
            <button id="main" onClick={this.getLocation}>Weather It</button>
                */

	/**
	 * Create component HTML
	 * @return {[type]} [description]
	 */
  	render() {
	    return (
		<div className='my-component'>
            <br/>


            <input id="main"
                type="button"
                value="Weather"
                onClick={getLocation} />

            <div id="boxText">
               <p id="currentTime">Current Time</p>
               <p id="currentTemp">Current Temperature</p>
               <p id="currentIcon">Current Icon</p>
           </div>
        </div> 
	    
        );

  	}
    
}