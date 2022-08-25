import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import { useDispatch, useSelector } from 'react-redux';

import logo from "../logo/CICT.png";

const dateNow = new Date(); // Creating a new date object with the current date and time
const year = dateNow.getFullYear(); // Getting current year from the created Date object
const monthWithOffset = dateNow.getUTCMonth() + 1; // January is 0 by default in JS. Offsetting +1 to fix date for calendar.
const month = // Setting current Month number from current Date object
  monthWithOffset.toString().length < 2 // Checking if month is < 10 and pre-prending 0 to adjust for date input.
    ? `0${monthWithOffset}`
    : monthWithOffset;
const date =
  dateNow.getUTCDate().toString().length < 2 // Checking if date is < 10 and pre-prending 0 if not to adjust for date input.
    ? `0${dateNow.getUTCDate()}`
    : dateNow.getUTCDate();
const materialDateInput = `${year}-${month}-${date}`;

const ViewInfo = () => {


  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const [postData, setPostData] = useState([]);
  const {users} = useSelector(state => state.adminData);
  const acc = users.filter(({_id}) => _id === id);


  const componentRef = useRef();
  const personalComponentRef = useRef();
  const eduComponentRef = useRef();
  const civilComponentRef = useRef();
  const workComponentRef = useRef();
  const trainingComponentRef = useRef();

  return (
    <>
      <Link to="/handleaccounts" className="closeBtn">
        ✖
      </Link>
      <br />
      <ReactToPrint
        trigger={() => <button className="btnprimary">Print PDS!</button>}
        content={() => componentRef.current}
        pageStyle="print"
        documentTitle="PDS New Document"
      />

      <ReactToPrint
        trigger={() => (
          <button className="btnprimary">Personal Information!</button>
        )}
        content={() => personalComponentRef.current}
        pageStyle="print"
        documentTitle="PDS New Document"
      />

      <ReactToPrint
        trigger={() => (
          <button className="btnprimary">Educational Background!</button>
        )}
        content={() => eduComponentRef.current}
        pageStyle="print"
        documentTitle="PDS New Document"
      />

      <ReactToPrint
        trigger={() => (
          <button className="btnprimary">Civil Eligibility!</button>
        )}
        content={() => civilComponentRef.current}
        pageStyle="print"
        documentTitle="PDS New Document"
      />

      <ReactToPrint
        trigger={() => <button className="btnprimary">Work Experience!</button>}
        content={() => workComponentRef.current}
        pageStyle="print"
        documentTitle="PDS New Document"
      />

      <ReactToPrint
        trigger={() => <button className="btnprimary">Training!</button>}
        content={() => trainingComponentRef.current}
        pageStyle="print"
        documentTitle="PDS New Document"
      />

      {acc.map((data, key) =>(
      <div key={key} ref={componentRef}>
      <div className="containerPds">
        <div key={key} ref={personalComponentRef}>
          <div className="headerPds">
            {dateNow.toDateString()}
            <h1>
              <center>
                <b>PERSONAL DATA SHEET</b>
              </center>
            </h1>
            <div>
              <img
                className="profilePic"
                src={data.picture}
                alt="Profile Pic"
              ></img>
              <img className="bsuLogo" src={logo} alt="bulsu logo"></img>
            </div>
          </div>

          <div className="breakPds">
            <b>PERSONAL INFORMATION</b>
          </div>

          <div>
            <table>
              <thead>
                <tr>
                  <th className="rowName">LASTNAME</th>
                  <td className="valName" colSpan={2}>
                    {data.lastName}
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="rowName">FIRSTNAME</th>
                  <td className="valName"> {data.firstName}</td>
                  <td className="extensionVal">{data.nameExtension}</td>
                </tr>
                <tr>
                  <th className="rowName">MIDDLENAME</th>
                  <td className="valName" colSpan={2}>
                    {data.middleName}
                  </td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>

          <div>
            <table>
              <thead>
                <tr>
                  <th className="rowName12">DATE OF BIRTH</th>
                  <td className="valName1" colSpan={2}>
                    {data.dateOfBirth}
                  </td>
                  <td className="citizenship" rowSpan={3}>
                    CITIZENSHIP
                  </td>
                  <td className="valName1" rowSpan={3}>
                    {data.citizenship}
                  </td>
                </tr>
                <tr>
                  <th className="rowName1">PLACE OF BIRTH</th>
                  <td className="valName1" colSpan={2}>
                    {data.placeOfBirth}
                  </td>
                </tr>
                <tr>
                  <th className="rowName1">SEX</th>
                  <td className="valName1" colSpan={2}>
                    {data.gender}
                  </td>
                </tr>
              </thead>
              <tbody></tbody>
              <tfoot></tfoot>
            </table>
          </div>

          <div>
            <table>
              <tr>
                <th className="rowNameC">CIVILSTATUS</th>
                <td className="valNameRe"> {data.civilStatus}</td>
                <td className="rowNameResi" rowSpan={3}>
                  RESIDENTIAL ADDRESS
                </td>
                <td className="valNameR">
                  <b>House/Block/Lot No.</b> {data.rHouseBlockNo}
                </td>
                <td className="valNameR">
                  <b>Street</b> {data.rStreet}
                </td>
              </tr>
              <tr></tr>
              <tr>
                <th className="rowName1">HEIGHT</th>
                <td className="valNameRe"> {data.height}</td>
                <td className="valNameR">
                  <b>Subdivision/Village</b> {data.rSubdivisionVillage}
                </td>
                <td className="valNameR">
                  <b>Barangay</b> {data.rBarangay}
                </td>
              </tr>
              <tr>
                <th className="rowName1">WEIGHT</th>
                <td className="valNameRe"> {data.weight}</td>
                <td className="valNameR">
                  {" "}
                  <b>ZipCode</b> {data.rZipCode}
                </td>
                <td className="valNameR">
                  <b>City/Municipality</b> {data.rCityMunicipality}
                </td>
                <td className="valNameR">
                  <b>Province</b> {data.rProvince}
                </td>
              </tr>
              <thead></thead>
              <tbody></tbody>
              <tfoot></tfoot>
            </table>
          </div>

          <div>
            <table>
              <tr>
                <th className="rowNameC">BLOOD TYPE</th>
                <td className="valNameRe"> {data.bloodType}</td>
                <td className="rowNameResi" rowSpan={3}>
                  PERMANENT ADDRESS
                </td>
                <td className="valNameR">
                  <b>House/Block/Lot No.</b> {data.pHouseBlockNo}
                </td>
                <td className="valNameR">
                  <b>Street</b> {data.pStreet}
                </td>
              </tr>
              <tr></tr>
              <tr>
                <th className="rowName1">GSIS ID NO.</th>
                <td className="valNameRe">{data.gsisId}</td>
                <td className="valNameR">
                  <b>Subdivision/Village</b> {data.pSubdivisionVillage}
                </td>
                <td className="valNameR">
                  <b>Barangay</b> {data.pBarangay}
                </td>
              </tr>
              <tr>
                <th className="rowName1"> PAG-IBIG ID NO.</th>
                <td className="valNameRe"> {data.pagIbig}</td>
                <td className="valNameR">
                  {" "}
                  <b>ZipCode</b> {data.rZipCode}
                </td>
                <td className="valNameR">
                  <b>City/Municipality</b> {data.rCityMunicipality}
                </td>
                <td className="valNameR">
                  <b>Province</b> {data.rProvince}
                </td>
              </tr>
              <thead></thead>
              <tbody></tbody>
              <tfoot></tfoot>
            </table>
          </div>

          <div>
            <table>
              <thead>
                <tr>
                  <th className="rowNameNo">PHILHEALTH NO.</th>
                  <td className="valNameNo">{data.philHealthId}</td>
                  <td className="rowNameNo">
                    <b>TELEPHONE NO.</b>
                  </td>
                  <td className="valNameNo">{data.telephone}</td>
                </tr>
              </thead>
              <tr>
                <th className="rowNameNo1">SSS NO.</th>
                <td className="valNameNo">{data.sss}</td>
                <td className="rowNameNo1">
                  <b>MOBILE NO.</b>
                </td>
                <td className="valNameNo">{data.mobile}</td>
              </tr>
              <tr>
                <th className="rowNameNo1">TIN NO.</th>
                <td className="valNameNo">{data.tin}</td>
                <td className="rowNameNo1">
                  <b>EMAIL ADDRESS</b>
                </td>
                <td className="valNameNo">
                  <p>{data.email}</p>
                </td>
              </tr>
              <tr>
                <th className="rowNameNo1">EMPLOYEE NUMBER</th>
                <td className="valNameNo" colSpan={3}>
                  {" "}
                  {data.employeeNumber}
                </td>
              </tr>

              <tbody></tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>

        <div key={key} ref={eduComponentRef}>
          <div className="breakPds1">
            <b>EDUCATIONAL BACKGROUND</b>
          </div>

          <div>
            <table>
              <thead>
                <tr>
                  <th className="eduName1">LEVEL</th>
                  <th className="eduName1" colSpan={2}>
                    NAME OF SCHOOL
                  </th>
                  <th className="eduName1 " colSpan={2}>
                    BASIC EDUCATION<p>/DEGREE/COURSE</p>
                  </th>
                  <th className="eduName1" colSpan={2}>
                    PERIOD OF ATTENDANCE
                    <p>From / To</p>
                  </th>
                  <th className="eduName1">
                    <p>HIGHEST LEVEL</p>(if not graduated)
                  </th>
                  <th className="eduName1">YEAR GRADUATED</th>
                  <th className="eduName12">
                    SCHOLARSHIP/<p>ACADEMIC</p>
                    HONORS RECEIVED
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="eduNameSchool">ELEMENTARY</th>
                  <td colSpan={2} className="eduName">
                    {data.enameOfSchool}
                  </td>
                  <td colSpan={2} className="eduName">
                    {data.ebasicEducDegreeCourse}
                  </td>
                  <td className="eduName">{data.efrom}</td>
                  <td className="eduName">{data.eto}</td>
                  <td className="eduName">{data.ehighestLevelUnits}</td>
                  <td className="eduName">{data.eyearGraduate}</td>
                  <td className="eduName">
                    {data.escholarshipAcademicHonors}
                  </td>
                </tr>

                <tr>
                  <th className="eduNameSchool">SECONDARY</th>
                  <td colSpan={2} className="eduName">
                    {data.snameOfSchool}
                  </td>
                  <td colSpan={2} className="eduName">
                    {data.sbasicEducDegreeCourse}
                  </td>
                  <td className="eduName">{data.sfrom}</td>
                  <td className="eduName">{data.sto}</td>
                  <td className="eduName">{data.shighestLevelUnits}</td>
                  <td className="eduName">{data.syearGraduate}</td>
                  <td className="eduName">
                    {data.sscholarshipAcademicHonors}
                  </td>
                </tr>

                <tr>
                  <th className="eduNameSchool">VOCATIONAL</th>
                  <td colSpan={2} className="eduName">
                    {data.vnameOfSchool}
                  </td>
                  <td colSpan={2} className="eduName">
                    {data.vbasicEducDegreeCourse}
                  </td>
                  <td className="eduName">{data.vfrom}</td>
                  <td className="eduName">{data.vto}</td>
                  <td className="eduName">{data.vhighestLevelUnits}</td>
                  <td className="eduName">{data.vyearGraduate}</td>
                  <td className="eduName">
                    {data.vscholarshipAcademicHonors}
                  </td>
                </tr>

                <tr>
                  <th className="eduNameSchool">COLLEGE</th>
                  <td colSpan={2} className="eduName">
                    {data.cnameOfSchool}
                  </td>
                  <td colSpan={2} className="eduName">
                    {data.cbasicEducDegreeCourse}
                  </td>
                  <td className="eduName">{data.cfrom}</td>
                  <td className="eduName">{data.cto}</td>
                  <td className="eduName">{data.chighestLevelUnits}</td>
                  <td className="eduName">{data.cyearGraduate}</td>
                  <td className="eduName">
                    {data.cscholarshipAcademicHonors}
                  </td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>

        <div key={key} ref={civilComponentRef}>
          <div className="breakPds1">
            <b>CIVIL SERVICE ELIGIBILITY</b>
          </div>

          <div>
            <table>
              <thead>
                <tr>
                  <th className="rowNameNo" rowSpan={3}>
                    CAREER SERVICE/RA 1080 (Board/Bar)
                  </th>
                  <td className="valNameNo" colSpan={3}>
                    Career service value
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th className="rowNameNo1">
                    <b>RATING</b>
                  </th>
                  <td className="valNameNo">rating value</td>
                  <th className="rowNameNo1">DATE OF EXAMINATION</th>
                  <td className="valNameNo">Date of Examination: value</td>
                </tr>

                <tr>
                  <th className="rowNameNo1">
                    <b>PLACE OF EXAMINATION</b>
                  </th>
                  <td className="valNameNo">Value Place</td>
                  <th className="rowNameNo1">LICENSE</th>
                  <td className="valNameNo">license value</td>
                </tr>
                <tr>
                  <th className="rowNameNo1">DATE OF VALIDITY</th>
                  <td className="valNameNo">Date of Validity value</td>
                  <th className="rowNameNo1">
                    <b>LICENSE NUMBER</b>
                  </th>
                  <td className="valNameNo">
                    <p>License Number: value</p>
                  </td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>

        <div key={key} ref={workComponentRef}>
        <div className="breakPds1">
          <b>WORK EXPERIENCE</b>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th className="rowNameNo1">
                  <b>POSITION</b>
                </th>
                <td className="valNameNo">POSITION value</td>
                <th className="rowNameNo">DEPARTMENT/AGENCY</th>
                <td className="valNameNo">DEPARTMENT: value</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th className="rowNameNo">INCLUSIVE DATES TO</th>
                <td className="valNameNo">To</td>
                <th className="rowNameNo">FROM</th>
                <td className="valNameNo">From</td>
              </tr>

              <tr>
                <th className="rowNameNo">
                  <b>MONTHLY SALARY</b>
                </th>
                <td className="valNameNo">MONTHLY Place</td>
                <th className="rowNameNo">SALARY/PAY GRADE</th>
                <td className="valNameNo">SALARY value</td>
              </tr>
              <tr>
                <th className="rowNameNo">STATUS OF APPOINTMENT</th>
                <td className="valNameNo">STATUS value</td>
                <th className="rowNameNo">
                  <b>GOV'T SERVICE</b>
                </th>
                <td className="valNameNo">
                  <p>GOV'T SERVICE value</p>
                </td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>

      <div key={key} ref={trainingComponentRef}>
        <div className="breakPds1">
          <b>TRAINING PROGRAMS ATTENDED</b>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th className="rowNameNo">TITLE TRAINING PROGRAMS</th>
                <td className="valNameNo" colSpan={3}>
                  Sample TRAINING
                </td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th className="rowNameNo">DATE OF ATTENDANCE To</th>
                <td className="valNameNo"></td>
                <th className="rowNameNo">DATE OF ATTENDANCE From</th>
                <td className="valNameNo"></td>
              </tr>

              <tr>
                <th className="rowNameNo1">
                  <b>NUMBER OF HOURS</b>
                </th>
                <td className="valNameNo">HOURS value</td>
                <th className="rowNameNo1">TYPE OF TRAINING</th>
                <td className="valNameNo">TYPE OF TRAINING: value</td>
              </tr>
              <tr>
                <th className="rowNameNo">
                  <b>SPONSORED BY</b>
                </th>
                <td className="valNameNo">SPONSORED VALUE</td>
                <th className="rowNameNo">CERTIFICATE</th>
                <td className="valNameNo">CERTIFICATE value</td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>

      </div>
    </div>
      ))}
    </>
  );
};

export default ViewInfo;