var
React = require('react'),
ReactDOM = require('react-dom'),
NormalNavBar = require('../../normalNavBar'),
    
Container = React.createClass({
    saveChanges: function(e) {
        //make api request here to save changes
        e.preventDefault();

        var isTrainer = false;
        if ($('#input_isTrainer').is(':checked')) {
          isTrainer = true;
        }



        var data = {
            "firstName": document.getElementById('firstName').value || document.getElementById('firstName').placeholder,
            "lastName": document.getElementById('lastName').value || document.getElementById('lastName').placeholder,
            "isTrainer": isTrainer,
            "email": document.getElementById('email').value || document.getElementById('email').placeholder,
            "phone": document.getElementById('phone').value || document.getElementById('phone').placeholder,
            "sports": document.getElementById('sports').value || document.getElementById('sports').placeholder,
            "location": document.getElementById('location').value || document.getElementById('location').placeholder,
            "experience": document.getElementById('experience').value || document.getElementById('experience').placeholder,
            "price": document.getElementById('price').value || document.getElementById('price').placeholder,
            "education": document.getElementById('education').value || document.getElementById('education').placeholder,
            "workexp": document.getElementById('workexp').value || document.getElementById('workexp').placeholder,
        }

        // Submit form via jQuery/AJAX
        $.ajax({
            type: 'POST',
            url: '/users/' + this.state.userid, // ADD USER ID HERE
            data: data
        })
        .done(function(data) {
            alert('Saved');
        })
        .fail(function(jqXhr) {
            alert('Failed to save');
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
        this.serverRequest = $.get('/users/' + id, function (res) {
            if (res.isTrainer) {
                $('#input_isTrainer').attr('checked', true);                
            } else { 
                $('#input_isTrainer').attr('checked', false);
            }
            this.isTrainerChanged();
            this.setState({
                userid: res._id,
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
    
    isTrainerChanged: function(){
        if ($('#input_isTrainer').is(':checked')) {
            $('#div_trainerPart').show();
        } else {
            $('#div_trainerPart').hide();
        }
    },


    render: function() { 
        return (
        <div className="container">    
            <link rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/kamranahmedse/jquery-toast-plugin/master/dist/jquery.toast.min.css"/>
            <script src="https://raw.githubusercontent.com/kamranahmedse/jquery-toast-plugin/master/dist/jquery.toast.min.js"></script>                                
            <div className="row">
                <div className="col-xs-12">
                    <h3>User Details</h3>
                </div>
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
                <div className="col-xs-12">
                    <input type="checkbox" id="input_isTrainer" onChange={this.isTrainerChanged}> 
                        &nbsp; I am a trainer 
                    </input>
                </div>                
            </div>
            <hr/>
            <div id="div_trainerPart">
                <div className="row" >
                    <div className="col-xs-12">
                        <h3>Price to Charge in $</h3>
                    </div> 
                    
                    <div className="col-xs-3">
                        <input id="price" type="number" className="form-control" placeholder={this.state.price}/>
                    </div>
                </div>
            
                <hr/>

                <div className="row">
                    <div className="col-xs-12">
                        <h3>Resume</h3>
                    </div>
                    <div className="col-xs-12">
                        <b>Education</b>
                        <textarea id="education" type="text" className="form-control" name="education" placeholder={this.state.education}>
                        </textarea>
                    </div>
                    <div className="col-xs-12">
                        <b>Work Experience</b>
                        <textarea id="workexp" type="text" className="form-control" name="workexperience" placeholder={this.state.workexp}>
                        </textarea>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-xs-2">
                    <button onClick={this.saveChanges} type="button" className="btn btn-primary  btn-block">Save Changes</button>
                </div>
            </div>
            <hr/>
        </div>
        
    ); }
}),

Index = React.createClass({
    render: function() { return (
        <div>
            <NormalNavBar />
            <Container />
        </div>

    ); }
});



ReactDOM.render(
    <Index/>,
    document.getElementById('page-content')
);


