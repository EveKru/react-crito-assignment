import React from 'react'
import Logo from '../assets/images/logotype-white.svg'
import Lines from '../assets/images/background-lines-white-right.svg'

const Footer = () => {
  return (
    <footer>
        <div className='large-footer'>
            <div class="lines">
                <img src={Lines} alt=""/>
            </div>
            <div className='container'>
                <div className="logotype">
                    <img src={Logo} alt=""/>
                    <p>Lorem ipsum, dolor sit amet <br/> consectetur adipisicing elit. <br/> Lorem ipsum, dolor <br/> sit amet consectetur <br/> adipisicing elit.</p>
                </div>
                <div className="company">
                    <h3>Company</h3>
                    <div className="b">
                        <a href="#">About</a>
                    </div>
                    <div className="a">
                        <a href="#">Features</a>
                    </div>
                    <div className="a">
                        <a href="#">Works</a>
                    </div>
                    <div className="a">
                        <a href="#">Career</a>
                    </div>
                </div>
                <div className="help">
                    <h3>Help</h3>
                    <div className="b">
                        <a href="#">Customer Support</a>
                    </div>
                    <div className="a">
                        <a href="#">Delivery Details</a>
                    </div>
                    <div className="a">
                        <a href="#">Terms & Conditions</a>
                    </div>
                    <div className="a">
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
                <div className="resources">
                    <h3>Resources</h3>
                    <div className="b">
                        <a href="#">Free eBooks</a>
                    </div>
                    <div className="a">
                        <a href="#">Development tutorial</a>
                    </div>
                    <div className="a">
                        <a href="#">How To - Blog</a>
                    </div>
                    <div className="a">
                        <a href="#">YouTube Playlist</a>
                    </div>
                </div>
                <div className="link">
                    <h3>Link</h3>
                    <div className="b">
                        <a href="#">Free eBooks</a>
                    </div>
                    <div className="a">
                        <a href="#">Development tutorial</a>
                    </div>
                    <div className="a">
                        <a href="#">How To - Blog</a>
                    </div>
                    <div className="a">
                        <a href="#">YouTube Playlist</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="small-footer">
            <div className="container">
                <div className="copyright-text">
                    <p> <i className="fa-regular fa-copyright"></i> 2023 Crito-Consulting Company inc. All rights Reserved.</p>
                </div>
                <div className="social-media">
                    <a href="http://" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="http://" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="http://" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="http://" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div> 
    </footer>
  )
}

export default Footer