import React from 'react';
import BuyMeCoffeeButton from "../buyMeCoffee";
import LegoYannisFront from "../../images/LEGOs/lego-yannis-front.svg";

const BuyMeCoffeeCard = () => (
    <>
        <div className="container row flex content-card margin-5-lr margin-3-t is-white-bg" style={{ justifyContent: "center" }}>
            <div className="col-xs-12 col-sm-3 flex align-vertical align-horizontal">
                <img src={LegoYannisFront} alt="lego-icon-front"/>
            </div>
            <div className="col-xs-12 col-sm-9">    
                <p className="is-background-blue-text margin-2 margin-b-0">
                    I don't have any ads or sponsors. If you enjoyed the content on this site and found it helpful, interesting or fun, please consider supporting this site by buying me a coffee.
                </p>
                <div className="margin-2 margin-b-0">
                    <BuyMeCoffeeButton/>
                </div>
            </div>
        </div>
    </>
);

export default BuyMeCoffeeCard;