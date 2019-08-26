// Dependencies
import React, { Fragment } from 'react';

// Assets
import gils from '../../../global/assets/img/girls1.png';
import guysFooter from '../../../global/assets/img/guysFooter.jpg';

import guysSubscribe1 from '../../../global/assets/img/guysSubscribe.jpg';
import girlsSubscribe from '../../../global/assets/img/girlsSubscribe.jpg';
import playButton from '../../../global/assets/logos/play-button.png';
import triangle from '../../../global/assets/triangle.png';
import plans from '../../../global/assets/plans.png';
import premium from '../../../global/assets/premium.png';
import triangleSubscribe from '../../../global/assets/triangleSubscribe.png';
import promo from '../../../global/assets/promo.png';
import bgTooltip from '../../../global/assets/bgTooltip.png';
import btnSelectPlan from '../../../global/assets/btnSelectPlan.png';


import youtube from '../../../global/assets/logos/youtube.png';
import ccb from '../../../global/assets/logos/ccb.png';
import newCountry from '../../../global/assets/logos/newCountry.png';
import viveDigital from '../../../global/assets/logos/viveDigital.png';
import mintic from '../../../global/assets/logos/mintic.png';
import apps from '../../../global/assets/logos/appsCO.png';


import './onlineClass.css';
import './howWork.css';
import './subscribe.css';
import './plans.css';
import './subscribeClassFree.css';
import './serviceQuality.css';
import './footerConditions.css';


