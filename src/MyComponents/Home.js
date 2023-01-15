import React from "react";
import { CountDevices } from "./smallComponents/CountDevices"
import { PieChart, Pie, Tooltip, Legend, Cell, LabelList} from 'recharts';


const data01 = [
    { name: 'A', value: 400 },
    { name: 'B', value: 300 },
    { name: 'C', value: 300 },
    { name: 'D', value: 200 },
];
// const data01leg = [
//     { value: 400 },
//     { value: 300 },
//     { value: 300 },
//     { value: 200 },
// ];
const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];


export const Home = (props) => {

    const ttStyle = {
        color: 'blue',
        backgroundColor: 'yellow',
        padding: '1px'
        // backgroundImage: 'url('')',
    };
  

    const colors = ['rgb(11, 147, 185)', 'rgb(8, 178, 113)', 'rgb(205, 219, 11)', 'rgb(198, 12, 12)']
    const radcolors = ['rgba(255, 255, 255,0.8)', 'rgba(255, 255, 255,0.5)', 'rgba(255, 255, 255,0.6)', 'rgba(255, 255, 255,0.7)']
    return (
        <div className="col-10 p-0 pt-3 m-0">
            {/* <Navbar />                 */}
            {/* <svg width={200} height={200}>
                <GradientPinkBlue id="visx-pie-gradient2" />
                <rect rx={14} width={100} height={100} fill="url('#visx-pie-gradient2')" />
            </svg> */}

            <div className="d-flex justify-content-evenly rounded p-1">
                <CountDevices link={"https://img.icons8.com/external-nawicon-glyph-nawicon/64/228BE6/external-cloud-computing-internet-of-things-nawicon-glyph-nawicon.png"} bg={"red-grad-tl text-info m-1 rounded shadow-max"} name={'Edge Gateway'} count={1} />
                <CountDevices link={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNUlEQVR4nO2ZSwrCMBCGJ6suRHsABV2oia70AproRfQukuhRpPRmFtQLRCqiUvBR87I6P8yq0PxfZpomEwAUCvWRCIC+D9vPnQsBADPwvtbTbksJlkjBjkow7TJkPgan6WYy6FkzLznNXBtXRRBOs9Ws1zQGyGfet3l1hWBbYwAfZaMeA+xtZECHDPg7AFJYn0MDkLL/CwQQFcrAYtTWcb2hIap9FHG9oRejjl2Aop693MT8DSIOtwqZmodLIMBPZYCU+Ih9ABCXqxACRJiB1wpdQmAqBIi+OAPxN24lSKnNXOdswMT8cmx5M4fnAVGh84DyEMTlecBHgKmqD8DZodqNLU7TgBlIjAHknPUVpzv/s08zOR12wYbyLnHeaPVSTvw8RmLN/CPhFRPgFdOflxAK9SM6AcqVkuKAH+gWAAAAAElFTkSuQmCC"} bg={"red-grad-tl text-info m-1 rounded shadow-max"} name={'Edge Devices'} count={3} />
                <CountDevices link={"https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_120,h_120/https://dashboard.snapcraft.io/site_media/appmedia/2020/05/AWS-IoT-Greengrass4x.png"} bg={"red-grad-tl text-info m-1 rounded shadow-max"} name={'Green Grass Devices'} count={5} />
                {/* <CountDevices link={"https://cdn-icons-png.flaticon.com/512/6080/6080697.png"} bg={"red-grad-tl text-info m-1 rounded shadow-max"} name={''} count={(props.table3.filter((d) => d.status === 'HEALTHY')).length + "/" + props.table3.length} /> */}
            </div>
            
            {/* <div className="d-flex justify-content-evenly p-2 rounded">
                <div className="text-white m-1 rounded w-50 shadow-max bg-white">
                    <h4 className='text-center text-success p-2 bg-white m-0 rounded-top text-uppercase text-size'>Edge Device types</h4>
                   
                    <ParentSize>{({ width }) => <Example bpie={true} bdou={true} doughnutcolor={getDoughnutColor} colorfunction={getDeviceColor} piedata={heredata} width={width} height={250} />}</ParentSize>
                </div>
                <div className="box-color text-white p-0 m-1 rounded w-50 shadow-max">
                    <h4 className='text-center text-success p-2 bg-white m-0 rounded-top text-uppercase text-size'>Leaving Device types</h4>
                   
                    <ParentSize>{({ width }) => <Example bpie={false} bdou={true} doughnutcolor={getDeviceColor} colorfunction={getDeviceColor} piedata={heredata} width={width} height={250} />}</ParentSize>
                </div>
            </div> */}


            <div className="d-flex justify-content-evenly p-2 rounded">
                <div className="bg-white w-100 m-2 p-0">
                    <h4 className='text-center text-success p-0 bg-white m-0 rounded-top text-uppercase text-size'>Edge Device types</h4>
                    <PieChart className="chart-bg" width={500} height={400}>
                        <Tooltip contentStyle={ttStyle} itemStyle={ttStyle} wrapperStyle={ttStyle} offset={0} cursor={{ stroke: 'red', strokeWidth: 2 }} />
                        <Legend verticalAlign="bottom" iconType="star" height={45} />
                        <Pie data={data01} cx="50%" cy="50%" outerRadius={90} fill="#8884d8">
                            <LabelList dataKey="name" position="middle" offset={0} clockWise='1' />
                            {
                                data01.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index]} />
                                ))
                            }
                        </Pie>
                        <Pie data={data01} nameKey="name" dataKey="value" cx="50%" cy="50%" innerRadius={95} outerRadius={140} fill="#82ca9d" label>
                            {
                                data01.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={radcolors[index]} />
                                ))
                            }
                        </Pie>
                    </PieChart>
                </div>
                <div className="bg-white w-100 m-2">
                    <PieChart width={400} height={400}>
                        <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />
                        <Pie data={data01} dataKey="value" cx="60%" cy="50%" outerRadius={70} fill="#8884d8" />
                        <Pie data={data02} dataKey="value" cx="60%" cy="50%" innerRadius={80} outerRadius={120} fill="#82ca9d" label />
                    </PieChart>
                </div>
            </div>

            {/* <div className="flex-container p-3">
                <div className="m-1 bg-danger bg-gradient rounded p-1 rounded shadow">
                    <Table1 data={props.table1} />
                </div>
                <div className="m-1 bg-success bg-gradient rounded p-1 rounded shadow">
                    <Table2 data={props.table2} />
                </div>

            </div> */}

            {/* <table className="mx-2">
                <thead>
                    <tr>
                        <td className="bg-danger bg-gradient rounded p-4 rounded shadow">
                            <h4>Edge Devices</h4>
                            <hr></hr>
                            <Link to={"/edge"}>
                            <Table1 data={props.table1} />
                            </Link>
                            
                            
                            
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="bg-primary bg-gradient p-2 rounded shadow">
                            <h4>Leaving Devices</h4>
                            <hr></hr>
                            <Table2 data={props.table2} />
                        </td>
                    </tr>
                </thead>
            </table> */}
        </div>
    )
}
