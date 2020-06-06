import React from 'react';
import ReactDOM from 'react-dom';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            current_password: '',
            name: '',
            email: '',
            cf_handle: '',
            institution: '',
            new_password: '',
            confirm_password: '',
            can_submit: false,
        }
    }

    async componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        axios.get('/api/user').then((res) => {
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
        if (this.state.current_password == '' ||
            this.state.name == '' ||
            this.state.email == '' ||
            this.state.cf_handle == '') {
            this.setState({
                can_submit: false
            });
        }
        else if (this.state.new_password && this.state.new_password !== this.state.confirm_password) {
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

    handleCurrentPasswordChange = (e) => {
        this.setState({
            current_password: e.target.value
        }, () => {
            this.checkCanSubmit();
        });
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

    handleNewPasswordChange = (e) => {
        this.setState({
            new_password: e.target.value
        }, () => {
            this.checkCanSubmit();
        });
    }

    handleConfirmPasswordChange = (e) => {
        this.setState({
            confirm_password: e.target.value
        }, () => {
            this.checkCanSubmit();
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        axios.post('/api/settings', {
            current_password: this.state.current_password,
            name: this.state.name,
            email: this.state.email,
            cf_handle: this.state.cf_handle,
            institution: this.state.institution,
            new_password: this.state.new_password,
            password_confirmation: this.state.confirm_password,
        }).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Your profile has been saved',
                showConfirmButton: false,
                timer: 2000
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
            <div>
                <div></div>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Edit profile for {this.state.username}</div>

                                <div className="card-body">
                                    <form method="POST" action="#">

                                        <div className="form-group row">
                                            <label htmlFor="password" className="col-md-3 col-form-label text-md-right">Password <span className="text-red">*</span></label>

                                            <div className="col-md-8">
                                                <input id="password" type="password" className="form-control" name="password" onChange={this.handleCurrentPasswordChange} required autoComplete="password" autoFocus />
                                            </div>
                                        </div>

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

                                        <div className="form-group row">
                                            <label htmlFor="new-password" className="col-md-3 col-form-label text-md-right">New Password</label>

                                            <div className="col-md-8">
                                                <input id="new-password" type="password" className="form-control" name="new_password" onChange={this.handleNewPasswordChange} autoComplete="new-password" />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="confirm-password" className="col-md-3 col-form-label text-md-right">Confirm Password</label>

                                            <div className="col-md-8">
                                                <input id="confirm-password" type="password" className="form-control" name="password_confirmation" onChange={this.handleConfirmPasswordChange} autoComplete="confirm-password" />
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
                </div>
            </div>
        );
    }
}

export default EditProfile;

if (document.getElementById('edit-frontend-user-profile')) {
    ReactDOM.render(<EditProfile />, document.getElementById('edit-frontend-user-profile'));
}
