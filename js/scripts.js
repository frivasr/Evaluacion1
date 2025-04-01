document.getElementById('citaMedicaForm').addEventListener('submit', function(event) {
    let nombre = document.getElementById('nombrePaciente').value;
    let email = document.getElementById('emailPaciente').value;
    let fecha = document.getElementById('fechaCita').value;
    let hora = document.getElementById('horaCita').value;
    let motivo = document.getElementById('motivoCita').value;

    // Validación de email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, introduce un email válido.');
        event.preventDefault();
        return;
    }

    if (!nombre || !email || !fecha || !hora || !motivo) {
        alert('Por favor, complete todos los campos.');
        event.preventDefault(); // Evita que se envíe el formulario
    } else {
        alert('Cita agendada correctamente.');
    }
});