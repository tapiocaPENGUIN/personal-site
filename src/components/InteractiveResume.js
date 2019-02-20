import React from 'react';
import '../stylesheets/splash.css';


class InteractiveResume extends React.Component {
    render() {
        return(
            <div className="Container">
                <div className="Tech-Title">
                    <p>Techologies</p>
                </div>
                <div className="Tech-Info">
                    <ul>

                        <li>React</li>
                        <li>HTML/CSS</li>
                        <li>Java</li>
                        <li>SQL</li>
                        <li>Google Firebase/FireStore</li>
                        <li>Python</li>
                        <li>Android Studio</li>
                        <li>Github/Git</li>
                    </ul>
                </div>

                <div className="Job-Title">
                    <p>Work Experience</p>
                </div>
                <div className="Job-Info">
                    <h5>CraneIT, LLC</h5>
                    <h6><strong><u>IT Support Assistant</u></strong>, 2016 - Present </h6>
                    <p>I help provide a wide variety of IT support to a broad selection of clients.  Whether it is in the offices of accounting firms, or out on the links of a golf course fixing/installing
                        workstations, POS machines, VOIP phones, servers, and wireless access points.
                    </p>

                    <h5>St. Charles County Youth Soccer Association</h5>
                    <h6><strong><u>Referee</u></strong>, 2011 - Present </h6>
                    <p>

                        As a referee my duties include reviewing and mentoring new referees, defusing conflict with players, coaches, and fans, and managing volative situations efficiently and diplomatically.
                    </p>
                </div>
                <div className="Edu-Title">
                    <p>Education</p>
                </div>
                <div className="Edu-Info">
                    <h5>University of Missouri - St. Louis</h5>
                    <h6><strong><u>Bachelor of Science in Information Systems</u></strong> December 2019 </h6>
                    <h6>Expected Graduation, December 2019 </h6>

                    <h5>St. Charles Community College</h5>
                    <h6><strong><u>Associate of Applied Science Computer Science - Cyber Security</u></strong></h6>
                    <h6>Graduated, May 2017</h6>

                </div>
            </div>
        );
    }
}


export default InteractiveResume
