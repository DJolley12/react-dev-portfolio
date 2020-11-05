import React, {useState} from 'react'
import "./stuff-i-love.css"

//Prettier, GitHub, Material Theme Icons, Package Managers

function StuffILove() {
    
    //state hooks
    const [displayVSCode, setDisplayVSCode] = useState(false);
    const [displayVisualStudio, setDisplayVisualStudio] = useState(false);
    const [displayCyberpunkTheme, setDisplayCyberpunkTheme] = useState(false);
    const [displaySynthwave84Theme, setDisplaySynthwave84Theme] = useState(false);
    const [displayBackButton, setDisplayBackButton] = useState(false);
    const [displayPrettier, setDisplayPrettier] = useState(false);
    const [displayLiveServer, setDisplayLiveServer] = useState(false);
    const [displayGitHub, setDisplayGitHub] = useState(false);
    const [displayMaterialThemeIcons, setDisplayMaterialThemeIcons] = useState(false);
    const [displayPackageManagers, setDisplayPackageMangers] = useState(false);
    const [displaySpotify, setDisplaySpotify] = useState(false);
    const [displayEZBlocker, setDisplayEZBlocker] = useState(false);
    const [displayMenu, setDisplayMenu] = useState(true);

    //callbacks
    function changeDisplayVSCode(newDisplay) {
        setDisplayVSCode(newDisplay);
    }

    function changeDisplayVisualStudio(newDisplay) {
        setDisplayVisualStudio(newDisplay);
    }

    function changeDisplayCyberpunkTheme(newDisplay) {
        setDisplayCyberpunkTheme(newDisplay);
    }

    function changeDisplaySynthwave84Theme(newDisplay) {
        setDisplaySynthwave84Theme(newDisplay);
    }

    function changeDisplayBackButton(newDisplay) {
        setDisplayBackButton(newDisplay);
    }

    function changeDisplayDisplayPrettier(newDisplay) {
        setDisplayPrettier(newDisplay);
    }

    function changeDisplayLiveServer(newDisplay) {
        setDisplayLiveServer(newDisplay);
    }

    function changeDisplayGitHub(newDisplay) {
        setDisplayGitHub(newDisplay);
    }

    function changeDisplayMaterialThemeIcons(newDisplay) {
        setDisplayMaterialThemeIcons(newDisplay);
    }

    function changeDisplayPackageManagers(newDisplay) {
        setDisplayPackageMangers(newDisplay);
    }
    
    function changeDisplaySpotify(newDisplay) {
        setDisplaySpotify(newDisplay);
    }

    function changeDisplayEZBlocker(newDisplay) {
        setDisplayEZBlocker(newDisplay);
    }

    function changeDisplayMenu(newDisplay) {
        setDisplayMenu(newDisplay);
    }

    //handleClicks
    function handleVSCodeClick() {
        changeDisplayVSCode(true);
        changeDisplayBackButton(true);
        changeDisplayMenu(false);
    }

    function handleVisualStudioClick() {
        changeDisplayVisualStudio(true);
        changeDisplayBackButton(true);
        changeDisplayMenu(false);
    }

    function handleCyberpunkThemeClick() {
        changeDisplayCyberpunkTheme(true);
        changeDisplayBackButton(true);
        changeDisplayMenu(false);
    }

    function handleSynthwave84ThemeClick() {
        changeDisplaySynthwave84Theme(true);
        changeDisplayBackButton(true);
        changeDisplayMenu(false);
    }

    function handlePrettierClick() {
        changeDisplayDisplayPrettier(true);
        changeDisplayBackButton(true);
        changeDisplayMenu(false);
    }

    function handleLiveServerClick() {
        changeDisplayLiveServer(true);
        changeDisplayBackButton(true);
        changeDisplayMenu(false);
    } 
    
    function handleGitHubClick() {
        changeDisplayGitHub(true);
        changeDisplayBackButton(true);
        changeDisplayMenu(false);
    }
    
    function handleMaterialThemeIconsClick() {
        changeDisplayMaterialThemeIcons(true);
        changeDisplayBackButton(true);
        changeDisplayMenu(false);
    }
    
    function handlePackageManagersClick() {
        changeDisplayPackageManagers(true);
        changeDisplayBackButton(true);
        changeDisplayMenu(false);
    }
    function handleSpotifyClick() {
        changeDisplaySpotify(true);
        changeDisplayBackButton(true);
        changeDisplayMenu(false);
    }

    function handleEZBlockerClick() {
        changeDisplayEZBlocker(true);
        changeDisplayBackButton(true);
        changeDisplayMenu(false);
    }

    function handleBackButtonClick() {
        changeDisplayVSCode(false);
        changeDisplayVisualStudio(false);
        changeDisplayCyberpunkTheme(false);
        changeDisplaySynthwave84Theme(false);
        changeDisplayDisplayPrettier(false);
        changeDisplayLiveServer(false);
        changeDisplayGitHub(false);
        changeDisplayMaterialThemeIcons(false);
        changeDisplayPackageManagers(false);
        changeDisplaySpotify(false);
        changeDisplayEZBlocker(false);
        changeDisplayBackButton(false);
        changeDisplayMenu(true);
    }

    const underlineStyle = {
        textDecoration: 'underline',
        marginTop: '3vh',
        height: '3%',
        fontSize: '80%',
        marginLeft: '5%'
    }
    
    const backButtonStyle = {
        marginTop: '1.5vh',
        marginBottom: '3vh',
        marginLeft: '1vw',
        width: '7%',
        textAlign: 'center',
    }

    const paragraphStyle = {
        marginLeft: '1.5vw',
        marginRight: '1.5vw',
        fontSize: "80%"
    }



    return (
        <>
            {displayMenu && 
            <>
                <div className="row">
                    <div className="main_text_color col-sm" onClick={handleVSCodeClick} style={underlineStyle}>VS Code</div>
                    <div className="main_text_color col-sm" onClick={handleVisualStudioClick} style={underlineStyle}>Visual Studio</div>
                </div>
                <div className="row">
                    <div className="main_text_color col-sm" onClick={handleCyberpunkThemeClick} style={underlineStyle}>Cyberpunk: VS Code Theme</div>
                    <div className="main_text_color col-sm" onClick={handleSynthwave84ThemeClick} style={underlineStyle}>Synthwave '84: VS Code Theme</div>
                </div> 
                <div className="row">
                    <div className="main_text_color col-sm" onClick={handleLiveServerClick} style={underlineStyle}>Live Server</div>
                    <div className="main_text_color col-sm" onClick={handleGitHubClick} style={underlineStyle}>GitHub</div>
                </div>
                <div className="row">
                    <div className="main_text_color col-sm" onClick={handleMaterialThemeIconsClick} style={underlineStyle}>Material Theme Icons</div>
                    <div className="main_text_color col-sm" onClick={handlePackageManagersClick} style={underlineStyle}>Package Managers</div>
                </div>
                <div className="row">
                    <div className="main_text_color col-sm" onClick={handleSpotifyClick} style={underlineStyle}>Spotify</div>
                    <div className="main_text_color col-sm" onClick={handleEZBlockerClick} style={underlineStyle}>EZBlocker</div>
                </div>
                <div className="row">
                    <div className="main_text_color col-sm" onClick={handlePrettierClick} style={underlineStyle}>Prettier</div>
                </div>
            </>}
            {displayBackButton && <a id="back_to_stuff_button" className="secondary_button" onClick={handleBackButtonClick} style={backButtonStyle}>Back</a>}
            {displayVSCode && <p className="main_text_color stuff_paragraph" style={paragraphStyle}>This is simply my favorite text editor, and in my opinion, the best our there. It has so many useful features and you can configure it to suite just about any project. For frontend development, I use this almost exclusively, because it is lightweight enough, that it's snappy, but also has all the linting and other features you could possible need. It is also cross platform and open source, which makes it great if you need something that is available on Windows, Mac, and Linux. There is also a large community contributing to the editor, so extensions are very abundant, and you can get debuggers and linting for practically any language you want. If you are a VIM user, you can even find a VIM extension.</p>}
            {displayVisualStudio && <p className="main_text_color stuff_paragraph" style={paragraphStyle}>For C#, there is simply nothing better. Life is so much easier with Visual Studio, as everything is constantly checked for you. Missing a using statement? Just ctrl + . and VS will add it for you. Need a package added? VS will even install it for you if it recognizes what you need. Navigating complex and large applications is also easy with this IDE. <br></br> There are also so many useful tools, including database, and GitHub tools integrated right into the IDE, as well as the ability to build, publish, etc.</p>}
            {displayCyberpunkTheme && <p className="main_text_color stuff_paragraph" style={paragraphStyle}>This theme gets me in the mood to write code, and I find myself more likely to stay up working because of it. I could stare at this theme for hours. It is so visually pleasing to me, that it actually makes me want to write more code, and I find myself sometimes using VS Code simply so I can have the theme. That said, it also has a lot of advantages, such as a high variety in it's color palette, making it easier to instantly recognize elements in code. It also has a brighter color for bracket section highlighting, which makes me get lost less easy. <br></br>Overall, the theme is easy on the eyes, but not so dark that it has too much contrast. This is my favorite theme I've found so far. Check it out {"=>"} <a onClick={() => window.open("https://marketplace.visualstudio.com/items?itemName=max-SS.cyberpunk", "_blank")} className="flicker link_tag">here</a></p>}
            {displaySynthwave84Theme && <p className="main_text_color stuff_paragraph" style={paragraphStyle}>Enable Neon Dreams: enough said. This theme has an awesome glow to some of the elements with this enabled. It looks awesome, I highly recommend you check it out! The Visual Studio Marketplace has a description on how to enable neon dreams, check it out {"=>"} <a onClick={() => window.open("https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode", "_blank")} className="flicker link_tag">here</a></p>}
            {displayPrettier && <p className="main_text_color stuff_paragraph" style={paragraphStyle}>This VS Code add-on is necessary. Once you add it you will miss it if you don't have it. Code gets messy, so having it autoformatted on save is awesome.</p>}
            {displayLiveServer && <p className="main_text_color stuff_paragraph" style={paragraphStyle}>While creating static HTML there is nothing better is my opinion than this add-on. It is a lot like the Brackets editor, where is allows auto refresh on save, so you don't need to refresh to display the changes you are making. It also allows you to easily display individual pages while creating them.</p>}
            {displayGitHub && <p className="main_text_color stuff_paragraph" style={paragraphStyle}>GitHub is my favorite source control. They have many features, and you no longer need to pay for private repositories, which erases their biggest previous downfall. <br></br> While others browse Facebook or Reddit, I'm browsing GitHub to see what fun or cool projects I can find, and there are so many awesome ideas other developers have done with CSS and JavaScript magic in their projects, that I get lost in wormholes and time pockets, and come out the other end wondering where 3 hours went.<br></br> I like the feel of the site, I like the ability to go find various open source packages easily, such as spotify ad blockers, or other useful tools.</p>}
            {displayMaterialThemeIcons && <p className="main_text_color stuff_paragraph" style={paragraphStyle}>This one is simple: I just like it. Ha.<br></br> These make it easier to not get lost in folders and folders and moar code and moar code. Directories look pleasing, and they are much easier to navigate your projects.</p>}
            {displayPackageManagers && <p className="main_text_color stuff_paragraph" style={paragraphStyle}>Long gone are the days of manually adding dependencies, but I'm continually reminded everytime i use a package manager how easy it now is to simply install a package, i.e. npm install -package name-. The fact this downloads all the dependecies on that package, and puts it easily into your project, without needing a browser to go online, find the download, etc., etc. is just awesome. You can't survive in our world without these anymore, seeing as so many projects are dependent on sometimes thousands of other packages.</p>}
            {displaySpotify && <p className="main_text_color stuff_paragraph" style={paragraphStyle}>I love music. I'm a musician, but listening to music can help focus, and create a state of flow. Check out my main flow playlist {"=>"} <a onClick={() => window.open("https://open.spotify.com/playlist/4O0Eeozj7U0t2fLo7iPVMv?si=rUx5xBcPR12elc2-bp-1qg", "_blank")} className="flicker link_tag">here</a>.</p>}
            {displayEZBlocker && <p className="main_text_color stuff_paragraph" style={paragraphStyle}>Nothing interrupts flow like obnoxious, repetative ads, with horrible jingles that get stuck in your head, and when I finally had enough of ads that almost seem to taunt you into paying for premium spotify membership, I had enough, and found this on GitHub, which has improved my happiness through my workdays. You can find it {"=>"} <a onClick={() => window.open("https://github.com/Xeroday/Spotify-Ad-Blocker", "_blank")} className="flicker link_tag">here</a>.</p>}
        </>
    )
}

export default StuffILove