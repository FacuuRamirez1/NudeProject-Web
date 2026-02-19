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

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedFirstParagraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_first_paragraphs';
  info: {
    displayName: 'firstParagraph';
  };
  attributes: {
    importantPhrase: Schema.Attribute.Text;
  };
}

export interface SharedTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_blocks';
  info: {
    displayName: 'Text-block';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.details': ComponentDetails;
      'shared.button': SharedButton;
      'shared.first-paragraph': SharedFirstParagraph;
      'shared.text-block': SharedTextBlock;
    }
  }
}
