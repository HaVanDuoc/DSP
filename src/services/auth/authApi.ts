import { API_ROUTE_CONFIG } from "@/config/api";
import { SignInValues } from "@/models/signIn/signIn";
import useApiPost from "../useApiPost";

const authApi = {
    login: (payload: SignInValues) => {
        return useApiPost(API_ROUTE_CONFIG.auth.login, payload);
    }
}

export default authApi