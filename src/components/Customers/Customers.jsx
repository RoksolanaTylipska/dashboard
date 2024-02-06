import React, { useState } from 'react';
import './Customers.css';
import customers from '../../customers.json';
import classNames from 'classnames';

function Customers() {
  let [people, setPeople] = useState(customers);

  let findCustomer = (event) => {
    let filteredPeople = customers.filter(person =>
      person.CustomerName.toLowerCase().includes(event.target.value.toLowerCase()) ||
      person.Country.toLowerCase().includes(event.target.value.toLowerCase()) ||
      person.Company.toLowerCase().includes(event.target.value.toLowerCase())

    );
    setPeople(filteredPeople);
  }

  let onChangeStatus = (index) => {
    let updatedPeople = [...people];
    if (updatedPeople[index].Status === "Active") {
      updatedPeople[index].Status = "Inactive";
    } else if (updatedPeople[index].Status === "Inactive") {
      updatedPeople[index].Status = "Active";
    }
    setPeople(updatedPeople);
  }

  return ( 
    <article className='customers'>
      <section className='customers__container'>
        <div>
          <h3 className='customers__title'>All Customers</h3>
          <p className='customers__text'>Active Members</p>
        </div>
        <div className='customers__input-container'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 21L16.65 16.65" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input 
            className='customers__input-text' 
            type="text" 
            placeholder='Search'
            onChange={findCustomer}
            />
        </div>
      </section>

      <section className='customers__table-container'>
        <table className='customers__table'>
          <thead>
            <tr>
              <th className='customers__table-header' scope="col">Customer Name</th>
              <th className='customers__table-header' scope="col">Company</th>
              <th className='customers__table-header' scope="col">Phone Number</th>
              <th className='customers__table-header' scope="col">Email</th>
              <th className='customers__table-header' scope="col">Country</th>
              <th className='customers__table-header' scope="col">Status</th>
            </tr>
          </thead>
          <tbody className='customers__table-body'>
            {people.map((customer, index) => (
              <tr key={customer.CustomerName}>
                <td>{customer.CustomerName}</td>
                <td>{customer.Company}</td>
                <td>{customer.PhoneNumber}</td>
                <td>{customer.Email}</td>
                <td>{customer.Country}</td>
                <td>
                  <button
                    className={classNames('customers__table-body-button', {
                      'customers__table-body-button--active': customer.Status === "Active",
                      'customers__table-body-button--inactive': customer.Status === "Inactive",
                    })}
                    onClick={() => onChangeStatus(index)}
                  >
                    {customer.Status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className='customers__pagination'>
        <p className='customers__pagination-text'>Showing data 1 to 8 of 256K entries</p>
          <div className='pagination'>
            <button className='pagination__button'>
              <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.936 6.392L0.176 3.668L2.936 0.944H4.664L1.892 3.668L4.664 6.392H2.936Z" fill="#404B52"/>
              </svg>
            </button>
            <button className='pagination__button pagination__button--active'>
              1
            </button>
            <button className='pagination__button'>
              2
            </button>
            <button className='pagination__button'>
              3
            </button>
            <button className='pagination__button'>
              4
            </button>
            <p>...</p>
            <button className='pagination__button'>
              40
            </button>
            <button className='pagination__button'>
              <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.344 0.944H2.072L4.832 3.668L2.072 6.392H0.344L3.116 3.668L0.344 0.944Z" fill="#404B52"/>
              </svg>
            </button>
          </div>
      </section>
    </article>
  );
}

export default Customers;