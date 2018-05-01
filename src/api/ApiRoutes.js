
// set to localhost when developing
const API_ROOT = 'https://si2018backend.herokuapp.com';

class ApiRoutes {
    static PIPES = API_ROOT + '/pipes';
    static FAILURES = API_ROOT + '/failures';
    static CONSTRUCTIONS = API_ROOT + '/constructions';
    static MEASURE_STATIONS = API_ROOT + '/measure_stations';
    static REPORTS = API_ROOT + '/reports';
}


export default ApiRoutes;
