export interface naijaJapaType {
  user_id: string; // Reflects the unique identifier for a user, as a string
  first_name: string; // First name of the individual
  last_name: string; // Last name of the individual
  age: number; // Age of the individual, as a number
  sex: "male" | "female"; // Gender, constrained to a few values
  marital_status: "Single" | "Married" | "Divorced" | "Widowed"; // Marital status, with predefined values
  number_of_children: number; // Number of children, as a number
  languages_spoken: string; // Languages spoken by the individual
  religion: string; // Religion, as a string
  japa_year: number; // Year the individual migrated ("japa-ed")
  city: string; // City of residence
  occupation: string; // Occupation of the individual
  hobbies: string; // Hobbies or interests
}
