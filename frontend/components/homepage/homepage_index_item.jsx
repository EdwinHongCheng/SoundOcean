import React from 'react';

class HomepageIndexItem extends React.Component {
    render() {
        let currentTrack = this.props.track;

        let currentCover;
        if ((this.props.idx + 1) % 6 === 0) {
            currentCover = (<img className="homepageCoverArtLast"
                    onClick={() => this.props.openModal('login')} 
                    src={currentTrack.imageURL} />)
        } else {
            currentCover = (<img className="homepageCoverArt"
                    onClick={() => this.props.openModal('login')} 
                    src={currentTrack.imageURL} />)
        }
        
        return (
            <div className="homepageIndexItem">
                {currentCover}

                <div onClick={() => this.props.openModal('login')}>
                    <p className="homepageTrackText">{currentTrack.title}</p>
                </div>

                <div onClick={() => this.props.openModal('login')}>
                    <div className="homepageCreatorNameText">{currentTrack.creator}</div>
                </div>
            </div>
        )
    }   
}

export default HomepageIndexItem;