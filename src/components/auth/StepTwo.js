
  
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
        const { jobTitle, jobCompany, jobLocation,jobStart, handleChange } = this.props;
        return(
            <div style={{width:'40%',marginLeft:'30%', marginTop:'5%'}}>
		 		<h2 className="text-center">Mortrage Signup</h2>
				 	<form name="form">
						<div>
							<label >What is your employment status ?</label>
                            <select className="form-control input-shadow"  value={jobTitle} onChange={handleChange('jobTitle')}> 
                                <option name=""> </option>
                                <option name="Buying a home" value="employed">Employed</option>
                                <option name="Buying a home" value="not employed">Not Employed</option>
                            </select>

						</div>
						<div>                    
							<label>What is your occupation ? </label>
                            <select className="form-control input-shadow"  value={jobCompany} onChange={handleChange('jobCompany')}> 
                                <option name=""> </option>
                                <option name="Buying a home">Barrister</option>
                            </select>
						</div>

                        <div id="jobtitle" >                    
							<label>What is your contract type ? </label>
                            <select className="form-control input-shadow"  value={jobLocation} onChange={handleChange('jobLocation')}> 
                                <option name=""> </option>
                                <option name="Buying a home">Contract</option>
                            </select>
						</div>

                        <div id="jobtitle">                    
							<label>Do you have full time position with a salary ? <br/>When did you start this job ? </label>
                            
                            <input type="date" 
                                className="form-control input-shadow" 
                                placeholder="Enter the date" 
                                onChange={handleChange('jobStart')}
                                value ={jobStart}
                
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