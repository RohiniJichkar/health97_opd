import React,  {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Switch,
  useLocation
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import BookAppointment from './components/Staff_BookAppointment';
import Footer from './components/Footer';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PatientRegistration from './components/Staff_PatientRegistration';
import TodaysAppointment from './components/Staff_TodaysAppointment';
import Dashboard from './components/Staff_Dashboard';
import ClinicPatients from './components/Staff_ClinicPatients';
import ForgotPassword from './components/ForgotPassword';
import DoctorNavbar from './components/Doctor_Navbar';
import DoctorDashboard from './components/Doctor_Dashboard';
import DoctorHome from './components/Doctor_Home';
import DoctorAddMedicine from './components/Doctor_AddMedicine';
import DoctorReports from './components/Doctor_Reports'; 
import DoctorAddFacilities from './components/Doctor_AddFacilities';
import DoctorUploadReports from './components/Doctor_UploadReports';
import DoctorAddStaff from './components/Doctor_AddStaff';
import DoctorBookAppointment from './components/Doctor_BookAppointment';
import DoctorAddServices from './components/Doctor_AddServices';
import DoctorClinicServices from './components/Doctor_ClinicServices';
import DoctorPatientRegistration from './components/Doctor_PatientRegistration';
import DoctorTodaysAppointment from './components/Doctor_TodaysAppointment';
import DoctorPatientDetails_SendIn from './components/Doctor_PatientDetails_SendIn';
import DoctorTreatPatient from './components/Doctor_TreatPatient';
import DoctorGeneratePrescription from './components/Doctor_GeneratePrescription';
import DoctorClinicPatients from './components/Doctor_ClinicPatients';
import ClinicServices from './components/Staff_ClinicServices';
import PatientDetails_SendIn from './components/Staff_PatientDetails_SendIn';
import DoctorProfile from './components/Doctor_Profile';
import DoctorPatientMedicalHistory from './components/Doctor_PatientMedicalHistory';
import DoctorEditProfile from './components/Doctor_EditProfile';
import DoctorHomeVisitors from './components/Doctor_HomeVisitors';
import DoctorHomeVisitRequest from './components/Doctor_HomeVisitRequest';
import DoctorAddHomeVisitors from './components/Doctor_AddHomeVisitors';
import DoctorClinicStaff from './components/Doctor_ClinicStaff';
import DoctorAssignHomeVisitor from './components/Doctor_AssignHomeVisitor';
import Doctor_TV_TodaysAppointments from './components/Doctor_TV_TodaysAppointments';
import DoctorEditClinicDetails from './components/Doctor_EditClinicDetails';

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <Route exact path="/Login" component={Login}><Login /> </Route>
        <Route exact path="/forgotpassword" component={ForgotPassword}><ForgotPassword /> </Route>
        <Route exact path="/" component={Navbar}><Navbar /> </Route>
        <Route exact path="/dashboard" component={Dashboard}><Dashboard /> </Route>
        <Route exact path="/home" component={HomeScreen}><HomeScreen /> </Route>
        <Route exact path="/todaysappointment" component={TodaysAppointment}><TodaysAppointment /> </Route>
        <Route exact path="/bookappointment" component={BookAppointment}><BookAppointment /> </Route>
        <Route exact path="/patientregistration" component={PatientRegistration}><PatientRegistration /> </Route>
        <Route exact path="/clinicpatients" component={ClinicPatients}><ClinicPatients /> </Route>
        <Route exact path="/clinicservices" component={ClinicServices}><ClinicServices /> </Route>
        <Route exact path="/patientDetails_sendIn" component={PatientDetails_SendIn}><PatientDetails_SendIn /> </Route>

        <Route exact path="/DoctorNavbar" component={DoctorNavbar}><DoctorNavbar /> </Route>
        <Route exact path="/DoctorDashboard" component={DoctorDashboard}><DoctorDashboard /> </Route>
        <Route exact path="/DoctorHome" component={DoctorHome}><DoctorHome /> </Route>
        <Route exact path="/DoctorAddMedicine" component={DoctorAddMedicine}><DoctorAddMedicine /> </Route>
        <Route exact path="/DoctorReports" component={DoctorReports}><DoctorReports /> </Route>
        <Route exact path="/DoctorAddFacilities" component={DoctorAddFacilities}><DoctorAddFacilities /> </Route>
        <Route exact path="/DoctorUploadReports" component={DoctorUploadReports}><DoctorUploadReports /> </Route>
        <Route exact path="/DoctorAddStaff" component={DoctorAddStaff}><DoctorAddStaff /> </Route>
        <Route exact path="/DoctorBookAppointment" component={DoctorBookAppointment}><DoctorBookAppointment /> </Route>
        <Route exact path="/DoctorAddServices" component={DoctorAddServices}><DoctorAddServices /> </Route>
        <Route exact path="/DoctorClinicServices" component={DoctorClinicServices}><DoctorClinicServices /> </Route>
        <Route exact path="/DoctorPatientRegistration" component={DoctorPatientRegistration}><DoctorPatientRegistration /> </Route>
        <Route exact path="/DoctorTodaysAppointment" component={DoctorTodaysAppointment}><DoctorTodaysAppointment /> </Route>
        <Route exact path="/DoctorPatientDetails_SendIn" component={DoctorPatientDetails_SendIn}><DoctorPatientDetails_SendIn /> </Route>
        <Route exact path="/DoctorTreatPatient" component={DoctorTreatPatient}><DoctorTreatPatient /> </Route>
        <Route exact path="/DoctorGeneratePrescription" component={DoctorGeneratePrescription}><DoctorGeneratePrescription /> </Route>
        <Route exact path="/DoctorClinicPatients" component={DoctorClinicPatients}><DoctorClinicPatients /> </Route>
        <Route exact path="/DoctorProfile" component={DoctorProfile}><DoctorProfile /> </Route>
        <Route exact path="/DoctorEditProfile" component={DoctorEditProfile}><DoctorEditProfile /> </Route>
        <Route exact path="/DoctorHomeVisitors" component={DoctorHomeVisitors}><DoctorHomeVisitors /> </Route>
        <Route exact path="/DoctorHomeVisitRequest" component={DoctorHomeVisitRequest}>< DoctorHomeVisitRequest/> </Route>
        <Route exact path="/DoctorAddHomeVisitors" component={DoctorAddHomeVisitors}>< DoctorAddHomeVisitors/> </Route>
        <Route exact path="/DoctorPatientMedicalHistory" component={DoctorPatientMedicalHistory}><DoctorPatientMedicalHistory /> </Route>
        <Route exact path="/DoctorClinicStaff" component={DoctorClinicStaff}><DoctorClinicStaff /> </Route>
        <Route exact path="/DoctorAssignHomeVisitor" component={DoctorAssignHomeVisitor}><DoctorAssignHomeVisitor /> </Route>
        <Route exact path="/Doctor_TV_TodaysAppointments" component={Doctor_TV_TodaysAppointments}><Doctor_TV_TodaysAppointments /> </Route>
        <Route exact path="/DoctorEditClinicDetails" component={DoctorEditClinicDetails}><DoctorEditClinicDetails /> </Route>

      </BrowserRouter>
    </div>

  );
}

export default App;