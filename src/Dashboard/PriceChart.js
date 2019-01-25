import highchartsConfig from './HighchartsConfig';
import React from 'react';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import ReactHighChart from 'react-highcharts';
import HightchartsTheme from '../Dashboard/HighchartsTheme';
import ChartSelect from './ChartSelect';

ReactHighChart.Highcharts.setOptions(HightchartsTheme);
export default ()=>(
    <AppContext.Consumer>
    {({historical,changeChartSelect})=>
        <Tile>
            <ChartSelect
                defaultValue={"months"}
                onChange = {e=>changeChartSelect(e.target.value)}
            >
                <option value="days">Days</option>
                <option value="weeks">weeks</option>
                <option value="months">Months</option>

            </ChartSelect>
            { historical ? 
            <ReactHighChart config={highchartsConfig(historical)}/>:
            <div>Loading hightChart data...</div>}
        </Tile>
    }
    </AppContext.Consumer>
)