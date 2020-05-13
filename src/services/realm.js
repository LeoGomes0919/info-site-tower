import Realm from 'realm';

import SiteSchema from '../schemas/SiteSchema';

export default function getRealm() {
  return Realm.open({
    schema: [SiteSchema],
  });
}
