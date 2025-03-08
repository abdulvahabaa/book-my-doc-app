export const doctorsList = [
  {
    id: 1,
    name: "Dr. John Doe",
    department: "Cardiology",
    qualification: "MBBS, MD (Cardiology)",
    rating: 9.2,
    likes: 350,
    image: "/images/doctor.jpg",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    department: "Dermatology",
    qualification: "MBBS, MD (Dermatology)",
    rating: 8.5,
    likes: 275,
    image: "/images/doctor.jpg",
  },
  {
    id: 3,
    name: "Dr. Ahmed Khan",
    department: "Neurology",
    qualification: "MBBS, DM (Neurology)",
    rating: 8.9,
    likes: 320,
    image: "/images/doctor.jpg",
  },
  {
    id: 4,
    name: "Dr. Lisa Ray abdul vahab",
    department: "Pediatrics",
    qualification: "MBBS, MD (Pediatrics)",
    rating: 9.0,
    likes: 410,
    image: "/images/doctor.jpg",
  },
  {
    id: 5,
    name: "Dr. Vikram Patel",
    department: "Orthopedics",
    qualification: "MBBS, MS (Orthopedics)",
    rating: 8.7,
    likes: 295,
    image: "/images/doctor.jpg",
  },
  {
    id: 6,
    name: "Dr. Sarah Johnson",
    department: "Gynecology",
    qualification: "MBBS, MD (Gynecology)",
    rating: 9.1,
    likes: 360,
    image: "/images/doctor.jpg",
  },
  {
    id: 7,
    name: "Dr. Michael Smith",
    department: "ENT",
    qualification: "MBBS, MD (ENT)",
    rating: 8.8,
    likes: 300,
    image: "/images/doctor.jpg",
  },
  {
    id: 8,
    name: "Dr. Emily Brown",
    department: "Radiology",
    qualification: "MBBS, MD (Radiology)",
    rating: 9.3,
    likes: 375,
    image: "/images/doctor.jpg",
  },
];

export const doctorProfileData1 = {
  name: "Dr. John Doe",
  department: "Cardiology",
  qualification: "MBBS, MD (Cardiology)",
  rating: 9.2,
  likes: 350,
  image: "/images/doctor.jpg",
};

export const doctorProfileData = {
  _id: {
    $oid: "unique-mongodb-id",
  },
  doctorId: "019548d2-aced-77af-b3eb-f4310b2aa27f",
  fullName: "Dr. Akshaya",
  email: "akshaya@dev.com",
  password: "$2b$10$5xXYp43.QGxO2Y/FE90nfOErxRXfNU0OAuNiV0vvycgoZunHy7f4m",
  profilePicturePath: "",
  specialization: "Cardiology",
  yearsOfExperience: 10,
  qualifications: ["MBBS", "MD (Cardiology)"],
  bio: "Experienced cardiologist with over a decade of practice.",
  rating: 9.2,
  likes: 350,
  contactNumbers: ["+91-9876543210", "+91-9988776655"],
  consultingLocations: [
    {
      type: "clinic",
      buildingName: "City Heart Clinic",
      buildingAddress: "123 Main St, Springfield",
      city: "Springfield",
      state: "Illinois",
      zipCode: "62704",
      contactNumbers: ["+1-123-456-7890", "+1-987-654-3210"],
      geocoordinates: {
        lat: 39.7817,
        lng: -89.6501,
      },
      availableDays: ["Monday", "Wednesday", "Friday"],
      availableTime: {
        start: "09:00",
        end: "17:00",
      },
      breakTimes: [
        {
          start: "13:00",
          end: "14:00",
        },
      ],
      consultationFee: 250,
      avgConsultDuration: 15,
      tokensCount: 25,
    },
    {
      type: "home",
      buildingName: "Dr. Akshaya's Residence",
      buildingAddress: "456 Private Lane, Springfield",
      city: "Springfield",
      state: "Illinois",
      zipCode: "62706",
      contactNumbers: ["+1-555-789-1234"],
      geocoordinates: {
        lat: 39.783,
        lng: -89.648,
      },
      availableDays: ["Saturday"],
      availableTime: {
        start: "10:00",
        end: "14:00",
      },
      breakTimes: [],
      consultationFee: 300,
      avgConsultDuration: 20,
      tokensCount: 10,
    },
    {
      type: "hospital",
      buildingName: "Springfield General Hospital",
      buildingAddress: "456 Health Ave, Springfield",
      city: "Springfield",
      state: "Illinois",
      zipCode: "62705",
      contactNumbers: ["+1-555-789-5678", "+1-555-987-1234"],
      geocoordinates: {
        lat: 39.782,
        lng: -89.6495,
      },
      availableDays: ["Tuesday", "Thursday"],
      availableTime: {
        start: "08:00",
        end: "14:00",
      },
      breakTimes: [
        {
          start: "11:00",
          end: "11:30",
        },
      ],
      consultationFee: 400,
      avgConsultDuration: 30,
      tokensCount: 15,
    },
  ],
  onlineConsultation: true,
  inPersonConsultation: true,
  status: "pending",
  createdAt: 1740683521,
  updatedAt: 1740683521,
  __v: 0,
};

