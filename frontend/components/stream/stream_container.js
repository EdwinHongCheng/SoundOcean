import { connect } from 'react-redux';
import Stream from './stream';
import { fetchTracks } from '../../actions/track_actions';
import { receiveCurrentTrack, playTrack, pauseTrack } from '../../actions/ui_actions';


const mSTP = ({ session, entities, ui }) => {
    return {
        currentUser: entities.users[session.id],
        tracks: Object.values(entities.tracks),
        users: entities.users,
        currentTrack: entities.tracks[ui.currentTrack.id],
        // Updates isPlaying state (Play / Pause)
        isPlaying: ui.isPlaying
    };
};

const mDTP = dispatch => {
    return {
        fetchTracks: () => dispatch(fetchTracks()),
        receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
        // Updates isPlaying state (Play / Pause)
        playTrack: () => dispatch(playTrack()),
        pauseTrack: () => dispatch(pauseTrack()),
    }
}

export default connect(mSTP, mDTP)(Stream);
