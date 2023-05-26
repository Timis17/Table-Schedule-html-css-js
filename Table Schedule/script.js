const btn = document.getElementById('scheduleAppointment');

        btn.addEventListener('click', scheduleAppointment)

        function scheduleAppointment() {
            let timeSlot = prompt('Upisi vreme za vas dolazak (e.g., 09:00 AM):');
            let elementId = 'time-' + timeSlot.replace(/:/g, '');
            let appointmentCell = document.getElementById(elementId);
            
            if (appointmentCell) {
                appointmentCell.classList.add('red');
            } else {
                alert('Vreme koje ste ukucali je zauzeto');
            }
        }
        
    