import React from 'react'
import { Link } from 'react-router-dom'
import "../css/style1.css"

export default class Destination extends React.Component {
    render() {
        return (
            <div>
                <h1>Choose Your Destination</h1>
                <div class="gallery-container">
                        <Link to="/country/INDIA" class="gallery">
                            <img src="img/countries/India.jpg"  />
                            <div class="desc">India</div>
                        </Link>
                        <Link to="/country/SPAIN" class="gallery">
                            <img src="img/countries/Spain.jpg"  />
                            <div class="desc">Spain</div>
                        </Link>
                        <Link to="/country/BALI" class="gallery">
                            <img src="img/countries/Bali.jpg"  />
                            <div class="desc">Bali</div>
                        </Link>
                        <Link to="/country/PARIS" id="mcLaren" class="gallery">
                            <img className="gallery-img" src="img/countries/Paris.jpg" />
                            <div class="desc">Paris</div>
                        </Link>
                        <Link to="/country/TURKEY" class="gallery">
                            <img src="img/countries/Turkey.jpg"  />
                            <div class="desc">Turkey</div>
                        </Link>
                        <Link to="/country/USA"class="gallery">
                            <img className="gallery-img" src="img/countries/USA.jpg" />
                            <div class="desc">USA</div>
                        </Link>
                        <Link to="/country/AUSTRALIA" class="gallery">
                            <img className="gallery-img" src="img/countries/Australia.jpg" />
                            <div class="desc">Australia</div>
                        </Link>
                        <Link to="/country/DUBAI" class="gallery">
                            <img src="img/countries/Dubai.jpg"  />
                            <div class="desc">Dubai</div>
                        </Link>
                        <Link to="/country/ITALY"class="gallery">
                            <img className="gallery-img" src="img/countries/Italy.jpg" />
                            <div class="desc">Italy</div>
                        </Link>
                        <Link to="/country/SWITZERLAND" class="gallery">
                            <img className="gallery-img" src="img/countries/Switzerland.jpg" />
                            <div class="desc">Switzerland</div>
                        </Link>
                        <Link to="/country/SINGAPORE"class="gallery">
                            <img className="gallery-img" src="img/countries/Singapore.jpg" />
                            <div class="desc">Singapore</div>
                        </Link>
                </div>

            </div>
                
            
        )
    }
}