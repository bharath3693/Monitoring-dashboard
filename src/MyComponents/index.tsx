  /* eslint-disable @typescript-eslint/no-use-before-define */
  import React, { useState } from 'react';
  import Pie, { ProvidedProps, PieArcDatum } from '@visx/shape/lib/shapes/Pie';
  // import { scaleOrdinal } from '@visx/scale';
  import { Group } from '@visx/group';
  import { GradientPinkBlue } from '@visx/gradient';
  import { LinearGradient } from '@visx/gradient';
  // import letterFrequency, { LetterFrequency } from '@visx/mock-data/lib/mocks/letterFrequency';
  // import browserUsage, { BrowserUsage as Browsers } from '@visx/mock-data/lib/mocks/browserUsage';
  import { animated, useTransition, interpolate } from '@react-spring/web';

  // data and types
  // type BrowserNames = keyof Browsers;

  // interface BrowserUsage {
  //   label: BrowserNames;
  //   usage: number;
  // }
  interface DeviceType {
    device: string;
    count: number;
  }

  
  // var count: string[] = ['1', '2', '3', '4', '5'];
  // console.log(browserUsage)
  // console.log(Object.keys(browserUsage[0]))
  // console.log(Object.keys(browserUsage[0]).filter((k) => k !== 'date'))
  // var deviceNames: string[] = ['A', 'B', 'C', 'D', 'E'];
  // const letters: LetterFrequency[] = letterFrequency.slice(0, 4);
  // const browserNames = Object.keys(browserUsage[0]).filter((k) => k !== 'date') as BrowserNames[];
  // browserNames = ['date', 'Google Chrome', 'Internet Explorer', 'Firefox', 'Safari', 'Microsoft Edge', 'Opera', 'Mozilla', 'Other/Unknown']

  // const browsers: BrowserUsage[] = browserNames.map((name) => ({
  //   label: name,
  //   usage: Number(browserUsage[0][name]),
  // }));
  
  // var arr: DeviceType[] = [{ 'device': 'A', 'count': 1 },
  // { 'device': 'B', 'count': 7 },
  // { 'device': 'C', 'count': 5 },
  // { 'device': 'D', 'count': 3 },
  // { 'device': 'E', 'count': 4 }]
  

  // accessor functions
  // const usage = (d: BrowserUsage) => d.usage;
  // const frequency = (d: LetterFrequency) => d.frequency;
  // var d = (d: DeviceType) => d.device;
  // var c = (c: DeviceType) => c.count;
  

  // const num = (d: DeviceType)=> d.count;

  // color scales
  // const getBrowserColor = scaleOrdinal({
  //   domain: browserNames,
  //   range: [
  //     'rgba(64, 175, 5,1)',
  //     'rgba(13, 218, 184, 0.5)',
  //     'rgba(8, 176, 114, 0.8)',
  //     'rgba(146, 11, 11, 1)',
  //     'rgba(228, 127, 12, 1)',
  //     'rgba(235, 155, 43,1)',
  //     'rgba(255, 161, 164, 1)',
  //   ],
  // });
  // const getLetterFrequencyColor = scaleOrdinal({
  //   domain: letters.map((l) => l.letter),
  //   range: ['rgba(93,30,91,1)', 'rgba(93,30,91,0.8)', 'rgba(93,30,91,0.6)', 'rgba(93,30,91,0.4)'],
  // });

  // const getDeviceColor = scaleOrdinal({
  //   domain: deviceNames,
  //   range: ['red',
  //   'blue',
  //   'pink',
  //   'orange',
  //   'yellow',
  //   ]
  //   // range: ['rgba(255,255,255,0.7)',
  //   //   'rgb(255, 161, 164, 1)',
  //   //   'rgba(64, 175, 5,1)',
  //   //   'rgba(13, 218, 184, 0.5)',
  //   //   'rgba(8, 176, 114, 0.8)',
  //   //   ]
  // })

  const defaultMargin = { top: 20, right: 20, bottom: 20, left: 20 };

  export type PieProps = { 
    bpie:boolean;
    bdou:boolean;   
    colorfunction: Function;
    doughnutcolor : Function,
    piedata:DeviceType[];
    width: number;
    height: number;
    margin?: typeof defaultMargin;
    animate?: boolean;
  };

  export default function Example({ bpie, bdou,doughnutcolor, colorfunction,piedata, width, height, margin = defaultMargin, animate = true }: PieProps) {

    // const [selectedBrowser, setSelectedBrowser] = useState<string | null>(null);
    // const [selectedAlphabetLetter, setSelectedAlphabetLetter] = useState<string | null>(null);
    const [selectedDevices, setSelectedDevices] = useState<string | null>(null);

    if (width < 10) return null;

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const radius = Math.min(innerWidth, innerHeight) / 2;
    const centerY = innerHeight / 2;
    const centerX = innerWidth / 2;
    const donutThickness = 50;
    

    return (
      <>    
      <svg width={width} height={height}>
        <GradientPinkBlue id="visx-pie-gradient" />
        <LinearGradient id="gradienttrail" from={"#910c63"} to={"#055775"} />
        <rect rx={0} width={width} height={height} fill="url('#gradienttrail')" />


        <Group top={centerY + margin.top} left={centerX + margin.left}>       
          {/* <Pie
            data={
              selectedDevices ? arr.filter(({ device }) => device === selectedDevices) : arr
            }
            pieValue={c}
            outerRadius={radius}
            innerRadius={radius - donutThickness}          
            cornerRadius={3}
            padAngle={0.005}
          >
            {(pie) => (
              <AnimatedPie<DeviceType>
                {...pie}
                animate={animate}
                getKey={(arc) => arc.data['count']}
                onClickDatum={({ data: { device } }) =>
                  animate &&
                  setSelectedDevices(selectedDevices && selectedDevices === device ? null : device)
                }
                getColor={(arc) => getDeviceColor(arc.data.count)}
              />
            )}
          </Pie> */}
          {bdou? <Pie
            data={
             piedata
            }
            pieValue={(piedata) => piedata.count}
            outerRadius={radius}
            innerRadius={radius - donutThickness}
            cornerRadius={3}
            padAngle={0.005}
          >
            {(pie) => (
              <AnimatedPie<DeviceType>
                {...pie}                
                animate={animate}
                getKey={(arc) => arc.data.count}
                // onClickDatum={({ data: { device } }) =>
                //   animate &&
                //   setSelectedBrowser(selectedBrowser && selectedBrowser === device ? null : device)
                // }
                getColor={({ data: { device } }) => doughnutcolor(device)}                
                // getColor={(arc) => getBrowserColor(arc.data.label)}
              />
            )}
          </Pie>   :""}
          

          {bpie?
          <Pie
          data={
            piedata
            // selectedDevices ? arr.filter(({ device }) => device === selectedDevices) : arr            
          }
          pieValue={(piedata) => piedata.count}          
          outerRadius={radius - donutThickness * 1.3}                                             
        >
          {(pie) => (
            <AnimatedPie<DeviceType>
              {...pie}
              animate={animate}            
              getKey={(arc) => arc.data.device}
              onClickDatum={({ data: { device } }) =>
                animate &&                
                setSelectedDevices(selectedDevices && selectedDevices === device ? null : device)
              }
              getColor={({ data: { device } }) => colorfunction(device)}                
            />
          )}
        </Pie>
           : ""}
        </Group>

        {/* {animate && (
          <text
            textAnchor="end"
            x={width - 16}
            y={height - 16}
            fill="white"
            fontSize={11}
            fontWeight={300}
            pointerEvents="none"
          >
            Click segments to update
          </text>
        )} */}
      </svg>
      </>
    );
  }

  // react-spring transition definitions
  type AnimatedStyles = { startAngle: number; endAngle: number; opacity: number };

  const fromLeaveTransition = ({ endAngle }: PieArcDatum<any>) => ({
    // enter from 360° if end angle is > 180°
    startAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
    endAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
    opacity: 0,
  });
  const enterUpdateTransition = ({ startAngle, endAngle }: PieArcDatum<any>) => ({
    startAngle,
    endAngle,
    opacity: 1,
  });

  type AnimatedPieProps<Datum> = ProvidedProps<Datum> & {
    animate?: boolean;
    getKey: (d: PieArcDatum<Datum>) => string;
    getColor: (d: PieArcDatum<Datum>) => string;
    onClickDatum: (d: PieArcDatum<Datum>) => void;
    delay?: number;
  };

  function AnimatedPie<Datum>({
    animate,
    arcs,
    path,
    getKey,
    getColor,
    onClickDatum,
  }: AnimatedPieProps<Datum>) {
    const transitions = useTransition<PieArcDatum<Datum>, AnimatedStyles>(arcs, {
      from: animate ? fromLeaveTransition : enterUpdateTransition,
      enter: enterUpdateTransition,
      update: enterUpdateTransition,
      leave: animate ? fromLeaveTransition : enterUpdateTransition,
      keys: getKey,
    });
    return transitions((props, arc, { key }) => {
      const [centroidX, centroidY] = path.centroid(arc);
      const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;

      return (
        <g key={key}>
          <animated.path
            // compute interpolated path d attribute from intermediate angle values
            d={interpolate([props.startAngle, props.endAngle], (startAngle, endAngle) =>
              path({
                ...arc,
                startAngle,
                endAngle,
              }),
            )}
            fill={getColor(arc)}
            onClick={() => onClickDatum(arc)}
            onTouchStart={() => onClickDatum(arc)}
          />
          {hasSpaceForLabel && (
            <animated.g style={{ opacity: props.opacity }}>
              <text
                fill="white"
                x={centroidX}
                y={centroidY}
                dy=".33em"
                fontSize={9}
                textAnchor="middle"
                pointerEvents="none"
              >
                {getKey(arc)}
              </text>
            </animated.g>
          )}
        </g>
      );
    });
  }
