import React from 'react'
import {connect} from 'react-redux'
import style from './CreateProject.module.css'
import {createProject} from '../store/actions/projectActions'
import {Redirect} from "react-router-dom";

class CreateProject extends React.Component {

    state = {
        title:'',
        content:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })

    };
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.createProject(this.state);
        this.props.history.push('/');
    }
    render() {
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        return (
            <div className={style.formContainer}>
                <form onSubmit={this.handleSubmit} action="" className={style.form}>
                    <h1 className={style.title}>Make New Record</h1>
                    <div className={style.inputField}>
                        <label htmlFor="" className={style.labelField}>Choose your master</label>
                        {/*<input type="text" id="title" onChange={this.handleChange}/>*/}
                        <select id="title" onChange={this.handleChange} className={style.select}>
                            <option value="Dmitryi Romanov" className={style.option}>Dmitryi Romanov</option>
                            <option value="Ekaterina Petrova">Ekaterina Petrova</option>
                            <option value="Alex Fortune">Alex Fortune</option>
                            <option value="Oleg Lolukov">Oleg Lolukov</option>
                            <option value="Liza Ertova">Liza Ertova</option>
                            <option value="Vasya Olutrem">Vasya Olutrem</option>
                            <option value="Georg Truka">Georg Truka</option>
                        </select>
                    </div>
                    <div className={style.inputField}>
                        <label htmlFor="content" className={style.labelField}>Choose time</label>
                        <input type="time" id="content" min="09:30" max="21:00" step="1800" onChange={this.handleChange}/>
                        {/*<textarea id="content" onChange={this.handleChange}></textarea>*/}
                    </div>
                    <div className='inputField'>
                        <button className={style.btnCreate}>Create</button>
                    </div>
                </form>
            </div>

        )

    };
}
const mapStateToProps =(state)=>{
    return {
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)