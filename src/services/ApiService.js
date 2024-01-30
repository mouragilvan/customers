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

    async createNew(dados) {
        let req = null;
        try {
            req = await fetch("http://localhost:8080/customers/", {
                method: 'POST',
                body: JSON.stringify(dados),
                headers: { 'Content-Type': 'application/json' }
            });

            if (!req.ok) {
                if (req.status === 409) {
                    return { "message": await req.text() };
                }
            }
        } catch (e) {
            console.log('Falha ao chamar a API', e);
            return e;
        }
        return await req.json();
    }

    async updateCustomer(dados) {
        let req = null;
        try {
            req = await fetch("http://localhost:8080/customers/" + dados.id, {
                method: 'PUT',
                body: JSON.stringify(dados),
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (e) {
            console.log('Falha ao chamar a API', e);
            return e;
        }
        return await req.json();
    }
}