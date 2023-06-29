import React from "react";
import Carousell from 'react-bootstrap/Carousel';
import img1 from "../assets/images/carousel/img5.webp";
import img2 from "../assets/images/carousel/img6.webp";
import img3 from "../assets/images/carousel/img7.webp";
import img4 from "../assets/images/carousel/img12.webp";

export default function () {
    return (
        <>
            <div className="local-bootstrap">
                <Carousell interval={2000}>
                    <Carousell.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                    </Carousell.Item>
                    <Carousell.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />
                    </Carousell.Item>
                    <Carousell.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />
                    </Carousell.Item>
                    <Carousell.Item>
                        <img
                            className="d-block w-100"
                            src={img4}
                            alt="Fourth slide"
                        />
                    </Carousell.Item>
                </Carousell>
            </div>
        </>
    )
}