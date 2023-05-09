import { BaseModel } from './index';

export enum CRMTypeId {
  Konnektive = 1,
  Test = 2,
  Custom = 3,
  Sticky = 4,
}

export enum CRMTypeName {
  Konnektive = 'Konnektive',
  Test = 'Test',
  Custom = 'Custom',
  Sticky = 'Sticky',
}

export enum LinkFieldType {
  UniqueId = 1,
  ParentOrderId = 2,
  PreviousOrderId = 3
}

export interface CRM extends BaseModel {
  name: string;
  display_name: string;
  type: number;
  credentials: {[key: string]: string;};
  config: {[key: string]: string;};
  tracking_data: {[key: string]: string | null;};
  max_fulfillments: number;
  max_transactions: number;
  auto_approve: boolean;
  use_partial_refunds: boolean;
  can_update_fulfillment_item: boolean;
  can_partial_refund_on_cancel: boolean;
  allow_update_fulfillment: boolean;
  public_key: string;
  private_key: string;
  link_id_field: string;
  link_field_type: LinkFieldType;
}

export interface ShippingType extends BaseModel {
  crm: string | number;
  type_id: string;
  name: string;
  code: string;
  carrier: string;
}

export interface CRMCampaign extends BaseModel {
  name: string;
  crm: string | number;
  crm_campaign_id: string;
  campaign: string | number;
  keep_subscriptions_in_sync: boolean;
  separate_next_cycle_items: boolean;
  shipping_methods?: Array<CRMCampaignShippingMethod>;
}

export interface CRMCampaignShippingMethod extends BaseModel {
  name: string;
  shipping_id?: string | number;
}
