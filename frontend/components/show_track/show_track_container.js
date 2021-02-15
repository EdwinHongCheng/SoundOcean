import { connect } from 'react-redux';
import ShowTrack from "./show_track";
import { fetchTrack } from '../../actions/track_actions';

const mSTP = (state, ownProps) => {
    return {
        track: state.entities.tracks[ownProps.match.params.trackId],
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        fetchTrack: trackId => dispatch(fetchTrack(trackId))
    }
}

export default connect(mSTP, mDTP)(ShowTrack);
