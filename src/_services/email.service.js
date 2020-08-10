import { urls } from "../_constants/urls";
import axios from 'axios';

export const emailService = {
    createEmail
};

function createEmail(email) {
    const requestOptions = 
        {method:'POST',
        url:`${urls.emailUrl}/create`,
        data:{email}
        }

    return axios(requestOptions);
}
