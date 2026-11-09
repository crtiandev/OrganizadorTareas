
document.addEventListener("DOMContentLoaded", () => {
    console.log("Aplicación inicializada correctamente.");


    function validFormfieldInput(data) {
        if (!data.name || data.name.trim() === "" ||
            !data.description || data.description.trim() === "" ||
            !data.date || 
            !data.status) {
            return false; 
        }
        return true; 
    }

    const taskForm = document.querySelector("#taskForm");
    const alertError = document.querySelector("#alertError");
    const modalTareaEl = document.querySelector("#modalTarea");

    if (taskForm) {
        taskForm.addEventListener("submit", (event) => {
            event.preventDefault(); 

            const newTaskNameInput = document.querySelector("#newTaskNameInput");
            const newTaskDescriptionInput = document.querySelector("#newTaskDescriptionInput");
            const newTaskDateInput = document.querySelector("#newTaskDateInput");
            const newTaskStatusInput = document.querySelector("#newTaskStatusInput");

            const formData = {
                name: newTaskNameInput ? newTaskNameInput.value : "",
                description: newTaskDescriptionInput ? newTaskDescriptionInput.value : "",
                date: newTaskDateInput ? newTaskDateInput.value : "",
                status: newTaskStatusInput ? newTaskStatusInput.value : ""
            };

            console.log("name: " + formData.name);
            console.log("description: " + formData.description);
            console.log("date: " + formData.date);
            console.log("status: " + formData.status);

            if (!validFormfieldInput(formData)) {

                if (alertError) {
                    alertError.classList.remove("d-none");
                }
                console.log("Resultado: Datos de tarea incompletos o inválidos.");
            } else {
    
                if (alertError) {
                    alertError.classList.add("d-none");
                }
                console.log("Resultado: ¡Formulario de tarea válido!");
                taskForm.reset();

                if (modalTareaEl) {
                    const modalInstance = bootstrap.Modal.getInstance(modalTareaEl) || new bootstrap.Modal(modalTareaEl);
                    modalInstance.hide();
                }
            }
        });
    }

  
    const seccionForm = document.querySelector("#seccionForm");
    const alertSeccionError = document.querySelector("#alertSeccionError");
    const modalSeccionEl = document.querySelector("#modalSeccion");

    if (seccionForm) {
        seccionForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const nuevaSeccionInput = document.querySelector("#nuevaSeccionInput");
            const nombreSeccion = nuevaSeccionInput ? nuevaSeccionInput.value.trim() : "";

            console.log("seccion: " + nombreSeccion);

            if (nombreSeccion === "") {
        
                if (alertSeccionError) {
                    alertSeccionError.classList.remove("d-none");
                }
                console.log("Resultado: El nombre de la sección no puede estar vacío.");
            } else {
           
                if (alertSeccionError) {
                    alertSeccionError.classList.add("d-none");
                }
                console.log("Resultado: ¡Sección válida creada con éxito!");
                seccionForm.reset();

                if (modalSeccionEl) {
                    const modalSeccionInstance = bootstrap.Modal.getInstance(modalSeccionEl) || new bootstrap.Modal(modalSeccionEl);
                    modalSeccionInstance.hide();
                }
            }
        });
    }
});