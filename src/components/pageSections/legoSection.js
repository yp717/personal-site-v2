import React from 'react';
import LegoYannisFront from '../../images/LEGOs/lego-yannis-front.svg';
import LegoYannisBack from '../../images/LEGOs/lego-yannis-back.svg';
import LegoYannisFullStack from '../../images/LEGOs/lego-yannis-full-stack.svg';

const LegoSection = () => {
    return (
        <>
            <div className="container" style={{marginTop: "10vh"}}>
                <div className="container__row">
                    <div className="container__col-sm-4 text-align-center">
                        <img src={LegoYannisFront} alt="lego-icon-front"/>
                        <h2 className="text-align-center is-background-blue-text" style={{paddingBottom: "2%"}}>Front-End</h2>
                    </div>
                    <div className="container__col-sm-4 text-align-center">
                        <img src={LegoYannisBack} alt="lego-icon-back"/>    
                        <h2 className="text-align-center is-background-blue-text" style={{paddingBottom: "2%"}}>Back-End</h2>
                    </div>
                    <div className="container__col-sm-4 text-align-center">
                        <img src={LegoYannisFullStack} alt="stacked-lego-heads"/>
                        <h2 className="text-align-center is-background-blue-text" style={{paddingBottom: "2%", marginBottom: "0%"}}>Full-Stack</h2>
                    </div>
                </div>  
            </div>
        </>
    );
}

export default LegoSection;