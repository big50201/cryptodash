import highchartsConfig from './HighchartsConfig';
import React from 'react';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import HighChart from 'react-highcharts';

export default ()=>(
    <AppContext.Consumer>
    {({})=>
        <Tile>
            <HighChart config={highchartsConfig()}/>
        </Tile>
    }
    </AppContext.Consumer>
)