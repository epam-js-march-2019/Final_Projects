import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/footer.css';

class Footer extends Component{
    render() {
        return(
                <footer className="page-footer font-small blue">
                    <div className="footer-copyright text-center py-3">© 2019 Copyright:
                        <Link to="/">afrodita.com</Link>
                    </div>
                </footer>
        );
    }
}

export default Footer;