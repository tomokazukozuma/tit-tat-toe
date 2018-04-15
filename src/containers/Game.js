import {
    connect,
} from 'react-redux'
  
import Game from './../components/Game'
import GameActions from './../actions/Game'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        click(index) {
            dispatch(GameActions.click(index));
        },
        move(stepNumber) {
            dispatch(GameActions.move(stepNumber));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)