import React from 'react';

class Modal extends React.Component {
  render() {
    const { isOpen, formValues, toggleModal } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <div className="modal">
        <h2>Ваші данні:</h2>
        <p>Ім'я: {formValues.name}</p>
        <p>Email: {formValues.email}</p>
        <p>Телефон: {formValues.phone}</p>
        <button onClick={toggleModal}>Закрити</button>
      </div>
    );
  }
}

export default Modal;