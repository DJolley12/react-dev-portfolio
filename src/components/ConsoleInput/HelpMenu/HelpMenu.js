import "../console-input.css"

import React from 'react'

function HelpMenu() {
    return(
        <>
            <h4 id="help_info" className="layer-top main_text_color help_menu">For more information on a specific command, type HELP/*command-name*</h4>
            <table id="help_table" className="layer-top main_text_color">
                <tr>
                    <td className="help_menu">HOME</td>
                </tr>
                <tr>
                    <td className="help_menu">ABOUT</td>                
                </tr>
                <tr>
                    <td className="help_menu">MYWORK</td>                
                </tr>
                <tr>
                    <td className="help_menu">CONTACT</td>
                </tr>
            </table>
        </>
        )
}

export default HelpMenu