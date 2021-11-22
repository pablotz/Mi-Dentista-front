export default class appointment_api {
    static createAppointment = (token, appointment) => {
        let response = fetch(
            "http://oscarhendrix10.pythonanywhere.com/appointment/add", {
                method: "POST",
                headers: new Headers({
                      "Content-Type": "application/json",
                      "token": token
                }),
                body: JSON.stringify({
                    date: appointment.date,
                    hour: appointment.hour,
                    service: appointment.service
                }),
            }
        ).then(response => response.json())
         .catch(err => console.error(err));
 
         return response;
    }

    static getAvailableHrs = (token, appointment) => {
        let response = fetch(
            "http://oscarhendrix10.pythonanywhere.com/appointment/get_valid_hours", {
                method: "POST",
                headers: new Headers({
                      "Content-Type": "application/json",
                      "token": token
                }),
                body: JSON.stringify({
                    date: appointment.date,
                    service: appointment.service
                }),
            }
        ).then(response => response.json())
         .catch(err => console.error(err));
 
         return response;
    }
}