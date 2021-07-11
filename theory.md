
### 1.1 What is Java?

- Java is a programming language and a platform.
> **Note** - Any hardware or software environment in which a program runs, is known as a platform. Since Java has a runtime environment (JRE) and API, it is called a platform.

- Java is a high level, robust, object-oriented and secure programming language.
- Java was developed by Sun Microsystems (which is now the subsidiary of Oracle) in the year 1995.
- James Gosling is known as the father of Java.

  ---
  
### 1.2 History of java

- The history of Java starts with the Green Team. Java team members also known as Green Team.
- Team initiated this project to develop a language for digital devices such as set-top boxes, televisions, etc. However, it was best suited for internet programming. Later, Java technology was incorporated by Netscape.
* The principles for creating Java programming were:
1. Simple 
2. Robust
3. Portable 
4. Platform-independent
5. Secured
6. High Performance
7. Multithreaded
8. Architecture Neutral
9. Object-Oriented
10. Interpreted, and Dynamic

- Currently, Java is used in internet programming, mobile devices, games, e-business solutions, etc.
* Following are given significant points that describe the history of Java.

1. **James Gosling**, **Mike Sheridan**, and **Patrick Naughton** initiated the Java language project in June 1991.<BR>
2. Initially it was designed for small, embedded systems in electronic appliances like set-top boxes.<BR>
3. Firstly, it was called **"Greentalk"** by James Gosling, and the file extension was .gt.<BR>
4. After that, it was called Oak and was developed as a part of the Green project.

   #### Why Java was named as "Oak"?
  
    Oak is a symbol of strength and chosen as a national tree of many countries like the U.S.A., France, Germany, Romania, etc.

  
5. In 1995, Oak was renamed as "Java" because it was already a trademark by Oak Technologies.
    #### Why Java Programming named "Java"? 
  
    According to James Gosling, "Java was one of the top choices along with Silk". Since Java was so unique, most of the team members preferred Java than other names.
    Java is an island in Indonesia where the first coffee was produced (called Java coffee). It is a kind of espresso bean. Java name was chosen by James Gosling while having a     cup of coffee nearby his office.Notice that Java is just a name, not an acronym.
  
6. Initially developed by James Gosling at Sun Microsystems (which is now a subsidiary of Oracle Corporation) and released in 1995.

  ---  
  
### 1.3 Main Features of JAVA
  
  #### 1. Simple
  Java language is a simple programming language because:
  - Java syntax is based on C++ (so easier for programmers to learn it after C++).
  - Java has removed many complicated and rarely-used features, for example, explicit pointers, operator overloading, etc.
  - There is no need to remove unreferenced objects because there is an Automatic Garbage Collection in Java.
  
  #### 2. Object-oriented
  Java is an object-oriented programming language. Object-oriented means we organize our software as a combination of different types of objects that incorporate both data and     behavior.Basic concepts of OOPs are:
  - Object
  - Class
  - Inheritance
  - Polymorphism
  - Abstraction
  - Encapsulation
  
   #### 3. Platform Independent
  
- Java is platform independent because it is different from other languages like C, C++, etc. which are compiled into platform specific machines while Java is a write once, run anywhere language. A platform is the hardware or software environment in which a program runs.<BR>

- There are two types of platforms software-based and hardware-based. Java provides a software-based platform.<BR>

- The Java platform differs from most other platforms in the sense that it is a software-based platform that runs on top of other hardware-based platforms. It has two components:
  1. Runtime Environment
  2. API(Application Programming Interface)<BR>

- Java code can be executed on multiple platforms, for example, Windows, Linux, Sun Solaris, Mac/OS, etc. Java code is compiled by the compiler and converted into bytecode. This bytecode is a platform-independent code because it can be run on multiple platforms, i.e., Write Once and Run Anywhere (WORA).
  
   #### 4. Robust
  Java is robust because:
  - It uses strong memory management.
  - There is a lack of pointers that avoids security problems.
  - Java provides automatic garbage collection which runs on the Java Virtual Machine to get rid of objects which are not being used by a Java application anymore.
  - There are exception handling and the type checking mechanism in Java. All these points make Java robust.

  
   #### 5. Portable
  Java is portable because it facilitates you to carry the Java bytecode to any platform. It doesn't require any implementation.
  
   #### 6. Distributed
  Java is distributed because it facilitates users to create distributed applications in Java. RMI and EJB are used for creating distributed applications. This feature of Java makes us able to access files by calling the methods from any machine on the internet.
  
   #### 7. Distributed
  A thread is like a separate program, executing concurrently. We can write Java programs that deal with many tasks at once by defining multiple threads. The main advantage of multi-threading is that it doesn't occupy memory for each thread. It shares a common memory area. Threads are important for multi-media, Web applications, etc.
  
    #### 8. Dynamic
  Java is a dynamic language. It supports the dynamic loading of classes. It means classes are loaded on demand. It also supports functions from its native languages, i.e., C and C++.Java supports dynamic compilation and automatic memory management (garbage collection).
  
  ---
