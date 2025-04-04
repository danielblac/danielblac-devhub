export interface PersonnelProps {
  name: string;
  role: string;
  email: string;
  phone_number: string;
  address: string;
}

export interface ProductsProps {
  createdAt: string;
  updatedAt: string;
  product_name: string;
  product_department: string;
  product_price: string;
  product_barcode: string;
}

export interface VendorsProps {
  createdAt: string;
  vendor_name: string;
  company_name: string;
  vendor_email: string;
  vendor_phone: string;
  vendor_address: string;
}

export interface TechniciansProps {
  createdAt: string;
  technician_name: string;
  technician_phone: string;
  technician_address: string;
}

export interface TrucksProps {
  createdAt: string;
  updatedAt: string;
  truck_description: string;
  truck_plate_number: string;
  assigned_driver: PersonnelProps;
}

export interface PurchaseProps {
  createdAt: string;
  procurement_personnel: {
    name: string;
    role: string;
    email: string;
    phone_number: string;
    address: string;
  };
  vendor: {
    vendor_name: string;
    company_name: string;
    vendor_email: string;
    vendor_phone: string;
    vendor_address: string;
  };
  products: {
    product: {
      product_name: string;
      product_department: string;
      product_price: string;
    };
    quantity: number;
    total: number;
  }[];
  total_amount: string;
  description: string;
  invoice: string;
}

export interface GRNProps {
  createdAt: string;
  prepared_by: PersonnelProps;
  approved_by: PersonnelProps;
  received_by: TrucksProps;
  products: {
    product: {
      product_name: string;
      product_department: string;
      product_price: string;
    };
    quantity: number;
    total: number;
  }[];
  total_amount: string;
  description: string;
}

export interface RepairsProps {
  createdAt: string;
  procurement_personnel: PersonnelProps;
  technician: TechniciansProps;
  truck: TrucksProps;
  repair_type: string;
  invoice_amount: string;
  items: {
    item: {
      item_description: string;
      item_price: string;
    };
    quantity: number;
    total: number;
  }[];
  total_amount: string;
  description: string;
  invoice: string;
}

export interface OldItemsProps {
  createdAt: string;
  personnel: PersonnelProps;
  truck: TrucksProps;
  item: string;
  quantity: number;
  description: string;
}

export interface ExpensesProps {
  createdAt: string;
  prepared_by: PersonnelProps;
  approved_by: PersonnelProps;
  expenses_to: {
    company_name: string;
    address: string;
    contact_number: string;
  };
  expenses: { expences_name: string; amount: string }[];
  total_amount: string;
  description: string;
  invoice: string;
}

export interface IncomeProps {
  createdAt: string;
  sold_by: PersonnelProps;
  sold_to: {
    name: string;
    address: string;
    contact_number: string;
  };
  items: {
    item: {
      item_description: string;
      item_price: string;
    };
    quantity: number;
    total: number;
  }[];
  total_amount: string;
  description: string;
  invoice: string;
}
