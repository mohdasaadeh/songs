import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Slave To Liberty", band: "Mystery", duration: "5:42" },
    { title: "Before The Dawn", band: "Mystery", duration: "6:34" },
    { title: "Now You're Gone", band: "Whitesnake", duration: "4:06" },
    { title: "Sunset", band: "Eloy", duration: "2:51" },
    { title: "Mother Nature", band: "Mostly Autumn", duration: "12:09" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
