import React from 'react';

class ContactList extends React.Component {
  render() {
    const contacts = this.props.contacts;
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ol>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} (#{contact.id})
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ContactList;