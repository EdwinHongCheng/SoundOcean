import { connect } from 'react-redux';
import ShowUser from './show_user';

import { fetchTracks } from '../../actions/track_actions';

// [TEST] hoping to fetch user for the user's show page
import { fetchUser } from '../../actions/user_actions'

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        showUser: state.entities.users[ownProps.match.params.userId]
    }
}

const mDTP = dispatch => {
    return {
        fetchTracks: () => dispatch(fetchTracks()),
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP)(ShowUser);
