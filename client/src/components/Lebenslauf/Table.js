import React, { Component } from 'react';
import Description from './Description';

const TableBody = (props) => {
    const jobList = props.data.map((row, index) => {
        return (
            <tbody key={index}>
                <tr style={{ "color": "#637c7c" }}><td>{row.date}</td></tr>
                <tr><td><b>{row.jobName}</b></td></tr>
                <tr><td>{row.companyDescription}</td></tr>
                <tr><td>{row.ortLand}</td></tr>
                <tr><td><Description index={row.jobDescription} /> </td></tr>
            </tbody>
        );
    });
    return <table>{jobList}</table>;
}


class Table extends Component {
    render() {
        const { data } = this.props;
        return (
            <div >
                <h4 style={{ "font": "18px" }}>Berufserfahrung</h4>
                <TableBody data={data}
                />
            </div>
        );
    }
}

export default Table;
