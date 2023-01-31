import React from "react";
import { CountDevices } from "./smallComponents/CountDevices"
import { PieChart, Pie, Tooltip, Legend, Cell, LabelList } from 'recharts';
import { Sidebar } from "./Sidebar";


export const Home = (props) => {

    const data01 = [
        { name: 'RaspBerry Pi', value: props.table1.length },
        { name: 'Device B', value: 3 },
        { name: 'Device C', value: 3 },
        { name: 'Device D', value: 2 },
    ];

    const data02 = [
        { name: 'OpenMV', value: props.table2.length },
        { name: 'Device B', value: 1 },
        { name: 'Device C', value: 1 },
        { name: 'Device D', value: 2 },
    ];


    // const ttStyle = {
    //     color: 'blue',
    //     backgroundColor: 'yellow',
    //     padding: '1px'
    // };

    const colors = ['rgb(11, 147, 185)', 'rgb(8, 178, 113)', 'rgb(205, 219, 11)', 'rgb(198, 12, 12)']
    // const radcolors = ['rgba(255, 255, 255,0.8)', 'rgba(255, 255, 255,0.5)', 'rgba(255, 255, 255,0.6)', 'rgba(255, 255, 255,0.7)']
    const radcolors = ['rgba(0, 255, 255,0.9)', 'rgba(0, 255, 255,0.6)', 'rgba(0, 255, 255,0.9)', 'rgba(0, 255, 255,0.6)']

    return (
        <>            
            <div className="row p-0 m-0">
                <Sidebar />
                <div className="col-10 p-0 pt-3 m-0">

                    <div className="d-flex justify-content-between rounded p-2">
                        <CountDevices bg={"flex-stretch count-box m-1 rounded shadow-max"} link={"https://img.icons8.com/external-nawicon-glyph-nawicon/64/228BE6/external-cloud-computing-internet-of-things-nawicon-glyph-nawicon.png"} name={'NumbeR of Edge Gateways'} count={props.table1.length} />
                        <CountDevices bg={"flex-stretch count-box m-1 rounded shadow-max"} name={'Number of Edge Nodes'} count={props.table2.length} link={"./mcu.png"} />
                        <CountDevices bg={"flex-stretch count-box m-1 rounded shadow-max"} link={"./gg-side.webp"} name={'Number of Green Grass Devices'} count={props.table3.length} />
                        {/* <CountDevices link={"https://cdn-icons-png.flaticon.com/512/6080/6080697.png"} bg={"flex-stretch var-prime-color text-info m-1 rounded shadow-max"} name={'Green Grass health'} count={(props.table3.filter((d) => d.status === 'HEALTHY')).length + "/" + props.table3.length} /> */}
                    </div>

                    <div className="d-flex justify-content-around p-2 rounded">
                        <div className="chart-box m-1 p-0 rounded-top shadow-max">
                            <h4 className='text-center chart-head p-2 m-0 rounded-top text-uppercase text-bold'>Edge Gateway Types</h4>
                            <PieChart className="chart-body w-100" width={510} height={300} >
                                <Tooltip wrapperStyle={{ backgroundColor: "red" }} contentStyle={{ backgroundColor: "white" }} itemStyle={{ backgroundColor: 'white' }} offset={0} cursor={{ stroke: 'red', strokeWidth: 2 }} />
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
                            <h4 className='text-center chart-head p-2 m-0 rounded-top text-uppercase text-bold'>Edge Node Types</h4>
                            <PieChart className="chart-body w-100" width={510} height={300} >
                                <Tooltip wrapperStyle={{ backgroundColor: "red" }} contentStyle={{ backgroundColor: "white" }} itemStyle={{ backgroundColor: 'white' }} offset={0} cursor={{ stroke: 'red', strokeWidth: 2 }} />
                                <Legend verticalAlign="bottom" align="center" layout="horizontal" iconType="star" height={40} payload={
                                    data02.map(
                                        (item, index) => ({
                                            id: item.name,
                                            type: "star",
                                            value: `${item.name} `,
                                            color: colors[index % colors.length]
                                        })
                                    )
                                } />
                                <Pie data={data02} dataKey="value" cx="50%" cy="50%" outerRadius={90} >
                                    {
                                        data02.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={colors[index]} />
                                        ))
                                    }
                                </Pie>
                                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={95} outerRadius={100} >
                                    <LabelList dataKey="value" position="outside" fill={"black"} ></LabelList>
                                    {
                                        data02.map((entry, index) => (
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
            </div>
        </>
    )
}
