import React, { useEffect } from 'react';
import styles from "./TableUserDue.module.sass";
import Pagination from '../Pagination/Pagination';
import { allProviderAdmin , putStateProvider} from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function TableUserDue() {
  const people = useSelector((state) => state.providerForAdmin.data);
  const InfoPag = useSelector((state) => state.providerForAdmin);
  const people1 = useSelector((state) => state.peopleForAdmin.data);
  const dispatch = useDispatch();
console.log(InfoPag)

  useEffect(() => {
    dispatch(allProviderAdmin());
  }, [people1]); 

  const handleChangeStatus = (value, state) => {
    const auxState = state === "Active" ? "Inactive" : "Active";
    dispatch(putStateProvider(value, auxState))
  }

  if (!people) {
    return null;
  }

  return (
    <div>
      <h2>Usuarios en deuda</h2>

      <div className={styles.container}>
        <table className={styles.customTable}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Mail</th>
              <th>Telefono</th>
              <th>Activo/Inactivo</th>
              <th>Pago</th>
              <th>Antiguedad</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr key={person.people.idPeople}>
                <td>{person.people.fullName}</td>
                <td>{person.people.email}</td>
                <td>{person.people.phone}</td>
                <td>{person.people.state}</td>
                {/* Revisar el campo del pago */}
                <td>{person.people.pago}</td>
                <td>{person.people.dateOfAdmission}</td>
                <td><button>MAIL</button></td>
                <td><button onClick={() => handleChangeStatus(person.people.idPeople, person.people.state)} >{person.people.state === "Active" ? "Inactivo" : "Activo"}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.pagination}>
      <Pagination pageNumber={InfoPag.pageNumber} totalOfPages={InfoPag.totalOfPages} />
      </div>
      <h3>Dar de baja automáticamente adeudados</h3>
      <h3>Aviso previo día anterior</h3>
    </div>
  );
}

export default TableUserDue;
