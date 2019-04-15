import React from 'react';
import '../stylesheets/splash.css';


class InteractiveResume extends React.Component {
    render() {
        return(
            <div className="Container">
                <div className="Job-Title">
                    <p>Coding Projects</p>
                </div>
                <div className="Job-Info">
                    <h4>Java Projects</h4>
                    <h6><strong><u>2019 UMSL | Hack</u></strong></h6>
                    <p>Community service benefits app:  This app was built at an UMSL 36-hour hackathon using Java and Android Studio
                        Its purpose was to increase local volunteering by showing users the local opportunities to volunteer.
                        It also assigned points for volunteering which users could redeem for benefits.  The user accounts, with the point totals, were stored in Google FireStore.  We used Github for
                        version control.
                    </p>
                    <h6><strong><u>Coffee Rating App</u></strong></h6>
                    <p>This Android app let users rate their favorite StarBucks coffees.  It was coded using Android Studio, and the ratings and drinks where stored in Google FireBase.
                    </p>
                    <h6><strong><u>ATM Project</u></strong></h6>
                    <p>This project had similar functions to an ATM or bank; it allowed the users to create different accounts-either checking or savings.
                        The accounts where creating using Java inheritence and stored in the Derby Client Database.
                    </p>
                    <h6><strong><u>Employee payment software</u></strong></h6>
                    <p>Employee payment software:  This project allowed the user to create new employee profiles and make them either hourly or salary based.
                        Then it could determine how much they would be paid in a period.
                    </p>


                </div>

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
                    <h4>CraneIT, LLC</h4>
                    <h6><strong><u>IT Support Assistant</u></strong>, 2016 - Present </h6>
                    <p>I help provide a wide variety of IT support to a broad selection of clients.  Whether it is in the offices of accounting firms, or out on the links of a golf course fixing/installing
                        workstations, POS machines, VOIP phones, servers, and wireless access points.
                    </p>

                    <h4>St. Charles County Youth Soccer Association</h4>
                    <h6><strong><u>Referee</u></strong>, 2011 - Present </h6>
                    <p>

                        As a referee my duties include reviewing and mentoring new referees, defusing conflict with players, coaches, and fans, and managing volative situations efficiently and diplomatically.
                    </p>
                </div>
                <div className="Edu-Title">
                    <p>Education</p>
                </div>
                <div className="Edu-Info">
                    <h4>University of Missouri - St. Louis</h4>
                    <h6><strong><u>Bachelor of Science in Information Systems</u></strong> December 2019 </h6>
                    <h6>Expected Graduation, December 2019 </h6>

                    <h4>St. Charles Community College</h4>
                    <h6><strong><u>Associate of Applied Science Computer Science - Cyber Security</u></strong></h6>
                    <h6>Graduated, May 2017</h6>

                </div>
            </div>
        );
    }
}


export default InteractiveResume
