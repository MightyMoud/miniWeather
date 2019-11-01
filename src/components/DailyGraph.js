import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const DailyGraph = ({data, color, minAxis}) => {


    let bg = color;
    return (
        <div className="det" style= {{background: `${bg}`, color: 'black'}}>
           <ResponsiveLine
                data={data}
                curve= 'natural'
                enableGridX = {false}
                enableGridY = {false}
                enableArea = {true}
                areaBaselineValue = {Math.floor(minAxis) - 0.25}
                areaOpacity = '0.5'
                areaBlendMode = 'screen'
                useMesh = {true}
                enableCrosshair = {false}
                margin={{ top: 30, right: 30, bottom: 40, left: 60 }}
                xScale={{ type: 'point' }}
                xFormat = {value => Math.floor(value)>12 ? `${(Math.floor(value) - 12).toFixed(2)} PM` : `${Math.floor(value).toFixed(2)} AM`}
                yScale={{ type: 'linear', min: `${Math.floor(minAxis) - 0.25}`, max:'auto'}}
                yFormat = {value => `${value}C `}
                tooltip = {(point) => (
                    <div
                        style={{
                            background: 'white',
                            borderRadius: '5px',
                            padding: '5px',
                            boxShadow: '2px 2px 6px rgba(255,255,255, 0.5)',
                            fontFamily: 'Montserrat'
                        }}
                        >
                        {`Time:${point.point.data.xFormatted }`} <br/>
                        {`Temp:${point.point.data.yFormatted}`}
                    </div>
                )}
                axisBottom={{
                    orient: 'bottom',
                    format: value => Math.floor(value)>12 ? `${(Math.floor(value) - 12).toFixed(2)} PM` : `${Math.floor(value).toFixed(2)} AM`,
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Time',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    format: value => `${value}C`,
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Temprature',
                    legendOffset: -50,
                    legendPosition: 'middle'
                }}
                colors={{ scheme: 'greys' }}
                pointSize={12}
                pointBorderWidth={1}
                theme={{
                    axis: {
                      ticks: {
                        line: {
                          stroke: "white"
                        },
                        text: {
                          fill: "white",
                          fontFamily : 'Montserrat'
                        }
                      },
                      legend: {
                          text: {
                              fill: 'white',
                              fontFamily: 'Montserrat'
                          }
                      },
                      tooltip: {
                          container: {
                              fill: 'white'
                          }
                      }
                    }}}
                
    />
        </div>
    )
}


export default DailyGraph ;