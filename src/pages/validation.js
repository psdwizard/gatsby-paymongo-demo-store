import React, { useState } from 'react';
import CreditCardInput from 'react-credit-card-input';

const Validation = () => {

  const handleData = (e) => {
    const name = e.target.name
    const value = e.target.value
    // setData({
    //   ...paymentData,
    //   [name]: value
    // })
  }

  return (
    <div>
    <form>
    <CreditCardInput
      onError={({ inputName, err }) => console.log(`credit card input error: ${err}`)}
      cardCVCInputProps={{
        name: 'props',
        onBlur: e => console.log('cvc blur', e),
        onChange: e => console.log('cvc change', e.target.value),
        onError: err => console.log(`cvc error: ${err}`)
      }}
      cardExpiryInputProps={{
        onBlur: e => console.log('expiry blur', e),
        onChange: e => console.log('expiry change', e),
        onError: err => console.log(`expiry error: ${err}`)
      }}
      cardNumberInputProps={{
        onBlur: e => console.log('number blur', e),
        onChange: e => console.log('number change', e),
        onError: err => console.log(`number error: ${err}`)
      }}
    />

    <button type="submit" > value </button>

    </form>
    </div>
  )
}

export default Validation