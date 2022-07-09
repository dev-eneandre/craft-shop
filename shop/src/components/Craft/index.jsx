import React from "react";
import { useState } from "react";
import logo from "../../assets/images/svg/ShopLogo.svg";
import dog from "../../assets/images/png/Lady.png";
import { useDispatch } from "react-redux";
import { increase } from "../../features/count";

import "./style.css";

function Craft () {

    const dispatch = useDispatch();

    const [count, setCount ] = useState(0);
    const [ shoppingItems, setShoppingItems ] = useState([
        {title : "Dog Illustration", categoryIcon : "premium", illustration : dog },
        {title : "Astronaut Riding", categoryIcon : "free", illustration : dog},
        {title : "Rockstar Guitarist", categoryIcon : "premium", illustration : dog},
        {title : "Fashionista", categoryIcon : "premium", illustration : dog}
    ])

    const categoryCheck = (category ) => {
        if(category === "premium" ){
            return logo;
        }else{
            return dog;
        }
    }

    return(
        <div className="craft">
            <div className="craft__nav">
                <img src={logo} alt="logo" className="craft_nav__logo" />

                <div className="craft__nav__countwrap">
                    <h5 className="craft__nav__countwrap__count" > {count}</h5>
                </div>
            </div>

            <div className="craft__illustrations">
                {shoppingItems.map((si, index) => (
                    <div className="craft__illustrations__container" key={index}>
                        <div className="craft__illustrations__container__imgWrap">
                            <img src={si.illustration} alt={si.title} className="craft__illustrations__container__imgWrap__img" />
                            <div className="craft__illustrations__container__imgWrap__cat">
                                <img className="craft__illustrations__container__imgWrap__cat__img" src={categoryCheck(si.categoryIcon)} alt="download icon" />
                                <p className="craft__illustrations__container__imgWrap__cat__txt">{si.categoryIcon}</p>
                            </div>
                        </div> 
                        <div className="craft__illustrations__container__text">
                            <h4 className="craft__illustrations__container__text__title">{si.title}</h4>
                            <button className="craft__illustrations__container__text__button"
                                onClick={() => {
                                    dispatch(increase(1))
                                }}
                            >Add to cart</button>
                        </div>
                    </div> 
                ) )}
            </div>

            
        </div>
    )
}

export default Craft;