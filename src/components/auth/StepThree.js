
  
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
        const { title, firstName, middleName,surname, handleChange } = this.props;
        return(
            <div style={{width:'40%',marginLeft:'30%', marginTop:'5%'}}>
		 		<h2 className="text-center">Mortrage Signup</h2>
				 	<form name="form">
						<div>
							<label for="jobtitle">Title</label>
                            <select className="form-control input-shadow"  value={title} onChange={handleChange('title')}> 
                                <option name=""> </option>
                                <option name="title">title</option>
                            </select>
						</div>
						<div >                    
							<label>First Name </label>
                            
                            <input type="text" 
                                className="form-control input-shadow" 
                                placeholder="Enter First name" 
                                value={firstName}
                                onChange={handleChange('firstName')}
                            />

						</div>

                        <div >                    
							<label>Middle Name </label>
                            <input type="text" 
                                className="form-control input-shadow" 
                                onChange={handleChange('middleName')}
                                value={middleName}
                                placeholder="Enter Middlename"
                            />
						</div>

                        <div >                    
							<label>Surname <br/>When did you start this job ? </label>
                            
                            <input type="text" 
                                className="form-control input-shadow" 
                                placeholder="Enter surname" 
                                onChange={handleChange('surname')}
                                value ={surname}
                
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