import {BaseModel, Image} from './index';

export interface Section extends BaseModel {
  name: string;
}

export interface ProductInfo extends BaseModel {
  section: string | number;
  content: string;
}

export enum FulfillmentTypeEnum {
  Standard = 0,
  NoShipment = 1
}

export interface SalesPhrase extends BaseModel {
  text: string;
  slug: string;
}

export interface VariantOption extends BaseModel {
  name: string;
  value: string;
}

export interface Variant extends BaseModel {
  variant_id: string;
  sku: string;
  price: number;
  shipping_price: number;
  override_price: number;
  override_shipping_price: number;
  image: Image;
  options: VariantOption[];
  min_price: number;
  member_price: number;
  retail_price: number;
}

export enum VariantTypeEnum {
  None = 0,
  Standard = 1,
  Bundled = 2
}

export enum ProcessTypeEnum {
  Sale = 1,
  Fee = 2,
  Warranty = 3,
  Installment = 4
}

export interface RelatedProduct extends BaseModel {
  name: string;
  product_id: string;
  sku: string;
  description: string;
  msrp: number;
  default_image: Image;
  images: Image[];
  blurb: string;
  sales_phrase: string | number;
  fulfillment_type: FulfillmentTypeEnum;
  quantity: number;
  process_type: ProcessTypeEnum;
  hold_period: number;
  variant_type: VariantTypeEnum;
}

export interface TaggedImage {
  id?: number;
  tag: string;
  image: Image;
  mobile_image: Image;
}

export interface Product extends RelatedProduct {
  crm: string | number;
  price: number;
  shipping_price: number;
  categories: string[] | number[];
  info: ProductInfo[];
  troubleshooters: string[] | number[];
  min_price: number;
  variants: Variant[];
  crm_quantity: number;
  override_quantity: number;
}

export enum ProductTypeEnum {
  Offer = 0,
  Upsell = 1,
  LinkedUpsell = 2
}

export enum BillingCycleTypeEnum {
  OneTime = 0,
  Recurring = 1,
  MultiPay = 2
}

export const BillingCycleTypeMap = {
  [BillingCycleTypeEnum.OneTime]: 'One Time',
  [BillingCycleTypeEnum.Recurring]: 'Recurring',
  [BillingCycleTypeEnum.MultiPay]: 'Multi-Pay',
};

export interface Discount extends BaseModel {
  price: number;
}

export enum ProductStatusEnum {
  Normal = 0,
  ReadOnly = 1,
  Hidden = 2,
  Cancellable = 3
}

export enum TrialTypeEnum {
  None = 0,
  Standard = 1,
  Delayed = 2,
  Accelerated = 3
}

export enum DiscountPriceTypeEnum {
  Price = 1,
  ShippingPrice = 2,
  TotalPrice = 3
}

export const DiscountPriceTypeMap = {
  [DiscountPriceTypeEnum.Price]: 'Price',
  [DiscountPriceTypeEnum.ShippingPrice]: 'Shipping Price',
  [DiscountPriceTypeEnum.TotalPrice]: 'Price + Shipping',
};

export enum SubscriptionDisplayType {
  Never = 1,
  Always = 2,
  AfterFirstCycle = 3
}

interface RelatedCampaignProductBase extends BaseModel {
  name: string;
  campaign_product_id: string;
  price: number;
  shipping_price: number;
  product_type: ProductTypeEnum;
  billing_cycle_type: BillingCycleTypeEnum;
  trial_type: TrialTypeEnum;
  subtext: string;
  bundle_quantity: number;
  image: Image;
  product_id: string | number;
}

export interface RelatedCampaignProduct extends RelatedCampaignProductBase {
  product: RelatedProduct;
}

export interface UpsaleProduct extends BaseModel {
  from_campaign_product: string | number;
  to_campaign_product: RelatedCampaignProduct;
  quantity: number;
  price: number;
  shipping_price: number;
  total_price: number;
  total_shipping_price: number;
  display_name: string;
}

export interface ExchangeableProduct extends UpsaleProduct {
  sales_phrase: string | number;
  subtext: string;
  styles?: object;
}

export interface Cycle extends BaseModel {
  price: number;
  shipping_price: number;
  is_shippable: boolean;
  bill_delay: number;
  min_price: number;
  product: RelatedProduct;
  combination: RelatedProduct;
  display_name: string;
  return_days: number;
  exchange_days: number;
}

export interface CampaignProduct extends RelatedCampaignProductBase {
  crm: string | number;
  crm_campaign: string | number;
  final_billing_cycle: number;
  offer_terms: string;
  product: Product;
  discounts: Discount[];
  status: ProductStatusEnum;
  max_quantity: number;
  min_price: number;
  url: string;
  related_products: any[];
  upsale_products: UpsaleProduct[];
  exchangeable_products: ExchangeableProduct[];
  has_exchangeable_products: boolean;
  linked_products: any[];
  override_price: number;
  override_shipping_price: number;
  restock_fee: number;
  tagged_images: TaggedImage[];
  crm_product_type: ProductTypeEnum;
  override_product_type: ProductTypeEnum;
  discount_type: DiscountPriceTypeEnum;
  cycles: Cycle[];
  offer_id?: string;
  billing_model_id?: string;
  membership_term: number;
  membership_discount: number;
  meta_description: string;
  keywords: string[];
  override_process_type: ProcessTypeEnum;
  subscription_display_type: SubscriptionDisplayType;
  show_next_bill_price: boolean;
  member_price: number;
  retail_price: number;
  return_days: number;
  exchange_days: number;
  max_extra_return_days: number;
  offer_name: string;
  exchangeable_sets: ExchangeableProductsSet[];
  third_party_recurring: boolean;
}

export interface ExchangeableSetItem extends ExchangeableProduct {
  from_campaign_product: null
}

export interface ExchangeableProductsSet extends BaseModel {
  from_campaign_products: CampaignProduct[],
  exchangeable_items: ExchangeableSetItem[],
  name: string,
  set_type_id?: string | number
}

export enum RelatedProductCategoryType {
  NONE = 0,
  EXCHANGEABLE = 1
}

export enum RelatedProductCategoryTypeLabel {
  'None',
  'Exchangeable'
}

export enum RelatedProductSetType {
  NONE = 0,
  EXCHANGEABLE = 1
}

export enum RelatedProductSetTypeLabel {
  'None',
  'Exchangeable'
}

export interface RelatedProductSet extends BaseModel {
  name: string,
  type: RelatedProductSetType,
  category_id?: string | number,
  exchangeable_sets?: ExchangeableProductsSet[]
}

export interface RelatedProductSetCategory extends BaseModel {
  name: string,
  type: RelatedProductCategoryType,
  parent_id?: string | number,
  sub_categories?: RelatedProductSetCategory[],
  set_types?: RelatedProductSet[]
}
