# Silya
Test Project

A simple Python utility module with basic functions and comprehensive tests.

## Features

- `greet(name)`: Returns a greeting message
- `add(a, b)`: Adds two numbers
- `multiply(a, b)`: Multiplies two numbers

## Running Tests

To run the tests, use:

```bash
python -m unittest test_silya.py -v
```

## Usage

```python
from silya import greet, add, multiply

# Greet someone
print(greet("World"))  # Output: Hello, World!

# Perform calculations
print(add(2, 3))       # Output: 5
print(multiply(4, 5))  # Output: 20
```
