const data = [
    {
        Handle : "Nob0dy",
        profile_picture : "./images/businessman-310819_640.png",
        picture : "./images/laptop-1483974_1280.jpg",
        date : "2",
    },
    {
        Handle : "RoXs!",
        profile_picture : "./images/businessman-310819_640.png",
        picture : "./images/computer-room-1488311_1280.jpg",
        date : "1",
    },
    {
        Handle : "Seven of Nine",
        profile_picture : "./images/man-161282_640.png",
        picture : "./images/tarjeta-madre.jpg",
        date : "5",
    },
    {
        Handle : "Pink!",
        profile_picture : "./images/student-147783_640.png",
        picture : "./images/camera-581126_1280.jpg",
        date : "4",
    }
];

import React, { Component } from 'react';
import './body.css';
import Card from './Card.js';


export default class Body extends Component {
    render() {
        return (
            <div className="Content">
                { data.map((post) => {
                    return <Card
                    Handle={post.Handle} 
                    Name={post.Name} 
                    profile_picture={post.profile_picture} 
                    title={post.title} 
                    picture={post.picture}
                    date={post.date}
                />;
                })}
            </div>
        );
    }
}