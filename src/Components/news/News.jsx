import Title from "../title/Title";
import "./News.css";

function News({ title }) {
  return (
    <div className="news">
      <div className="news-title">
        <Title title={"НОВОСТИ"} />
      </div>
      <div className="news-sliders">
        <i><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <g clip-path="url(#clip0_502_211)">
    <path d="M4.08481 9.49995C4.08481 9.15943 4.21482 8.81895 4.47431 8.55934L12.644 0.389768C13.1637 -0.129923 14.0063 -0.129923 14.5257 0.389769C15.0452 0.90925 15.0452 1.75167 14.5257 2.27141L7.29677 9.49995L14.5255 16.7285C15.045 17.2482 15.045 18.0906 14.5255 18.61C14.006 19.1299 13.1634 19.1299 12.6437 18.61L4.47406 10.4406C4.21453 10.1808 4.08481 9.84034 4.08481 9.49995Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_502_211">
      <rect width="19" height="19" fill="white" transform="translate(19) rotate(90)"/>
    </clipPath>
  </defs>
</svg></i>
        <div className="news-slider-one">
          <img src="./Images/doctor.png" alt="" />
          <h2>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h2>
          <span>26.07.2021</span>
          <p>
            С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
            Научно-Практический Медицинский Центр Урологии) при поддержке
            компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical
            Online Services» был проведен мастер-класс в исполнении...
          </p>
          <button>Подробнее</button>
        </div>
        <div className="news-slider-two">
          <img src="./Images/doctor.png" alt="" />
          <h2>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h2>
          <span>26.07.2021</span>
          <p>
            С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
            Научно-Практический Медицинский Центр Урологии) при поддержке
            компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical
            Online Services» был проведен мастер-класс в исполнении...
          </p>
          <button>Подробнее</button>
        </div>
        <div className="news-slider-three">
          <img src="./Images/doctor.png" alt="" />
          <h2>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h2>
          <span>26.07.2021</span>
          <p>
            С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
            Научно-Практический Медицинский Центр Урологии) при поддержке
            компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical
            Online Services» был проведен мастер-класс в исполнении...
          </p>
          <button>Подробнее</button>
        </div>
        <i><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <g clip-path="url(#clip0_502_216)">
    <path d="M14.9151 9.49995C14.9151 9.15943 14.7851 8.81895 14.5256 8.55934L6.35597 0.389768C5.83628 -0.129923 4.99369 -0.129923 4.47421 0.389769C3.95472 0.90925 3.95472 1.75167 4.47421 2.27141L11.7032 9.49995L4.47446 16.7285C3.95498 17.2482 3.95498 18.0906 4.47446 18.61C4.99394 19.1299 5.83653 19.1299 6.35622 18.61L14.5259 10.4406C14.7854 10.1808 14.9151 9.84034 14.9151 9.49995Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_502_216">
      <rect width="19" height="19" fill="white" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)"/>
    </clipPath>
  </defs>
</svg></i>
      </div>
      <div className="news-footer">
        <div className="section-one">
          <a href="#">Посмотреть все новости</a>
          <i><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <g clip-path="url(#clip0_502_221)">
    <path d="M30 14.7546C30 6.76329 23.2715 0.262695 15 0.262695C6.7285 0.262694 1.6232e-06 6.76329 1.27389e-06 14.7546C9.24573e-07 22.746 6.72967 29.2466 15 29.2466C23.2703 29.2466 30 22.746 30 14.7546ZM2.32377 14.7546C2.32377 8.00258 8.01006 2.50776 15 2.50776C21.9899 2.50776 27.6762 8.00258 27.6762 14.7546C27.6762 21.5078 21.9899 27.0015 15 27.0015C8.01006 27.0015 2.32377 21.5067 2.32377 14.7546Z" fill="#00C9C9"/>
    <path d="M13.3966 21.1643L19.2061 15.5517C19.6569 15.1138 19.6569 14.4067 19.2061 13.9689L13.3966 8.35618C12.9621 7.99586 12.3196 7.99586 11.885 8.35618C11.3982 8.75918 11.3413 9.4686 11.7584 9.93897L16.7429 14.7547L11.7583 19.5816C11.3075 20.0194 11.3075 20.7265 11.7583 21.1643C12.2115 21.5999 12.9435 21.5999 13.3966 21.1643Z" fill="#00C9C9"/>
  </g>
  <defs>
    <clipPath id="clip0_502_221">
      <rect width="28.9839" height="30" fill="white" transform="translate(30 0.262695) rotate(90)"/>
    </clipPath>
  </defs>
</svg></i>
        </div>
        <div className="section-two">
          <a href="#">Подписаться на новости</a>
          <i><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <g clip-path="url(#clip0_502_221)">
    <path d="M30 14.7546C30 6.76329 23.2715 0.262695 15 0.262695C6.7285 0.262694 1.6232e-06 6.76329 1.27389e-06 14.7546C9.24573e-07 22.746 6.72967 29.2466 15 29.2466C23.2703 29.2466 30 22.746 30 14.7546ZM2.32377 14.7546C2.32377 8.00258 8.01006 2.50776 15 2.50776C21.9899 2.50776 27.6762 8.00258 27.6762 14.7546C27.6762 21.5078 21.9899 27.0015 15 27.0015C8.01006 27.0015 2.32377 21.5067 2.32377 14.7546Z" fill="#00C9C9"/>
    <path d="M13.3966 21.1643L19.2061 15.5517C19.6569 15.1138 19.6569 14.4067 19.2061 13.9689L13.3966 8.35618C12.9621 7.99586 12.3196 7.99586 11.885 8.35618C11.3982 8.75918 11.3413 9.4686 11.7584 9.93897L16.7429 14.7547L11.7583 19.5816C11.3075 20.0194 11.3075 20.7265 11.7583 21.1643C12.2115 21.5999 12.9435 21.5999 13.3966 21.1643Z" fill="#00C9C9"/>
  </g>
  <defs>
    <clipPath id="clip0_502_221">
      <rect width="28.9839" height="30" fill="white" transform="translate(30 0.262695) rotate(90)"/>
    </clipPath>
  </defs>
</svg></i>
        </div>
      </div>
    </div>
  );
}

export default News;
