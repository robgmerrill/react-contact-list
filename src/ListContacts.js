import React, { Component } from 'react'

class ListContacts extends Component {
render() {
  console.log('Props', this.props)
    return(
      <ol className='contact-list'>
        {this.props.contacts.map(function(contact) {
          return <li key={contact.id}>{contact.name}</li>
        })}
      </ol>
    );
  }
}

export default ListContacts
