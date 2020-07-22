import React, { Component } from 'react';

class AllInfo extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const { home, noofpeople, propertcost,deposit,jobTitle, jobCompany, jobLocation,jobStart } = this.props;
        return(
            <>
                <h2>Here is the information you entered:</h2>
                home: <b>{home}</b><br />
                no Of people Name: <b>{noofpeople}</b><br />
                propertycost: <b>{propertcost}</b><br />
                deposit: <b>{deposit}</b><br />
                Job: <b>{jobTitle}</b><br />
                Company: <b>{jobCompany}</b><br />
                Location: <b>{jobLocation}</b><br />
                jobStart : <b>{jobStart}</b><br />
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
            </>
        );
    }
}

export default AllInfo;