
export default class DataStoreNoCache {
    fetchDataGet(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Network response was failed.')
                })
                .then((responseData) => {
                    resolve(responseData);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    fetchDataPost(url, requestData) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify({
                    delivery_date_start: requestData.delivery_date_start,
                    cooking_status: requestData.cooking_status,
                })
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Network response was failed.')
                })
                .then((responseData) => {
                    resolve(responseData);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
}