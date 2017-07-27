import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

//Es importante que se instale npm i -S react-sparklines@1.4.2 en esa version y no la mas actual

export default (props) => {

    function average(data) {
        //Using lodash
        return _.round(_.sum(data)/data.length);
    }

    return (
        <div>
            <Sparklines height={props.height} width={props.width} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>
                Promedio: {average(props.data)} {props.units}
            </div>
        </div>
    );
}