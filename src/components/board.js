import React from "react";
import "./board.css";
import member1 from "../images/boardMembers/President_boarstara.jpg";
import member2 from "../images/boardMembers/boardheidi2.jpg";
export default class Board extends React.Component {

    render() {
        return (
            <div class="wrapper">
                <div class="card">
                    <img src={member1} />
                    <div class="info">

                        <h1>Tara Von Walden, President</h1>
                        <p>Tara von Walden has been in the industry for thirty years specializing in post-secondary and healthcare settings</p><button>Read More</button>
                    </div>
                </div>
                <div class="card"><img src={member2} />
                    <div class="info">
                        <h1>Heidi Parrow, ISRID Secretary</h1>
                        <p>Heidi, originally from southwestern Minnesota, graduated from St. Catherine University’s interpreting program in 2009</p><button>Read More</button>
                    </div>
                </div>
                <div class="card"><img src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&amp;fit=crop&amp;w=311&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                    <div class="info">
                        <h1>Protester</h1>
                        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p><button>Read More</button>
                    </div>
                </div>
            </div>)
    }
}