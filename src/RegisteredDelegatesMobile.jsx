import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegisteredDelegatesMobile.css";
import { backButtonBlack, backButtonBlue } from "./mediaassets";

const DEFAULT_DELEGATES = [
  { company: "A G N TRANSPORT", delegate: "Annia Sosa" },
  { company: "AMS", delegate: "Kyu Han" },
  { company: "ANDRITZ Separation Technologies Inc.", delegate: "Scott Koehler" },
  { company: "Allstream Energy Partners", delegate: "Efrain Garcia" },
  { company: "Boundary Rail", delegate: "Jeff Gill" },
  { company: "Burgex Mining Consultants", delegate: "Stuart Burgess" },
  { company: "CPower Energy", delegate: "Jeffrey Norman" },
  { company: "Cambelt International", delegate: "Trisha Gavin" },
  { company: "CarboNet", delegate: "Eric Sherlock" },
  { company: "CarboNet", delegate: "Jack Ledford" },
  { company: "Chord Energy", delegate: "Faith Philips" },
  { company: "Chord Energy", delegate: "Kara Armstrong" },
  { company: "Chord Energy", delegate: "Mike Brown" },
  { company: "Chord Energy", delegate: "Tarah Dokken" },
  { company: "Chord Energy", delegate: "Tom Cook" },
  { company: "Cicada Logistics LLC", delegate: "Eli Jasso" },
  { company: "Cicada Logistics LLC", delegate: "Nick D'Onofrio" },
  { company: "Derrick Corporation", delegate: "Ben Clark" },
  { company: "Derrick Corporation", delegate: "Pat Rossiter" },
  { company: "Derrick Corporation", delegate: "Travis Rice" },
  { company: "FMI Capital Advisors", delegate: "Kjell Lundal" },
  { company: "HTRI (Heat Transfer Research, Inc.)", delegate: "Mike Radicone" },
];

export default function RegisteredDelegatesMobile({
  delegates = DEFAULT_DELEGATES,
  printedOn = "21st January 2026",
}) {
  const navigate = useNavigate();

  return (
    <div
      className="delegates-mobile"
      style={{

        "--delegates-bg": `url(${process.env.PUBLIC_URL}/images/WLKC-Folder-BG.png)`,
      }}
    >

      <div className="delegates-mobile__card">
        <div className="delegates-mobile__title_button">
          <button
            type="button"
            className="delegates-mobile__back_button"
            aria-label="Go back"
            onClick={() => navigate("/")}
          >
            <img
              src={backButtonBlack}
              alt=""
              className="delegates-mobile__back_button-icon delegates-mobile__back_button-icon--normal"
            />
            <img
              src={backButtonBlue}
              alt=""
              className="delegates-mobile__back_button-icon delegates-mobile__back_button-icon--hover"
            />
          </button>
          <h1 className="delegates-mobile__title">Registered Attendees</h1>
        </div>

        <div className="delegates-mobile__table-wrap">
          <table className="delegates-mobile__table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Delegate Name</th>
              </tr>
            </thead>
            <tbody>
              {delegates.map((row, index) => (
                <tr key={`${row.company}-${row.delegate}-${index}`}>
                  <td>{row.company}</td>
                  <td>{row.delegate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="delegates-mobile__note">
          This registered attendee list was printed on {printedOn}. Any participants registered after this date would not be included in this list. The updated list will be available online and will include all registered participants.
        </p>
      </div>
    </div>
  );
}