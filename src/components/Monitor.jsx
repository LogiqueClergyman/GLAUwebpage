import React, { useEffect, useState } from "react";

export default function Monitor() {
  const StudentDetails = [
    [
      {
        TypeOfEvent: "Internal",
        nameOfEvent: "danceing",
        startingTime: "2023-04-19T03:59",
        endingTime: "2023-04-19T03:59",
        certificate:
          "https://res.cloudinary.com/dbvurfvz8/image/upload/v1680992973/sq85lcrpc8yrypuzoytx.png",
        memberNo: "Single",
        Approve: false,
      },
      {
        TypeOfEvent: "External",
        nameOfEvent: "abhsi",
        startingTime: "2023-04-18T09:28",
        endingTime: "2023-04-14T09:28",
        certificate:
          "https://res.cloudinary.com/dbvurfvz8/image/upload/v1681012771/x7ormokrsuhqnxhyjqey.jpg",
        organisation: "hihsi",
        levelOfEvent: "InterCollege",
        NOC: "https://res.cloudinary.com/dbvurfvz8/image/upload/v1681012775/q7pvawvsfhit20fczv9r.jpg",
        memberNo: "65",
        Approve: false,
      },
      {
        TypeOfEvent: "External",
        nameOfEvent: "kalan",
        startingTime: "2023-04-11T09:34",
        endingTime: "2023-04-21T09:34",
        certificate: "",
        organisation: "iit",
        levelOfEvent: "InterCollege",
        NOC: "",
        memberNo: "23",
        Approve: false,
      },
      {
        TypeOfEvent: "External",
        nameOfEvent: "hg",
        startingTime: "2023-04-18T09:36",
        endingTime: "2023-04-03T09:36",
        certificate: "",
        organisation: "dasdsad",
        levelOfEvent: "State",
        NOC: "",
        memberNo: "899",
        Approve: false,
      },
      {
        TypeOfEvent: "External",
        nameOfEvent: "asdasd",
        startingTime: "2023-04-19T09:37",
        endingTime: "2023-04-20T09:37",
        certificate: "",
        organisation: "asdasdsad",
        levelOfEvent: "State",
        NOC: "",
        memberNo: "dsadasd",
        Approve: false,
      },
    ],
  ];

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full shadow-md mb-6">
      <div className="flex flex-wrap items-center">
        <div className="realtive w-full px-4 max-w-full flex-grow-0">
          <h3 className="font-semibold text-4xl p-4 m-4">Record</h3>
        </div>
      </div>
      <div className=" block bg-transparent m-4 p-4 w-full overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Type of Event</th>
              <th>Name of Event</th>
              <th>Starting Time</th>
              <th>Ending Time</th>
              <th>Certificate</th>
              <th>Organisation</th>
              <th>Level of Event</th>
              <th>NOC</th>
              <th>Member No.</th>
              <th>Approve</th>
            </tr>
          </thead>
          <tbody>
            {StudentDetails.map((student, index) => (
              <tr key={index}>
                <td>{student.TypeOfEvent || "-"}</td>
                <td>{student.nameOfEvent || "-"}</td>
                <td>{student.startingTime?.toString() || "-"}</td>
                <td>{student.endingTime?.toString() || "-"}</td>
                <td>{student.certificate || "-"}</td>
                <td>{student.organisation || "-"}</td>
                <td>{student.levelOfEvent || "-"}</td>
                <td>{student.NOC || "-"}</td>
                <td>{student.memberNo || "-"}</td>
                {/* <td>{student.Approve.toString()}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        
    </div>
  );
}
