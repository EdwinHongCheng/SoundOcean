import { connect } from 'react-redux';
import Discover from './discover';
import { fetchTracks } from '../../actions/track_actions'


const mSTP = ({ session, entities }) => {


    // [TEST] super janky way
    let allUsers = Object.values(entities.users);
    let allUsersObject = {};
    allUsers.forEach(user => {
        allUsersObject[user.id] = user
    })

    return {
        currentUser: entities.users[session.id],
        tracks: Object.values(entities.tracks),
        // [TEST] super janky way
        users: allUsersObject
    };
};

const mDTP = dispatch => {
    return {
        fetchTracks: () => dispatch(fetchTracks())
    }
}

export default connect(mSTP, mDTP)(Discover);
