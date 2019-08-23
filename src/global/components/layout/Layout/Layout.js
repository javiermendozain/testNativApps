import React from 'react'
import Content from '../Content/Content'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout=({children})=>{
    return (
        <React.Fragment>
            <Header/>
            <Content>
                {children}
            </Content>
            <Footer/>
        </React.Fragment>        
    )
}

export default Layout