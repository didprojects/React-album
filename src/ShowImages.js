import "./ShowImages.css"
import {useState } from "react";

function ShowImages(props){
    const pets = props.pets;
    const beaches = props.beaches;
    const foods = props.foods;

    const [current,setCurrent] = useState(0)
    const [images,setImages] = useState(beaches)

    function passBeachImages(){
        setImages(beaches);
        setCurrent(0);
    }

    function passPetsImages(){
        setImages(pets);
        setCurrent(0);
    }
    function passFoodImages(){
        setImages(foods);
        setCurrent(0);
    }
    
    return (
        <div className="columns">
            <div className="primary">
                <div className="slider">
                        <div className="left-arrow"
                        onClick={()=>setCurrent(current===0?images.length-1:current-1)}>
                        ⬅</div>
                        <div className="right-arrow"
                        onClick={()=>setCurrent(current===images.length-1?0:current+1)}>
                        ⮕</div>
                </div>
                <div>
                    {images.map(
                        (image,index)=>
                            current===index && (
                                <div className="slide">
                                    <img src={image} className="slide-image" alt="images" />
                                </div>
                            )
                    )}
                </div>
            </div>

            <div className="secondary">
                <div className="navi">
                    <div className="image-list1" onClick={passBeachImages}>
                        <img src={beaches[0]} alt="beach images" width="180px" height="120px"></img>
                        <h3>Beach</h3>
                        <br/>
                    </div>
                    <div className="image-list2" onClick={passPetsImages}>
                        <img src={pets[0]} alt="pets images" width="180px" height="120px"></img>
                        <h3>Pets</h3>
                        <br/>
                    </div>
                    <div className="image-list3" onClick={passFoodImages}>
                        <img src={foods[0]} alt="food images" width="180px" height="120px"></img>
                        <h3>Food</h3>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ShowImages;