import React, {Component} from "react";

import Typing from 'react-typing-animation';
import EducationItem from "./EducationItem";

export default class Education extends Component {
    constructor(props) {
        super(props);
        this.props = {
            schoolSkills: '',
            technicalSkills: ''
        };
    }

    render() {
        return (
            <div className="dp-section-education">
                {/*schulisch*/}
                <div className="dp-school">
                    <Typing
                        speed={10}
                        cursorClassName="dp-cursor"
                    >
                        <div className="dp-title"> {this.props.schoolSkills}</div>
                    </Typing>

                    <div className="code code-css dp-work-experience-list">
                        <div className="code-content">
                            <code>
                                <EducationItem
                                    duration="1995-1999"
                                    school="Grundschule"
                                    schoolName="Oberlübbe"
                                    graduation=" - "
                                    note=" - "
                                />

                                <EducationItem
                                    duration="1999-2005"
                                    school="Gesamtschule"
                                    schoolName="Hille"
                                    graduation="Fachoberschulreife"
                                    note="2.5"
                                />

                                {/*Freiherr-vom-Stein Berufskolleg*/}
                                <EducationItem
                                    duration="2005-2008"
                                    school="Berufskolleg"
                                    schoolName="Freiherr-vom-Stein"
                                    graduation="Fachhochschulreife"
                                    note="2.4"
                                />

                                {/*Berufskolleg Senne*/}
                                <EducationItem
                                    duration="2011-2013"
                                    school="Berufskolleg"
                                    schoolName="Senne"
                                    graduation="Mediengestalterin für Digital- und Printmedien"
                                    note="2.1"
                                />
                            </code>
                        </div>
                    </div>
                </div>

                {/*Technical Skills*/}
                <div className="dp-technical-skills">
                    <Typing
                        speed={10}
                        cursorClassName="dp-cursor"
                        startDelay={1500}
                    >
                        <div className="dp-title">{this.props.technicalSkills}</div>
                    </Typing>

                    <div className="code code-js dp-technical-skills-list">
                        <div className="code-content">
                            <code>
                                <span className="c-y">const </span><span className="c-b">css3</span> = [<span className="c-g">“css”</span>, <span className="c-g">“sass/scss”</span>, <span className="c-g">“less”</span>];<br/>
                                <span className="c-y">const </span><span className="c-b">frameworks</span> = [<span className="c-g">“bootstrap”</span>, <span className="c-g">“react”</span>, <span className="c-g">“jquery”</span>];<br/>
                                <span className="c-y">const </span><span className="c-b">adobe</span> = [<span className="c-g">“photoshop”</span>, <span className="c-g">“indesign”</span>, <span className="c-g">“illustrator”</span>];<br/><br/>
                            </code>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
