import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegisteredDelegatesMobile.css";
import { backButtonBlack, backButtonBlue } from "./mediaassets";

const DEFAULT_DELEGATES = [
  { delegate: "Abbas Sabraoui", company: "Sagemcom Energy & Telecom SAS" },
  { delegate: "Alan Boukai", company: "ASTERRA Inc." },
  { delegate: "Alfredo Garcia Vergara", company: "Leakmited" },
  { delegate: "Amparo Fernandez Benito", company: "Captoplastic" },
  { delegate: "ANDRZEJ KIELBASA", company: "Grundfos Pompy Sp z o.o." },
  { delegate: "Annalena Zottmann", company: "Diehl Metering" },
  { delegate: "Antonio Allocca", company: "ASW-ATI Srl" },
  { delegate: "Awais Chaudry", company: "HR WALLINGFOFRD LTD" },
  { delegate: "Bart Groenenboom", company: "Evides Waterbedrijf" },
  { delegate: "Bassem Ali", company: "Marafiq" },
  { delegate: "Benjamin Resnik", company: "BSTS labs d.o.o" },
  { delegate: "Charles Dwyer", company: "Lowflo Ltd" },
  { delegate: "Christiaan Kweekel", company: "Evides Waterbedrijf" },
  { delegate: "Cristiano Sebastiani", company: "AVK International" },
  { delegate: "Daniel Bott", company: "JUMO GmbH & Co. KG" },
  { delegate: "David Andres", company: "Xylem Inc" },
  { delegate: "Didier ILUNGA", company: "Rand Water" },
  { delegate: "Doekle Yntema", company: "Wetsus" },
  { delegate: "Ed Austin", company: "Focus Sensors" },
  { delegate: "Emilio Munoz Marmesat", company: "EBRD (European Bank of Reconstruction and Development)" },
  { delegate: "Erica van Eeghen", company: "VP Capital" },
  { delegate: "Gerner Knudsen", company: "AVK International" },
  { delegate: "Gregory Herman", company: "HydroScan" },
  { delegate: "Idair Espinosa", company: "Xylem Inc" },
  { delegate: "Inge Diamond", company: "Intellihub Australia" },
  { delegate: "Jerell Tolentino", company: "Xylem Inc" },
  { delegate: "Jeremy Heath", company: "Pennon Water Services National" },
  { delegate: "Jo Parker", company: "Watershed Associates" },
  { delegate: "Joao Pereira", company: "Xylem Inc" },
  { delegate: "John Holland", company: "Telecomconsult" },
  { delegate: "Jon Chappell", company: "Water UK" },
  { delegate: "Jonas Porzelt", company: "Diehl Metering" },
  { delegate: "Jonnah Owen Rao", company: "Forty Seven C Financial Consultants" },
  { delegate: "Juan Gutierrez-Andres", company: "HR WALLINGFOFRD LTD" },
  { delegate: "Julia Regan", company: "ASTERRA Inc." },
  { delegate: "Justin Dass", company: "ASTERRA Inc." },
  { delegate: "Kamil Okedara", company: "Summertime Engineering Services" },
  { delegate: "Karl Aage Isaksen", company: "Aarhus Vand" },
  { delegate: "Katrine Hansen", company: "Aarhus Vand" },
  { delegate: "Ken Cartwright", company: "AtkinsRéalis" },
  { delegate: "Kenneth Sewell", company: "Lowflo Ltd" },
  { delegate: "Koen Bauweraerts", company: "Farys" },
  { delegate: "Lars Enevoldsen", company: "ASW-ATI Srl" },
  { delegate: "Lars Reinhard Rasmussen", company: "AVK Holding" },
  { delegate: "Lolita Shaffer", company: "K9 Water Leak Detection University" },
  { delegate: "Mahmoud Al Hader", company: "TAQA Distribution" },
  { delegate: "Marcus Horning", company: "Malmö Stad" },
  { delegate: "Marek Kundrata", company: "Urban Players" },
  { delegate: "Michael Rosenberg Pedersen", company: "Aarhus Vand" },
  { delegate: "Nina Søgaard Knudsen", company: "Aarhus Vand" },
  { delegate: "Noel Cosgrove", company: "Environmental Protection Agency" },
  { delegate: "Oluseyi Onifade", company: "UKWIR" },
  { delegate: "Peter Visser", company: "Evides N.V." },
  { delegate: "Pierre Le Pennec", company: "Leakmited" },
  { delegate: "Raed Fehri", company: "HydroScan" },
  { delegate: "Rahid Djafri", company: "Sagemcom Energy & Telecom SAS" },
  { delegate: "Richard Shaffer", company: "K9 Water Leak Detection University" },
  { delegate: "Robbert Lodewijks", company: "HULO.ai" },
  { delegate: "Robin Wortel", company: "Evides N.V." },
  { delegate: "Ronald Blonk", company: "Evides Waterbedrijf" },
  { delegate: "Roy Zenou", company: "ASTERRA Inc." },
  { delegate: "Santiago Ruffier d´Epenoux", company: "Aganova" },
  { delegate: "Sara Cunha", company: "Aguasdo Porto" },
  { delegate: "Selda Kul", company: "Pompa & Vana" },
  { delegate: "Seth Winterhalter", company: "Halting Winter" },
  { delegate: "Simon Jagers", company: "Samotics" },
  { delegate: "Søren Tapdrup", company: "Aarhus Vand" },
  { delegate: "Stig Martin Fiska", company: "Cognizant" },
];

export default function RegisteredDelegatesMobile({
  delegates = DEFAULT_DELEGATES,
  printedOn = process.env.REACT_APP_PRINTED_ON,
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
          This registered attendee list was printed on {printedOn}. Any participants registered after this date would not be listed in the paper version. The updated list will be made available online and will include all participants.
        </p>
      </div>
    </div>
  );
}