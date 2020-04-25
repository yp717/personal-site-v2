import React from 'react';

const HeroSection = () => {
    return (
        <>
            <div className="container__row">
                {/* Section heading */}
                <div className="col-sm-8" style={{width: '50%'}}>
                  <h2>Latest Projects</h2>
                </div>
                {/* Categories */}
                <div className="col-sm-2" style={{marginLeft: '2%', marginRight: '2%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
                  <h3 className="text-align-center" style={{fontWeight: 600, fontSize: '16px', lineHeight: '16px'}}>[ALL]</h3>
                </div>
                <div className="col-sm-2" style={{marginLeft: '2%', marginRight: '2%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>  
                  <h3 style={{fontWeight: 600, fontSize: '16px', lineHeight: '16px'}}>DESIGN</h3>
                </div>
                <div className="col-sm-2" style={{marginLeft: '2%', marginRight: '2%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>  
                  <h3 style={{fontWeight: 600, fontSize: '16px', lineHeight: '16px'}}>DEVELOPMENT</h3>
                </div>                  
                <div className="col-sm-2" style={{marginLeft: '2%', marginRight: '2%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>  
                  <h3 style={{fontWeight: 600, fontSize: '16px', lineHeight: '16px'}}>ENGINEERING</h3>
                </div>                  
            </div>
            <p>this is just a test. ok cool the font looks right</p>
        </>
    );
}

export default HeroSection;