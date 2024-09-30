

const useApiPost = async <T extends unknown = unknown>(url: string, payload: T) => {
    const token = ""

    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
            Authorization: `Bearer ${token}`,
        },
    });
    return await res.json();
};

export default useApiPost;
