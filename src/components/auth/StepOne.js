import React, { Component } from 'react';
// import Select from "react-dropdown-select";



class PersonalInfo extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { home, noofpeople, propertycost, deposit, handleChange } = this.props;
        return(

            <div style={{width:'40%',marginLeft:'30%', marginTop:'5%'}}>
		 		<h2 className="text-center">Mortrage Register</h2>
				 	<form name="form">
						<div>
							<label>I'm thinking about</label>

                            <select className="form-control input-shadow"  value={home} onChange={handleChange('home')}> 
                                <option name=""> </option>
                                <option name="Buying a home">Buying a home</option>
                            </select>
						</div>
						<div >                    
							<label>How many people are applying ? </label>
                            <div 
                                onChange={handleChange('noofpeople')}
                                value={noofpeople}
                                >
                                <input type="radio" value="1" name="gender"/> 1
                                <input type="radio" value="2" name="gender"/> 2
                                <input type="radio" value="3" name="gender"/> 3
                            </div>
						</div>

                        <div >                    
							<label>How much do you think the propert will cost ? </label>
                            <input type="number" 
                                className="form-control input-shadow" 
                                placeholder="propertycost" 
                                value={propertycost}
                                onChange={handleChange('propertycost')}	
                                name="propertycost"
                                min="100000" 
                            />

						</div>

                        <div >                    
							<label>How much deposit do you have ? </label>
                            <input type="number" 
                                className="form-control input-shadow" 
                                placeholder="" 
                                value={deposit}
                                onChange={handleChange('deposit')}	
                                name="deposit"
                                min="0" 
                            />

						</div>
						
                        <button type="button" 
                        style={{width:'30%',marginTop:'5%',marginLeft:'30%'}}
                            onClick={this.continue} 
                            className="btn btn-primary btn-block"
                        >Next
                        </button>
					</form>
			 </div>
        );
    }
}

export default PersonalInfo;