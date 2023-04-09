import * as alt from 'alt';

alt.on('playerDeath', (victim, killer, weaponHash) => {
    victim.emit("Wasted:Show");
});