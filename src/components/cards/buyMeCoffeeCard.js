import React from 'react';
import BuyMeCoffeeButton from "../buyMeCoffee";
import LegoYannisFront from "../../images/LEGOs/lego-yannis-front.svg";

const BuyMeCoffeeCard = () => (
    <>
        <div className="container row content-card margin-5-lr margin-3-t is-white-bg">
            <div className="col-xs-3 text-align-center">
                <img src={LegoYannisFront} alt="lego-icon-front"/>
            </div>
            <div className="col-xs-9">
                <p className="is-background-blue-text">I don't have any ads or sponsors. If you enjoyed the content on this site and found it helpful, interesting or fun, please consider supporting this site by buying me a coffee.</p>
                <div className="margin-2 margin-l-0">
                    <BuyMeCoffeeButton/>
                </div>
            </div>
        </div>
    </>
);

export default BuyMeCoffeeCard;