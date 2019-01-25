import highchartsConfig from './HighchartsConfig';
import React from 'react';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import ReactHighChart from 'react-highcharts';
import HightchartsTheme from '../Dashboard/HighchartsTheme';
ReactHighChart.Highcharts.setOptions(HightchartsTheme);
export default ()=>(
    <AppContext.Consumer>
    {({historical})=>
        <Tile>
            { historical ? 
            <ReactHighChart config={highchartsConfig(historical)}/>:
            <div>Loading hightChart data...</div>}
        </Tile>
    }
    </AppContext.Consumer>
)