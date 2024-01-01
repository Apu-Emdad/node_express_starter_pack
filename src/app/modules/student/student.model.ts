import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First name is required'],
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, 'Father Name is required'],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Father occupation is required'],
  },
  fatherContactNo: {
    type: String,
    trim: true,
    required: [true, 'Father Contact No is required'],
  },
  motherName: {
    type: String,
    trim: true,
    required: [true, 'Mother Name is required'],
  },
  motherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Mother occupation is required'],
  },
  motherContactNo: {
    type: String,
    trim: true,
    required: [true, 'Mother Contact No is required'],
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name is required'],
  },
  occupation: {
    type: String,
    trim: true,
    required: [true, 'Occupation is required'],
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, 'Contact number is required'],
  },
  address: {
    type: String,
    trim: true,
    required: [true, 'Address is required'],
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: [true, 'ID is required'], unique: true },
  password: {
    type: String,
    required: [true, 'Password is required'],
    maxlength: [20, 'Password can not be more than 20 characters'],
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not a valid gender',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  contactNo: { type: String, required: [true, 'Contact number is required'] },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group',
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian information is required'],
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: '{VALUE} is not a valid status',
    },
    default: 'active',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
