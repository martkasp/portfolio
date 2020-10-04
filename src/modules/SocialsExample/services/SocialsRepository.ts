import axios from 'axios';
import { SocialDtoType, SocialType } from '../types';

export default class SocialsRepository {
    public static async getAll(): Promise<SocialType[]> {
        return axios.get('http://localhost:8080/api/socials', { headers: { accept: 'application/json' } })
            .then((res) => res.data)
            .catch((err) => { throw err; });
    }

    public static async get(id: string): Promise<SocialType> {
        return axios.get(`http://localhost:8080/api/socials/${id}`, { headers: { accept: 'application/json' } })
            .then((res) => res.data)
            .catch((err) => { throw err; });
    }

    public static async create(model: SocialDtoType): Promise<SocialType> {
        return axios.post('http://localhost:8080/api/socials', model)
            .then((res) => res.data)
            .catch((err) => { throw err; });
    }
}
