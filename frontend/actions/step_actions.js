const RECEIVE_STEPS = "RECEIVE_STEPS" 
const RECEIVE_STEP = "RECEIVE_STEP" 
const REMOVE_STEP = "REMOVE_STEP"

const receiveSteps = steps => ({
    type: RECEIVE_STEPS,
    steps
});

const receiveStep = step => ({
    type: RECEIVE_STEP,
    step
});

const removeStep = step => ({
    type: REMOVE_STEP,
    step
});

export { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP };