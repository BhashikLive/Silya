"""
Tests for the Silya module
"""
import unittest
from silya import greet, add, multiply


class TestGreet(unittest.TestCase):
    """Test cases for the greet function"""
    
    def test_greet_with_name(self):
        """Test greeting with a specific name"""
        self.assertEqual(greet("Alice"), "Hello, Alice!")
    
    def test_greet_with_empty_string(self):
        """Test greeting with empty string"""
        self.assertEqual(greet(""), "Hello, World!")
    
    def test_greet_with_none(self):
        """Test greeting with None"""
        self.assertEqual(greet(None), "Hello, World!")


class TestAdd(unittest.TestCase):
    """Test cases for the add function"""
    
    def test_add_positive_numbers(self):
        """Test adding two positive numbers"""
        self.assertEqual(add(2, 3), 5)
    
    def test_add_negative_numbers(self):
        """Test adding two negative numbers"""
        self.assertEqual(add(-2, -3), -5)
    
    def test_add_mixed_numbers(self):
        """Test adding positive and negative numbers"""
        self.assertEqual(add(5, -3), 2)
    
    def test_add_zero(self):
        """Test adding zero"""
        self.assertEqual(add(5, 0), 5)


class TestMultiply(unittest.TestCase):
    """Test cases for the multiply function"""
    
    def test_multiply_positive_numbers(self):
        """Test multiplying two positive numbers"""
        self.assertEqual(multiply(3, 4), 12)
    
    def test_multiply_negative_numbers(self):
        """Test multiplying two negative numbers"""
        self.assertEqual(multiply(-3, -4), 12)
    
    def test_multiply_mixed_numbers(self):
        """Test multiplying positive and negative numbers"""
        self.assertEqual(multiply(3, -4), -12)
    
    def test_multiply_by_zero(self):
        """Test multiplying by zero"""
        self.assertEqual(multiply(5, 0), 0)


if __name__ == '__main__':
    unittest.main()
