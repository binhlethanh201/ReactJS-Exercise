# JavaScript Exercise Collection

This repository contains a comprehensive collection of JavaScript exercises covering fundamental programming concepts including prime number algorithms, array manipulation, string processing, and mathematical computations. The project demonstrates core JavaScript programming skills with practical examples and efficient algorithms for various mathematical and data processing tasks.

## Prerequisites

- Node.js and npm installed on your system
- Basic understanding of JavaScript programming concepts
- A modern web browser (Chrome, Firefox, Edge, Safari, etc.) for testing
- (Optional) A code editor like VS Code, Sublime Text, or Atom for easier code navigation

## Installation

1. **Clone the repository** (if not already downloaded):
   ```sh
   git clone <repository-url>
   cd ReactJS-Exercise-main
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```

## How to Run

1. **Run the main exercise file**:
   ```sh
   npm start
   ```
   or
   ```sh
   node index.js
   ```

This will execute all exercises and display the results in the terminal. The exercises will run sequentially, showing the output for each problem.

## Project Structure

```
ReactJS-Exercise-main/
├── index.js
├── package.json
└── README.md
```

- **index.js**: Main exercise file containing all JavaScript exercises and algorithms
- **package.json**: Project metadata and dependencies
- **README.md**: Project documentation (this file)

## Features

- **Composite Number Detection**: Efficient algorithm to find all composite numbers less than 100
- **Prime Number Generation**: Algorithm to find the 10th to 20th prime numbers
- **Prime Factorization**: Decompose numbers into their prime factors with exponents
- **Array Manipulation**: Remove odd-indexed elements from arrays using functional programming
- **String Processing**: Convert numeric characters to dollar signs in strings
- **Array Analysis**: Find the longest string in an array using reduce method
- **Mathematical Algorithms**: Optimized prime number checking and factorization
- **Functional Programming**: Use of modern JavaScript methods like filter and reduce
- **Algorithm Efficiency**: Optimized loops and mathematical computations

## Exercise Details

### Exercise 1: Composite Number Detection
- **Function**: `isComposite(n)`
- **Purpose**: Identifies composite numbers (non-prime numbers greater than 1)
- **Algorithm**: Uses trial division up to square root for efficiency
- **Output**: All composite numbers less than 100

### Exercise 2: Prime Number Sequence
- **Function**: `isPrime(n)`
- **Purpose**: Finds the 10th through 20th prime numbers
- **Algorithm**: Optimized prime checking with square root optimization
- **Output**: Prime numbers from the 10th to 20th position

### Exercise 3: Prime Factorization
- **Purpose**: Decomposes a number into its prime factors with exponents
- **Algorithm**: Repeated division by prime factors
- **Example**: 36 = 2² × 3²
- **Output**: Prime factorization in exponential notation

### Exercise 4: Array Filtering
- **Method**: `filter()` with index-based condition
- **Purpose**: Removes elements at odd indices from an array
- **Approach**: Functional programming using array methods
- **Output**: Array containing only even-indexed elements

### Exercise 5: String Transformation
- **Method**: `replace()` with regular expressions
- **Purpose**: Converts all numeric characters to dollar signs
- **Pattern**: `/\d/g` (global digit matching)
- **Output**: String with numbers replaced by '$'

### Exercise 6: Longest String Finder
- **Method**: `reduce()` for array analysis
- **Purpose**: Finds the longest string in an array
- **Algorithm**: Compares string lengths using reduce
- **Output**: The longest string from the array

## Data Structures Used

The application demonstrates various data structures and algorithms:

- **Arrays**: Used for storing numbers, strings, and results
- **Functions**: Modular programming with reusable functions
- **Loops**: Efficient iteration with for loops and while loops
- **Conditional Logic**: If-else statements for decision making
- **Regular Expressions**: Pattern matching for string manipulation
- **Functional Methods**: filter(), reduce(), replace() for data processing

## Algorithms Implemented

### Prime Number Algorithms
- **Trial Division**: Efficient prime checking up to square root
- **Composite Detection**: Inverse logic for finding non-prime numbers
- **Prime Factorization**: Decomposition into prime factors with exponents

### Array Processing Algorithms
- **Index-based Filtering**: Remove elements based on position
- **Maximum Finding**: Find longest string using reduce
- **Sequential Processing**: Generate and filter number sequences

### String Processing Algorithms
- **Pattern Matching**: Regular expression for digit replacement
- **Character Transformation**: Convert numeric characters to symbols

## Code Quality Features

- **Efficient Algorithms**: Optimized mathematical computations
- **Clean Code**: Well-structured functions with clear naming
- **Modular Design**: Separate functions for different tasks
- **Functional Programming**: Use of modern JavaScript methods
- **Readable Output**: Clear console logging with descriptive messages
- **Error Prevention**: Robust input handling and edge case consideration

## Performance Considerations

- **Square Root Optimization**: Prime checking stops at √n for efficiency
- **Early Termination**: Loops exit when conditions are met
- **Memory Efficiency**: Minimal data structure usage
- **Algorithm Complexity**: O(√n) for prime checking, O(n) for array operations

## User Experience Flow

1. **Execution**: Run the main file to see all exercise results
2. **Sequential Output**: Each exercise displays its results in order
3. **Clear Formatting**: Results are clearly labeled and formatted
4. **Comprehensive Coverage**: All exercises demonstrate different programming concepts
5. **Educational Value**: Each exercise teaches specific JavaScript techniques

## Development Notes

- The application uses pure JavaScript with Node.js runtime
- All exercises are self-contained and demonstrate different programming concepts
- Console output provides clear feedback for each exercise
- Code follows modern JavaScript best practices
- Algorithms are optimized for performance and readability
- Functional programming principles are demonstrated throughout

## Learn More

- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Array Methods in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Regular Expressions in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Functional Programming in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [Prime Number Algorithms](https://en.wikipedia.org/wiki/Primality_test)
- [JavaScript Best Practices](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

## Troubleshooting

- Ensure Node.js is properly installed (`node -v` to check version)
- Run `npm install` if dependencies are missing
- Check console output for any runtime errors
- Verify file permissions for execution
- Ensure proper JavaScript syntax in all files

For questions or contributions, please open an issue or pull request.