export const clinicsList = [
  {
    id: 1,
    name: "Clinic 1",
    address: "123 Main Street, City",
    LandMark: "Near Hospital",
    image: "/images/clinic.jpg",
    contactNumber: "123-456-7890",
    likes: 150, // Add this
    rating: 8.5, // Add this
  },
  {
    id: 2,
    name: "Clinic 2",
    address: "456 Elm Street, City",
    LandMark: "Near Hospital",
    image: "/images/clinic.jpg",
    contactNumber: "987-654-3210",
    likes: 200, // Add this
    rating: 8.8, // Add this
  },
  {
    id: 3,
    name: "Clinic 3",
    address: "789 Oak Street, City",
    LandMark: "Near Hospital",
    image: "/images/clinic.jpg",
    contactNumber: "555-555-5555",
    likes: 180, // Add this
    rating: 8.6, // Add this
  },
  {
    id: 4,
    name: "Clinic 4",
    address: "321 Pine Street, City",
    LandMark: "Near Hospital",
    image: "/images/clinic.jpg",
    contactNumber: "777-777-7777",
    likes: 210, // Add this
    rating: 8.7, // Add this
  },
  {
    id: 5,
    name: "Clinic 5",
    address: "654 Cedar Street, City",
    LandMark: "Near Hospital",
    image: "/images/clinic.jpg",
    contactNumber: "888-888-8888",
    likes: 190, // Add this
    rating: 8.9, // Add this
  },
];

export const hospitalsList = [
  {
    id: 1,
    name: "City Hospital",
    address: "123 Health Blvd, Metro City",
    LandMark: "Near Central Park",
    image: "/images/hospital.jpg",
    contactNumber: "123-456-7890",
    likes: 245,
    rating: 9.2,
  },
  {
    id: 2,
    name: "Sunrise Medical Center",
    address: "456 Wellness Ave, Metro City",
    LandMark: "Opposite City Mall",
    image: "/images/hospital.jpg",
    contactNumber: "987-654-3210",
    likes: 190,
    rating: 8.7,
  },
  {
    id: 3,
    name: "Global Health Clinic",
    address: "789 Care Street, Metro City",
    LandMark: "Near Green Park",
    image: "/images/hospital.jpg",
    contactNumber: "555-555-5555",
    likes: 320,
    rating: 9.5,
  },
  {
    id: 4,
    name: "Wellness Hospital",
    address: "321 Wellness Road, Metro City",
    LandMark: "Beside Community Hall",
    image: "/images/hospital.jpg",
    contactNumber: "111-222-3333",
    likes: 175,
    rating: 8.3,
  },
  {
    id: 5,
    name: "Lifeline Hospital",
    address: "654 Emergency Lane, Metro City",
    LandMark: "Near Police Station",
    image: "/images/hospital.jpg",
    contactNumber: "444-555-6666",
    likes: 280,
    rating: 9.0,
  },
];

export const departmentsArray = [
  { name: "Pediatrics", image: "/images/caduceus-symbol.jpg" },
  { name: "Gynecology", image: "/images/caduceus-symbol.jpg" },
  { name: "Physician", image: "/images/caduceus-symbol.jpg" },
  { name: "General Medicine", image: "/images/caduceus-symbol.jpg" },
  { name: "ENT", image: "/images/caduceus-symbol.jpg" },
  { name: "Radiology", image: "/images/caduceus-symbol.jpg" },
  { name: "Orthopedics", image: "/images/caduceus-symbol.jpg" },
  { name: "Cardiology", image: "/images/caduceus-symbol.jpg" },
  { name: "Neurology", image: "/images/caduceus-symbol.jpg" },
  { name: "Dermatology", image: "/images/caduceus-symbol.jpg" },
];