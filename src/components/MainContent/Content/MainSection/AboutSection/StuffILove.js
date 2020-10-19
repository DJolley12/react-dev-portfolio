import React, {useState} from 'react'

function StuffILove() {
    
    //state hooks
    const [displayVSCode, setDisplayVSCode] = useState(false);
    const [displayVisualStudio, setDisplayVisualStudio] = useState(false);
    const [displayCyberpunkTheme, setDislpayCyberpunkThem] = useState(false);

    //callbacks
    function changeDisplayVSCode(newDisplay) {
        setDisplayVSCode(newDisplay);
    }

    function changeDisplayVisualStudio(newDisplay) {
        setDisplayVisualStudio(newDisplay);
    }

    function changeDisplayCyberpunkTheme(newDisplay) {
        setDislpayCyberpunkThem(newDisplay);
    }

    //handleClicks
    function handleVSCodeClick() {
        changeDisplayVSCode(true);
        changeDisplayVisualStudio(false);
        changeDisplayCyberpunkTheme(false);
    }

    function handleVisualStudioClick() {
        changeDisplayVSCode(false);
        changeDisplayVisualStudio(true);
        changeDisplayCyberpunkTheme(false);
    }

    function handleCyberpunkThemeClick() {
        changeDisplayVSCode(false);
        changeDisplayVisualStudio(false);
        changeDisplayCyberpunkTheme(true);
    }

    const underlineStyle = {
        textDecoration: 'underline',
        marginTop: '3vh'
    }

    return (
        <>
        <h4 className=""></h4>
            {!displayVSCode && !displayVisualStudio && !displayCyberpunkTheme && <div className="main_text_color" onClick={handleVSCodeClick} style={underlineStyle}>VS Code</div>}
            {!displayVSCode && !displayVisualStudio && !displayCyberpunkTheme && <div className="main_text_color" onClick={handleVisualStudioClick} style={underlineStyle}>Visual Studio</div>}
            {!displayVSCode && !displayVisualStudio && !displayCyberpunkTheme && <div className="main_text_color" onClick={handleCyberpunkThemeClick} style={underlineStyle}>Cyberpunk: VS Code Theme</div>}
            {displayVSCode && <p className="main_text_color">This is simply my favorite text editor, and in my opinion, the best our there. It has so many useful features and you can configure it to suite just about any project. For frontend development, I use this almost exclusively, because it is lightweight enough, that it's snappy, but also has all the linting and other features you could possible need. It is also cross platform and open source, which makes it great if you need something that is available on Windows, Mac, and Linux. There is also a large community contributing to the editor, so extensions are very abundant, and you can get debuggers and linting for practically any language you want. If you are a VIM user, you can even find a VIM extension.</p>}
            {displayVisualStudio && <p></p>}
            {displayCyberpunkTheme && <p className="main_text_color">This theme gets me in the mood to write code, and I find myself more likely to stay up working because of it. I could stare at this theme for hours. It is so visually pleasing to me, that it actually makes me want to write more code, and I find myself sometimes using VS Code simply so I can have the theme. That said, it also has a lot of advantages, such as a high variety in it's color palette, making it easier to instantly recognize elements in code. It also has a brighter color for bracket section highlighting, which makes me get lost less easy. <br></br>Overall, the theme is easy on the eyes, but not so dark that it has too much contrast. This is my favorite theme I've found so far.</p>}
        </>
    )
}

export default StuffILove