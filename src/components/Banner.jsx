import MustangShelby from '../assets/images/ShelbyMustang.png'
import './Banner.css';

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h2>Isso que é carro de verdade!</h2>
        {/*<p>Os clássicos que marcaram época no Brasil</p> */}
        <img src={MustangShelby} alt="Primeiro Mustang Shelby" />
      </div>
    </section>
  )
}

export default Banner;