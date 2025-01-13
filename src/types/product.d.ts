interface SponsoredMetadata {
  ads_cost_id: number;
  ads_subcampaign_id: number;
  ads_asset_type_id: number;
  ads_campaign_type: string;
  ads_type: string;
  ads_asset_type: string;
  ads_campaign_id: number;
  id: number;
}

interface GroupAttributeInfo {
  id: number;
  name: string;
}

interface VideoInfo {
  url: string;
  aspect_ratio: number;
  thumbnail_url: string;
}

interface Asset {
  video_info: VideoInfo;
  image_url: string;
  asset_type: string;
}

interface EtaTag {
  text: string;
  text_color: string;
  icon_image_uri: string;
  background_opacity: number;
  background_color_v2: string;
  background_color: string;
  icon: string;
}

interface LeafCategory {
  parent_id: number;
  id: number;
  name: string;
}

export interface Product {
  id?: string;
  category?: string;
  rating: number;
  sts_visibility: boolean;
  video_url: string;
  type_id: number;
  sbc_offer: string;
  default_product_id: number;
  has_details: boolean;
  group_name: string;
  mapping_id: number;
  brand_id: number;
  merchant_type: string;
  sbc_price: number;
  has_inventory: boolean;
  sponsored_metadata: SponsoredMetadata;
  unit: string;
  group_attribute_info: GroupAttributeInfo;
  merchant_id: number;
  is_boosted: boolean;
  product_display_tags: null;
  pricing_comment: string;
  level1_category: null;
  unit_price: number;
  unit_type: string;
  rating_count: number;
  badges: null;
  line_1: string;
  sbc_enabled: boolean;
  type: string;
  brand: string;
  matched_queries: null;
  inventory: number;
  recommended_purchase_quantity: null;
  is_selected: boolean;
  offer: string | null;
  npr_container_id: null;
  price: number;
  incentives: null;
  entity_attributes: null;
  merchant_rank: null;
  discount: number;
  video_meta: null;
  product_recommendations_flag: boolean;
  level0_category: null;
  rating_star_color: null;
  recipe_recommendations_flag: boolean;
  eta_tag: EtaTag;
  product_tags: null;
  pl_flag: boolean;
  assets: Asset[];
  image_overlay_tags: string[];
  line_2: string;
  name: string;
  sts_sbc_savings: null;
  variant_meta: null;
  rating_flag: boolean;
  mrp: number;
  leaf_category: LeafCategory;
  received_at_ts: number;
  offers: null;
  npr_container: null;
  product_id: number;
  image_url: string;
  is_previous_buy: boolean;
  availability_status: string;
  group_id: number;
  combo_flag: boolean;
  keyterms: null;
}
