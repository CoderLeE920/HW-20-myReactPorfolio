import React from "react";
import Col from "../Col";
import "./style.css";

function ListGroup() {
    return (
        <div>
            <Col size="xs-12 sm-12 md-4 lg-4">
                <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action active" id="list-readme-list" data-toggle="list" href="#list-readme" role="tab" aria-controls="readme">README.md Generator</a>
                    <a class="list-group-item list-group-item-action" id="list-portfolio-list" data-toggle="list" href="#list-portfolio" role="tab" aria-controls="portfolio">Responsive Portfolio (HTML/CSS)</a>
                    <a class="list-group-item list-group-item-action" id="list-yogaPlan-list" data-toggle="list" href="#list-yogaPlan" role="tab" aria-controls="yogaPlan">Workout Tracker</a>
                    <a class="list-group-item list-group-item-action" id="list-pw-list" data-toggle="list" href="#list-pw" role="tab" aria-controls="pw">Password Generator</a>
                    <a class="list-group-item list-group-item-action" id="list-btProject-list" data-toggle="list" href="#list-btProject" role="tab" aria-controls="btProject">Budget Tracker (Group Project)</a>
                    <a class="list-group-item list-group-item-action" id="list-novelfilms-list" data-toggle="list" href="#list-novelfilms" role="tab" aria-controls="novelfilms">NovelFilms Application Project</a>
                </div>
            </Col>

            <Col size="xs-12 sm-12 md-8 lg-8">
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="list-readme" role="tabpanel" aria-labelledby="list-readme-list">
                        <img id="img" src={read} alt="GIF of README app use" width="100%" />
                        <p><b>README Generator</b></p>
                        <p>Deployed at: <a href="https://hw-19.herokuapp.com/" target="_blank">https://hw-19.herokuapp.com/</a></p>
                        <p>GitHub repository: <a href="https://github.com/CoderLeE920/HW-19-Budget-Trackers-ON-OFFline" target="_blank">https://github.com/CoderLeE920/HW-19-Budget-Trackers-ON-OFFline</a></p>
                    </div>
                    <div class="tab-pane fade" id="list-portfolio" role="tabpanel" aria-labelledby="list-portfolio-list">
                        <img id="img" src={portfolioScreenshot} alt="Contact UI Screenshot" width="100%" />
                        <p><b>Generate a Password</b></p>
                        <p>Deployed at: <a href="https://coderlee920.github.io/03-Generate-A-Password/" target="_blank">https://coderlee920.github.io/03-Generate-A-Password/</a></p>
                        <p>GitHub repository: <a href="https://github.com/CoderLeE920/03-Generate-A-Password" target="_blank">https://github.com/CoderLeE920/03-Generate-A-Password</a></p>
                    </div>
                    <div class="tab-pane fade" id="list-yogaPlan" role="tabpanel" aria-labelledby="list-yogaPlan-list">
                        <img id="img" src={cardio} alt="Cardio Screenshot" width="100%" />
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