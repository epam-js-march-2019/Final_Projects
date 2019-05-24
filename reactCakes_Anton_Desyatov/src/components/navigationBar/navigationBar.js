import React from 'react';
import NavigationBarTab from '../navigationBarTab/NavigationBarTab'
import './navigationBar.css'
class NavigationBar extends React.Component{
    constructor(props){
        super(props);
        this.profileTab = React.createRef();
        this.catalogTab = React.createRef();
        this.aboutTab = React.createRef();
        this.manageActive = this.manageActive.bind(this);
    }

    manageActive = (passedTab) =>{
        this.profileTab.current.setState({className: 'passive'});
        this.catalogTab.current.setState({className: 'passive'});
        this.aboutTab.current.setState({className: 'passive'});
        passedTab.setState({className: 'active'});
    };

    render(){
        if(!this.props.user) {
            return (
                <nav className='navigationBar'>
                        <div className='tabs'>
                            <NavigationBarTab className='Authorization'
                                              name='Profile'
                                              manageActive={this.manageActive}
                                              ref={this.profileTab}
                                              user={this.props.user}
                                              auth={this.props.auth}
                                              manageModalAuth={this.props.manageModalAuth}
                                              logout={this.props.logout}
                                              link = '/Profile'
                            />
                            <NavigationBarTab className='Catalog'
                                              name='Catalog'
                                              manageActive={this.manageActive}
                                              ref={this.catalogTab}
                                              link='/Catalog'
                            />
                            <NavigationBarTab className='About'
                                              name='About'
                                              manageActive={this.manageActive}
                                              ref={this.aboutTab}
                                              link='/About'
                            />
                        </div>
                    <div className ='tabs'>
                        <div className='signIn tab'
                             onClick={this.props.auth}>Sign in</div>
                        <div className='signUp tab'
                             onClick={this.props.registration}>Sign up</div>
                    </div>
                </nav>
            )
        } else{
            return(
                <div className='navigationBar'>
                    <div className='tabs'>
                        <NavigationBarTab className='Authorization'
                                          name='Profile'
                                          manageActive={this.manageActive}
                                          ref={this.profileTab}
                                          user={this.props.user}
                                          auth={this.props.auth}
                                          manageModalAuth={this.props.manageModalAuth}
                                          logout={this.props.logout}
                                          link='/Profile'
                        />
                        <NavigationBarTab
                            className='Catalog'
                            name='Catalog'
                            manageActive={this.manageActive}
                            ref={this.catalogTab}
                            link='/Catalog'
                        />
                        <NavigationBarTab
                            className='About'
                            name='About'
                            manageActive={this.manageActive}
                            ref={this.aboutTab}
                            link='/About'

                        />
                    </div>
                    <div className='logout tab'
                         onClick = {this.props.logout}>Logout</div>
                </div>
            )
        }
    }
}

export default NavigationBar;