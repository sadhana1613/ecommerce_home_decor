import axios from "axios";
const BASE_URL="http://localhost:5000/api/"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWFmN2JiYzY0ZWU5OTdiYTI2YjJlZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MjUyNDk3NiwiZXhwIjoxNjkyNzg0MTc2fQ.y34Z09ntVU1dpTPL4bUHe8pjLnkLLWgofb4-0LSBmzU";
export const publicRequest=axios.create({
    baseURL:BASE_URL,
}
);
export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});