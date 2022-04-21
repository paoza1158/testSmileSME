import React, { Component } from "react";
import tabdata from "../data.json";

class Monitortable extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        var duplicate = tabdata.data.list.filter((obj, pos, arr) => {
            return arr
                .map(mapObj => mapObj.customername)
                .indexOf(obj.customername) == pos;
        });

        return (
            <div>
                <table>
                    <tr className="table-head">
                        <th>Name</th>
                        <th>ID</th>
                        <th>Tier</th>
                        <th>LTV</th>
                        <th>Total Trans.</th>
                        <th>Total Point</th>
                        <th>Remaining Point</th>
                    </tr>
                    {duplicate.map(el => (
                        <tr>
                            <td>{el.customername}</td>
                            <td className="center">{el.customerphone}</td>
                            <td className="center">{el.customertier}</td>
                            <td className="right">{el.totalamount}</td>
                            <td className="right">{el.totaltransaction}</td>
                            <td className="right">{el.totalreward}</td>
                            <td className="right">{el.remainingpoint}</td>
                        </tr>
                    ))}
                </table>

                <div className="paginate">1-5 of 5 </div>

            </div>
        );
    }
}

export default Monitortable;
