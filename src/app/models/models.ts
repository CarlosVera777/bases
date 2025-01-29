import { ModelsHome } from 'src/app/models/home.models';
import { ModelsStore } from 'src/app/models/store.models';
import { ModelsNotification } from 'src/app/models/notification.models';

export namespace Models {
    export import Home = ModelsHome;
    export import Store = ModelsStore;
    export import Notification = ModelsNotification;
}
