
  
import React, { Component } from 'react';


class JobDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { phone, email, confirmEmail, handleChange } = this.props;
        return(
            <div style={{width:'40%',marginLeft:'30%', marginTop:'5%'}}>
		 		<h2 className="text-center">Contact Details</h2>
				 	<form name="form">
						<div>
							<label >What is your preferred contact Phone Number ?</label>
                            <input type="number" 
                                className="form-control input-shadow" 
                                placeholder="Enter job title" 
                                value={phone}
                                onChange={handleChange('phone')}
                            />

						</div>
						<div >                    
							<label>what is your email adress </label>
                            
                            <input type="text" 
                                className="form-control input-shadow" 
                                placeholder="Enter your email" 
                                value={email}
                                onChange={handleChange('email')}
                            />

						</div>

                        <div >                    
							<label>Confirm your email adress </label>
                            <input type="text" 
                                className="form-control input-shadow" 
                                onChange={handleChange('confirmEmail')}
                                value={confirmEmail}
                                placeholder="confirm your email"
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

export default JobDetails;