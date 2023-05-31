import axios from 'axios'
// import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../../Context/Context'
import { useContext } from 'react'
// Fname
// Email
// institution_id
// gender (1)
// 
export const  RegisterStud =  () =>   {
    const {setToken} = useContext(Context)
    // console.log(context)
    const handleSub =  event => {
        event.preventDefault()
        let data =  new FormData(event.target)
        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "RCPC=7581978bbbf455f321e165ac20bee1a9; _csrf=38ed1424278553d8004955a95b5d3e05d1f51038905ecb5b05c1ba0f799e6f9ea%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22HbcshP2bAv6R_rsUlSJh4EKiLmOvEhvu%22%3B%7D");

var urlencoded = new URLSearchParams();
urlencoded.append("name", data.get("name"));
urlencoded.append("lastname", data.get("lastname"));
urlencoded.append("phone", data.get("number"));
urlencoded.append("password", data.get("password"));

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("http://tutor.shini.uz/api/user/sign-up-student", requestOptions)
.then(response => response.json())
  .then(result =>{
    console.log(result)
    let token = result?.data?.token
    if(token !== null && token !== undefined){
        setToken(token)
    }
  })
  .catch(error => console.log('error', error));
    }
    return (
        <div className='registratsiya'>
            <div className="item-registratsiya">
                <div className="top-registratsiya">
                    <NavLink to='/ChoseType'>
                        <span>
                            <i class="fa-sharp fa-solid fa-arrow-left-long"></i>  Вернуться обратно
                        </span>
                    </NavLink>
                </div>
                <div className="register-inputs">

                    <form id='form' onSubmit={handleSub}></form>
                    <div className="passwordrecovery">
                        <div className="top-recovery">
                            <p>
                                Регистрация
                            </p>
                        </div>
                        <span>
                            <label htmlFor="email-recovery">Имя</label>
                            <input form='form' type="text" name="name" id="email-recovery" />
                        </span>
                        <span>
                            <label htmlFor="parol">Фамилия</label>
                            <input form='form' name="lastname" type="text" id='parol' />
                        </span>
                        <span>
                            <label htmlFor="fname">Отчество</label>
                            <input form='form' name="lastname" type="text" id='fname' />
                        </span>
                        <span>
                            <label htmlFor="email">Почта</label>
                            <input form='form' name="lastname" type="text" id='email' />
                        </span>
                        <span>
                            <label htmlFor="email-recovery">Номер телефона</label>
                            <input type="text" name="number" id="email-recovery" form='form' />
                        </span>
                        <span>
                            <label htmlFor="institut-id">Institut ID</label>
                            <input type="text" name="number" id="email-recovery" form='form' />
                        </span>
                        <span>
                            <label htmlFor="parol">Пароль</label>
                            <input name='password' type="text" form='form' id='parol' />
                        </span>

                            <button type='submit' form='form'>
                                Зарегестрироваться
                            </button>
                        <NavLink to='/ConfrimCode' className='navlink'>
                        </NavLink>

                    </div>


                    <div className="bottom-man-emotion">
                        <div className="man">
                            <div className="massage-man">
                                <span>
                                    Наберем обороты!
                                </span>
                            </div>
                            <img src="./images/register/superman.png" alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
