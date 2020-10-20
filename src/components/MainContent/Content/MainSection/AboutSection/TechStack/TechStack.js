import React from 'react'
import "./tech-stack.css"

function TechStack() {
    return (
        <>
        <div className="bar">
            <div id="c_sharp_inner" className="bar_inner">
                <div className="tag">C#</div>
            </div>
        </div>
        <div className="bar">
            <div id="ef_inner" className="bar_inner">
                <div className="tag">Entity Framework</div>
            </div>
        </div>  
        <div className="bar">
            <div id="sql_inner" className="bar_inner">
                <div className="tag">SQL</div>
            </div>
        </div> 
        <div className="bar">
            <div id="javascript_inner" className="bar_inner">
                <div className="tag">JavaScript</div>
            </div>
        </div>
        <div className="bar">
            <div id="html_inner" className="bar_inner">
                <div className="tag">HTML</div>
            </div>
        </div>
        <div className="bar">
            <div id="css_inner" className="bar_inner">
                <div className="tag">CSS</div>
            </div>
        </div>  
        <div className="bar">
            <div id="_inner" className="bar_inner">
                <div className="tag">CSS</div>
            </div>
        </div>  
       </> 
        
    )
}

export default TechStack