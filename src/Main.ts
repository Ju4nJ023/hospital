type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}


const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// a) Extraer pacientes asignados a Pediatría
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatria: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesPediatria.push(pacientes[i]);
    }
  }
  return pacientesPediatria;
};

const pacientesPediatria = obtenPacientesAsignadosAPediatria(pacientes);
console.log("Pacientes asignados a Pediatría:", pacientesPediatria);


// b) Extraer pacientes asignados a Pediatría y menores de 10 años
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatriaMenoresDe10: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesPediatriaMenoresDe10.push(pacientes[i]);
    }
  }
  return pacientesPediatriaMenoresDe10;
};
const pacientesPediatriaMenoresDe10 = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(
  pacientes
);
console.log(
  "Pacientes asignados a Pediatría y menores de 10 años:",
  pacientesPediatriaMenoresDe10
);

//apartado 2
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProtocolo = true;
      break; // No es necesario seguir buscando si ya se encontró un caso
    }
  }
  return activarProtocolo;
};

const activarUrgencia = activarProtocoloUrgencia(pacientes);
console.log("Activar protocolo de urgencia:", activarUrgencia);

//apartado 3
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesReasignados: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientes[i].especialidad = "Medico de familia";
    }
    pacientesReasignados.push(pacientes[i]);
  }
  return pacientesReasignados;
};

const pacientesReasignados = reasignaPacientesAMedicoFamilia(pacientes);
console.log("Pacientes reasignados a Médico de familia:", pacientesReasignados);

//apartado 4
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      return true; 
    }
  }
  return false; 
};
const hayPacientesPediatria = HayPacientesDePediatria(pacientes);
console.log("¿Hay pacientes de pediatría?:", hayPacientesPediatria);

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}
//apartado 5
const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const conteo: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  for (let i = 0; i < pacientes.length; i++) {
    switch (pacientes[i].especialidad) {
      case "Medico de familia":
        conteo.medicoDeFamilia++;
        break;
      case "Pediatra":
        conteo.pediatria++;
        break;
      case "Cardiólogo":
        conteo.cardiologia++;
        break;
    }
  }
  return conteo;
};

const conteoPacientes = cuentaPacientesPorEspecialidad(pacientes);
console.log("Conteo de pacientes por especialidad:", conteoPacientes);