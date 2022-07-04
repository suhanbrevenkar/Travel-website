import React from 'react'
import { Link } from 'react-router-dom'
import "../css/style1.css"

export default class Home extends React.Component {
  
    render() {
        return (
            <div>
                <div className="home-img">
                    <img src="./img/Home.jpg" style={{ "width": "100%"}}/>
                    <div class="centered">Find your next tour<br /><Link to="/destination"><button type="button" class="btn btn-warning">Explore</button></Link></div>
                
                </div>
                <div class="gallery-container">
                    <h2 >Trending Countries</h2>
                    <br/>
                        <Link to="/country/India" class="gallery">
                            <img src="img/countries/India.jpg"  />
                            <div class="desc">India</div>
                        </Link>
                        <Link to="/country/Paris" id="mcLaren" class="gallery">
                            <img className="gallery-img" src="img/countries/Paris.jpg" />
                            <div class="desc">Paris</div>
                        </Link>
                        <Link to="/country/USA" id="porsche" class="gallery">
                            <img className="gallery-img" src="img/countries/USA.jpg" />
                            <div class="desc">USA</div>
                        </Link>
                        <Link to="/country/Australia" id="bentley" class="gallery">
                            <img className="gallery-img" src="img/countries/Australia.jpg" />
                            <div class="desc">Australia</div>
                        </Link>
                        <Link to="/country/Italy" id="bugatti" class="gallery">
                            <img className="gallery-img" src="img/countries/Italy.jpg" />
                            <div class="desc">Italy</div>
                        </Link>
                </div>

            </div>
            
        )
    }
}