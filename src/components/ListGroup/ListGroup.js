import React from "react";
import Col from "../Col";
import "./style.css";

function ListGroup(props) {
    return (
        <div>
            <Col size="xs-12 sm-12 md-4 lg-4">
                <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action active" id="list-budgetTracker-list" data-toggle="list" href="#list-budgetTracker" role="tab" aria-controls="budget tracker">Budget Tracker</a>
                    <a class="list-group-item list-group-item-action" id="list-generateAPassword-list" data-toggle="list" href="#list-generateAPassword" role="tab" aria-controls="generate a password">Generate a Password</a>
                    <a class="list-group-item list-group-item-action" id="list-getMusicNow-list" data-toggle="list" href="#list-gitMusicNow" role="tab" aria-controls="git music now">Git Music Now</a>
                </div>
            </Col>

            <Col size="xs-12 sm-12 md-8 lg-8">
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="list-bt" role="tabpanel" aria-labelledby="list-readme-list">
                        <img id="img" alt="budget tracker" width="100%" />
                        <p><b>Budget Tracker</b></p>
                        <p>Deployed at: <a href="https://hw-19.herokuapp.com/" target="_blank">https://hw-19.herokuapp.com/</a></p>
                        <p>GitHub repository: <a href="https://github.com/CoderLeE920/HW-19-Budget-Trackers-ON-OFFline" target="_blank">https://github.com/CoderLeE920/HW-19-Budget-Trackers-ON-OFFline</a></p>
                    </div>
                    <div class="tab-pane fade" id="list-portfolio" role="tabpanel" aria-labelledby="list-portfolio-list">
                        <img id="img" alt="generate a password" width="100%" />
                        <p><b>Generate a Password</b></p>
                        <p>Deployed at: <a href="https://coderlee920.github.io/03-Generate-A-Password/" target="_blank">https://coderlee920.github.io/03-Generate-A-Password/</a></p>
                        <p>GitHub repository: <a href="https://github.com/CoderLeE920/03-Generate-A-Password" target="_blank">https://github.com/CoderLeE920/03-Generate-A-Password</a></p>
                    </div>
                    <div class="tab-pane fade" id="list-yogaPlan" role="tabpanel" aria-labelledby="list-yogaPlan-list">
                        <img id="img" alt="music" width="100%" />
                        <p><b>Git Music Now</b></p>
                        <p>Deployed at: <a href="https://rlacer.github.io/Git-Music-Now-Project/" target="_blank">https://rlacer.github.io/Git-Music-Now-Project/</a></p>
                        <p>GitHub repository: <a href="https://github.com/CoderLeE920/Git-Music-Now-Project" target="_blank">https://github.com/CoderLeE920/Git-Music-Now-Projec</a></p>
                    </div>
                </div>
            </Col>

        </div>
    );
}

export default ListGroup;