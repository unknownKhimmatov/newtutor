import React, { useContext } from 'react'
import OurServisesDesc from '../Room/OurServisesDesc'
import Footer from "../home/Footer"
import SebjectAndTuition from "../Room/SubjectsAndTuitionFees"
import FooterSearch from "../home/FooterSearch"
import WeekBusyDays from '../Room/WeekBusyDays'
import FeadbackTheTeacher from '../Room/FeadbackTheTeacher'
import { Header } from '../Header/Header'
import { Context } from '../../Context/Context'

export default function PrivoteRoom() {

    const { dark, setDark } = useContext(Context)

    return (
        <>
            <Header />
            <div className='proviteroom'>
                <div className="item-room">
                    <div className="room-saidbar">
                        <div className="saidbar-list">
                            <ul>
                                <li>
                                    О преподавателе
                                </li>
                                <li>
                                    Опыт работы и документы
                                </li>
                                <li>
                                    Дисциплины и цены
                                </li>
                                <li>
                                    Шахматка занятости
                                </li>
                                <li>
                                    Отзывы
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="main-room-information">

                        {/* top room  */}
                        <div className="top-room-information">
                            <div className="roomava">
                                <img src="./images/roomava.png" alt="" />
                            </div>
                            <div className="desc-information-room">
                                <div className="name-and-rating-room">
                                    <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                        Рафаэль Ройтман
                                    </h3>
                                    <div className="rating-room">
                                        <span style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}> <i class='bx bxs-star star' ></i> 5.0 </span>
                                        <span style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}> <i class='bx bx-user'></i>178 оценок</span>
                                        <span style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }} className='pur'> <i class='bx bx-purchase-tag-alt purchase_rotate_room'></i> от <o>15 $</o> </span>
                                    </div>
                                </div>
                                <div className="buttons-room">
                                    <button>Написать преподавателю</button><button>Добавить в избранное</button>
                                </div>
                            </div>
                        </div>
                        <OurServisesDesc />

                        {/* education and experience */}
                        <div className="education-and-experience">

                            {/* education */}
                            <div className="education">
                                <div className="title-education">
                                    <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                        Образование
                                    </h3>
                                    <span>
                                        <p style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                            <i class='bx bxs-check-circle' ></i> Высшая школа дизайна и программирования, г.Москва - (2008-2012 гг.)
                                        </p>
                                        <p style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                            <i class='bx bxs-check-circle' ></i>   Российская академия дизайна им.А.Лебедева (2012-2013 гг.)
                                        </p>

                                    </span>
                                </div>
                                <img src="./images/room/dots.png" alt="dots" />
                            </div>

                            {/* experience */}
                            <div className="experience">
                                <div className="item-experience">
                                    <div className="title-experience">
                                        <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }} >
                                            Опыт работы
                                        </h3>
                                        <span>
                                            <p style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                                <i class='bx bxs-check-circle' ></i> Учебный центр «ProWEB» (2013г.)
                                            </p>
                                            <p style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                                Институт дизайна и графики им.Луначарского (2014г.)
                                            </p>
                                        </span>
                                    </div>
                                    <div className="sertificats">
                                        <img src="./images/room/sertifikat (1).png" alt="" />
                                        <img src="./images/room/sertifikat (3).png" alt="" />
                                        <img src="./images/room/sertifikat (2).png" alt="" />
                                        <img src="./images/room/sertifikat (4).png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* offline teacher place  */}
                        <div className="offline-teacher-place">
                            <div className="title-offline-teach">
                                <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                    Place of teaching offline
                                </h3>
                                <span style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                    Узбекистан, г.Ташкент, ул.Абдулла Каххара, 23 <a href="" style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Посмотреть на карте</a>
                                </span>
                            </div>
                        </div>

                        <SebjectAndTuition />
                        <WeekBusyDays />
                        <FeadbackTheTeacher />

                    </div>
                </div>
            </div>
            <FooterSearch />
            <Footer />
        </>
    )
}
