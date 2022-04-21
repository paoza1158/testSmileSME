import React, { Component } from "react";
import tabdata from "../data.json";

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="footer">
                <table>
                    <tr style={{padding: "0 16px"}}>
                        <td className="center f1">Total</td>
                        {tabdata.data.summarytier.map(el => {
                            return (
                                <>
                                    <td className="center f2"></td>
                                    <td className="center f3"></td>
                                    <td className="right f4">{el.total_amount}</td>
                                    <td className="right f5">{el.total_members}</td>
                                </>
                            );
                        })}
                        <td className="right f6">{tabdata.data.summary.totalpoint}</td>
                        <td className="right f7">{tabdata.data.summary.remainingpoint}</td>

                    </tr>

                </table>
            </div>
        );
    }
}

export default Footer;
