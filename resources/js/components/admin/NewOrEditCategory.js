import React from 'react';
import ReactDOM from 'react-dom';

class NewOrEditCategory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category_name: '',
            can_submit: false,
        }
    }

    async componentDidMount() {
        if (this.props.categoryId != null) this.getCategory();
    }

    getCategory = () => {
        axios.get('/api/categories/' + this.props.categoryId).then((res) => {
            this.setState({
                category_name: res.data.category_name
            }, () => {
                this.checkCanSubmit();
            });
        });
    }

    checkCanSubmit = () => {
        if (this.state.category_name == '') {
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

    handleCategoryNameChange = (e) => {
        this.setState({
            category_name: e.target.value
        }, () => {
            this.checkCanSubmit();
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        if (this.props.categoryId == null) {
            axios.post('/api/category/new', {
                category_name: this.state.category_name
            }).then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: res.data,
                    showConfirmButton: false,
                    timer: 3000
                });
                window.LaravelDataTables["category-table"].ajax.reload();
            }).catch((err) => {
                Swal.fire({
                    position: 'bottom-end',
                    text: err.data,
                    showConfirmButton: false,
                    timer: 2000
                });
            });
        }
        else {
            axios.post('/api/categories/' + this.props.categoryId + '/edit', {
                category_name: this.state.category_name
            }).then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: res.data,
                    showConfirmButton: false,
                    timer: 3000
                });
                window.LaravelDataTables["category-table"].ajax.reload();
            }).catch((err) => {
                Swal.fire({
                    position: 'bottom-end',
                    text: err.data,
                    showConfirmButton: false,
                    timer: 2000
                });
            });
        }
        this.setState({
            category_name: ''
        }, () => {
            this.checkCanSubmit();
        });
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form method="POST" action="#">
                        <div className="card">
                            <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col-8">
                                        <h3 className="mb-0">Add A New Category</h3>
                                    </div>
                                    <div className="col-4 text-right">
                                        <button type="submit" className="btn btn-sm btn-primary" disabled={!this.state.can_submit} onClick={this.submitForm}>Save</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="heading-small text-muted mb-4">Category information</h6>
                                <div className="pl-lg-4">
                                    <div className="form-group row">
                                        <label htmlFor="category-name" className="col-md-3 col-form-label text-md-right">Category Name <span className="text-red">*</span></label>

                                        <div className="col-md-8">
                                            <input id="category-name" type="text" className="form-control" name="category_name" onChange={this.handleCategoryNameChange} defaultValue={this.state.category_name} required autoComplete="password" autoFocus />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewOrEditCategory;

const rootElement = document.getElementById('new-category-form');

if (rootElement) {
    window.NewOrEditCategory = ReactDOM.render(<NewOrEditCategory categoryId={rootElement.getAttribute('data-id')} />, rootElement);
}
