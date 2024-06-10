//Ejercise: Managing a Playlist

function managePlayList (platlist,newsong){
    platlist.shift();
    platlist.unshift(newsong);
    return platlist
}

const initialPlalist = ['pompom','sabrosom', 'salpicon'];
const newSongToAdd = 'bombom';

const updatePlaylist = managePlayList(initialPlalist,newSongToAdd);
console.log('Initial Playlist:', initialPlalist);
console.log('New song to Add:', newSongToAdd);
console.log('Update PlayList:', updatePlaylist);


