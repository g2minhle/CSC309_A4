var
React = require('react'),
ReactDOM = require('react-dom'),
    
Container = React.createClass({
    saveChanges: function(e) {
        //make api request here to save changes
        e.preventDefault();

        var isTrainer = false;
        if (document.getElementById('isTrainer').checked) {
          isTrainer = true;
        }

        var url = window.location.href;
        var id = url.split('/').pop();

        var data = {
            "userid": id,
            "firstName": document.getElementById('firstName').value,
            "lastName": document.getElementById('lastName').value,
            "isTrainer": isTrainer,
            "email": document.getElementById('email').value,
            "phone": document.getElementById('phone').value,
            "sports": document.getElementById('sports').value,
            "location": document.getElementById('location').value,
            "experience": document.getElementById('experience').value,
            "price": document.getElementById('price').value,
            "education": document.getElementById('education').value,
            "workexp": document.getElementById('workexp').value,
        }

        // Submit form via jQuery/AJAX
        $.ajax({
            type: 'POST',
            url: './savechanges/' + id, // ADD USER ID HERE
            data: data
        })
        .done(function(data) {
            console.log('done');
        })
        .fail(function(jqXhr) {
            console.log('failed to register');
        });
    },


    getInitialState: function() {
        return {
            userid: -1,
            firstName: '',
            lastName: '',
            isTrainer: false,
            email: '',
            phone: '',
            sports: '',
            experience: '',
            location: '',
            price: 0,
            rating: 0,
            education: '',
            workexp: '',
            comments: []
        };
    },
 
    componentDidMount: function() {
        var url = window.location.href;
        var id = url.split('/').pop();
        this.serverRequest = $.get('../users/fetch/' + id, function (res) {
            this.setState({
                userid: res.userid,
                firstName: res.firstName,
                lastName: res.lastName,
                isTrainer: res.isTrainer,
                email: res.email,
                phone: res.phone,
                sports: res.sports,
                experience: res.experience,
                location: res.location,
                price: res.price,
                rating: res.rating,
                education: res.education,
                workexp: res.workexp,
                comments: res.comments
            });
        }.bind(this));
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },


    render: function() { 
       
        return (
    
        <div className="container">
            <hr/>
            <div className="row">
                <div className="col-xs-2">
                    <button onClick={this.saveChanges} type="button" className="btn btn-primary  btn-block">Save Changes</button>
                </div>
                <div className="col-xs-4">
                </div>
            </div>
            <hr/>
            <div className="row">
                <h3>User Details</h3>
                <div className="col-xs-6">
                    <b>Given Name</b>
                    <input id="firstName" className="form-control" type="text" defaultValue={this.state.firstName} placeholder={this.state.firstName} />
                </div>
                <div className="col-xs-6">
                    <b>Family Name</b>
                    <input id="lastName" className="form-control" defaultValue={this.state.lastName} placeholder={this.state.lastName} />
                </div>
                <div className="col-xs-6">
                    <b>Sport(s)</b>
                    <input id="sports" className="form-control" defaultValue={this.state.sports} placeholder={this.state.sports} />
                </div>
                <div className="col-xs-6">
                    <b>Location</b>
                    <input id="location" className="form-control" defaultValue={this.state.location} placeholder={this.state.location} />
                </div>
                <div className="col-xs-6">
                    <b>Email Address</b>
                    <input id="email" className="form-control" defaultValue={this.state.email} placeholder={this.state.email} />
                </div>
                <div className="col-xs-6">
                    <b>Phone Number</b>
                    <input id="phone" className="form-control" defaultValue={this.state.phone} placeholder={this.state.phone} />
                </div>

                <p></p>
                <div className="col-xs-12">
                    <b>Experience:</b>
                    <textarea id="experience" type="text" className="form-control" defaultValue={this.state.experience} name="experience" placeholder={this.state.experience}>
                    </textarea>
                </div>
            </div>
        
            <hr/>
            <div className="row">
                <h3>Are you a Trainer or an Athlete?</h3>
                <div className="col-xs-3">
                    <div className="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="isAthlete" value="false" defaultChecked />
                            Athlete
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input type="radio" name="optionsRadios" id="isTrainer" value="true" />
                        Trainer
                      </label>
                    </div>
                </div>
            </div>
        
            <hr/>
            <div className="row">
                <h3>Price to Charge in $</h3>
                <div className="col-xs-3">
                    <input id="price" type="number" className="form-control" />
                </div>
                <div className="col-xs-9">  
                </div>
            </div>
        
            <hr/>

            <div className="row">
                <h3>Resume</h3>
                <div className="col-xs-12">
                    <b>Education</b>
                    <textarea id="education" type="text" className="form-control" name="education">
                    </textarea>
                </div>
                <div className="col-xs-12">
                    <b>Work Experience</b>
                    <textarea id="workexp" type="text" className="form-control" name="workexperience">
                    </textarea>
                </div>
            </div>
            <hr/>
        </div>
        
    ); }
}),

Index = React.createClass({
    render: function() { return (
        <div>
            <Container />
        </div>

    ); }
});



ReactDOM.render(
    <Index/>,
    document.getElementById('page-content')
);


