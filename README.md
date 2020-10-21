# About this Project

Authentication with GraphQL Boilerplate

# Couple vs Decouple Architecture

Due to a non-native/embedded integration between GraphQL + Passport, there are strong arguments/cases for both architectures/approaches.

![image](https://user-images.githubusercontent.com/16644017/96670891-72b11a80-139b-11eb-9e8f-724d0cdf2a05.png)

#### **Pros:**

> You are using GraphQL in the manner which is intended. GraphQL is intended to be a thin layer of sorts that sits on top of a ton of different services inside of your application
> All applications worked thus far we only worked with a single Database, but over at Facebook (the people who made GraphQL), they originally made GraphQL because they have to interact with dozens of different services on their backend. And is very easy to imagine thatt Authentication is just another one of those services. Thus, when we put GraphQL in front of Passport, we're really using GraphQL in the manner which it was originally intended. We're using GraphQL to abstract out some of the challenges of working with Authentication.

#### **Cons:**

> GraphQL and Passport are, positively, not setup to work well with each other in any way, shape or fashion. We need to do a little but of finagling to make things work. If there was another way of doing it of authenticating users besides Passport we would use it, but _'Passport'_ is the de facto standard of authentication in the NodeJS world.

![image](https://user-images.githubusercontent.com/16644017/96671307-71ccb880-139c-11eb-8d29-84152152ef91.png)
![image](https://user-images.githubusercontent.com/16644017/96671445-b8221780-139c-11eb-9a8f-90ad466c2d0d.png)

> "We need to split our FrontEnd into two different pieces. One that doesn't use GraphQL, and one that does. "

# Author

**App Development:**  
Giwoo G Lee

**Reference:**  
Stephen Grider  
Starter project from a GraphQL course on Udemy.com - Section 3!
