import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from 'date-fns';
import { connect } from 'react-redux';
import { newOrderRequest } from './actionCreators';



class NewOrder extends React.Component {

  state = {
    startDate: Date.now(),
    serviceType: '',
    serviceComment: ''
  };



  handleDateChange = (date) => {
    console.log(date, 123, new Date(date).getTime())
    this.setState({
      startDate: date
    })
  }
  handleChange = (evt) => {
    console.log(evt.target)
    this.setState({ [evt.target.name]: evt.target.value });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const { serviceType, serviceComment, startDate } = this.state

    this.props.newOrder({ serviceType, serviceComment, startDate })
  }



  render() {
    const { serviceType, serviceComment, startDate } = this.state
    return (
      <div className='neworder'>
        <h2 className='neworder-subtitle subtitle'>Create new order</h2>
        <form className='neworder-form form' onSubmit={this.handleSubmit}>
          <div className='form-wrapper'>
            <label className='form-select'>
              <select name='serviceType' value={serviceType} onChange={this.handleChange} required>
                <option value='' disabled selected hidden>Choose service</option>
                <optgroup label='HAIRCUT' >
                  <option value='First haircut'>First haircut/36 $</option>
                  <option value='Man haircut'> Man's haircut/40 $</option>
                  <option value='Haircut machine'>Haircut machine/30 $</option>
                  <option value='Children haircut'>Children's haircut/35 $</option>
                  <option value='Fathers and children'>Fathers and children/50 $</option>
                </optgroup>
                <optgroup label='SHAVING' >
                  <option value='GENTS Royal Shave'>GENTS Royal Shave/65 $</option>
                  <option value='Beard Trim'> Beard Trim/30 $</option>
                  <option value='Head Trim'>Head Trim/40 $</option>
                </optgroup>
                <optgroup label='OTHER SERVICES' >
                  <option value='Hair Coloring'>Hair Coloring/18 $</option>
                  <option value='Eyebrow'> Eyebrow/15 $</option>
                </optgroup>
                <optgroup label='FACIALS' >
                  <option value='Signature Facial'> Signature Facial/60 $</option>
                </optgroup>
              </select>
            </label>
            <div className='form-datepicker' name='startDate' value={startDate} required>

              <DatePicker
                selected={this.state.startDate}
                minDate={Date.now()}
                onChange={this.handleDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
                minTime={setHours(setMinutes(new Date(), 0), 9)}
                maxTime={setHours(setMinutes(new Date(), 30), 19)}
              />
            </div>
          </div>
          <textarea className='form-textarea' name='serviceComment' value={serviceComment} onChange={this.handleChange} placeholder='Leave your comment' ></textarea>
          <button className='button neworder-button' value='submit'> Enter </button>
        </form>

      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {

    // implicitly forwarding arguments
    newOrder: (data) =>
      dispatch(newOrderRequest(data))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NewOrder)