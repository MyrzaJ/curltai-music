import React from 'react'
import {Link} from 'react-router-dom'

import './folk.css'

const Folk = () => {
    return (
     <>
     
     {/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  className='photo'  src="https://i.ibb.co/tbrV1jC/curltaifolk.jpg" class="d-block w-100" alt="Cutltai folk"/>
    </div>
    <div class="carousel-item">
      <img className='photo'  src="https://i.ibb.co/Qr1sQS6/1.jpg"   class="d-block w-100" alt="Data"/>
    </div>
    <div class="carousel-item">
      <img  className='photo' src="https://i.ibb.co/KjnrChy/image.jpg"   class="d-block w-100" alt="Баттл но не рэп"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}


        <div className="text">

<h5 className='hhh'>
                Новый проект направлен на ознакомление, популяризацию фольклорного жанра различных этносов в исполнении талантливых артистов.
Curltai Folks, это актуальное привлечение и повышение внимания к богатому ресурсу творческого наследия кыргызского народа
                </h5>
<p className='hhh'>Впервые в Кыргызстане! Свободный чемпионат по Айтыш!
19 декабря с 09:00 до 16:00 в Асанбай центре (г. Бишкек) пройдет первый свободный чемпионат по Айтыш, организованный в рамках нового проекта Curltai Folk от Curltai.
Задача проекта - сберечь и обновить бесценное наследие предков, используя передовые технологии, и представить это богатство будущим поколениям в современном формате, со всем уважением к традициям.
<li>- призовой фонд - 500 000 сом.</li>
<li>- 150 000 сом и специальный серебряный пояс чемпиона от спонсоров для победителя</li>
<li>- профессиональное жюри</li>
<li>- голосование на Youtube канале Curltai Folk для выбора “народного” Акына</li>
<li>- музыкальное сопровождение чемпионата от фольклорно-этнографического театра "Ордо Сахна"</li>
Особенностью чемпионата станет online трансляция, сопровождаемая съемкой 360 градусов!
</p>
<Link  to='/bilet'><button className='btn1'>Купить билет</button></Link>
<h3 className='hhh'>ТАКОЕ НЕЛЬЗЬЯ ПРОПУСТИТЬ!</h3>

            </div>
    
    {/* <div className='bilet'>
           <h2 className='ticket'>Приобретайте билеты здесь</h2>
           <h5 className='ticket2'>Vip zone-800 сом</h5>
           <h4 className='ticket3'>Fun zone-500 сом</h4>
           <div className='bank'>
    <form method='POST' action='https://i.ibb.co/JmpW8Jh/1.jpg' >
  Введите сумму оплаты: 
    <input className='sum' type='text' name='sum' /> <br />
  Введите количество билетов: 
    <input className='orderid' type='number' name='orderid' /> <br />
  <input className='oplatit' type='submit' value='Перейти к оплате' />
</form>
      </div>
    </div> */}

     </>
    )
}

export default Folk