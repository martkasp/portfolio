import {
    Module, getModule, VuexModule, Mutation, Action,
} from 'vuex-module-decorators';
import { AutoMutations } from '@/utils/vuex-module-mutators';
import store from '@/store';

@Module({
    namespaced: true, dynamic: true, store, name: 'landingPage',
})
@AutoMutations
export class LandingPage extends VuexModule {
    private fullName: string = 'Karolis Žabinskis';

    @Mutation
    setFullName(val: string) {
        this.fullName = val;
    }

    @Action
    changeFullName(val: string) {
        const upper = val.toUpperCase();
        this.setFullName(upper);
    }
}

export default getModule(LandingPage);
