
import {Link} from 'react-router-dom'
import './home.css';

export default function Home() {
    return (
       <div className="download">
  <aside className="download__section">
    <div className="download__content">
      <div className="download__text-block">
        <h2 className="download__title">
          Download Now
          <span className="download__subtitle">Lorem Ipsum</span>
        </h2>

        <Link to="/" className="download__button">
          <svg
            fill="white"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
          </svg>
          &nbsp; Download now
        </Link>
      </div>
    </div>

    <div className="download__image-wrap">
      <img className="download__image-main" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
    </div>
  </aside>

  <div className="download__secondary-image-wrap">
    <img className="download__image-secondary" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
  </div>

  <h1 className="download__headline">Lorem Ipsum Yojo</h1>
</div>

    );
}
