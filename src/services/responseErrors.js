export default function responseErrors(response) {

    let errors = [];
    if (Array.isArray(response)) {
        response.forEach((item) => {
            errors.push(item.defaultMessage)
        });
    }
    if (response.message) {
        errors.push(response.message);
    }
    if (errors.length == 0) {
        return null;
    }
    return errors;

}