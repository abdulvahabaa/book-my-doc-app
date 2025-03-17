import React, { useState } from "react";
import UserLayout from "../../layouts/UserLayout";

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [patientDetails, setPatientDetails] = useState({
    bookingFor: "Self",
    name: "",
    age: "",
    address: "",
    phone1: "",
    phone2: "",
    price: 100, // Example price
  });

  const handleChange = (e) => {
    setPatientDetails({ ...patientDetails, [e.target.name]: e.target.value });
  };

  return (
    <UserLayout>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-3xl font-bold mb-4 text-amber-400">Appointment Summary</h2>
            <div className="space-y-3">
              <p className="text-lg"><strong>👨‍⚕️ Doctor:</strong> Dr. John Doe</p>
              <p className="text-lg"><strong>💼 Specialization:</strong> Cardiologist</p>
              <p className="text-lg"><strong>📅 Date:</strong> March 20, 2025</p>
              <p className="text-lg"><strong>⏰ Time Slot:</strong> 10:30 AM - 11:00 AM</p>
              <p className="text-lg"><strong>🏥 Consultation Center:</strong> Dr. John Doe's Clinic</p>
              <p className="text-lg"><strong>📍 Location:</strong> 123 Main Street, City, Country</p>
            </div>
          </section>

          <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Booking Process</h2>
            <div className="flex items-center justify-between mb-6">
              {["Booking Slot", "Verification", "Payment"].map((step, index) => (
                <div key={index} className={`w-1/3 text-center ${currentStep > index ? "text-amber-500" : "text-gray-400"}`}>
                  <div className="w-10 h-10 mx-auto flex items-center justify-center border rounded-full transition-all duration-300" style={{ borderColor: currentStep > index ? "#FBBF24" : "#4B5563" }}>
                    {index + 1}
                  </div>
                  <p className="text-sm mt-2">{step}</p>
                </div>
              ))}
            </div>

            {currentStep === 1 && (
              <div>
                <h3 className="text-lg font-medium mb-3">Please Fill This Form</h3>
                <form>
                  <label className="block mb-2">Booking For:</label>
                  <select name="bookingFor" value={patientDetails.bookingFor} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 text-white mb-2">
                    <option value="Self">Self</option>
                    <option value="Other">Other</option>
                  </select>
                  <input type="text" name="name" placeholder="Name" value={patientDetails.name} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 text-white mb-2" required/>
                  <input type="number" name="age" placeholder="Age" value={patientDetails.age} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 text-white mb-2" required/>
                  <input type="text" name="address" placeholder="Address" value={patientDetails.address} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 text-white mb-2" required/>
                  <input type="text" name="phone1" placeholder="Phone Number 1" value={patientDetails.phone1} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 text-white mb-2" required/>
                  <input type="text" name="phone2" placeholder="Phone Number 2 (Optional)" value={patientDetails.phone2} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 text-white mb-2" />
                  <button type="button" className="w-full bg-amber-500 text-white py-2 mt-4 rounded-lg hover:bg-amber-600 transition" onClick={() => setCurrentStep(2)}>
                    Next
                  </button>
                </form>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h3 className="text-lg font-medium mb-3">Please Check Your Details Before Proceeding</h3>
                <p><strong>Name:</strong> {patientDetails.name}</p>
                <p><strong>Age:</strong> {patientDetails.age}</p>
                <p><strong>Address:</strong> {patientDetails.address}</p>
                <p><strong>Phone 1:</strong> {patientDetails.phone1}</p>
                <p><strong>Phone 2:</strong> {patientDetails.phone2}</p>
                <p><strong>Price:</strong> ${patientDetails.price}</p>
                <button className="w-full bg-gray-500 text-white py-2 mt-4 rounded-lg hover:bg-gray-600 transition" onClick={() => setCurrentStep(1)}>
                  Edit
                </button>
                <button className="w-full bg-amber-500 text-white py-2 mt-4 rounded-lg hover:bg-amber-600 transition" onClick={() => setCurrentStep(3)}>
                  Proceed to Payment
                </button>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h3 className="text-lg font-medium mb-3">Payment</h3>
                <p><strong>Total Price:</strong> ${patientDetails.price}</p>
                <button className="w-full bg-green-500 text-white py-2 mt-4 rounded-lg hover:bg-green-600 transition">
                  Pay Now
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
      </UserLayout>
  );
};

export default BookingPage;