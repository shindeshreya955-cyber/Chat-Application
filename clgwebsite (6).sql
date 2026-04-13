-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2025 at 09:54 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clgwebsite`
--

-- --------------------------------------------------------

--
-- Table structure for table `academic_info`
--

CREATE TABLE `academic_info` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `attendance` varchar(255) NOT NULL,
  `semester` varchar(50) NOT NULL,
  `cgpa` decimal(4,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `academic_info`
--

INSERT INTO `academic_info` (`id`, `name`, `department`, `attendance`, `semester`, `cgpa`) VALUES
(1, 'abc', 'BCA', '34', '1st Semester', 3.40),
(2, 'abc', 'BCA', '34', '1st Semester', 3.40);

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'admin@gmail.com', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `subject`, `message`) VALUES
(1, 'sadsadsad', 'abc@gamil.com', 'testing', 'sdadasds');

-- --------------------------------------------------------

--
-- Table structure for table `personal_details`
--

CREATE TABLE `personal_details` (
  `rollno` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `contact` bigint(10) NOT NULL,
  `address` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `personal_details`
--

INSERT INTO `personal_details` (`rollno`, `name`, `email`, `department`, `contact`, `address`, `year`, `gender`, `img`) VALUES
(1, 'acb', 'abc@gamil.com', 'BCA', 1234123412, '12 vidi gharkul, solapur', '2nd Year', 'Female', 'aarati_non-it_resume.pdf'),
(2, 'acb', 'abc@gamil.com', 'BCA', 1234123412, '12 vidi gharkul, solapur', '2nd Year', 'Female', 'aarati_non-it_resume.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `id` int(11) NOT NULL,
  `rollno` int(4) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `cast` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`id`, `rollno`, `full_name`, `department`, `cast`, `password`) VALUES
(1, 123456789, 'abc', 'CSE', 'OBC', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `s_contact_details`
--

CREATE TABLE `s_contact_details` (
  `id` int(11) NOT NULL,
  `student_phone` int(11) NOT NULL,
  `email` varchar(20) NOT NULL,
  `alt_contact` int(11) NOT NULL,
  `father_name` varchar(20) NOT NULL,
  `father_contact` int(11) NOT NULL,
  `mother_name` varchar(20) NOT NULL,
  `mother_contact` int(11) NOT NULL,
  `guardian_email` varchar(100) NOT NULL,
  `emergency_contact` int(11) NOT NULL,
  `current_address` text NOT NULL,
  `permanent_address` text NOT NULL,
  `city_state_pin` varchar(150) NOT NULL,
  `sms_alerts` tinyint(1) NOT NULL DEFAULT 0,
  `email_notification` tinyint(1) NOT NULL DEFAULT 0,
  `preferred_contact_method` varchar(20) NOT NULL,
  `linkedin_profile` varchar(255) NOT NULL,
  `alternate_email` varchar(20) NOT NULL,
  `document_file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `s_contact_details`
--

INSERT INTO `s_contact_details` (`id`, `student_phone`, `email`, `alt_contact`, `father_name`, `father_contact`, `mother_name`, `mother_contact`, `guardian_email`, `emergency_contact`, `current_address`, `permanent_address`, `city_state_pin`, `sms_alerts`, `email_notification`, `preferred_contact_method`, `linkedin_profile`, `alternate_email`, `document_file`) VALUES
(1, 2147483647, 'abc@gamil.com', 2132132132, 'dssssa', 2147483647, 'bsbd', 2147483647, 'abc@gmail.com', 2147483647, '12 solapur', 'solapur', '1234', 1, 1, 'email', 'frdfsfsd', 'abc@gmail.com', 'contact_details/OIP.webp');

-- --------------------------------------------------------

--
-- Table structure for table `testimonial`
--

CREATE TABLE `testimonial` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `branch` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `testimonial`
--

INSERT INTO `testimonial` (`id`, `name`, `branch`, `description`, `img`) VALUES
(1, 'Ravi Sharma', 'B.Tech - Computer Science', '\"NKOCET provided me with the skills and confidence to excel in my career. Highly recommended!\"', '64d49ab7961d710c529efbe5a2292df8.jpg'),
(2, 'Priya Singh', 'B.Tech - Mechanical Engineering', '\"The faculty support and campus facilities helped me achieve academic excellence.\"', 'OIP.webp'),
(3, 'Amit Joshi', 'B.Tech - Civil Engineering', '\"Campus life at NKOCET was amazing! Lifelong friends and memories.\"', 'OIP (1).webp');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `academic_info`
--
ALTER TABLE `academic_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_details`
--
ALTER TABLE `personal_details`
  ADD PRIMARY KEY (`rollno`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `s_contact_details`
--
ALTER TABLE `s_contact_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonial`
--
ALTER TABLE `testimonial`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `academic_info`
--
ALTER TABLE `academic_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `personal_details`
--
ALTER TABLE `personal_details`
  MODIFY `rollno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `s_contact_details`
--
ALTER TABLE `s_contact_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `testimonial`
--
ALTER TABLE `testimonial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
