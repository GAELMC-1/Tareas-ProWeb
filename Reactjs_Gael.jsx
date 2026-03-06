// Gael Morales Cortes
// 1. IMPORTACIONES 
import React from 'react';
import PropTypes from 'prop-types'; 

// 2. COMPONENTES Y JSX 
function CabeceraEstudiante(props) {
  return (
    // Estilos en linea simples
    <div style={{ backgroundColor: '#0056b3', color: 'white', padding: '15px', borderRadius: '5px' }}>
      <h1>Panel de Calificaciones</h1>
      <p>Estudiante: {props.nombre} | Matricula: {props.matricula}</p>
    </div>
  );
}

// PropTypes para el componente CabeceraEstudiante
CabeceraEstudiante.propTypes = {
  nombre: PropTypes.string.isRequired,
  matricula: PropTypes.string.isRequired
};

// Componente para mostrar cada materia
function TarjetaCurso(props) {
  
  // 3. RENDERIZADO CONDICIONAL 
  // determinar el estado del curso (aprobado/reprobado)
  let estado;
  if (props.calificacion >= 70) {
    estado = <b style={{ color: 'green' }}>Aprobado</b>;
  } else {
    estado = <b style={{ color: 'red' }}>Reprobado</b>;
  }

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px 0', padding: '15px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h3 style={{ margin: '0 0 10px 0' }}>Materia: {props.nombreCurso}</h3>
      <p>Calificacion final: {props.calificacion}</p>
      <p>Estado del curso: {estado}</p>
      
      {/* Renderizado condicional con operador && (visto en GeeksforGeeks) */}
      {props.esObligatorio && (
        <p style={{ color: '#888', fontSize: '12px', fontStyle: 'italic' }}>* Esta materia es obligatoria</p>
      )}
    </div>
  );
}

// PropTypes para TarjetaCurso
TarjetaCurso.propTypes = {
  nombreCurso: PropTypes.string.isRequired,
  calificacion: PropTypes.number.isRequired,
  esObligatorio: PropTypes.bool
};

// 4. COMPONENTE PRINCIPAL (App)
export default function App() {
  
  // Arreglo de datos Listas
  const materias = [
    { id: 1, nombre: "Programacion Web", calificacion: 95, obligatorio: true },
    { id: 2, nombre: "Bases de Datos", calificacion: 88, obligatorio: true },
    { id: 3, nombre: "Calculo Integral", calificacion: 60, obligatorio: true },
    { id: 4, nombre: "Taller de Diseño", calificacion: 100, obligatorio: false }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      
      {/* Usando datos */}
      <CabeceraEstudiante nombre="Gael Morales Cortes" matricula="240300932" />
      
      <h2>Resumen Academico</h2>
      
      <div>
        {/* 5. LISTAS EN REACT */}
        {/* Usamos map() y la propiedad obligatoria 'key' */}
        {materias.map(function(materia) {
          return (
            <TarjetaCurso 
              key={materia.id} 
              nombreCurso={materia.nombre}
              calificacion={materia.calificacion}
              esObligatorio={materia.obligatorio}
            />
          );
        })}
      </div>

      <hr style={{ marginTop: '30px' }} />
      <p style={{ textAlign: 'center', color: '#666' }}>
        Desarrollado por <strong>Gael Morales Cortes</strong><br/>
        (Proyecto React)
      </p>
    </div>
  );
}