### INTRODUCTION<br>
**1.1 Introduction**

JAVA was developed by Sun Microsystems Inc in 1991, later acquired by Oracle Corporation. It was developed by James Gosling and Patrick Naughton. It is a simple programming language.  Writing, compiling and debugging a program is easy in java.  It helps to create modular programs and reusable code.

**1.2 Main Features of JAVA**

**Java is a platform independent language**

Compiler(javac) converts source code (.java file) to the byte code(.class file). As mentioned above, JVM executes the bytecode produced by compiler. This byte code can run on any platform such as Windows, Linux, Mac OS etc. Which means a program that is compiled on windows can run on Linux and vice-versa. Each operating system has different JVM, however the output they produce after execution of bytecode is same across all operating systems. That is why we call java as platform independent language.

**Java is an Object Oriented language**

Object oriented programming is a way of organizing programs as collection of objects, each of which represents an instance of a class.

4 main concepts of Object Oriented programming are: Abstraction, Encapsulation, Inheritance  and Polymorphism 


**1.3 Java is distributed**

Using java programming language we can create distributed applications. RMI(Remote Method Invocation) and EJB(Enterprise Java Beans) are used for creating distributed applications in java. In simple words: The java programs can be distributed on more than one systems that are connected to each other using internet connection. Objects on one JVM (java virtual machine) can execute procedures on a remote JVM.


**1.4 Java Virtual Machine (JVM)**

Java is a high level programming language. A program written in high level language cannot be run on any machine directly. First, it needs to be translated into that particular machine language. The javac compiler does this thing, it takes java program (.java file containing source code) and translates it into machine code (referred as byte code or .class file).

Java Virtual Machine (JVM) is a virtual machine that resides in the real machine (your computer) and the machine language for JVM is byte code. This makes it easier for compiler as it has to generate byte code for JVM rather than different machine code for each type of machine. JVM executes the byte code generated by compiler and produce output. JVM is the one that makes java platform independent.

So, now we understood that the primary function of JVM is to execute the byte code produced by compiler. Each operating system has different JVM, however the output they produce after execution of byte code is same across all operating systems. Which means that the byte code generated on Windows can be run on Mac OS and vice versa. That is why we call java as platform independent language. The same thing can be seen in the diagram below:


<img src="images/JVM.png"/>

**Simple Java Program**

public class FirstJavaProgram {<br>
  public static void main(String[] args) {<br>
    System.out.println("This is my first program in java");<br>
  } <br>
} 


Lets have a closer look at the program we have written above:

public class FirstJavaProgram {<br>
This is the first line of our java program. Every java application must have at least one class definition that consists of class keyword followed by class name. A java file can have any number of classes but it can have only one public class and the file name should be same as public class name.

public static void main(String[] args)  {<br>
This is our next line in the program, lets break it down to understand it:
public: This makes the main method public that means that we can call the method from outside the class.

*static:* We do not need to create object for static methods to run. They can run itself.

*void:* It does not return anything.

*main:* It is the method name. This is the entry point method from which the JVM can run your program.

*(String[] args):* Used for command line arguments that are passed as strings. We will cover that in a separate post.
