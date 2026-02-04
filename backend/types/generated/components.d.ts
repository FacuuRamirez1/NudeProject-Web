import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentDetails extends Struct.ComponentSchema {
  collectionName: 'components_component_details';
  info: {
    displayName: 'details';
  };
  attributes: {
    composition: Schema.Attribute.String;
    fit: Schema.Attribute.String;
    technicalDetails: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.details': ComponentDetails;
    }
  }
}
