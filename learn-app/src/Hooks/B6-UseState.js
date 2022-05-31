import React, { useState } from 'react'


export default function B6UseState() {

  // Eg 1
  const [counter, setCounter] = useState(1)

  const handleIncrease = () => {
    setCounter(counter + 1)
  }


  // Eg 2 callback in set State
  const [counter2, setCounter2] = useState(1)


  const handleIncrease1 = () => {
    setCounter2(prevState => prevState + 1)

    setCounter2((prevState) => {
      return prevState +1
    })
  }

  // Eg 3 callback in initial State

  const coin = [100, 200, 300]

 

  const [counter3, setCounter3] = useState(() => {
    const total = coin.reduce((total, curValue) => total + curValue)
    return total;
  })

  const handleIncrease2 = () => {
    setCounter3(counter3 + 1)
  }

  // Eg 4 Pratice - Update Info
  const [info, setInfo] = useState({
    name: 'Phạm Tuấn Anh',
    age: 18,
  })

  const handleUpdate = () => {
    // setInfo(prevState => {
    //   //...login
    //   return {
    //     ...prevState,
    //     address : 'HCM , VN',
    //   }
    // })

    setInfo({
      ...info,
      address : 'HCM , VN',
    })
  }

  //  Eg 5 Random Gift Item
  const gifts = ['Intel 9 12800', 'PS5', 'RAM 32GB 512GB']

  const [gift, setGift] = useState('Chưa có phần thưởng')

  const handleGift = () => {
    const i = Math.floor(Math.random()* gifts.length);
    return setGift(gifts[i])
  }

  //  Eg 6 Two way binding
  const [text, setText] = useState('');

  // Eg 7 Radio and Checknox
  const cousres = [
    {
      id: 1,
      name: 'Java'
    },
    {
      id: 2,
      name: 'PHP'
    },
    {
      id: 3,
      name: 'C Sharp'
    },
  ]

  // Radio Type
  const [radio, setRadio] = useState(1)
  const handleRadio = () => {
    console.log({id : radio});
  }

  // Checkbox Type
  const [check, setCheck] = useState([])
  const handleCheckBox = () => {
    console.log({id : check});
  }

  const handleCheck = (id) => {
    setCheck(prev => {
      const isChecked = check.includes(id);
      if(isChecked) {
        // uncheck
        return check.filter(item => item !== id)
      }
      else {

        return [...prev, id]
      }
    })
  }
  return (
    <div>
      {/*  Eg 1 */}
      <p>{counter}</p>
      <button onClick={handleIncrease}>Increase</button>

      {/*  Eg 2  callback in set State */}
      <p>{counter2}</p>
      <button onClick={handleIncrease1}>Increase</button>

      {/*  Eg 3 callback in initial State */}
      <p>{counter3}</p>
      <button onClick={handleIncrease2}>Increase</button>

      {/* Eg 4 Pratice - Update Info */}
      <p>{JSON.stringify(info)}</p>
      <button onClick={handleUpdate}>Update</button>

      {/* Eg 5 Random Gift Item */}
      <h1>{gift}</h1>
      <button onClick={handleGift}>Take Gift</button>

      {/* Eg 6 Two way binding */}
      <input 
        type='text' 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h1>{text || 'Chua co text'}</h1>
      <button onClick={() => setText('O SO S')}>Change</button>
      <hr/>


      {/* Eg 7 Radio and Checknox */}
      {/* Checkbox */}

      {cousres.map(item =>
        <div key={item.id}>
          <input 
            type='checkbox'
            checked = {check.includes(item.id)}
            onChange={() => handleCheck(item.id)}
          />
          {item.name}
        </div>
      )}
      <button onClick={handleCheckBox}>Send</button>
      <hr/>

      {/* Radio */}
      {cousres.map(item =>
        <div key={item.id}>
          <input 
            type='radio'
            checked = {radio === item.id}
            onChange={() => setRadio(item.id)}
          />
          {item.name}
        </div>
      )}
      <button onClick={handleRadio}>Send</button>

    </div>

  )
}
