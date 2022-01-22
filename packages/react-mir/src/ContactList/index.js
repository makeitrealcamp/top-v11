import React from 'react';
import './style.scss';

class ContactList extends React.Component {
  render() {
    const contacts = this.props.contacts;
    return (
      <div className='contact-list'>
        <h3>{this.props.title}</h3>
        {/* <div>
          Image
          name
          skills
          description
        </div> */}
        <ol>
          {contacts.map((contact, i) => (
            <li key={contact.id || i}>
              {contact.name} (#{contact.id})
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ContactList;