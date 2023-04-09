import * as alt from 'alt-client';
import * as native from "natives";
import * as NativeUI from "./NativeUI/NativeUi.js";

const scriptConstants = {
    screenFX: "DeathFailMPIn",
    textDelay: 1250,
    stopTime: 7500,
    camEffect: 1,
    title: "~r~WASTED",
    deathMessage: "Du bist gestorben."
};

function ShowWastedScreen(){
    native.playSoundFrontend(-1, "Bed", "WastedSounds", true);
    native.animpostfxPlay(scriptConstants.screenFX, 0, true);
    native.setCamDeathFailEffectState(scriptConstants.camEffect);

    alt.setTimeout(() => {
        NativeUI.MidsizedMessage.ShowCondensedShardMessage(
            scriptConstants.title, 
            scriptConstants.deathMessage, 
            NativeUI.HudColor.HUD_COLOUR_BLACK, 
            true)
    }, scriptConstants.textDelay)
    
    alt.setTimeout(() => {
        native.animpostfxStop(scriptConstants.screenFX);
        native.setCamDeathFailEffectState(0);
    }, scriptConstants.stopTime)
}

alt.onServer("Wasted:Show", ShowWastedScreen);