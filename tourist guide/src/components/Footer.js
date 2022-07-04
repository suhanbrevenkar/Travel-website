import React from 'react'
import { Link } from 'react-router-dom'
import "../css/footer.css"

export default class Home extends React.Component {
    render() {
        return (
            <footer>
                <h3>Follow us.</h3>
                <div class="rounded-social-buttons">
                    <a class="social-button facebook" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a class="social-button twitter" href="https://twitter.com/home" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a class="social-button instagram" href="https://www.instagram.com/iamvinodnavhi/" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
            </footer>
        )
    }
}