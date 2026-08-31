import React from "react";
import "./RegisteredDelegatesMobile.css";
import { headerLogoDark } from "./mediaassets";

// The Figma export repeated this same 22-row set three times in a row to
// fill the scroll length for the mock-up. That repetition isn't real content,
// so it's collapsed here to one clean set — pass your own `delegates` array
// (same shape) once real registration data is wired up.
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
  printedOn = "21th January 2026",
}) {
  return (
    <div className="delegates-mobile">
      <header className="delegates-mobile__header">
        <img src={headerLogoDark} alt="Water Leakage Summit 2026" className="delegates-mobile__logo" />
        <button type="button" className="delegates-mobile__toggle" aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className="delegates-mobile__card">
        <h1 className="delegates-mobile__title">Registered Delegates</h1>

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
          This registered attendee list was printed on {printedOn}. Any participants registered
          after this date would not be listed in the paper version. The updated list will be made
          available online and will include all participants.
        </p>
      </div>
    </div>
  );
}