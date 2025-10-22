"""
Silya - A simple utility module
"""


def greet(name):
    """
    Returns a greeting message for the given name.
    
    Args:
        name: The name to greet
        
    Returns:
        A greeting string
    """
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"


def add(a, b):
    """
    Adds two numbers together.
    
    Args:
        a: First number
        b: Second number
        
    Returns:
        Sum of a and b
    """
    return a + b


def multiply(a, b):
    """
    Multiplies two numbers.
    
    Args:
        a: First number
        b: Second number
        
    Returns:
        Product of a and b
    """
    return a * b
