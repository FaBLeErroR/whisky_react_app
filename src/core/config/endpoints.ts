// abstract class Endpoints {
//     static BASE_API_URL = process.env.REACT_APP_API_BASE_URL ?? "http://localhost:5000/api/v1";

// }

// export default Endpoints;

// Сделали константу в корне src/config — можно подменять через env
export const BASE_API_URL = process.env.REACT_APP_API_BASE_URL ?? "http://localhost:5000/api/v1";

