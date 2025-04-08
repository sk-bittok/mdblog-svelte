---
title: Introduction to Rust
description: This blog introduces the Rust language, its syntax, basic ...
date: '2025-4-1'
categories:
  - rust
  - systems-programming
published: true
---

## Why Rust?

Rust is designed for high performance, speed, and safety. It has been voted one of the most loved programming languages for more than five years in StackOverflow's survey.

Rust is specifically designed to address the safety issues found in older languages like C and C++, by preventing memory leaks and common errors, making it a secure choice for system programming.

## Getting Started
A "Hello world!" program prints the text Hello world! to the standard output. It's often used as an ice breaker to learn when
introducing a new programming language.

Let's explore how to output "Hello world!" to the standard output (screen) in Rust.

#### Programme
```rs
  fn main() {
    println!("Hello world!");
  }
```

#### output
```bash
  Hello world!
```

#### Explanation
Here are the different parts of the program above:

1) The main() function.
```rs
  fn main() {

  }
```

This is the main() function which acts as an entry point of every Rust program. It is always the first code that runs in every Rust program.

The body of the function is wrapped inside curly brackets. We will explore more about functions in later chapters.

2) The print statement

```rs
  println!("Hello world!");
```

We use the println! macro to print text to the screen. The "Hello, World!" string is an argument to println!(). Finally, we end the line with a ; which indicates that the expression is over.

We will learn more about Rust macros in upcoming blogs.


## Rust Syntax

```rs
fn greet(name: &str) {
    println!("Hello {name}!");
}
```
