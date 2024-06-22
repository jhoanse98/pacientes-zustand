import { usePatientStore } from "../store";

const PatientList = () => {
  const patients = usePatientStore((state) => state.patients);
  console.log(patients);
  return (
    <div>
      <h4>PacientList</h4>
    </div>
  );
};

export default PatientList;
