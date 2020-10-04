import {
    Module, getModule, VuexModule, Mutation, Action,
} from 'vuex-module-decorators';
import { AutoMutations } from '@/utils/vuex-module-mutators';
import store from '@/store';
import { SocialType } from './types';
import SocialsRepository from './services/SocialsRepository';

@Module({
    namespaced: true, dynamic: true, store, name: 'socialsExample',
})
@AutoMutations
export class SocialsExample extends VuexModule {
    private socials: SocialType[] = [];

    private loading: boolean = false;

    @Mutation
    setSocials(val: SocialType[]) {
        this.socials = val;
    }

    @Mutation
    setLoading(val: boolean) {
        this.loading = val;
    }

    @Action
    async getAllSocials() {
        try {
            this.setLoading(true);
            const result = await SocialsRepository.getAll();
            this.setSocials(result);
        } catch (e) {
            console.error(e);
        }
        this.setLoading(false);
    }

    @Action
    async getSocial(id: string) {
        try {
            const result = await SocialsRepository.get(id);
            console.log('single', result);
        } catch (e) {
            console.error(e);
        }
    }
}

export default getModule(SocialsExample);
