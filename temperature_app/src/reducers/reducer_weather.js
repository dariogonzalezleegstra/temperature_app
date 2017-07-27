import { FETCH_WEATHER } from '../actions/index';


//by default state it's an empty array! Not null like in other reducers
export default function(state = [], action) {
    switch (action.type){
        case FETCH_WEATHER:
            //As in react, we always need something like "setState" and never manipulate
            //state. directly.
            //To conserve the last data, we're not going to override, we're going to concat
            //Here, we can't use "push([action.payload.data])" to concat for the same reason.
            //We have to use concat:

            return [action.payload.data, ...state]; //(Los "..." estan aproposito)
            //Also, we can put:
            //return [ state.concat([action.payload.data ]) and it's the same
    }

    return state;
}