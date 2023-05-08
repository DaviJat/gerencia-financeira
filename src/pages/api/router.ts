export async function apiPost(data: any, endpoint: any) {

    const response = await fetch(`../api/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response.json;
}
