import logo from '../../src/assets/images/zeal_logo_2.png'

const Header = () => {
        return(
            <header>
                <img id="logo" src={logo} />
                <div id="navbar">
                    <ul>
                        <li><a>NEXT MOVIE</a></li>
                        <li><a>FILTERS</a></li>
                        <li><a>WATCH</a></li>
                    </ul>
                </div>
            </header>
        );
    }

export default Header;