### 1.4 Write your first JAVA program
  To create a simple Java program, you need to create a class that contains the main method. Let's understand the requirement first.
  
  #### The requirement to write JAVA program
  For executing any Java program, the following software or application must be properly installed.
  - Install the JDK if you don't have installed it, [download the JDK ](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) and install it.
  - Set path of the jdk/bin directory. See below how to set path of java?
  - Create the Java program
  - Compile and run the Java program
 ##### Let's create JAVA program
  
  ```
  class Simple{  
    public static void main(String args[]){  
     System.out.println("Hello Java");  
    }  
}  
  
```
  Save the above code as Simple.java.
   ##### To compile:
  javac Simple.java
  
  ##### To execute:
  java Simple
  
#### Parameters used in First Java Program
  Let's see what is the meaning of class, public, static, void, main, String[], System.out.println().
  - **class** keyword is used to declare a class in Java.
  - **public** keyword is an access modifier that represents visibility. It means it is visible to all.
  - **static** is a keyword. If we declare any method as static, it is known as the static method. The core advantage of the static method is that there is no need to create an object to invoke the static method. The main() method is executed by the JVM, so it doesn't require creating an object to invoke the main() method. So, it saves memory.
  - **void** is the return type of the method. It means it doesn't return any value.
  - **main** represents the starting point of the program.
  - **String[] args or String args[]** is used for command linSystem.out.println() is used to print statement. Here, System is a class, out is an object of the PrintStream class, println() is a method of the PrintStream class. argument. We will discuss it in coming section.
  - **System.out.println()** is used to print statement. Here, System is a class, out is an object of the PrintStream class, println() is a method of the PrintStream class.

  ---
  ### Setting up the environment in Java
  Here are few things which must be clear before setting up the environment
  
- **JDK(Java Development Kit) :** JDK is intended for software developers and includes development tools such as the Java compiler, Javadoc, Jar, and a debugger.
- **JRE(Java Runtime Environment) :** JRE contains the parts of the Java libraries required to run Java programs and is intended for end users. JRE can be view as a subset of JDK.
- **JVM:** JVM (Java Virtual Machine) is an abstract machine. It is a specification that provides runtime environment in which java bytecode can be executed. JVMs are available for many hardware and software platforms.
  
  #### Follow the given steps:
  

  - Java8 JDK is available at [Download Java 8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html). 
  - Click second last link for **Windows(32 bit)** and last link for **Windows(64 bit)** as highlighted below.
  
  ![d8](https://user-images.githubusercontent.com/71967438/125189377-6afd1300-e255-11eb-86d5-cd3110f3ed0d.png)
  
  - After download, run the **.exe file** and follow the instructions to install Java on your machine. Once you installed Java on your machine, you have to setup environment variable.
   - Go to **Control Panel -> System and Security -> System**. <br>
    Under Advanced System Setting option click on **Environment Variables** as highlighted below. 
  
  
  ![d9](https://user-images.githubusercontent.com/71967438/125189468-df37b680-e255-11eb-987a-c40b5edcb602.png)

  
  - Now, you have to alter the “Path” variable under System variables so that it also contains the path to the Java environment. Select the **“Path”** variable and click on Edit button as highlighted below.
  
  ![d10](https://user-images.githubusercontent.com/71967438/125189499-01313900-e256-11eb-9d77-230c982e874b.png)
  
  - You will see list of different paths, click on New button and then add path where java is installed. By default, java is installed in **“C:\Program Files\Java\jdk\bin”** folder OR **“C:\Program Files(x86)\Java\jdk\bin”**. In case, you have installed java at any other location,then add that path. 
  
  ![d11](https://user-images.githubusercontent.com/71967438/125189533-3178d780-e256-11eb-9c8e-5f031c4ff83d.png)
  
  - Click on **OK**, Save the settings and you are done !! Now to check whether installation is done correctly, open command prompt and type **javac -version**. You will see that java is running on your machine.
  - In order to make sure whether compiler is setup, type **javac** in command prompt. You will see a list related to javac.



