import * as axios from "axios"

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "869a0d16-5e83-4767-81e8-4a1edcf41cca"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },
    followUser(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        });
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        });
    },
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/` + id).then(response => {
            return response.data;
        })
    },
    getStatus(id) {
        return instance.get('profile/status/' + id).then(response => {
            return response.data
        })
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status}).then(response => {
            return response.data
        })
    },
    savePhoto(file) {
        const formData = new FormData();
        formData.append("image", file);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            return response.data
        })
    },
    saveProfile(profile) {
        return instance.put('profile/', profile).then(response => {
            return response.data;
        })
    }
}

export const authAPI = {
    setAuthUser() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => {
            return response.data
        })
    },
    logout() {
        return instance.delete(`auth/login`).then(response => {
            return response.data
        })
    },
}
    