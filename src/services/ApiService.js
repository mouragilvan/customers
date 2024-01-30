export default class ApiService {

    async getCustomers() {
        let req = null;
        try {
            req = await fetch("http://localhost:8080/customers/");
        } catch (e) {
            console.log('Falha ao chamar a API', e);
            return e;
        }
        return await req.json();

    }
}