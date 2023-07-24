import axios from "axios";
const BASE_URL="http://localhost:5000/api/"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWFmN2JiYzY0ZWU5OTdiYTI2YjJlZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTA1NDE0MiwiZXhwIjoxNjg5MzEzMzQyfQ.JSqn0ERgCsjXOkxd2eyXnClDM-vUOjmIezt4t5s-iI4";
export const publicRequest=axios.create({
    baseURL:BASE_URL,
}
);
export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});