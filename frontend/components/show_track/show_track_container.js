import { connect } from 'react-redux';
import ShowTrack from "./show_track";
import { fetchTrack } from '../../actions/track_actions';
import { receiveCurrentTrack, playTrack, pauseTrack } from '../../actions/ui_actions'

const mSTP = (state, ownProps) => {
    return {
        // NOTE: track refers to the show page's specific track
        track: state.entities.tracks[ownProps.match.params.trackId],
        currentUser: state.entities.users[state.session.id],
        // NOTE: currentTrack refers to what's playing in Play Bar now
        currentTrack: state.entities.tracks[state.ui.currentTrack.id],
        // [WORKS] updating isPlaying state (Play Pause)
        isPlaying: state.ui.isPlaying
    }
}

const mDTP = dispatch => {
    return {
        fetchTrack: trackId => dispatch(fetchTrack(trackId)),
        receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
        // [WORKS] updating isPlaying state (Play Pause)
        playTrack: () => dispatch(playTrack()),
        pauseTrack: () => dispatch(pauseTrack())
    }
}

export default connect(mSTP, mDTP)(ShowTrack);