const ServiceLayout = ({ props }) => {
    const dataMapStep = [
        { text: 'Elige una materia', number: '1' },
        { text: 'Seleccion un tutor', number: '2' },
        { text: 'Programa tu clase', number: '3' },
        { text: '¡A Aprender!', number: '4' }
    ];

    const stepsHTML = dataMapStep.map((item, index) => {
        return (
            <div key={index} className={`container-step-${item.number}`}>
                <div>
                    <img src={triangle} alt='' />
                    <span className={`numbStepOverlay-${item.number}`}>
                        <p>
                            <span><strong>{item.number}</strong></span>
                        </p>
                    </span>
                </div>
                <div>
                    <p>
                        <span>
                            {item.text}
                        </span>
                    </p>
                </div>
            </div>
        );
    });

    const dataPlans = [
        {
            cost:'$25.000',
            nHour:1,
            textHour:'HORA',
            namePlan:'PLAN 1',
            promo: false,
            premium: false,
        },
        {
            cost:'$125.000',
            nHour: 4,
            textHour:'HORAS',
            namePlan:'PLAN 2',
            promo: false,
            premium: false,
        },
        {
            cost:'$125.000',
            nHour: 8,
            textHour:'HORAS',
            namePlan:'PLAN 3',
            promo: false,
            premium: false,
        },
        {
            cost:'$25.000',
            nHour: 1,
            textHour:'HORA',
            namePlan:'PLAN PROMO',
            promo: true,
            premium: false,
        },
        {
            cost:'$125.000',
            nHour: 4,
            textHour:'HORAS',
            namePlan:'PLAN PREMIUM',
            promo: false,
            premium: true,
        },
    ];

    const plantHTML = dataPlans.map((item, index) => {
        return (
            <div key={index} className={`plan-${index+1}`}>
                <img src={plans} alt='' />
                <p className='costPlan'> {item.cost} </p>
                <p className='typePlan'> {item.namePlan}</p>
                <div className='detailPlan'>
                    <p className='number'>{item.nHour}</p>
                    <p className='hour'>{item.textHour}</p>
                    <p className='onClass'>DE CLASE ONLINE EN VIVO</p>
                    <p className='detail'>
                        - Tips Académicos <b />
                        - Clases programadas <b />
                        - Más información <b />
                    </p>
                    <div className='btn-select'>
                        <img src={btnSelectPlan} alt='selectPlant' />
                    </div>
                </div>
                {item.promo && <div className='promo'>
                    <img src={promo} alt='promo' />
                </div>}
                {item.premium  && <div className='premium' >
                    <img src={premium} alt='premium' />
                </div>}
            </div>
        );
    });

    return <Fragment>
        {/* Online Tutoring */}
        <div className='containerOverlay'>
            <img src={gils} width='100%' alt='s' />
            <span className='onlineClassOverlay'>
                <div className='online-tutoring'>
                    <span ><strong>Tutorías online</strong></span>
                    <div className='dividerWhite' />

                    <span className='online-class' >Clases en vivo</span>
                </div>

            </span>
        </div>
       
        {/* How work */}
        <div className='how-work'>
            <div className='headers-text'>
                <span className='text-how-work'>
                    <strong>
                        Cómo funciona
                    </strong>
                </span>
                <div className='dividerBrown' ></div>
                <span className="liveClass">
                    Clases en vivo, personalizadas para niños 
                    y jóvenes de colegio que les permite aprender de manera segura y desde 
                    cualquier lugar
                </span>
            </div>
            {/* TODO: cambiando el ancho */}
            <div className='conatiner-steps'>
                {stepsHTML}
            </div>
            <div>
                <img src={playButton} width='80px' alt='' />
                <div>
                    <span>
                        <strong>
                            Ver video
                        </strong>
                    </span>
                </div>
            </div>
        </div>

        {/* subscribe 1 */}
        <div className='containerOverlay'>
            <img src={guysSubscribe1} width='100%' alt='' />
            <span className='onlineClassOverlay'>
                <div className='container-susbscribe'>
                    <div className='triangle'>
                        <img src={triangleSubscribe} alt='' />
                        <p className='discount'>
                            <span><strong>20%</strong></span>
                        </p>
                    </div>
                    <div className='content-susbscribe'>
                        <div>
                            <span className="tutoring"><strong>Subcríbete</strong></span>
                            <div className='dividerWhite' ></div>
                            <span className="liveClass">y obtén precios especiales</span>
                            <br />
                            <div>
                                <button className="btn-email" >Correo electrónico</button>
                                <div className='content-interesting' >
                                    <img className='btn-interesting' src={bgTooltip} alt='Me interesa' />
                                    <span className='text-interesting'>
                                        Me interesa
                                    </span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </span>
        </div>

        {/* plans for eveyone */}
        <div className='plans'>
            <div className='headers-text'>
                <span className="text-header-plan"><strong>¡Tenemos planes para todos los presupuestos!</strong></span>
                <div className='dividerBrown' ></div>
                <span className="liveClass">
                    Adicional a la calidad y metodología ágil implementada.
                    puedes elegir el tiempo que necesitan tus hijos:

                </span>
            </div>
            <div className='container-plans'>
                {plantHTML}
            </div>

        </div>

        {/* subscribe 2 */}
        <div className='containerOverlay'>
            <img src={girlsSubscribe} width='100%' alt='' />
            <span className='onlineClassOverlay'>
                <div className='container-susbscribe'>
                    <div className='triangle'>
                        <img src={triangleSubscribe} alt='' />
                        <div className='subscribe'>
                            <span className="tutoring"><strong>Subscríbete</strong></span>
                            <div className='dividerWhite' ></div>
                            <span className="liveClass">y obtén clases <strong>GRATIS</strong></span>
                            <br />
                        </div>
                    </div>
                    <div className='content-susbscribe'>
                        <div>
                            <div>
                                <button className="btn-email" >Correo electrónico</button>
                                <div className='content-interesting' >
                                    <img className='btn-interesting' src={bgTooltip} alt='Suscribirme' />
                                    <span className='text-interesting'>
                                        Subscribirme
                                    </span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </span>
        </div>

        {/* Services & Quality*/}
        <div className='servicesQuality' >
            <p className='titleServiceQuality'>
                ¡Servicio calidad y credibilidad!
            </p>
            <div className='dividerBrownQuality' />
            <p className='textServiceQuality'>
                Contamos con el apoyo gubernamental local y nacional
                 para una efectiva entrega de contenidos y clases de calidad certificadas.
            </p>
            <img src={mintic} alt='mintc'/>
            <div className='banner'>
                <img src={ccb} alt='CCB'/>
                <img src={viveDigital} alt='viveDigital'/>
                <img src={apps} alt='apps'/>
                <img src={newCountry} alt='pais'/>

            </div>
        </div>

        {/* Footer */}
       
        <div className='footerContainer'>
            <div className='containerOverlay'>
                <img src={guysFooter} width='100%' alt=''/>
                <span className='footerOverlay'>
                    <p>
                        <span className="">QUIENES SOMOS</span>
                    <br/>
                    <span className="">TÉRMINOS & CONDICIONES</span>
                    <br/>
                    <span className="">PREGUNTAS FRECUENTES</span>
                    <br/>
                    <span className="">CONTÁCTANOS</span>
                    </p>

                </span>

            </div>
            <div className='youtubeFooter'>
                <img src={youtube} alt=''/>
            </div>
        </div>
       

    </Fragment>;
}

export default ServiceLayout;