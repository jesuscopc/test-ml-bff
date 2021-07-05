export interface IProductInfo {
  id: string;
  site_id: string;
  title: string;
  seller: {
    id: number;
    permalink: string;
    registration_date: string;
    car_dealer: false;
    real_estate_agency: false;
    tags: Array<string>;
    eshop: {
      nick_name: string;
      eshop_rubro: any;
      eshop_id: number;
      eshop_locations: Array<any>;
      site_id: string;
      eshop_logo_url: string;
      eshop_status_id: number;
      seller: number;
      eshop_experience: number;
    };
    seller_reputation: {
      transactions: {
        canceled: number;
        total: number;
        period: string;
        ratings: { 
          negative: number; 
          positive: number; 
          neutral: number; 
        };
        completed: number;
      };
      power_seller_status: string;
      metrics: {
        claims: { 
          rate: number; 
          value: number;
          period: string;
        };
        delayed_handling_time: {
          rate: number;
          value: number;
          period: string;
        };
        sales: { 
          period: string;
          completed: number; 
        };
        cancellations: { 
          rate: number; 
          value: number; 
          period: string;
        };
      };
      level_id: string;
    }
  };
  price: string;
  prices: {
    id: string;
    prices: [
      {
        id: string;
        type: string;
        conditions: {
          context_restrictions: Array<any>;
          start_time: any;
          end_time: any;
          eligible: boolean;
        };
        amount: number;
        regular_amount: any;
        currency_id: string;
        exchange_rate_context: string;
        metadata: Record<string, unknown>;
        last_updated: string;
      }
    ];
    presentation: { 
      display_currency: string;
    };
    payment_method_prices: Array<any>;
    reference_prices: Array<any>;
    purchase_discounts: Array<any>
  };
  sale_price: any;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  accepts_mercadopago: boolean;
  installments: {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
  };
  address: {
    state_id: string;
    state_name: string;
    city_id: string;
    city_name: string;
  };
  shipping: {
    free_shipping: boolean;
    mode: string;
    tags: Array<string>;
    logistic_type: string;
    store_pick_up: boolean;
  };
  seller_address: {
    id: string;
    comment: string;
    address_line: string;
    zip_code: string;
    country: { 
      id: string;
      name: string;
    };
    state: { 
      id: string;
      name: string;
    };
    city: { 
      id: string;
      name: string;
    };
    latitude: string;
    longitude: string;
  };
  attributes: [
    {
      attribute_group_id: string;
      id: string;
      name: string;
      value_id: string;
      value_struct: any;
      value_name: string;
      values: [
        { 
          id: number; 
          name: string; 
          struct: any; 
          source: number;
        }
      ];
      attribute_group_name: string;
      source: 1;
    },
    {
      id: string;
      name: string;
      value_struct: { 
        number: number;
        unit: string;
      },
      attribute_group_id: string;
      attribute_group_name: string;
      value_id: string;
      value_name: string;
      values: [
        {
          source: number;
          id: string;
          name: string;
          struct: { 
            number: number; 
            unit: string;
          }
        }
      ],
      source: number;
    },
    {
      attribute_group_id: string;
      value_id: string;
      name: string;
      value_name: string;
      value_struct: any;
      values: [
        {
          id: string;
          name: string;
          struct: any;
          source: number;
        }
      ];
      attribute_group_name: string;
      source: number;
      id: string;
    },
    {
      id: string;
      name: string;
      value_id: string;
      values: [
        {
          id: string;
          name: string;
          struct: any;
          source: number;
        }
      ];
      source: number;
      value_name: string;
      value_struct: null;
      attribute_group_id: string;
      attribute_group_name: string;
    },
    {
      attribute_group_name: string;
      source: number;
      name: string;
      value_id: string;
      value_struct: any;
      values: [
        { 
          id: string;
          name: string;
          struct: any;
          source: number;
        }
      ];
      attribute_group_id: string;
      id: string;
      value_name: string;
    },
    {
      name: string;
      value_id: string;
      values: [
        { 
          id: string;
          name: string;
          struct: any;
          source: number;
        }
      ];
      source: number;
      attribute_group_name: string;
      id: string;
      value_name: string;
      value_struct: any;
      attribute_group_id: string;
    }
  ];
  original_price: any;
  category_id: string;
  official_store_id: any;
  domain_id: string;
  catalog_product_id: string;
  tags: Array<string>;
  catalog_listing: boolean;
  use_thumbnail_id: boolean;
  order_backend: number;
}