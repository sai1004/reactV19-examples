import axios from "axios";

export class CallApi {
    url = process.env.REACT_APP_BASE_URI;
    config = { "Content-Type": "application/json" };

    constructor() {}

    async withUsingGetMethod(apiPath) {
        try {
            const result = await axios.get(this.url + apiPath, this.config);
            return result;
        } catch (error) {}
    }

    async withUsingPostMethod(apiPath, requestPayload) {
        try {
            const result = await axios.post(this.url + apiPath, { data: requestPayload }, this.config);
            return result;
        } catch (error) {}
    }

    async withUsingPutMethod(apiPath, requestPayload) {
        try {
            const result = await axios.put(this.url + apiPath, { data: requestPayload }, this.config);
            return result;
        } catch (error) {}
    }

    async withUsingDeleteMethod(apiPath) {
        try {
            const result = await axios.delete(this.url + apiPath, this.config);
            return result;
        } catch (error) {}
    }
}
