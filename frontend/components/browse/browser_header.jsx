import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../../actions/session_actions";
import { Redirect } from "react-router-dom";

class BrowseHeader extends React.Component {
    constructor(props){
        super(props)
        const searching = this.props.location.pathname.includes('/search') ?  true :  false
        this.state = {
            searching: searching,
            searchInput: ''
        }
        this.handleManage = this.handleManage.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.update = this.update.bind(this)
        this,this.handleExitSearch = this.handleExitSearch.bind(this)
    }

    handleSearch(e){
         this.setState({searching: true})
         this.props.history.push('/search')
    }

    handleManage() {
        this.props.history.push('/profiles')
    }
    handleExitSearch(){
        this.setState({ searching: false })
        this.props.history.push('/browse')
    }

    update(e) {
        this.setState({ searchInput: e.currentTarget.value });
    }
    componentDidMount(){
        const header = document.getElementsByClassName("header-main-container")

    }

    render(){
        // debugger
        // (this.state.searchInput !== '' && !this.props.location.pathname.includes('/search')
        // (this.state.searchInput !== '' && this.props.location.pathname != `/search/${this.state.searchInput}`)
        if (this.state.searchInput !== '' && this.props.location.pathname != `/search/${this.state.searchInput}`){
            // <Redirect to="/search"> </Redirect>
            return <Redirect to={`/search/${this.state.searchInput}`} />

        } else if (this.state.searchInput === '' && this.props.location.pathname ===`/search/${this.state.searchInput}`){
            return <Redirect to={'/browse'} /> 
        }

        const browseRight = this.state.searching ? <div 
            className="settings-container">
            {/* <button onClick={this.props.logout}> */}
            {/* <label ></label> */}
            <div>
            <input className="search-input" type="text"
                placeholder="Search"
                onChange={this.update}
                value={this.state.searchInput}
                autoFocus
            />

            {/* <img onClick={this.handleSearch} width='35px' src={searchIcon}>
            </img> */}
            <button onClick={this.handleExitSearch}>X</button>
            </div>
            {/* <img width="30px" height="30px" src={window.searchIcon}>
            </img> */}
            <div className="dropdown-container">

                <img width='35px' color="white" src="https://occ-0-444-448.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFHJqNUeGyz6qFesBt8U7Z_N7JqBoPCztz6BZH8Aq3TRyG6-G7e2mW1rCWsvUywSWN5mCnItuJ2xCg9cROXU4MHZhug.png?r=a41">
                </img>
                <div className="dropdown">
                    <span
                        onClick={this.handleManage}>
                        Manage Profiles
                    </span>
                    <span
                        onClick={this.props.logout}>
                        Log out of EndFlix
                    </span>
                </div>
                {/* <div className='dropdown-menu'>
                                Porfiles
                            </div> */}
                {/* </button> */}
            </div>
        </div> 
        
        : <div className="settings-container">
            {/* <button onClick={this.props.logout}> */}
            {/* <label ></label> */}
            {/* <input className="search-input" type="text"
                placeholder="Search"
                onChange={this.update}
                value={this.state.searchInput}
                // autoFocus
            /> */}
                {/* <button onClick={this.handleSearch}>Search</button> */}

            {/* <img width='35px' src={searchIcon}>
            </img> */}

            {/* <img width='35px' src={bellIcon}>
            </img> */}
                <img onClick={this.handleSearch} width="30px" height="30px"src={window.searchIcon}></img>
            <div className="dropdown-container">

                <img width='35px' color="white" src="https://occ-0-444-448.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFHJqNUeGyz6qFesBt8U7Z_N7JqBoPCztz6BZH8Aq3TRyG6-G7e2mW1rCWsvUywSWN5mCnItuJ2xCg9cROXU4MHZhug.png?r=a41">
                </img>
                <div className="dropdown">
                    <span
                        onClick={this.handleManage}>
                        Manage Profiles
                    </span>
                    <span
                        onClick={this.props.logout}>
                        Log out of EndFlix
                    </span>
                </div>
                {/* <div className='dropdown-menu'>
                                Porfiles
                            </div> */}
                {/* </button> */}
            </div>
        </div>

        // if (this.state.searchInput === '' && this.props.location.pathname === "/search") {
        //     // <Redirect to="/search"> </Redirect>
        //     return <Redirect to="/browse" />

        // }
        

        const logo = "https://fontmeme.com/permalink/220102/80b2e83ec91311621e8aea703b915905.png"
        const bellIcon = "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-bell-basic-ui-elements-flatart-icons-outline-flatarticons.png" 
        const searchIcon = "https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
        return(
            <div className="header-main-container">
                <div className="header-content">
                    <div className="logo-links-container">
                        <img width="100px"src={logo} alt="" />

                        <div className="header-links">
                            <a href="#">Home</a>
                            <a href="#">GitHub</a>
                            <a href="#">LinkedIn</a>
                            <a href="#">AngelList</a>
                            {/* <a href="#">My List</a> */}
                            <Link to="/my-list">My List</Link>
                        </div>
                    </div>
                        {browseRight}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return{
        searchInput: ownProps.searchInput
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BrowseHeader))