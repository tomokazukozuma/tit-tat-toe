import {
    connect,
} from 'react-redux'
  
import Step from './../components/Step'
import StepActions from './../actions/Step'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        generate(index) {
            dispatch(StepActions.generate(index));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step)