import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile({ email, orders, deleteOrder }) {
  return (
    <section className="profile">
      <h1 className="profile__heading">Привет, {email}</h1>
      <h2 className="profile__heading2">Ваши бронирования:</h2>
      {orders && orders.length ? (
        <table className="profile__orders">
          <tbody>
            {orders.map(order => 
              <tr 
                key={order._id}
                param-id={order._id}
                className={`profile__order`}>
                <td className="profile__equipment">
                  <Link to={`/equipment/${order.slug}/specs`}>{order.equipment}</Link>
                </td>
                <td className="profile__date">
                  {order.date}
                </td>
                <td className="profile__reject">
                  <button className="profile__reject-button" onClick={deleteOrder}>+</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        ) : (
          <h3 className="profile__no-orders">
            Вы к нам пока не записывались
          </h3>
        )
      }
    </section>
  )
}

export default Profile;