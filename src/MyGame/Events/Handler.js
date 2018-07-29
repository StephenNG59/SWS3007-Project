"use strict";

var GameEvents = GameEvents || { };

GameEvents.handle = function (e, game) {
    // 是否按触发键
    if (e[0] && !gEngine.Input.isKeyClicked(gEngine.Input.keys[e[0]]))
        return null;

    document.mEventMutex = true;

    switch (e[1]) {

        case "Go":
        return function(game) {
            game.nextScene = getScene(e[2]);
            gEngine.GameLoop.stop();
            document.mEventMutex = false;
        }
        break;

        case "Show":
        return function(game) {
            var i;
            for (i = 0; i < e[2].length; ++i)
                document.mMsgQueue.push(e[2][i]);
        }
        break;

        case "Battle":
        return function(game) {
            enterCombat(game, CharacterSet[0], CharacterSet[1], "zhuzishan");
        }

        case "Get":
        return function(game) {
            var i;
            for (i = 0; i < e[2].length; ++i)
                window.package.addProps(ItemSet[e[2][i]]);
            document.mEventMutex = false;
        }

        case "Win":
        if (document.mLastCombatWin) {
            return GameEvents.handle(e[2], game);
        } else {
            return null;
        }
        break;

        case "Check":
        if (window.package.checkProp(e[2])) {
            return GameEvents.handle(e[3], game);
        } else {
            return GameEvents.handle(e[4], game);
        }
        break;

        case "Back":
        return function(game) {
            var xform = game.getHero().getXform();
            xform.setPosition(xform.getXPos(), xform.getYPos() + 0.1);
        }
        break;

        default:
        return null;
    }
    return null;
};
