import { ModelsHome } from 'src/app/models/home.models';
import { ModelsStore } from 'src/app/models/store.models';
import { ModelsNotification } from 'src/app/models/notification.models';
import { ModelsContact } from 'src/app/models/contact.models';

export namespace Models {
    export import Home = ModelsHome;
    export import Store = ModelsStore;
    export import Notification = ModelsNotification;
    export import Contact = ModelsContact;
}
