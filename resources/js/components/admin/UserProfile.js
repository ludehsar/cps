import React from 'react';
import ReactDOM from 'react-dom';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            name: '',
            email: '',
            cf_handle: '',
            institution: '',
            can_submit: false,
        }
    }

    async componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        axios.get('/api/user/' + this.props.userId).then((res) => {
            this.setState({
                username: res.data.username,
                name: res.data.name,
                email: res.data.email,
                cf_handle: res.data.cf_handle,
                institution: res.data.institution
            }, () => {
                this.checkCanSubmit();
            });
        });
    }

    checkCanSubmit = () => {
        if (this.state.name == '' ||
            this.state.email == '' ||
            this.state.cf_handle == '') {
            this.setState({
                can_submit: false
            });
        }
        else {
            this.setState({
                can_submit: true
            });
        }
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        }, () => {
            this.checkCanSubmit();
        });
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        }, () => {
            this.checkCanSubmit();
        });
    }

    handleCFHandleChange = (e) => {
        this.setState({
            cf_handle: e.target.value
        }, () => {
            this.checkCanSubmit();
        });
    }

    handleInstitutionChange = (e) => {
        this.setState({
            institution: e.target.value
        }, () => {
            this.checkCanSubmit();
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        axios.post('/api/user/change/' + this.props.userId, {
            name: this.state.name,
            email: this.state.email,
            cf_handle: this.state.cf_handle,
            institution: this.state.institution,
        }).then((res) => {
            Swal.fire({
                icon: 'success',
                title: 'Your profile has been saved',
                text: res.data,
                showConfirmButton: false,
                timer: 3000
            });
        }).catch((response) => {
            Swal.fire({
                position: 'bottom-end',
                text: 'Something went wrong! Please check your information.',
                showConfirmButton: false,
                timer: 2000
            });
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-xl-4 order-xl-2">
                    <div className="card card-profile">
                        <img src="/img/user-cover.jpg" alt="Image placeholder" className="card-img-top" />
                        <div className="row justify-content-center">
                            <div className="col-lg-3 order-lg-2">
                                <div className="card-profile-image">
                                    <img src="//userpic.codeforces.com/518078/title/14587a4cfab6d171.jpg" className="rounded-circle" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-5">
                            <div className="row">
                                <div className="col">
                                    <div className="card-profile-stats d-flex justify-content-center">
                                        <div>
                                            <span className="heading">22</span>
                                            <span className="description">Max Rating</span>
                                        </div>
                                        <div>
                                            <span className="heading">10</span>
                                            <span className="description">Current Rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h5 className="h3">
                                    Rashedul_Alam
                                </h5>
                                <div className="h5 font-weight-300">Expert</div>
                                <div>{this.state.institution}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 order-xl-1">
                    <div className="card">
                        <div className="card-header">Edit profile for {this.state.username}</div>

                        <div className="card-body">
                            <form method="POST" action="#">

                                <div className="form-group row">
                                    <label htmlFor="name" className="col-md-3 col-form-label text-md-right">Name <span className="text-red">*</span></label>

                                    <div className="col-md-8">
                                        <input id="name" type="text" className="form-control" defaultValue={this.state.name} name="name" onChange={this.handleNameChange} required autoComplete="name" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="email" className="col-md-3 col-form-label text-md-right">Email Address <span className="text-red">*</span></label>

                                    <div className="col-md-8">
                                        <input id="email" type="email" className="form-control" defaultValue={this.state.email} name="email" onChange={this.handleEmailChange} required autoComplete="email" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="cf-handle" className="col-md-3 col-form-label text-md-right">CF Handle <span className="text-red">*</span></label>

                                    <div className="col-md-8">
                                        <input id="cf-handle" type="text" className="form-control" defaultValue={this.state.cf_handle} name="cf_handle" onChange={this.handleCFHandleChange} required autoComplete="codeforces-handle" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="institution" className="col-md-3 col-form-label text-md-right">Institution</label>

                                    <div className="col-md-8">
                                        <input id="institution" type="text" className="form-control" defaultValue={this.state.institution} name="institution" onChange={this.handleInstitutionChange} autoComplete="institution" />
                                    </div>
                                </div>

                                <div className="form-group row mb-0">
                                    <div className="col-md-8 offset-md-3">
                                        <button type="submit" className="btn btn-default" disabled={!this.state.can_submit} onClick={this.submitForm}>
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;

const rootElement = document.getElementById('user-profile');

if (rootElement) {
    ReactDOM.render(<UserProfile userId={rootElement.getAttribute('data-user-id')} />, rootElement);
}
