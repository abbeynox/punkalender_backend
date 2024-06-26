import type { Schema, Attribute } from '@strapi/strapi';

export interface AddressAdresse extends Schema.Component {
  collectionName: 'components_address_adresses';
  info: {
    displayName: 'Adresse';
    icon: 'car';
    description: '';
  };
  attributes: {
    street: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 40;
      }>;
    city: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 40;
      }>;
    plz: Attribute.Integer & Attribute.Required;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'link';
    icon: 'feather';
  };
  attributes: {
    link: Attribute.String;
  };
}

export interface LinklistLinklist extends Schema.Component {
  collectionName: 'components_linklist_linklists';
  info: {
    displayName: 'linklist';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 40;
      }> &
      Attribute.DefaultTo<'Website'>;
  };
}

export interface LinksLinks extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'links';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    website: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    singlelink: Attribute.Component<'link.link', true>;
  };
}

export interface MusicstyleMusicstyle extends Schema.Component {
  collectionName: 'components_musicstyle_musicstyles';
  info: {
    displayName: 'musicstyle';
  };
  attributes: {
    Punk: Attribute.Boolean;
    Metal: Attribute.Boolean;
    Rock: Attribute.Boolean;
    Ska: Attribute.Boolean;
  };
}

export interface RepetitionRepetition extends Schema.Component {
  collectionName: 'components_repetition_repetitions';
  info: {
    displayName: 'repetition';
    icon: 'chartCircle';
  };
  attributes: {
    every: Attribute.Enumeration<['day', 'week', 'secondweek', 'month']> &
      Attribute.Required;
    enddate: Attribute.Date;
  };
}

export interface TicketTicket extends Schema.Component {
  collectionName: 'components_ticket_tickets';
  info: {
    displayName: 'ticket';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['Kostenlos', 'Kollekte', 'Eintrittspreis']> &
      Attribute.Required &
      Attribute.DefaultTo<'Kollekte'>;
    ticketlink: Attribute.String;
    chf: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 999;
        },
        number
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'address.adresse': AddressAdresse;
      'link.link': LinkLink;
      'linklist.linklist': LinklistLinklist;
      'links.links': LinksLinks;
      'musicstyle.musicstyle': MusicstyleMusicstyle;
      'repetition.repetition': RepetitionRepetition;
      'ticket.ticket': TicketTicket;
    }
  }
}
