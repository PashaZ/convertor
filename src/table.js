import React from "react";

export default function Table() {
    return (
        <table className="table">
            <tbody>
                <tr>
                    <th>Валюта</th>
                    <th>Курс НБУ</th>
                </tr>
                <tr>
                    <td>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_the_U.S..svg" alt="USD"
                            width="75px" height="50"></img>
                        <b>
                            <font className="font">USD</font>
                        </b>

                    </td>
                    <td>
                        <span><b>29.7</b> </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="https://flagsystem.ua/var/media/images/store/products/image_955.png" alt="USD"
                            width="75px" height="50"></img>
                        <b className="font">
                            <font >EUR</font>
                        </b>
                    </td>
                    <td>
                        <span><b>29.9</b> </span>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}