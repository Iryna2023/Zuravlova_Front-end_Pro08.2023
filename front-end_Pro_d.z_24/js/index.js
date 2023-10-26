function toCamelCase(str) {
    if (typeof str !== 'string' || !str.includes('_')) {
        return str;
    }

    return str.replace(/_([a-z])/g, function (match, group) { return group.toUpperCase(); });
}

const response = {
    user_id: 'abc123',
    company_name: 'Hillel',
    contract_expiration_date: '22/11/2013',
    'secret-token': 'unique$ecret',
};
  
let camelCasedResponse = Object.keys(response).reduce((result, key) => {
    const newKey = toCamelCase(key);
    result[newKey] = response[key];
    return result;
}, {});
  
document.getElementById('output').textContent = JSON.stringify(camelCasedResponse, null, 2);