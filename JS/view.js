
updateView();
function updateView(){

html = /*HTML*/`



    <div id="statusbar-display-wrap">
        <p id="food-text"><b>Hunger</b>:</p>
        <div id="hunger-bar"><div id="hunger-fill-bar" style="width: ${hungerWidth}px;"></div></div>
        <p id="thirst-text"><b>Thirst</b>:</p>
        <div id="thirst-bar"><div id="thirst-fill-bar" style="width: ${thirstWidth}px;"></div></div>
    </div>     

    


 
    <div id="action-buttons">
    <button id="feed-bunny" onclick="feedBunny()">Feed</button>
        <button id="hydrate-bunny" onclick="hydrateBunny()">Hydrate</button>

    </div>
    


    <div id="bunny-display">
        <img id="bunny-img"src="bunny.png" style="z-index: 1" />
     </div>
    <p id="total-eggs-text">Total Eggs: ${totalEggs}
    <div id="egg-holder">
    ${eggHolderContent}
    </div>


`

app.innerHTML = html;
}

function updateScoreView() {
    eggHolderContent = document.getElementById('egg-holder').innerHTML;
    return eggHolderContent;
}