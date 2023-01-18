import React from "react";
import { CountDevices } from "./smallComponents/CountDevices"
import { PieChart, Pie, Tooltip, Legend, Cell, LabelList } from 'recharts';

const data01 = [
    { name: 'Device A', value: 4 },
    { name: 'Device B', value: 3 },
    { name: 'Device C', value: 3 },
    { name: 'Device D', value: 2 },
];

export const Home = (props) => {

    const ttStyle = {
        color: 'blue',
        backgroundColor: 'yellow',
        padding: '1px'
    };
     
    const colors = ['rgb(11, 147, 185)', 'rgb(8, 178, 113)', 'rgb(205, 219, 11)', 'rgb(198, 12, 12)']
    // const radcolors = ['rgba(255, 255, 255,0.8)', 'rgba(255, 255, 255,0.5)', 'rgba(255, 255, 255,0.6)', 'rgba(255, 255, 255,0.7)']
    const radcolors = ['rgba(0, 255, 255,0.9)', 'rgba(0, 255, 255,0.6)', 'rgba(0, 255, 255,0.9)', 'rgba(0, 255, 255,0.6)']

    return (
        <div className="col-10 p-0 pt-3 m-0">

            <div className="d-flex justify-content-between rounded p-2">
                <CountDevices bg={"flex-stretch count-box m-1 rounded shadow-max"} link={"https://img.icons8.com/external-nawicon-glyph-nawicon/64/228BE6/external-cloud-computing-internet-of-things-nawicon-glyph-nawicon.png"} name={'NumbeR of Edge Gateways'} count={1} />
                <CountDevices bg={"flex-stretch count-box m-1 rounded shadow-max"} name={'Number of Edge Devices'} count={3} link={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNUlEQVR4nO2ZSwrCMBCGJ6suRHsABV2oia70AproRfQukuhRpPRmFtQLRCqiUvBR87I6P8yq0PxfZpomEwAUCvWRCIC+D9vPnQsBADPwvtbTbksJlkjBjkow7TJkPgan6WYy6FkzLznNXBtXRRBOs9Ws1zQGyGfet3l1hWBbYwAfZaMeA+xtZECHDPg7AFJYn0MDkLL/CwQQFcrAYtTWcb2hIap9FHG9oRejjl2Aop693MT8DSIOtwqZmodLIMBPZYCU+Ih9ABCXqxACRJiB1wpdQmAqBIi+OAPxN24lSKnNXOdswMT8cmx5M4fnAVGh84DyEMTlecBHgKmqD8DZodqNLU7TgBlIjAHknPUVpzv/s08zOR12wYbyLnHeaPVSTvw8RmLN/CPhFRPgFdOflxAK9SM6AcqVkuKAH+gWAAAAAElFTkSuQmCC"} />
                <CountDevices bg={"flex-stretch count-box m-1 rounded shadow-max"} link={"./gg-side.webp"} name={'Number of Green Grass Devices'} count={props.table3.length} />
                {/* <CountDevices link={"https://cdn-icons-png.flaticon.com/512/6080/6080697.png"} bg={"flex-stretch var-prime-color text-info m-1 rounded shadow-max"} name={'Green Grass health'} count={(props.table3.filter((d) => d.status === 'HEALTHY')).length + "/" + props.table3.length} /> */}
            </div>

            <div className="d-flex justify-content-around p-2 rounded">
                <div className="chart-box m-1 p-0 rounded-top shadow-max">
                    <h4 className='text-center chart-head p-2 m-0 rounded-top text-uppercase text-bold'>Edge Gateway Types</h4>
                    <PieChart className="chart-body w-100" width={510} height={300} >
                        <Tooltip wrapperStyle={{ backgroundColor: "red" }} contentStyle={{ backgroundColor: "white" }} itemStyle={{backgroundColor:'white'}}  offset={0} cursor={{ stroke: 'red', strokeWidth: 2 }} />
                        <Legend verticalAlign="bottom" align="center" layout="horizontal" iconType="star" height={40} payload={
                            data01.map(
                                (item, index) => ({
                                    id: item.name,
                                    type: "star",
                                    value: `${item.name} `,
                                    color: colors[index % colors.length]
                                })
                            )
                        } />
                        <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={90} >
                            {
                                data01.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index]} />
                                ))
                            }
                        </Pie>
                        <Pie data={data01} dataKey="value" cx="50%" cy="50%" innerRadius={95} outerRadius={100} >
                            <LabelList dataKey="value" position="outside" fill={"black"} ></LabelList>
                            {
                                data01.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={radcolors[index]} />
                                ))
                            }
                        </Pie>
                    </PieChart>
                </div>

                <div className="chart-box m-1 p-0 rounded-top shadow-max">
                    <h4 className='text-center chart-head p-2 m-0 rounded-top text-uppercase text-bold'>Edge Device Types</h4>
                    <PieChart className="chart-body w-100" width={510} height={300} >
                        <Tooltip wrapperStyle={{ backgroundColor: "red" }} contentStyle={{ backgroundColor: "white" }} itemStyle={{backgroundColor:'white'}}  offset={0} cursor={{ stroke: 'red', strokeWidth: 2 }} />
                        <Legend verticalAlign="bottom" align="center" layout="horizontal" iconType="star" height={40} payload={
                            data01.map(
                                (item, index) => ({
                                    id: item.name,
                                    type: "star",
                                    value: `${item.name} `,
                                    color: colors[index % colors.length]
                                })
                            )
                        } />
                        <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={90} >
                            {
                                data01.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index]} />
                                ))
                            }
                        </Pie>
                        <Pie data={data01} dataKey="value" cx="50%" cy="50%" innerRadius={95} outerRadius={100} >
                            <LabelList dataKey="value" position="outside" fill={"black"} ></LabelList>
                            {
                                data01.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={radcolors[index]} />
                                ))
                            }
                        </Pie>
                    </PieChart>
                </div>

               
            </div>

            <div className="d-flex justify-content-around  p-2 rounded">
                <div className="flex-stretch bg-white m-1 p-0 rounded-top shadow-max">
                    <h4 className='text-center text-success p-2 bg-white m-0 rounded-top text-uppercase text-size'>Additional</h4>
                    {/* <PieChart className="var-prime-color w-100" width={500} height={300} >
                        <Tooltip contentStyle={ttStyle} itemStyle={ttStyle} wrapperStyle={ttStyle} offset={0} cursor={{ stroke: 'red', strokeWidth: 2 }} />
                        <Legend verticalAlign="middle" align="right" layout="vertical" iconType="star" height={200} />
                        <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={50} >
                            {
                                data01leg.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index]} />
                                ))
                            }
                        </Pie>
                        <Pie data={data01} dataKey="value" cx="50%" cy="50%" innerRadius={55} outerRadius={90} >
                            <LabelList dataKey="value" position="outside" fill={"black"} ></LabelList>
                            {
                                data01.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={radcolors[index]} />
                                ))
                            }
                        </Pie>
                    </PieChart> */}
                </div>

                <div className="flex-stretch bg-white m-1 p-0 rounded-top shadow-max">
                    <h4 className='text-center text-success p-2 bg-white m-0 rounded-top text-uppercase text-size'>Additional</h4>
                    {/* <PieChart className="var-prime-color w-100" width={500} height={300}>
                        <Tooltip contentStyle={ttStyle} itemStyle={ttStyle} wrapperStyle={ttStyle} offset={0} cursor={{ stroke: 'red', strokeWidth: 2 }} />
                        <Legend verticalAlign="middle" align="right" layout="vertical" iconType="star" height={200} />
                        <Pie data={data01} nameKey='name' dataKey="value" cx="50%" cy="50%" outerRadius={50} fill="#8884d8">
                            {
                                data01.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index]} />
                                ))
                            }
                        </Pie>
                        <Pie data={data01} nameKey="name" dataKey="value" cx="50%" cy="50%" innerRadius={55} outerRadius={90} fill="#82ca9d">
                            <LabelList dataKey="value" position="outside"></LabelList>
                            {
                                data01.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={radcolors[index]} />
                                ))
                            }
                        </Pie>
                    </PieChart> */}
                </div>
            </div>

        </div>
    )
}
