import { connect } from 'react-redux';
import Discover from './discover';
import { fetchTracks } from '../../actions/track_actions'


const mSTP = ({ session, entities }) => {


    // [TEST][WORKS] super-janky way
    // RESULT: object of all users 
    // -> can key into specific user w track.creator_id
    let allUsers = Object.values(entities.users);
    let allUsersObject = {};
    allUsers.forEach(user => {
        allUsersObject[user.id] = user
    })

    return {
        currentUser: entities.users[session.id],
        tracks: Object.values(entities.tracks),
        // [TEST][WORKS] super-janky way
        users: allUsersObject
    };
};

const mDTP = dispatch => {
    return {
        fetchTracks: () => dispatch(fetchTracks())
    }
}

export default connect(mSTP, mDTP)(Discover);
