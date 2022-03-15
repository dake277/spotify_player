import React from "react";
import { connect } from 'react-redux'
import TracklistRecommended from "../TracklistRecommended";
import UserLibrary from '../UserLibrary'
import PlaylistView from '../PlaylistView'
import MainHeader from '../MainHeader'
import { viewType } from '../../constants'

import styled from 'styled-components'

const MainViewLayout = styled.div`
  overflow-x: hidden;
`

class MainView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          opacity: 0,
      };

      this.mainLayoutRef = React.createRef()
    } 


  onScroll = () => {
      if (this.mainLayoutRef.current.scrollTop < 400) {
          const opacity = this.mainLayoutRef.current.scrollTop / 300
          this.setState({
              opacity
          })
      }
  }

  componentDidMount() {
      window.addEventListener('scroll', this.onScroll,true);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.headerTitle !== this.props.headerTitle) {
      if (this.mainLayoutRef) {
        this.mainLayoutRef.current.scrollTop = 0
      }
    }
  }

  UNSAFE_componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
  }




  renderMainView = () => {
    switch (this.props.headerTitle) {
      case viewType.RECENTLY_PLAYED :
        return <TracklistRecommended />

      case viewType.USER_LIBRARY :
        return <UserLibrary />
        
      default: 
        return <PlaylistView onPlay={this.props.onPlay}/>
    }
  }

 render() {
    return (
      <MainViewLayout ref={this.mainLayoutRef}>
        <MainHeader opacity={this.state.opacity} />
          {this.renderMainView()}
      </MainViewLayout>
    )
 }
}


export default connect(state => ({
    headerTitle: state.uiReducer.title,





    token : state.tokenReducer.token ? state.tokenReducer.token : '',
}))(MainView)