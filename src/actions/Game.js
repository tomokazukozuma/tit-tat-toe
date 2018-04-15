const Actions = {
    click(index) {
        return {
            type: 'CLICK',
            index
        }
    },
    move(stepNumber) {
        return {
            type: 'MOVE',
            stepNumber
        }
    }
}
  
export default Actions