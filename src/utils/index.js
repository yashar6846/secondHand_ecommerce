export const navOptions = [
    {
      id: "home",
      label: "صفحه اصلی",
      path: "/",
    },
    {
      id: "listing",
      label: "دسته بندی",
      path: "/product/listing/all-products",
    },
    {
      id: "listingMen",
      label: "لوازم خانه",
      path: "/product/listing/men",
    },
    {
      id: "listingWomen",
      label: "ماشین",
      path: "/product/listing/women",
    },
    {
      id: "listingKids",
      label: "برقی",
      path: "/product/listing/kids",
    },
  ];
  
  export const adminNavOptions = [
    {
      id: "adminListing",
      label: "مدیریت محصولات",
      path: "/admin-view/all-products",
    },
    {
      id: "adminNewProduct",
      label: "اضافه کردن محصولات",
      path: "/admin-view/add-product",
    },
  ];
  
  export const registrationFormControls = [
    {
      id: "name",
      type: "text",
      placeholder: "اسم خود را وارد کن",
      label: "Name",
      componentType: "input",
    },
    {
      id: "email",
      type: "email",
      placeholder: "ایمیل خود را وارد کنید",
      label: "Email",
      componentType: "input",
    },
    {
      id: "password",
      type: "password",
      placeholder: "رمز عبور ",
      label: "Password",
      componentType: "input",
    },
    {
      id: "role",
      type: "",
      placeholder: "",
      label: "Role",
      componentType: "select",
      options: [
        {
          id: "admin",
          label: "ادمین",
        },
        {
          id: "customer",
          label: "مشتری",
        },
      ],
    },
  ];
  
  export const loginFormControls = [
    {
      id: "email",
      type: "email",
      placeholder: "ایمیل خود را وارد کنید",
      label: "Email",
      componentType: "input",
    },
    {
      id: "password",
      type: "password",
      placeholder: "رمز عبور خود را وارد کنید",
      label: "Password",
      componentType: "input",
    },
  ];
  
  export const adminAddProductformControls = [
    {
      id: "name",
      type: "text",
      placeholder: "Enter name",
      label: "نام محصول فروشی",
      componentType: "input",
    },
    {
      id: "price",
      type: "number",
      placeholder: "Enter price",
      label: "قیمت",
      componentType: "input",
    },
    {
      id: "description",
      type: "text",
      placeholder: "Enter description",
      label: "توضیحات",
      componentType: "input",
    },
    {
      id: "category",
      type: "",
      placeholder: "",
      label: "دسته بندی",
      componentType: "select",
      options: [
        {
          id: "men",
          label: "لوازم خانه",
        },
        {
          id: "women",
          label: " ماشین",
        },
        {
          id: "kids",
          label: "برقی",
        },
      ],
    },
    {
      id: "deliveryInfo",
      type: "text",
      placeholder: "Enter deliveryInfo",
      label: " ادرس  دقیق با لوکیشن",
      componentType: "input",
    },
    {
      id: "onSale",
      type: "",
      placeholder: "",
      label: "حراج",
      componentType: "select",
      options: [
        {
          id: "yes",
          label: "بله",
        },
        {
          id: "no",
          label: "خیر",
        },
      ],
    },
    {
      id: "priceDrop",
      type: "number",
      placeholder: "Enter Price Drop",
      label: "تخفیف",
      componentType: "input",
    },
  ];
  
  export const AvailableSizes = [
    {
      id: "s",
      label: "S",
    },
    {
      id: "m",
      label: "M",
    },
    {
      id: "l",
      label: "L",
    },
  ];
  
  export const firebaseConfig = {
    apiKey: "AIzaSyBvl6_naQ2kuyUKtC4QaN2yuS6L6Lq8GCY",
    authDomain: "next-js-dastdo-2023.firebaseapp.com",
    projectId: "next-js-dastdo-2023",
    storageBucket: "next-js-dastdo-2023.appspot.com",
    messagingSenderId: "362265627174",
    appId: "1:362265627174:web:c464a6e3ecbd0c84f174e7",
    measurementId: "G-QTCG47M0RM"
  };
  
  
  export const firebaseStroageURL =
    "gs://next-js-dastdo-2023.appspot.com";
  
  export const addNewAddressFormControls = [
    {
      id: "fullName",
      type: "input",
      placeholder: "Enter your full name",
      label: "Full Name",
      componentType: "input",
    },
    {
      id: "address",
      type: "input",
      placeholder: "Enter your full address",
      label: "Address",
      componentType: "input",
    },
    {
      id: "city",
      type: "input",
      placeholder: "Enter your city",
      label: "City",
      componentType: "input",
    },
    {
      id: "country",
      type: "input",
      placeholder: "Enter your country",
      label: "Country",
      componentType: "input",
    },
    {
      id: "postalCode",
      type: "input",
      placeholder: "Enter your postal code",
      label: "Postal Code",
      componentType: "input",
    },
  ];