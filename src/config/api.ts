const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const API_ROUTE_CONFIG = {
    auth: {
        login: `${baseUrl}/auth/login`,
    }
}