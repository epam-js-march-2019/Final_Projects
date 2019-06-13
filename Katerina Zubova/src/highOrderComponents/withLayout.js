import React from 'react'
import MainMenu from "../components/MainMenu";

const withLayout = Component =>  props => <React.Fragment><MainMenu/><Component {...props}/></React.Fragment>

export default withLayout