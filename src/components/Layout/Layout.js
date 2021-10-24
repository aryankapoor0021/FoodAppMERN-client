import React,{Fragment} from 'react'
import MainNavigation from './MainNavigation' 

const Layout = (props) => {
    return (
        <Fragment>
            <header>
                <MainNavigation/>
            </header>
            <main style={{paddingTop:'2rem'}}>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout
