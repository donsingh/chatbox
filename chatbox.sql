-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 13, 2017 at 09:01 AM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `chatbox`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE IF NOT EXISTS `messages` (
  `indx` int(11) NOT NULL AUTO_INCREMENT,
  `thread_ref` int(11) NOT NULL,
  `blame` int(11) NOT NULL,
  `stamp` datetime NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`indx`),
  KEY `thread_ref` (`thread_ref`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`indx`, `thread_ref`, `blame`, `stamp`, `message`) VALUES
(1, 1, 1, '2017-01-13 16:01:02', '1'),
(2, 1, 2, '2017-01-13 16:01:02', '1'),
(3, 1, 2, '2017-01-13 16:01:02', '2'),
(4, 1, 1, '2017-01-13 16:01:02', '2'),
(5, 1, 2, '2017-01-13 16:01:03', '3'),
(6, 1, 1, '2017-01-13 16:01:03', '3'),
(7, 1, 2, '2017-01-13 16:01:03', '4'),
(8, 1, 1, '2017-01-13 16:01:04', '4'),
(9, 1, 2, '2017-01-13 16:01:04', '5'),
(10, 1, 1, '2017-01-13 16:01:04', '5'),
(11, 1, 2, '2017-01-13 16:01:04', '6'),
(12, 1, 1, '2017-01-13 16:01:05', '6'),
(13, 1, 2, '2017-01-13 16:01:05', '7'),
(14, 1, 1, '2017-01-13 16:01:05', '7'),
(15, 1, 2, '2017-01-13 16:01:05', '8'),
(16, 1, 1, '2017-01-13 16:01:06', '8'),
(17, 1, 2, '2017-01-13 16:01:06', '9'),
(18, 1, 1, '2017-01-13 16:01:06', '9'),
(19, 1, 2, '2017-01-13 16:01:06', '0');

-- --------------------------------------------------------

--
-- Table structure for table `thread`
--

CREATE TABLE IF NOT EXISTS `thread` (
  `thread_id` int(11) NOT NULL AUTO_INCREMENT,
  `pref_1` int(11) NOT NULL,
  `pref_2` int(11) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`thread_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `thread`
--

INSERT INTO `thread` (`thread_id`, `pref_1`, `pref_2`, `date`) VALUES
(1, 1, 1, '2017-01-13');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `person_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `level` int(1) NOT NULL,
  PRIMARY KEY (`person_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`person_id`, `name`, `level`) VALUES
(1, 'Don', 1),
(2, 'Daph', 1);
