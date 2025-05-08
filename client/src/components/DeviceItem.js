import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from "../assets/Star.png"
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <Col md={3}>
            <Card style={{width: "150", cursor: "pointer"}}
                  className="p-1"
                    onClick={()=> navigate(DEVICE_ROUTE+'/'+ device.id)}
            >
                <Image src={device.img}/>
                <div>{device.name}</div>
                <div>

                        {
                            Array(device.rating).fill().map((_, i) =>(
                                <Image src={star} key={i}/>
                            ))
                        }


                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;