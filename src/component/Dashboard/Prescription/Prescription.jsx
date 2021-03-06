import React, { useState, useEffect } from "react";
import "./Prescription.css";
import Sidebar from "../../Sidebar/Sidebar";

const Prescription = () => {
    const [appointments, setAppointment] = useState([]);
    //const appointments = Appointment.appointmentList;
    const [loading, setLoading] = useState(true);

    let count = 1;

    useEffect(() => {
        fetch("https://radiant-badlands-05887.herokuapp.com/getPatientsInfo")
            .then((res) => res.json())
            .then((data) => {
                setAppointment(data);
                setLoading(false);
            });
    }, []);
    return (
        <div className="dash-board">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-sm-3 p-0">
                        <Sidebar />
                    </div>
                    <div
                        className="col-lg-10 col-sm-9 dashboard-bg"
                        style={{ height: "100vh" }}
                    >
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="pt-5 ml-5">All Prescription</h1>
                            </div>
                        </div>
                        <div
                            className="row d-flex align-items-center"
                            style={{ height: "80%", margin: "0px 20px" }}
                        >
                            <div className="col-md-12">
                                <div className="app-table">
                                    <table className="table table-borderless">
                                        <thead className="text-center">
                                            <tr>
                                                <th scope="col">Sr. No</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Contact</th>
                                                <th scope="col">
                                                    Prescription
                                                </th>
                                            </tr>
                                        </thead>
                                        {loading && (
                                            <div className="d-flex justify-content-center">
                                                <div
                                                    className="spinner-grow text-info"
                                                    role="status"
                                                    style={{
                                                        position: "absolute",
                                                        top: "50%",
                                                        left: "50%",
                                                    }}
                                                ></div>
                                            </div>
                                        )}
                                        <tbody className="text-center">
                                            {appointments.map((appointment) => (
                                                <tr>
                                                    <td> {count++} </td>
                                                    <td>{appointment.name}</td>
                                                    <td>{appointment.date}</td>
                                                    <td>{appointment.phone}</td>
                                                    <button className="btn submit-btn">
                                                        View
                                                    </button>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prescription;
