export default class SiteSchema {
  static schema = {
    name: 'Site',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      name: 'string',
      numBank: 'int?',
      dateBank: 'string',
      numUr: 'int?',
      typeUr: 'string?',
      consumption: 'string',
      autonomyHr: 'string',
    },
  };
}
