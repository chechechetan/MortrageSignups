

import React, { Component } from 'react';
import { connect } from 'react-redux';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import FinalStep from './FinalStep';

class Register extends Component {
	state = {
        step: 1,

		// step 1
		home: '',
		noofpeople: '',
		propertycost: '',
		deposit: '',

        // step 2
        jobTitle: '',
        jobCompany: '',
		jobLocation: '',
		jobStart:'',

		//step 3
		title:'',
		firstName:'',
		middleName:'',
		surName:'',

		//step4 contact details
		phone:'',
		email:'',
		confirmEmail:''


    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
		this.setState({[input]: e.target.value});

		//hide and show contract based on employment status
		var element=document.getElementById('jobtitle');
			if(e.target.value==='employed' )
			element.style.display='block';
			else  if(e.target.value=== 'not employed')
			element.style.display='none';
			
    }

    showStep = () => {
        const { 
			step, 
			home, 
			noofpeople,
			propertycost,
			deposit, 
			jobTitle, 
			jobCompany, 
			jobLocation, 
			jobStart ,
			title,
			firstName,
			middleName,
			surName,
			phone,
			email,
			confirmEmail
		} = this.state;

        if(step === 1)
            return (<StepOne 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 
                home={home} 
				noofpeople={noofpeople}
				propertycost={propertycost}
				deposit={deposit}
				
            />);
        if(step === 2)
            return (<StepTwo 
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                jobTitle={jobTitle} 
                jobCompany={jobCompany}
				jobLocation={jobLocation}
				jobStart={jobStart}
			/>);
		if(step === 3)
            return (<StepThree 
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                title={title} 
                firstName={firstName}
				middleName={middleName}
				surName={surName}
			/>);
		if(step === 4)
            return (<StepFour 
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                phone={phone} 
                email={email}
				confirmEmail={confirmEmail}
            />);
        if(step === 5)
            return (<FinalStep 
                home={home} 
				noofpeople={noofpeople}
				propertycost={propertycost}
				deposit={deposit}
                jobTitle={jobTitle} 
                jobCompany={jobCompany}
				jobLocation={jobLocation}
				jobStart={jobStart}
                prevStep = {this.prevStep}
            />);
    }

    render(){
        const { step } = this.state;

        return(
            <>
                <h2>Step {step} of 4.</h2>
                {this.showStep()}
            </>
        );
    }
}
 function mapState(state) {
    const { registering } = state.register;
    return { registering };
}

const actionCreators = {
    // register: userActions.register
}
const connectedRegister = connect(mapState, actionCreators)(Register);
 export { connectedRegister as Register };