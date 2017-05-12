const comments = [
    { 
        Handle : "User",
        Comment : "Awesome!"
    },
    { 
        Handle : "User2",
        Comment : "What is this?"
    },
    { 
        Handle : "User3",
        Comment : "You Suck!"
    },
    { 
        Handle : "User4",
        Comment : "Nice!"
    },
    { 
        Handle : "User5",
        Comment : "Hello"
    },
];


import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        };
        setInterval(() => {
            this.setState((oldstate) => {
            return {
                likes : oldstate.likes + 1
            };
        });
        }, 1000)    
    }
    render() {
        return(
            <div className="card">
                <div className="sides">
                    <div className="left">
                    <table>
                        <tr>
                            <td>
                                <img src={require(this.props.profile_picture)} className="img-profile"/>
                            </td>
                            <td>
                                {this.props.Handle}
                            </td>
                        </tr>
                    </table>
                    </div>
                    <div className="right">
                       {this.props.date} d
                    </div>
                </div>
                <div className="content">
                    <img src={require(this.props.picture)} className="img-post"/>
                </div>
                <div className="comments">
                    <p id="likes">Likes: {this.state.likes}</p>
                    { comments.map((comment) => {
                        return <div>
                            <table>
                                <tr>
                                    <td>
                                        <p1>{comment.Handle}</p1>
                                    </td>
                                    <td>
                                        {comment.Comment}
                                    </td>
                                </tr>
                            </table>
                                </div>;
                    })}
                </div>
            </div>
        );
    }
}