import { connect } from 'react-redux';
import Discover from './discover';
// Test
import { fetchTracks } from '../../actions/track_actions'


const mSTP = ({ session, entities }) => {
    return {
        currentUser: entities.users[session.id],
        tracks: Object.values(entities.tracks)
    };
};

const mDTP = dispatch => {
    return {
        fetchTracks: () => dispatch(fetchTracks())
    }
}

export default connect(mSTP, mDTP)(Discover);
