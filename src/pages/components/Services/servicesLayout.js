// Dependencies
import React, { Fragment } from 'react';

// Assets
import gils from '../../../global/assets/img/girls1.png';

import './index.css';

const ServiceLayout = ({props}) =>{

    return <Fragment>
        <img className='girls-initial' src={gils} width='100%' />
 
    </Fragment>;
}

export default  ServiceLayout;