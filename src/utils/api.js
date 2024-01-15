import axios from "axios";

const headers = {
    Authorization: `Bearer ${process.env.REACT_APP_STRIPE_APP_KEY}`,
};

const fetchDataFromApi = async (url) => {
    try {
        const response = await axios.get(process.env.REACT_APP_DEV_URL + url, { headers });
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Rethrow the error after logging
    }
};

export default fetchDataFromApi;
export const MakePaymentRequest=axios.create({
baseURL:process.env.REACT_APP_DEV_URL,
headers : {
    Authorization: `Bearer ${process.env.REACT_APP_STRIPE_APP_KEY}`,
}
})